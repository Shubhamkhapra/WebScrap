const {
  SAMPLE_REPORT_ID,
  SERP_EXCLUDE_WEBSITES,
  COMPETITOR_WORD_LIMIT,
  REPORT_FAIL_MESSAGE,
  GPU_SERVER,
  WATSON_ERR_MESSAGE,
  LANGUAGE_ERR_MESSAGE,
  SERP_CHOICE,
  FEATURE_TYPE,
  SOFTWARE_TOOL_TYPE,
  MONTHLY_QOUTA_MESSAGE,
  MINIMUM_WALLET_BALANCE,
  NOT_ENOUGH_BALANCE,
  CHARGE_FROM_CREDIT,
  NO_PROMO_CREDITS_ERROR,
  TRIAL_QUOTA_EXHAUST,
  SUBSCRIPTION_PLAN,
  PLAN_EXPIRED,
  PLAN_CATEGORY,
  SUBSCRIPTION_PLAN_TYPE,
  MEMBER_NOT_ALLOWED,
  CREDIT_TYPE,
  SERP_API,
  NEW_RELIC_EVENT_NAME,
  NEW_RELIC_STATUS_CODE,
  NEW_RELIC_STATUS,
  REPORT_PROMISES,
  FAIR_USAGE_ERR,
  DEFAULT_LOCATIONS,
  SENTRY_TAGS_VALUE,
  SENTRY_TAGS,
  DELETED_REPORT_ERROR,
  SAMPLE_REPORT_INFO,
  EXCLUDE_LINK
} = require("../constant");
var http = require("http");
var https = require("https");
const cheerio = require("cheerio"); 
const got = require("got");
const wordCountHTML = require("html-word-count");
const file = require("./requestApi");
const request = require("request");
const puppeteer = require("puppeteer");
const countries = require("./countryCode");
const excludeUrls = require("./excludeUrls");
async function  getPageHTMLBulk(query, country){
    return new Promise(async (resolve, reject)=>{
        try{
            const startTime = new Date();

            let searchResults = await multipleKeywords(query, 0, country)

            query = query[0]

            let serpExecutionTime = (new Date() - startTime) / 1000 // execution time of serp api 

            if (searchResults.length > 30) {
                searchResults.length = 4;
            }
            searchResults.length = 2;
            let serverlessArr = [];

            for (let data of searchResults) {
              serverlessArr.push(invokeLambda([data.link]));
            }

            let h = await Promise.all(serverlessArr);

            let lambdaExecutionTime = ((new Date() - startTime) / 1000) - serpExecutionTime // execution time of lambda function for all the URLs 

            let joinResultArr = Array.prototype.concat.apply([], h);

            let htmlKey = [];
            joinResultArr.map((ele) => {
              htmlKey.push({
                html: ele,
              });
            });


            let filtArr = [];
      let noHtmlArr = [];
      let promises = [];
      for (let data in searchResults) {
        let checkUrl = excludeUrls.excludeUrls.some((el) =>
          searchResults[data].link.includes(el)
        );

        if (!htmlKey[data].html || checkUrl) {
          noHtmlArr.push({
            keyword: query,
            url_title: searchResults[data].title,
            link: searchResults[data].link,
            rank: searchResults[data].rank,
            report_id: report_id,
            text_content: null,
            h_tags: JSON.stringify({
              h: [],
            }),
            no_of_images: 0,
            readability: 0,
            word_count: 0,
            htags_count: 0,
            url_type: "other",
            keyword_frequency: null,
            favicon: null,
            description: null,
          });
        } else {
          promises.push(
            urlScrape(
              searchResults[data].link,
              searchResults[data].title,
              searchResults[data].rank,
              query,
              report_id,
              searchResults[data].favicon,
              searchResults[data].description,
              htmlKey[data].html
            )
          );
        }
      }
      let data = await Promise.all(promises);

      let dataPayload = [];
      let saveCitations = [];

      data.map(async (ele) => {
        if (ele) {
          dataPayload.push({
            keyword: ele.urlQuery,
            url_title: ele.urltitle,
            link: ele.url,
            rank: ele.urlRank,
            report_id: ele.reportId,
            text_content: ele.bodyContent.text[0],
            h_tags: JSON.stringify(ele.hTags),
            no_of_images: ele.no_of_images,
            readability: ele.readability < 0 ? 0 : ele.readability,
            word_count: ele.wordCount,
            htags_count: ele.htags_count,
            url_type: "article",
            keyword_frequency: ele.bodyContent
              ? keywordFrequency(ele.bodyContent.text[0], query)
              : null,
            favicon: ele.favicon,
            description: ele.description,
            html_content: ele.html_content ? ele.html_content : null,
          });
          // })
        }
        if (ele.links.length) {
          ele.links.map((elem) => {
            saveCitations.push({
              report_id: report_id,
              url: ele.url,
              rank: ele.urlRank,
              citation_link: elem.href,
              citation_title: null,
              url_host: elem.url_host,
              anchor_text: elem.anchor_text,
            });
          });
        }
      });
      let dataScrapeTimeFromHtml = ((new Date() - startTime) / 1000) - (lambdaExecutionTime + serpExecutionTime)

      let watsonExecutionTime = ((new Date() - startTime) / 1000) - (dataScrapeTimeFromHtml + lambdaExecutionTime + serpExecutionTime)

      let keywordFiltrationExecutionTime = ((new Date() - startTime) / 1000) - (watsonExecutionTime + dataScrapeTimeFromHtml + lambdaExecutionTime + serpExecutionTime)// execution time of keywordParseInTop function which does all the filtration work for the keywords


      resolve({
          message: "success",
          statusCode: 200,
          serpExecutionTime,
          lambdaExecutionTime,
          dataScrapeTimeFromHtml,
          watsonExecutionTime,
          keywordFiltrationExecutionTime,
          dataPayload,
          saveCitations
        });
        }catch(error){
            console.log("error pup", error);
            reject({
                message: error.message,
                error,
                statusCode: 400,
            });
        }
    });
}


async function multipleKeywords(keyword, startParam, country) {
    return new Promise(async (resolve, reject) => {
      try {
        let keywordArr = []
        for (let word in keyword) {
          keywordArr.push(valueSerpApiCall(keyword[word], startParam, country))
            ;
        }
  
        let result = await Promise.all(keywordArr)
        result = result.flat(1) // flat() method flattens the nested array to given depth, here we have given 1 as a depth. 
        // const arr2 = [0, 1, 2, [[[3, 4]]]];   expected output: [0, 1, 2, [3, 4]] or Array [0, 1, 2, Array [Array [3, 4]]]
  
        if (result.length == 0) {
          
  
          throw new Error({
            error_message: REPORT_FAIL_MESSAGE.SERP_ERROR,
            message:
              "Could not process. This can happen if our engine couldn't find search results against the key term.",
            statusCode: 401,
          });
  
        }
  
  
        let duplicatesRemoved = removeDuplicateObjectFromArray(result, "link")
  
        const lookup = getDuplicateObject(result)
  
        let arr = count_duplicate(duplicatesRemoved, lookup)
        let finalUrls = arr.sort(function (a, b) {
          // console.log("error finalurl");
          return b.max_rank - a.max_rank;  // Changed this to rank can not see max_rank, Need to verify 
          // return a.rank - b.rank;
        });
  
        finalUrls = assigningRankToUrls(finalUrls, "rank")
        if (finalUrls.length > 30) {
          finalUrls.length = 30
        }
        resolve(finalUrls)
      } catch (error) {
        reject({
          error_message: REPORT_FAIL_MESSAGE.SERP_ERROR,
          message: "Technical Error! Please reach out to our customer support for further assistance.",
          statusCode: 401,
        });
      }
    })
  }



async function valueSerpApiCall(query, startParam, country) {
  return new Promise(async (resolve, reject) => {
    let body;
    let isValueSerpFailed;
    try {
      try {
        body = await valueSerpApi(query, startParam,  country)

      } catch (error) {
        isValueSerpFailed = true;
        body = await serpHitWhenValueSerpFails(query, startParam,country)
      }
      if (
        (JSON.parse(body) && JSON.parse(body).error) ||
        (JSON.parse(body) && !JSON.parse(body).organic_results)
      ) {
        eventObj = {
          status: NEW_RELIC_STATUS.FAILED,
          status_code: NEW_RELIC_STATUS_CODE.FAILED,
          message: JSON.parse(body).error || "Undefined Error",
        };
        resolve([])
       
      }
      let filteredResults;
      if (body && JSON.parse(body) && JSON.parse(body).organic_results) {
        filteredResults = removeYoutube(JSON.parse(body).organic_results)
      }

      if (body && JSON.parse(body) && JSON.parse(body).organic_results) {
        var modifiedItems = [];
        let allHTML = [];
        for (let [index, item] of filteredResults.entries()) {

          const itemObj = {
            keyword: query,
            link: item.link,
            title: item.title,
            description: item.snippet,
            rank: index + 1
          };
          modifiedItems.push(itemObj);
        }
        

        
        eventObj = {
          status: NEW_RELIC_STATUS.SUCCESS,
          status_code: NEW_RELIC_STATUS_CODE.SUCCESS,
        };
        
        if (modifiedItems.length > 30) modifiedItems.length = 30
        console.log(modifiedItems);
        resolve(modifiedItems);


      } else {
        resolve()
        
      }
    } catch (error) {
      reject({
        error_message: REPORT_FAIL_MESSAGE.SERP_ERROR,
        message:
          "Technical Error! Please reach out to our customer support for further assistance.",
        statusCode: 401,
      });
    }

  })
}

async function valueSerpApi(query, startParam, country) {
  return new Promise(async (resolve, reject) => {
    try {
      let url = `${SERP_CHOICE}q=${query.trim()}&num=60&location=${country}&nfpr=1`;
      console.log("urllllllllllllllll===================", url)
      const encoded = encodeURI(url);
      let eventObj;
      let body;
      let isValueSerpFailed = false;
      body = await file.getRequest(encoded);
      let checkJSON = false;
      if (body) {
        checkJSON = isJson(body);
      }


      if (
        !body ||
        !checkJSON ||
        checkJSON && (JSON.parse(body) && JSON.parse(body).error) ||
        checkJSON && (JSON.parse(body) && !JSON.parse(body).organic_results)
      ) {
        // capture exception error in sentry here

        // send failure custom event for new relic
        eventObj = {
          status: NEW_RELIC_STATUS.FAILED,
          status_code: NEW_RELIC_STATUS_CODE.FAILED,
          message: checkJSON && JSON.parse(body).error || "Undefined Error",
        };
       
        isValueSerpFailed = true;
        let serpUrl = `${SERP_API}q=${query.trim()}&num=60&location=${country}&nfpr=1`;
        const encodedSerpUrl = encodeURI(serpUrl);

        body = await file.getRequest(encodedSerpUrl);

      }
      // console.log(body);
      resolve(body)
    } catch (error) {
      reject({
        error_message: REPORT_FAIL_MESSAGE.SERP_ERROR,
        message: error.error,
        statusCode: 401,
      });
    }
  });
}

async function serpHitWhenValueSerpFails(query, startParam, country) {
  return new Promise(async (resolve, reject) => {
    try {
      // send failure custom event for new relic
      eventObj = {
        status: NEW_RELIC_STATUS.FAILED,
        status_code: NEW_RELIC_STATUS_CODE.FAILED,
        message: error || "Undefined Error",
      };
     
      let serpUrl = `${SERP_API}q=${query.trim()}${SERP_EXCLUDE_WEBSITES}&num=35&location=${country}&nfpr=1`;
      const encodedSerpUrl = encodeURI(serpUrl);
      let body = await file.getRequest(encodedSerpUrl);
      resolve(body)
    } catch (error) {
      reject({
        error_message: REPORT_FAIL_MESSAGE.SERP_ERROR,
        message:
          "Technical Error! Please reach out to our customer support for further assistance.",
        statusCode: 401,
      });
    }

  })
}



async function invokeLambda (link){
return new Promise(async (resolve, reject)=>{


  try{
    //start the puppeteer
    const browser = await puppeteer.launch({
        headless:true, //they was not show running in FE
        defaultViewport:{
            width:1240,
            height:900,
        },
    });
   
    let pageD= link.map(async (links)=>{
      
      const page = await browser.newPage(); //they was open a new page or tab
      await page.goto(links);
  
      // await page.screenshot({ path: "image.png"});
      let pageData = await page.evaluate(()=>{
          return {
              html: document.documentElement.innerHTML
          }
      });
      await page.close();
     return pageData;
    })

    let result = result.push(await Promise.all(pageD));
    // result = result.flat(1)
    console.log(result);
    
    await browser.close();
    
    resolve(result);
    // const $ = cheerio.load(pageData.html);
    // console.log($);
    // const price =  $(".a-price-whole");
    // console.log(price.text());

  }catch (error) {
    reject({
      error_message: REPORT_FAIL_MESSAGE.SERP_ERROR,
      message:
        "Technical Error! Please reach out to our customer support for further assistance.",
      statusCode: 401,
    });
  }
})
    
};



async function urlScrape(
  urlString,
  title,
  rank,
  query,
  report_id,
  favicon,
  description,
  contentHai
) {
  return new Promise(async (resolve, reject) => {
    try {
      let hTags = {},
        t = "",
        wordCount = "",
        bodyContent = {},
        urltitle = title,
        urlQuery = query,
        reportId = report_id,
        url = urlString,
        readability = 0,
        img = [],
        htags_count,
        links = [],
        urlRank = rank;
        hTags.h = [];

        var $ = cheerio.load(contentHai);

        $ = cheerio.load($("body").html());

        $("header").remove();
        $("footer").remove();
        // $('ul li').remove();

        $("nav").remove();
        wordCount = wordCountHTML($("body").html());
        bodyContent.text = [];

        $("body").each((i, ele) => {
          // console.log("ele", $(ele).text())'
          if ($(ele).text()) {
            bodyContent.text.push(
              $(ele)
                .text()
                .replace("'", "’")
                .replace(/<[^>]+>/g, " ")
                .replace(/\s\s+/g, " ")
                .replace(
                  /([\uE000-\uF8FF]|\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDDFF])/g,
                  ""
                )
                .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
                .trim()
            );
          }
        });

        let allTags = [];
      $("h1, h2, h3, p, li").map((_, element) => {
        // console.log("html",element.name, $(element).text()) // just output the content too to check everything is alright
        // console.log("htags text", );
        allTags.push({
          tag_name: element.name,
          text: $(element)
            .text()
            .replace(/<[^>]+>/g, " ")
            .replace(/\s\s+/g, "")
            .trim(),
        });
      });

      hTags.h = htmlToHeadingv2(allTags);

      $("h1, h2, h3, p, li").map((_, element) => {
        // console.log("html",element.name, $(element).text()) // just output the content too to check everything is alright
        // console.log("htags text", );
        allTags.push({
          tag_name: element.name,
          text: $(element)
            .text()
            .replace(/<[^>]+>/g, " ")
            .replace(/\s\s+/g, "")
            .trim(),
        });
      });
      // extractDat

      hTags.h = htmlToHeadingv2(allTags);
      // hTags.h = htmlToHeading(contentHai)

      $("img").map(function () {
        img.push($(this).attr("src"));
      });

      htags_count = hTags.h.length;
      // htags_count = hTags.h1.length + hTags.h2.length + hTags.h3.length
      const linkObjects = $("a");
      // this is a mass object, not an array

      // Collect the "href" and "title" of each link and add them to an array
      if (linkObjects) {
        linkObjects.each((index, element) => {
          const mainHost = new URL(urlString);

          // console.log("main host", mainHost.hostname)
          let isHttps = $(element).attr("href");
          if (
            isHttps != undefined &&
            isHttps.startsWith("https://") &&
            isHttps.includes("https://") &&
            $(element).text() &&
            !checkSpaces($(element).attr("href"))
          ) {
            // const urlFromLinks = checkLinkContainsHttps($(element).attr('href'), urlString)
            // let checkCorrectUrl = new URL($(element).attr('href'));
            // console.log("url check", checkSpecialChar($(element).attr('href')), $(element).attr('href'))
            let excludeHref = excludeUrls.excludeHrefs.some((el) =>
              $(element).attr("href").includes(el)
            );
            if (isValidURL($(element).attr("href")) && !excludeHref) {
              // console.log("valid url check", $(element).attr('href'), validUrl.isUri($(element).attr('href')))
              try {
                const hrefHost = new URL($(element).attr("href"));

                let hostUrlArray = hrefHost.hostname.split(".");
                let checkHostUrl =
                  hostUrlArray.length >= 3
                    ? mainHost.hostname.includes(hostUrlArray[1])
                    : mainHost.hostname.includes(hostUrlArray[0]);
                let isCitation = excludeUrls.excludeCitation.some((el) =>
                  mainHost.hostname.includes(el)
                );

                // // console.log("string mod",  stringMod)
                // // if( $(element).attr('href').startsWith("https")){
                if (
                  mainHost.hostname != hrefHost.hostname &&
                  !checkHostUrl &&
                  !isCitation
                ) {
                  let excludeHref = excludeUrls.excludeCitation.some((el) =>
                    hrefHost.hostname.includes(el)
                  );
                  const isValidString = checkIfAlphabet(
                    $(element).text().replace(/\s\s+/g, "")
                  );
                  if (!excludeHref && !isValidString) {
                    let hrefSanity = excludeUrls.excludeUrlParams.some((el) =>
                      $(element).attr("href").includes(el)
                    );
                    let hrefUrl;
                    if (hrefSanity) {
                      excludeUrls.excludeUrlParams.forEach((eleme) => {
                        if (!hrefUrl) {
                          hrefUrl = $(element).attr("href").split(eleme)[0];
                        }
                      });
                    }

                    let textString = $(element).text().replace(/\s\s+/g, "");
                    let string = textString.substring(0, 1);
                    let text = string.match(/[^a-zA-Z0-9]/)
                      ? textString.substring(1, textString.length)
                      : textString; // get the text
                    // if (!isValidString) {
                    links.push({
                      anchor_text: text,
                      href: hrefUrl ? hrefUrl : $(element).attr("href"), // get the href attribute
                      url_host: hrefHost.hostname,
                    });
                    // }
                    // }
                  }
                }
              } catch (error) {
                return true;
              }
            }
          }
        });
      }

      let favs = await urlFavTimoutResolver(urlString);

      // ======================unique links==========

      let uniqueLinksArray = uniqueLinks(links);
      // let urlTitleArray = await urlTitleBulkHit(uniqueLinksArray)
      // ======================unique links==============

      if (bodyContent.text[0]) {
        let readScore = readabilityScore.ease(bodyContent.text[0]);
        // keyword_frequency = keywordFrequency(bodyContent.text[0], query)
        // searchResults[edx].readability = readability
        // searchResults[edx].readScore = readScore
        readability = readScore.score.toFixed(2);
      }

      // let uuid = `${uuidv4()}.txt`
      // await fs.writeFileSync(uuid, contentHai);

      // const filePath = await s3Upload.uploadFile(uuid)
      // fs.unlinkSync(uuid);

      const str = contentHai;
      // const buff = Buffer.from(str, "utf-8");
      // const filePath = await s3Upload.uploadFile(buff);


      // let filePath;
      // console.log(buff)
      // // convert buffer to string
      // const resultStr = buff.toString();

      // console.log(resultStr);
      //console.log("$$$$$$$$$$$$$$$$$$$$$$$$$ ",body);
      resolve({
        url,
        bodyContent,
        hTags,
        wordCount,
        urltitle,
        urlQuery,
        report_id,
        urlRank,
        reportId,
        readability: readability ? readability : 0,
        no_of_images: img.length ? img.length : 0,
        htags_count,
        links: uniqueLinksArray,
        favicon: favs && favs.icons && favs.icons.length ? favs.icons[0].src : null,
        description,
        title,
        html_content: filePath ? filePath : null,
      });
    } catch (error) {
      console.log("error scrape==", error);
      reject({
        message: error.message,
      });
    }
  });
}

function htmlToHeadingv2(tags) {
  let finalTag = [];
  // tag_name:'h1'
  // text:'Bottle'

  tags.map((edx, index) => {
    if (edx.tag_name.includes("h")) {
      if (edx.text.includes("[edit]")) edx.text.split("[edit]").join();
      finalTag.push({
        tag_name: edx.tag_name,
        text: edx.text,
        paragraph: "",
        index,
      });
    } else if (
      finalTag.length > 0 &&
      finalTag[finalTag.length - 1] &&
      edx.text &&
      edx.text.length > 10
    ) {
      if (edx.text.includes("[edit]")) edx.text.split("[edit]").join();
      finalTag[finalTag.length - 1].paragraph =
        finalTag[finalTag.length - 1].paragraph + "+++" + edx.text;
    } else {
      // console.log(edx);
    }
  });

  return finalTag;
}

async function urlFavTimoutResolver(urlString) {
  return new Promise((resolve, reject) => {
    Promise.race([
      getFavicons(
        urlString
      ),
      timeoutResolver(10000, urlString),
    ])
      .then((ibmVal) => {
        resolve(ibmVal);
      })
      .catch((err) => {
        resolve({ url: urlString, status: 400, err })
      });
  });
}

function uniqueLinks(links) {
  let newLinksArray = [];

  // Declare an empty object
  let uniqueObject = {};

  // Loop for the array elements
  if (links.length) {
    for (let i in links) {
      // Extract the title
      objTitle = links[i]["href"];

      // Use the title as the index
      uniqueObject[objTitle] = links[i];
    }

    // Loop to push unique object into array
    for (i in uniqueObject) {
      newLinksArray.push(uniqueObject[i]);
    }
  }
  return newLinksArray;
}

function checkIfAlphabet(string) {
  //Regex for Valid Characters i.e. Alphabets and Numbers.
  // var regex = /^[A-Za-z0-9]+$/
  var regex = /<\/?[a-z][\s\S]*>/i;

  //Validate TextBox value against the Regex.
  var isValid = regex.test(string);

  return isValid;
}

function removeYoutube(organic_results) {
  let result = organic_results.filter(item => {
    const mainHost = new URL(item.link);

    if (!mainHost.hostname.includes(EXCLUDE_LINK)) {
      return item
    }
  })
  return result
}

function removeDuplicateObjectFromArray(array, key) {
  let check = {};
  let filteredLinks = [];
  for (let i = 0; i < array.length; i++) {
    if (!check[array[i][key]]) {
      check[array[i][key]] = true;
      filteredLinks.push(array[i]);
    }
  }
  return filteredLinks;
}

function getDuplicateObject(array, key) {
  const lookup = array.reduce((a, e) => {
    a[e.link] = ++a[e.link] || 0;
    return a;
  }, {});

  return array.filter(e => lookup[e.link])
}

function count_duplicate(unique_list, duplicate_list) {
  for (var edx in duplicate_list) {
    unique_list.forEach((item) => {
      console.log("count duplicate error");
      if (
        item && item.link == duplicate_list[edx].link
      ) {
        item["max_rank"] += Math.max(30 - duplicate_list[edx].rank, 0);
      } else {
        if (!item["max_rank"]) {
          item["max_rank"] = Math.max(30 - item.rank, 0);
        }
      }
    });
  }
  return unique_list
}


function assigningRankToUrls(arr, key) {
  arr.forEach((element, index) => {
    element[key] = index + 1
  });
  return arr
}

function isJson(item) {
  item = typeof item !== "string" ? JSON.stringify(item) : item;

  try {
    item = JSON.parse(item);
  } catch (e) {
    return false;
  }

  if (typeof item === "object" && item !== null) {
    return true;
  }

  return false;
}

exports.getPageHTMLBulk =getPageHTMLBulk;
