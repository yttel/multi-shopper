$(document).ready(() => {
  $(".goShopNow").on("click", function () {
    location.href = "list";
  });

  $(".categories").on("click", function () {
    let catList = $(this).attr("value");
    console.log(catList);

    $.ajax({
      method: "GET",
      url: "/api/optionsList",
      data: { id: catList },
    }).then(() => {
      return location.reload();
    });
  });

  $(".addTo").on("click", function () {
    let chosenItem = $(this).attr("data-id");

    $.ajax({
      method: "POST",
      url: "/api/makeIt",
      data: { id: chosenItem },
    }).then(() => {
      return location.reload();
    });
  });
  
  //event listeners
  $(document).on("click", ".category-picker", byCategory);
  $(document).on("click", "button.undo-list", undoList);
  $(document).on("click", "button.add-default", addDefault);
  $(document).on("click", "button.undo-default", undoDefault);


  //grabs items from single category for display
  function byCategory() {
    const thisCat = $(this).value();
    console.log(`the category: ${thisCat}`);
  }

  //removes the item from the list
  function undoList() {
    const thisItem = $(this).attr("data-id");
    console.log(`THIS ITEM: ${thisItem}`);
    $.ajax({
      method: "POST",
      url: "/api/removeitem",
      data: { id: thisItem }
    }).then(() => {
      return location.reload();
    });
  }

  function undoNextTime() {
    const thisItem = $(this).attr("data-id");
    console.log(`THIS ITEM: ${thisItem}`);
    $.ajax({
      method: "POST",
      url: "/api/undonexttime",
      data: { id: thisItem }
    }).then(() => {
      return location.reload();
    });
  }

  function undoNextTime() {
    const thisItem = $(this).attr("data-id");
    console.log(`THIS ITEM: ${thisItem}`);
    $.ajax({
      method: "POST",
      url: "/api/undonexttime",
      data: { id: thisItem }
    }).then(() => {
      return location.reload();
    });
  }
});
