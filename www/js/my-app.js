// Initialize app
var myApp =  new Framework7({
  toast: {
    closeTimeout: 3000,
    closeButton: true,
  }
});

// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we want to use dynamic navbar, we need to enable it for this view:
    dynamicNavbar: true
});

// Handle Cordova Device Ready Event
$$(document).on('deviceready', function() {
    console.log("Device is ready!");

});

//Declare
var txtInput1;
var txtInput2;

var btnSUM;
var btnDIFF;
var btnPROD;
var btnQUOT;

//Instance
txtInput1 = document.querySelector('#txtInput1');
txtInput2 = document.querySelector('#txtInput2');

btnSUM = document.querySelector('#btnSUM');
btnDIFF = document.querySelector('#btnDIFF');
btnPROD = document.querySelector('#btnPROD');
btnQUOT = document.querySelector('#btnQUOT');

//Event Handling
btnSUM.addEventListener('click',function(){
    x = txtInput1.value;
    y = txtInput2.value;
    xx = parseInt(x);
    yy = parseInt(y);
    result = xx + yy;
    alert("SUM is " + result);
});






$$('.open-toast-bottom').on('click', function () {
});

// Now we need to run the code that will be executed only for About page.

// Option 1. Using page callback for page (for "about" page in this case) (recommended way):
myApp.onPageInit('about', function (page) {
    // Do something here for "about" page

})

// Option 2. Using one 'pageInit' event handler for all pages:
$$(document).on('pageInit', function (e) {
    // Get page data from event data
    var page = e.detail.page;

    if (page.name === 'about') {
        // Following code will be executed for page with data-page attribute equal to "about"
        myApp.alert('Here comes About page');
    }
})

// Option 2. Using live 'pageInit' event handlers for each page
$$(document).on('pageInit', '.page[data-page="about"]', function (e) {
    // Following code will be executed for page with data-page attribute equal to "about"
    myApp.alert('Here comes About page');
})