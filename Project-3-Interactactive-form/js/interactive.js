


// Hold DOM elements for easy access
var jobRoleSelect = document.getElementById('title');
var activities = document.querySelector(".activities");
const ccDiv = document.querySelector('.credit-card');
const ccNumField = document.querySelector('#cc-num');
const zipField = document.querySelector('#zip');
const cvvField = document.querySelector('#cvv');
const paypalDiv = document.querySelector('.paypal');
const bitcoinDiv = document.querySelector('.bitcoin');
const submit = document.querySelector('button');
const ccNum = ccNumField.value;
const paymentMenu = document.getElementById("payment");

// Set focus on the first text field
document.getElementById("name").focus();


var otherField = document.getElementById('other-title');
var otherFieldLabel = document.getElementById('other-title-label');


document.getElementById("name").focus();

otherFieldLabel.style.display = 'none';
otherField.style.display = 'none';

document.addEventListener('DOMContentLoaded', function() {
	function onJobChange(event) {
		if (event.target.value === 'other') {
			otherField.style.display = 'block';
			otherFieldLabel.style.display = 'block';
		} else {
			otherField.style.display = 'none';
			otherFieldLabel.style.display = 'none';
		}
	}
document.querySelector('select[name="user_title"]').addEventListener('change', onJobChange);
})


// T-Shirt Info section of the form.
// For the T-Shirt color menu, only display the options that match the design selected in the "Design" menu.
document.getElementById("design").addEventListener("change", function(){
  var tShirtMenu = document.getElementById('design');
  var tSelection = tShirtMenu.value;
  var colorSelector = document.getElementById('colors-js-puns');

  if(tSelection) {
    colorSelector.innerHTML = "";

  }
  if(tSelection === "js puns") {
    // If the user selects "Theme - JS Puns" then the color menu should only display "Cornflower Blue," "Dark Slate Grey," and "Gold."
    colorSelector.innerHTML = '<label for="color">Color:</label><select id="color"><option value="cornflowerblue">Cornflower Blue</option><option value="darkslategrey">Dark Slate Grey</option><option value="gold">Gold</option></select>';
    //tColor.innerHTML = "<option value='cornflowerblue'>Cornflower Blue</option><option value='darkslategrey'>Dark Slate Grey</option><option value='gold'>Gold</option>";

  }
  if(tSelection === "heart js") {
    // If the user selects "Theme - I ♥ JS" then the color menu should only display "Tomato," "Steel Blue," and "Dim Grey."
    colorSelector.innerHTML = '<label for="color">Color:</label><select id="color"><option value="tomato">Tomato</option><option value="steelblue">Steel Blue</option><option value="dimgrey">Dim Grey</option></select>';

  }
});


// Register for Activities section of the form.
document.querySelector(".activities").addEventListener("change", function(){
  var main = document.getElementById("all");
  var framework = document.getElementById("framework");
  var libs = document.getElementById("libs");
  var express = document.getElementById("express");
  var node = document.getElementById("node");
  var build = document.getElementById("build");
  var npm = document.getElementById("npm");

  var frameworkLbl = document.getElementById("frameworkLabel");
  var libsLbl = document.getElementById("libsLabel");
  var expressLbl = document.getElementById("expressLabel");
  var nodeLbl = document.getElementById("nodeLabel");


  // If the user selects a workshop, don't allow selection of a workshop at the same date and time -- you should disable the checkbox and visually indicate that the workshop in the competing time slot isn't available.
  if(framework.checked == true) {
    express.disabled = true;
    expressLbl.style.color = "grey";
  }
  if(express.checked == true) {
    framework.disabled=  true;
    frameworkLbl.style.color = "grey";
  }
  if(libs.checked == true) {
    node.disabled = true;
    nodeLbl.style.color = "grey";
  }
  if(node.checked == true) {
    libs.disabled = true;
    libsLbl.style.color = "grey";
  }

  // When a user unchecks an activity, make sure that competing activities (if there are any) are no longer disabled.
  if(framework.checked == false) {
    express.disabled = false;
    expressLbl.style.color = "black";
  }
  if(express.checked == false) {
    framework.disabled = false;
    frameworkLbl.style.color = "black";
  }
  if(libs.checked == false) {
    node.disabled = false;
    nodeLbl.style.color = "black";
  }
  if(node.checked == false) {
    libs.disabled = false;
    libsLbl.style.color = "black";
  }

  // Calculate running total of price of events selected
  var mainPrice = 200;
  var otherPrice = 100;
  var totalPrice = 0;

  if(main.checked == true){
    totalPrice += mainPrice;
  }
  if(framework.checked == true || express.checked == true) {
    totalPrice += otherPrice;
  }
  if(libs.checked == true || node.checked == true) {
    totalPrice += otherPrice;
  }
  if(build.checked == true) {
    totalPrice += otherPrice;
  }
  if(npm.checked == true) {
    totalPrice += otherPrice;
  }

  var totalNumber = totalPrice.toString();
  var totalText = "Total is $" + totalNumber;
  document.getElementById('total').innerHTML = totalText;

  if(totalPrice == 0){
    document.getElementById('total').innerHTML = "";
  }

});

function defaultPayment() {
  const choices = paymentMenu.children;
  choices[1].selected = true;
  paypalDiv.style.display = 'none';
  bitcoinDiv.style.display = 'none';
}

defaultPayment();
// Payment Info section of the form. Display payment sections based on chosen payment option
document.getElementById("payment options").addEventListener("change", () => {
  const pay = event.target;


  // "Credit Card" payment option isselected by default so display of the #credit-card div...
  // hide the "Paypal" and "Bitcoin information.
  if(pay.value === "credit card") {
    ccDiv.style.display = '';
    paypalDiv.style.display = "none";
    bitcoinDiv.style.display = "none";

  } else if(pay.value === "paypal") {
    ccDiv.style.display = 'none';
    paypalDiv.style.display = "";
    bitcoinDiv.style.display = "none";

  } else if(pay.value === "bitcoin") {
    ccDiv.style.display = 'none';
    paypalDiv.style.display = "none";
    bitcoinDiv.style.display = "";
  }
});




// Form validation. Display error messages and don't let the user submit the form if any of these validation errors exist:
submit.addEventListener("click", (e) =>  {

  // Name field can't be empty
    var nameInput = document.getElementById("name");
    var nameLabel = document.getElementById("nameLabel");

  if(nameInput.value.length == 0) {
    nameLabel.innerHTML = "Name: (please provide name)";
    nameLabel.style.color = "red";
    e.preventDefault();
  } else {
    nameLabel.innerHTML = "Name:";
    nameLabel.style.color = "black";
  }

  // Email field must be a validly formatted e-mail address
  function validateEmail(email) {
      var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
  }

  var emailInput = document.getElementById("mail");
  var emailLabel = document.getElementById("emailLabel");

  if(!validateEmail(emailInput.value)) {
    emailLabel.innerHTML = "Email: (please provide a valid email address)";
    emailLabel.style.color = "red";
    e.preventDefault();
  } else {
    emailLabel.innerHTML = "Email:";
    emailLabel.style.color = "black";
  }

    //check there's a valid credit card number
  var ccNumLbl = document.getElementById("cc-numLbl");
  const ccNum = ccNumField.value;

  if (paymentMenu.value === 'credit card') {
    if (isNaN(ccNum) || ccNum.length < 13 || ccNum.length > 16) {
      e.preventDefault();
      ccNumField.className = 'error';
    } else {
      ccNumField.className = '';
    }
  }
  if (paymentMenu.value === 'paypal') {
    return true;
  }
  if (paymentMenu.value === 'bitcoin') {
    return true;
  }

    //check there's a zip code
	var zip = document.getElementById("zip");
  var zipLbl = document.getElementById("zipLbl");
	if(zip.value.length !== 5) {
		e.preventDefault();
    zipField.className = 'error';
  } else {
    zipField.className = ''
  }

    //check there's a cvv
	var cvv = document.getElementById("cvv");
  var cvvLbl = document.getElementById("cvvLbl");
	if(cvv.value.length !== 3) {
      cvvField.className = 'error';
      e.preventDefault();
  } else {
      cvvField.className = ''
  }

    //Check that at least 1 activity has been selected
    var activities = document.getElementsByClassName("activity");
    var counter = 0;
    var activityReminder = document.getElementById("activityReminder");
    var lineBreak = document.getElementById("lineBreak");

    for(var i = 0; i < activities.length; i++){
      if(activities[i].checked === true) {
        counter++;
      }
    }

    if(counter < 1){
      activityReminder.innerHTML = "Please select an Activity";
      activityReminder.style.color = "red";
      lineBreak.innerHTML = "<br>";
      e.preventDefault();
    } if(counter >= 1){
      activityReminder.innerHTML = "";
      lineBreak.innerHTML = "";
    }

    //Check that a tshirt has been selected
    var tShirtMenu = document.getElementById('design');
    var tSelection = tShirtMenu.value;
    var tshirtReminder = document.getElementById("teeshirtReminder");

  if(tSelection === "selectTheme"){
      tshirtReminder.innerHTML = "Don't forget to choose a tshirt";
      tshirtReminder.style.color = "red";
      e.preventDefault();
    } else if (tSelection === "js puns" || tSelection === "heart js") {
      tshirtReminder.innerHTML = "";
    }
});
