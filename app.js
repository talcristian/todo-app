const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set('view engine', 'ejs');

app.use(express.static("public"));

app.get("/", (req, res) => {
  var today = new Date();
  var currentDay = today.getDay();
  var dayStr = new Intl.DateTimeFormat('en-US',{weekday: 'long'}).format(today.getDay());

  /*if (currentDay === 6 || currentDay === 0) {
    res.write("<h1>Yay it's the weekend</h1>");
    res.send();
  } else {
    res.sendFile(__dirname + "/index.html")
  }*/

  res.render("list", {
    day: dayStr,
    name: "Cristian",
  });

});







app.listen(process.env.PORT || 3000, () => {
  console.log("Server started on port 3000");
});
