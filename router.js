const express = require("express");
const scrapeController = require("./scarp/scrap");
const scraper = require("./scarp/controller");
const router = express.Router();

router.get("/google", async(req, res)=>{
    let result = await scrapeKeywords(req.body);
    res.json({response: result});
});

router.get("/serpAPI",scraper.scraping);



async function scrapeKeywords(
    payload
   ) {
    try {
        const startTime = new Date();
        // console.log(payload);
        let scrapeResult = await scrapeController.getPageHTMLBulk(
            payload.keyword, payload.country
        )
        let serpExecutionTime = (new Date() - startTime) / 1000;
        console.log(serpExecutionTime);
        return scrapeResult;

    }
    catch (error) {
        return null;
    }
   }
 

module.exports = router;