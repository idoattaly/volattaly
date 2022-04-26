import express from 'express';
const passport = require('passport');

const app = express();


function authorized(){
    console.log("authorized")
}

function f2(){
    console.log("f2")
}


function f3(){
    authorized();
    f2();
}

function f4(){
    f2();
}

function fPassportAuthorize(){
    passport.authorize();
}

app.get("/path1", f3); // has authorization
app.put("/path2", f4); // no authorization
app.post("/path3", authorized); // has authorization
app.get("/path4", fPassportAuthorize, f2); // has passport authorization
app.get("/path5", passport.authorize, f2); // has in-line passport authorization




