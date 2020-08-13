require('dotenv').config();

const express = require("express"),
      app = express(),
      axios = require("axios");

app.set("view engine", "ejs");

app.use(express.static("node_modules/@fortawesome/fontawesome-free"))
app.use(express.static("public"));

app.get("/", function(req, res){
    res.render("index");
})

app.get("/:id", function(req, res){
    let id = req.params.id,
        url = "http://api.openweathermap.org/data/2.5/weather?units=metric&appid=" + process.env.OPEN_WEATHER_KEY + "&id=" + id;
    axios.get(url)
    .then(function(response){
        let sunset = new Date(response["data"].sys.sunset * 1000),
            hours = sunset.getHours(),
            minutes = `0 ${sunset.getMinutes()}`,
            seconds = `0 ${sunset.getSeconds()}`,
            formattedSunset = `${hours} : ${minutes.substr(-2)} : ${seconds.substr(-2)}`;
        res.render("show", {data:response["data"], sunset:formattedSunset})
    })
    .catch(function(error){
        res.render("error");
    })       
});

app.get("*", function(req, res){
    res.render("error");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Weather data is running ...");
});