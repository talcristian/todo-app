const express = require("express");
const bodyParser = require("body-parser");

const app = express();

var items = [];

app.set('view engine', 'ejs');

app.use(express.static("views"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/",(req, res) => {
  var today = new Date();
  var options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  }

  var day = today.toLocaleDateString("en-US", options);


  res.render("list", {
    kindOfDay: day,
    itemArray: items,
  });
});

app.post("/addItem", (req, res) => {
  var itemText = req.body.newItem;
  items.push(itemText);

  console.log(itemText);

  res.redirect("/");
})






app.listen(process.env.PORT || 3000, () => {
  console.log("Server started on port 3000");
});









/*
app.get("/", (req, res) => {
  var today = new Date();
  var currentDay = today.getDay();
  var dayStr = new Intl.DateTimeFormat('en-US',{weekday: 'long'}).format(today.getDay());

  if (currentDay === 6 || currentDay === 0) {
    res.write("<h1>Yay it's the weekend</h1>");
    res.send();
  } else {
    res.sendFile(__dirname + "/index.html")
  }

  res.render("list", {
    day: dayStr,
    name: "Cristian",
  });

});
*/
