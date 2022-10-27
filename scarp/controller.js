const serpAPI = require('./multikeywordsScrap');


async function scraping(req, res){
    try{
        const payload = { ...req.body };
        if(!payload.country){
            throw new Error("Country Name Required");
        }
        let resultPageHTML = await getPageHTML(payload.keyword, payload.country);
        // console.log(resultPageHTML);
        return res.status(200).json({data: resultPageHTML});
    }catch(error){
        return res.status(400).json({message: error.message});
    }
}

const getPageHTML = (query, country) => {
    return new Promise((resolve, reject) => {
        try {
            if(typeof(country) != "string"){
                throw new Error("Country Type Invalid");
            }
            let searchResult =  serpAPI.multiKeywords(query, 0 , country);
            console.log(searchResult);
            resolve(searchResult);

        } catch (error) {
            console.log("Error up", error);
            reject({
                message: error.message,
                statusCode: 400,
            });
        }
    });
}
exports.scraping = scraping;