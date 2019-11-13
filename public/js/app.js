$(document).ready(function() {
  // cookie only shows the budget on log in the first time user logs in
  // if ($.cookie('pop') == null) {
  //   $('.modal').modal('show');
  //   $.cookie('pop', '7');
  // };

  $("#income").modal("show");
});

$("#nextSavings").on("click", function() {
  $("#income").modal("hide");
  $("#savings").modal("show");

  var newBudget = {
    category: "income",
    amount: $("#incomeInput")
      .val()
      .trim(),
    isActual: true,
    AccountId: 1
  };

  $.post("/api/budgets", newBudget);
});

$("#nextDebt").on("click", function() {
  $("#savings").modal("hide");
  $("#debt").modal("show");

  var newBudget = {
    category: "savings",
    amount: $("#savingsInput")
      .val()
      .trim(),
    isActual: false,
    AccountId: 1
  };

  $.post("/api/budgets", newBudget);
});

$("#nextHousing").on("click", function() {
  $("#debt").modal("hide");
  $("#housing").modal("show");

  var newBudget = {
    category: "debt",
    amount: $("#debtInput")
      .val()
      .trim(),
    isActual: false,
    AccountId: 1
  };

  $.post("/api/budgets", newBudget);
});

$("#nextTransportation").on("click", function() {
  $("#housing").modal("hide");
  $("#transportation").modal("show");

  var newBudget = {
    category: "housing",
    amount: $("#housingInput")
      .val()
      .trim(),
    isActual: false,
    AccountId: 1
  };

  $.post("/api/budgets", newBudget);
});

$("#nextUtilities").on("click", function() {
  $("#transportation").modal("hide");
  $("#utilities").modal("show");

  var newBudget = {
    category: "transportation",
    amount: $("#transportationInput")
      .val()
      .trim(),
    isActual: false,
    AccountId: 1
  };

  $.post("/api/budgets", newBudget);
});

$("#nextPhone").on("click", function() {
  $("#utilities").modal("hide");
  $("#phone").modal("show");

  var newBudget = {
    category: "utilities",
    amount: $("#utilitiesInput")
      .val()
      .trim(),
    isActual: false,
    AccountId: 1
  };

  $.post("/api/budgets", newBudget);
});

$("#nextSubscriptions").on("click", function() {
  $("#phone").modal("hide");
  $("#subscriptions").modal("show");

  var newBudget = {
    category: "phone",
    amount: $("#phoneInput")
      .val()
      .trim(),
    isActual: false,
    AccountId: 1
  };

  $.post("/api/budgets", newBudget);
});

$("#nextGroceries").on("click", function() {
  $("#subscriptions").modal("hide");
  $("#groceries").modal("show");

  var newBudget = {
    category: "subscriptions",
    amount: $("#subscriptionsInput")
      .val()
      .trim(),
    isActual: false,
    AccountId: 1
  };

  $.post("/api/budgets", newBudget);
});

$("#nextEntertainment").on("click", function() {
  $("#groceries").modal("hide");
  $("#entertainment").modal("show");

  var newBudget = {
    category: "groceries",
    amount: $("#groceriesInput")
      .val()
      .trim(),
    isActual: false,
    AccountId: 1
  };

  $.post("/api/budgets", newBudget);
});

$("#viewBudget").on("click", function() {
  $("#entertainment").modal("hide");

  var newBudget = {
    category: "entertainment",
    amount: $("#entertainmentInput")
      .val()
      .trim(),
    isActual: false,
    AccountId: 1
  };

  $.post("/api/budgets", newBudget).then(displayGraph());
});

function displayGraph() {
  $.get("api/budgets", function(data) {
    var labels = [];
    var amounts = [];

    for (var i=0; i < data.length; i++) {
      labels.push(data[i].category);
      amounts.push(data[i].amount);
    }

    console.log(data);

    var ctx = document.getElementById("myChart").getContext("2d");
    var myChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: labels,
        datasets: [
          {
            label: "Categories",
            data: amounts,
            backgroundColor: [
              "#000ccf",
              "#cf000c",
              "#0ccf00",
              "#ffff00",
              "#000ccf",
              "#cf000c",
              "#0ccf00",
              "#ffff00",
              "#000ccf",
              "#cf000c",
              "#000ccf",
              "#cf000c"
            ],
            borderColor: [
              "#000ccf",
              "#cf000c",
              "#0ccf00",
              "#000ccf",
              "#cf000c",
              "#0ccf00",
              "#000ccf",
              "#cf000c",
              "#000ccf",
              "#cf000c"
            ],
            borderWidth: 1
          }
        ]
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              }
            }
          ]
        }
      }
    });
  });
};
