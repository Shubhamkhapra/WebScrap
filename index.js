const express = require("express");
const app =express();


app.use(express.json());
const routeName = {
    googleScrap: '/goolgeScrap'
};

const goolgeScrap = require("./router");
app.use(routeName.googleScrap, goolgeScrap);

app.listen(3001, ()=>{
    console.log(`server is running on 3001 port`);
})