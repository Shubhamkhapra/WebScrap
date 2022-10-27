const file = require("./requestApi");
const secret = require('../secret');
class SerpAPI {

    multiKeywords = async (keyword, startParm, country) => {
        return new Promise(async (resolve, reject) => {
            try {
                let keywordArr = []
                for (let word in keyword) {
                    keywordArr.push(this.#valueSerpApi(keyword[word], startParm, country));
                };

                //resolve all promise 
                let result = await Promise.all(keywordArr);

                result = result.flat(1) // flat() method flattens the nested array to given depth, here we have given 1 as a depth. 
                // const arr2 = [0, 1, 2, [[[3, 4]]]];   expected output: [0, 1, 2, [3, 4]] or Array [0, 1, 2, Array [Array [3, 4]]]

                if (result.length == 0) {
                    throw new Error({
                        error_message: "could not process. This can happen if our engine couldn't find the result against keyword",
                        statusCode: 401
                    });
                }

                let duplicatesRemoved = this.#removeDuplicateObjectFromArray(result, "link");

                const lookup = this.#getDuplicateObject(result)

                let arr = this.#count_duplicate(duplicatesRemoved, lookup)
                let finalUrls = arr.sort(function (a, b) {
                    return b.max_rank - a.max_rank;  // Changed this to rank can not see max_rank, Need to verify 
                });

                finalUrls = this.#assigningRankToUrls(finalUrls, "rank")
                if (finalUrls.length > 30) {
                    finalUrls.length = 30
                }



                resolve(finalUrls);
            } catch (error) {
                console.log("error up", error);
                reject({
                    errorMessage: error.message,
                    message: "Technical Error!.",
                    statusCode: 401,
                })
            }
        })
    };

    #valueSerpApi = async (query, startParm, country) => {
        return new Promise(async (resolve, reject) => {
            let body;
            let isValueSerpFailed;
            try {

                try {
                    body = await this.#valueSerp(query, startParm, country);

                } catch (error) {
                    isValueSerpFailed = true;
                    body = await this.#valueSerpFailedHit(query, startParm, country, error)
                }

                //if serp & valueserp API  was not found any result 
                if ((JSON.parse(body) && JSON.parse(body).error) ||
                    (JSON.parse(body) && !JSON.parse(body).organic_results)) {
                    resolve([]);
                }

                //filter results
                if (body && JSON.parse(body) && JSON.parse(body).organic_results) {
                    var modifiedItems = [];
                    for (let item of JSON.parse(body).organic_results) {
                        const itemObj = {
                            keyword: query,
                            link: item.link,
                            title: item.title,
                            description: item.snippet,
                            rank: item.position
                        };

                        modifiedItems.push(itemObj);
                    }
                }

                //check length of modified Items 
                if (modifiedItems.length > 30) modifiedItems.length = 30;

                resolve(modifiedItems);
            } catch (error) {
                reject({
                    message: "Technical Error!",
                    statusCode: 401,
                    errorMessage: error.message
                })
            }
        });
    };

    #valueSerp = (query, startParm, country) => {
        return new Promise(async (resolve, reject) => {
            try {
                let url = `${secret.valueSerp}q=${query.trim()}+-inurl:*.youtube.*&num=35&location=${country}$nfpr=1 `
                console.log("url-->", url);
                const encoded = encodeURI(url);
                let eventObj;
                let body;
                let isValueSerpFailed = false;
                body = await file.getRequest(encoded);
                let checkJSON = false;
                if (body) {
                    checkJSON = this.#isJson(body);
                }

                if (!body || !checkJSON ||
                    checkJSON && (JSON.parse(body) && JSON.parse(body).error) || checkJSON && (JSON.parse(body) && !JSON.parse(body).organic_results)) {
                    eventObj = {
                        status: "Failed",
                        statusCode: 400,
                        message: checkJSON && JSON.parse(body).error || "undefined error"
                    }

                    isValueSerpFailed = true;
                    let serpUrl = `${secret.serpAPI}q=${query.trim()}&num=60&location=${country}&nfpr=1`;
                    console.log(serpUrl);
                    const encodeSerpUrl = encodeURI(serpUrl);
                    body = await file.getRequest(encodeSerpUrl);
                }
                resolve(body);
            } catch (error) {
                reject({
                    error_message: error.error,
                    statusCode: 401
                })
            }
        });
    };


    #isJson = (item) => {

        item = typeof item !== "string" ? JSON.stringify(item) : item;

        try {
            item = JSON.parse(item);
        } catch (error) {
            return false;
        }

        if (typeof item === "object" && item !== null) {
            return true;
        }
        return false;
    };

    #valueSerpFailedHit = (query, startParm, country, error) => {
        return new Promise(async (resolve, reject) => {
            try {
                let serpUrl = `${secret.serpAPI}q=${query.trim()}+-inurl:*.youtube.*&num=35&location=${country}&nfpr=1`;
                const encodeSerpUrl = encodeURI(serpUrl);
                let body = await file.getRequest(encodeSerpUrl);
                resolve(body);
            } catch (error) {
                reject({
                    error_message: error.error,
                    statusCode: 401,
                    Message: "Technical Error"
                })
            }
        });
    };

    #removeDuplicateObjectFromArray = (array, key) => {
        let check = {};
        let filteredLinks = [];
        for (let i = 0; i < array.length; i++) {
            if (!check[array[i][key]]) {
                check[array[i][key]] = true;
                filteredLinks.push(array[i]);
            }
        }
        return filteredLinks;
    };

    #getDuplicateObject = (array) => {
        const lookup = array.reduce((a, e) => {
            a[e.link] = ++a[e.link] || 0;
            return a;
        }, {});

        return array.filter(e => lookup[e.link]);
    };

    #count_duplicate = (uniqueList, duplicateList) => {
        for (var edx in duplicateList) {
            uniqueList.forEach((item) => {
                if (item && item.link == duplicateList[edx].link) {
                    item["max_rank"] += Math.max(30 - duplicateList[edx.rank, 0]);
                } else {
                    if(!item["max_rank"]) {
                        item["max_rank"] = Math.max(30 - item.rank, 0);
                    }
                }
            });
        };
        return uniqueList;
    };

    #assigningRankToUrls = (arr, key) => {
        arr.forEach((element, index) => {
            element[key] = index + 1
        });
        return arr;
    }

}

module.exports = new SerpAPI();


