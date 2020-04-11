const express = require("express");
const router = express.Router();
const groceryController = require("../controller/groceryController");

// router.get("/", function (req, res) {
//   res.render("index.handlebars");
// });

router.get("/signin", function (req, res) {
  res.render("signin.handlebars");
});

// router.get("/", (req, res) => {
//   res.send(req.isAuthenticated() ? "Logged in" : "Logged out");
// });

router.get("/list", function (req, res) {
  const hhID = 1; //dynamic later
  groceryController.allByHousehold(hhID).then((response) => {
    var hbsObject = {
      listItem: response,
    };
    //console.log(response);
    res.render("list.handlebars", hbsObject);
  });
});

router.get("/", function (req, res) {
  groceryController.allItems().then((response) => {
    var hbsObject = {
      Item: response,
    };
    res.render("index.handlebars", hbsObject);
  });
});

router.get("/edit", async function (req, res) {
  const hhID = 1; //dynamic later
  const listItems = await groceryController.allByHousehold(hhID);
  //console.log(`LINE 40 LIST ITEMS: ${listItems}`);
  
  const items = await groceryController.allItems();
  //console.log(`LINE 43 ALL ITEMS: ${items}`);
    
  const hbsObject = {
    listItem: listItems,
    Item: items
  };

  console.table(hbsObject);

  res.render("index.handlebars", hbsObject);
}); 

module.exports = router;
