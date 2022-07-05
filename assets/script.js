// Establishing a variable for every hours piece of text
var oneAmText = $("#1amText");
var twoAmText = $("#2amText");
var threeAmText = $("#3amText");
var fourAmText = $("#4amText");
var fiveAmText = $("#5amText");
var sixAmText = $("#6amText");
var sevenAmText = $("#7amText");
var eightAmText = $("#8amText");
var nineAmText = $("#9amText");
var tenAmText = $("#10amText");
var elevenAmText = $("#11amText");
var twelveAmText = $("#12amText");
var onePmText = $("#1pmText");
var twoPmText = $("#2pmText");
var threePmText = $("#3pmText");
var fourPmText = $("#4pmText");
var fivePmText = $("#5pmText");
var sixPmText = $("#6pmText");
var sevenPmText = $("#7pmText");
var eightPmText = $("#8pmText");
var ninePmText = $("#9pmText");
var tenPmText = $("#10pmText");
var elevenPmText = $("#11pmText");
var twelvePmText = $("#12pmText");

// Establishing a variable for every hours save button
var oneAmBtn = $("#1amBtn");
var twoAmBtn = $("#2amBtn");
var threeAmBtn = $("#3amBtn");
var fourAmBtn = $("#4amBtn");
var fiveAmBtn = $("#5amBtn");
var sixAmBtn = $("#6amBtn");
var sevenAmBtn = $("#7amBtn");
var eightAmBtn = $("#8amBtn");
var nineAmBtn = $("#9amBtn");
var tenAmBtn = $("#10amBtn");
var elevenAmBtn = $("#11amBtn");
var twelveAmBtn = $("#12amBtn");
var onePmBtn = $("#1pmBtn");
var twoPmBtn = $("#2pmBtn");
var threePmBtn = $("#3pmBtn");
var fourPmBtn = $("#4pmBtn");
var fivePmBtn = $("#5pmBtn");
var sixPmBtn = $("#6pmBtn");
var sevenPmBtn = $("#7pmBtn");
var eightPmBtn = $("#8pmBtn");
var ninePmBtn = $("#9pmBtn");
var tenPmBtn = $("#10pmBtn");
var elevenPmBtn = $("#11pmBtn");
var twelvePmBtn = $("#12pmBtn");

//Where the current day is coming from
var date = moment();
$("#currentDay").text(date.format("MMM Do, YYYY"));

// Creating let's for each locally stored piece of per hour

//All the Am's
let local1AmText = localStorage.getItem("local1AmText");
let local2AmText = localStorage.getItem("local2AmText");
let local3AmText = localStorage.getItem("local3AmText");
let local4AmText = localStorage.getItem("local4AmText");
let local5AmText = localStorage.getItem("local5AmText");
let local6AmText = localStorage.getItem("local6AmText");
let local7AmText = localStorage.getItem("local7AmText");
let local8AmText = localStorage.getItem("local8AmText");
let local9AmText = localStorage.getItem("local9AmText");
let local10AmText = localStorage.getItem("local10AmText");
let local11AmText = localStorage.getItem("local11AmText");
let local12AmText = localStorage.getItem("local12AmText");

//All the Pm's
let local1PmText = localStorage.getItem("local1PmText");
let local2PmText = localStorage.getItem("local2PmText");
let local3PmText = localStorage.getItem("local3PmText");
let local4PmText = localStorage.getItem("local4PmText");
let local5PmText = localStorage.getItem("local5PmText");
let local6PmText = localStorage.getItem("local6PmText");
let local7PmText = localStorage.getItem("local7PmText");
let local8PmText = localStorage.getItem("local8PmText");
let local9PmText = localStorage.getItem("local9PmText");
let local10PmText = localStorage.getItem("local10PmText");
let local11PmText = localStorage.getItem("local11PmText");
let local12PmText = localStorage.getItem("local12PmText");

//In case I need to clear local storage
//Testing Purposes
// localStorage.clear();

//Console logging all the local set items
//Just a test

console.log(local1AmText);
console.log(local2AmText);
console.log(local3AmText);
console.log(local4AmText);
console.log(local5AmText);
console.log(local6AmText);
console.log(local7AmText);
console.log(local8AmText);
console.log(local9AmText);
console.log(local10AmText);
console.log(local11AmText);
console.log(local12AmText);

console.log(local1PmText);
console.log(local2PmText);
console.log(local3PmText);
console.log(local4PmText);
console.log(local5PmText);
console.log(local6PmText);
console.log(local7PmText);
console.log(local8PmText);
console.log(local9PmText);
console.log(local10PmText);
console.log(local11PmText);
console.log(local12PmText);

//Putting if and else statments for each locally set item so if
//there isn't already a set item it will make the string blank
//but if there is a value then it will display it on the screen

// 1Am
if (local1AmText == null) {
    localStorage.setItem("local1AmText", "");
    console.log("It was Null");
}

else {
    $(oneAmText).val(local1AmText);
    console.log("It wasnt Null");
}

//2Am
if (local2AmText == null) {
    localStorage.setItem("local2AmText", "");
    console.log("It was Null");
}

else {
    $(twoAmText).val(local2AmText);
    console.log("It wasnt Null");
}

//3Am
if (local3AmText == null) {
    localStorage.setItem("local3AmText", "");
    console.log("It was Null");
}

else {
    $(threeAmText).val(local3AmText);
    console.log("It wasnt Null");
}

//4Am
if (local4AmText == null) {
    localStorage.setItem("local4AmText", "");
    console.log("It was Null");
}

else {
    $(fourAmText).val(local4AmText);
    console.log("It wasnt Null");
}

//5Am
if (local5AmText == null) {
    localStorage.setItem("local5AmText", "");
    console.log("It was Null");
}

else {
    $(fiveAmText).val(local5AmText);
    console.log("It wasnt Null");
}

//6Am
if (local6AmText == null) {
    localStorage.setItem("local6AmText", "");
    console.log("It was Null");
}

else {
    $(sixAmText).val(local6AmText);
    console.log("It wasnt Null");
}

//7Am
if (local7AmText == null) {
    localStorage.setItem("local7AmText", "");
    console.log("It was Null");
}

else {
    $(sevenAmText).val(local7AmText);
    console.log("It wasnt Null");
}

//8Am
if (local8AmText == null) {
    localStorage.setItem("local8AmText", "");
    console.log("It was Null");
}

else {
    $(eightAmText).val(local8AmText);
    console.log("It wasnt Null");
}

//9Am
if (local9AmText == null) {
    localStorage.setItem("local9AmText", "");
    console.log("It was Null");
}

else {
    $(nineAmText).val(local9AmText);
    console.log("It wasnt Null");
}

//10Am
if (local10AmText == null) {
    localStorage.setItem("local10AmText", "");
    console.log("It was Null");
}

else {
    $(tenAmText).val(local10AmText);
    console.log("It wasnt Null");
}

//11Am
if (local11AmText == null) {
    localStorage.setItem("local11AmText", "");
    console.log("It was Null");
}

else {
    $(elevenAmText).val(local11AmText);
    console.log("It wasnt Null");
}

//12Am
if (local12AmText == null) {
    localStorage.setItem("local12AmText", "");
    console.log("It was Null");
}

else {
    $(twelveAmText).val(local12AmText);
    console.log("It wasnt Null");
}

//1Pm
if (local1PmText == null) {
    localStorage.setItem("local1PmText", "");
    console.log("It was Null");
}

else {
    $(onePmText).val(local1PmText);
    console.log("It wasnt Null");
}

//2Pm
if (local2PmText == null) {
    localStorage.setItem("local2PmText", "");
    console.log("It was Null");
}

else {
    $(twoPmText).val(local2PmText);
    console.log("It wasnt Null");
}

//3Pm
if (local3PmText == null) {
    localStorage.setItem("local3PmText", "");
    console.log("It was Null");
}

else {
    $(threePmText).val(local3PmText);
    console.log("It wasnt Null");
}

//4Pm
if (local4PmText == null) {
    localStorage.setItem("local4PmText", "");
    console.log("It was Null");
}

else {
    $(fourPmText).val(local4PmText);
    console.log("It wasnt Null");
}

//5Pm
if (local5PmText == null) {
    localStorage.setItem("local5PmText", "");
    console.log("It was Null");
}

else {
    $(fivePmText).val(local5PmText);
    console.log("It wasnt Null");
}

//6Pm
if (local6PmText == null) {
    localStorage.setItem("local6PmText", "");
    console.log("It was Null");
}

else {
    $(sixPmText).val(local6PmText);
    console.log("It wasnt Null");
}

//7Pm
if (local7PmText == null) {
    localStorage.setItem("local7PmText", "");
    console.log("It was Null");
}

else {
    $(sevenPmText).val(local7PmText);
    console.log("It wasnt Null");
}

//8Pm
if (local8PmText == null) {
    localStorage.setItem("local8PmText", "");
    console.log("It was Null");
}

else {
    $(eightPmText).val(local8PmText);
    console.log("It wasnt Null");
}

//9Pm
if (local9PmText == null) {
    localStorage.setItem("local9PmText", "");
    console.log("It was Null");
}

else {
    $(ninePmText).val(local9PmText);
    console.log("It wasnt Null");
}

//10Pm
if (local10PmText == null) {
    localStorage.setItem("local10PmText", "");
    console.log("It was Null");
}

else {
    $(tenPmText).val(local10PmText);
    console.log("It wasnt Null");
}

//11Pm
if (local11PmText == null) {
    localStorage.setItem("local11PmText", "");
    console.log("It was Null");
}

else {
    $(elevenPmText).val(local11PmText);
    console.log("It wasnt Null");
}

//12Pm
if (local12PmText == null) {
    localStorage.setItem("local12PmText", "");
    console.log("It was Null");
}

else {
    $(twelvePmText).val(local12PmText);
    console.log("It wasnt Null");
}

// Adding event listeners for each button to save what is in the text box

//The Am's
//1Am
oneAmBtn.on('click', function () {
    localStorage.setItem("local1AmText", oneAmText.val());
    local1AmText = localStorage.getItem("local1AmText");
    console.log(local1AmText);
});

//2Am
twoAmBtn.on('click', function () {
    localStorage.setItem("local2AmText", twoAmText.val());
    local2AmText = localStorage.getItem("local2AmText");
    console.log(local2AmText);
});

//3Am
threeAmBtn.on('click', function () {
    localStorage.setItem("local3AmText", threeAmText.val());
    local3AmText = localStorage.getItem("local3AmText");
    console.log(local3AmText);
});

//4Am
fourAmBtn.on('click', function () {
    localStorage.setItem("local4AmText", fourAmText.val());
    local4AmText = localStorage.getItem("local4AmText");
    console.log(local4AmText);
});

//5Am
fiveAmBtn.on('click', function () {
    localStorage.setItem("local5AmText", fiveAmText.val());
    local5AmText = localStorage.getItem("local5AmText");
    console.log(local5AmText);
});

//6Am
sixAmBtn.on('click', function () {
    localStorage.setItem("local6AmText", sixAmText.val());
    local6AmText = localStorage.getItem("local6AmText");
    console.log(local6AmText);
});

//7Am
sevenAmBtn.on('click', function () {
    localStorage.setItem("local7AmText", sevenAmText.val());
    local7AmText = localStorage.getItem("local7AmText");
    console.log(local7AmText);
});

//8Am
eightAmBtn.on('click', function () {
    localStorage.setItem("local8AmText", eightAmText.val());
    local8AmText = localStorage.getItem("local8AmText");
    console.log(local8AmText);
});

//9Am
nineAmBtn.on('click', function () {
    localStorage.setItem("local9AmText", nineAmText.val());
    local9AmText = localStorage.getItem("local9AmText");
    console.log(local9AmText);
});

//10Am
tenAmBtn.on('click', function () {
    localStorage.setItem("local10AmText", tenAmText.val());
    local10AmText = localStorage.getItem("local10AmText");
    console.log(local10AmText);
});

//11Am
elevenAmBtn.on('click', function () {
    localStorage.setItem("local11AmText", elevenAmText.val());
    local11AmText = localStorage.getItem("local11AmText");
    console.log(local11AmText);
});

//12Am
twelveAmBtn.on('click', function () {
    localStorage.setItem("local12AmText", twelveAmText.val());
    local12AmText = localStorage.getItem("local12AmText");
    console.log(local12AmText);
});

//The Pm's
//1m
onePmBtn.on('click', function () {
    localStorage.setItem("local1PmText", onePmText.val());
    local1PmText = localStorage.getItem("local1PmText");
    console.log(local1PmText);
});

//2Pm
twoPmBtn.on('click', function () {
    localStorage.setItem("local2PmText", twoPmText.val());
    local2PmText = localStorage.getItem("local2PmText");
    console.log(local2PmText);
});

//3Pm
threePmBtn.on('click', function () {
    localStorage.setItem("local3PmText", threePmText.val());
    local3PmText = localStorage.getItem("local3PmText");
    console.log(local3PmText);
});

//4Pm
fourPmBtn.on('click', function () {
    localStorage.setItem("local4PmText", fourPmText.val());
    local4PmText = localStorage.getItem("local4PmText");
    console.log(local4PmText);
});

//5Pm
fivePmBtn.on('click', function () {
    localStorage.setItem("local5PmText", fivePmText.val());
    local5PmText = localStorage.getItem("local5PmText");
    console.log(local5PmText);
});

//6Pm
sixPmBtn.on('click', function () {
    localStorage.setItem("local6PmText", sixPmText.val());
    local6PmText = localStorage.getItem("local6PmText");
    console.log(local6PmText);
});

//7Pm
sevenPmBtn.on('click', function () {
    localStorage.setItem("local7PmText", sevenPmText.val());
    local7PmText = localStorage.getItem("local7PmText");
    console.log(local7PmText);
});

//8Pm
eightPmBtn.on('click', function () {
    localStorage.setItem("local8PmText", eightPmText.val());
    local8PmText = localStorage.getItem("local8PmText");
    console.log(local8PmText);
});

//9Pm
nineAmBtn.on('click', function () {
    localStorage.setItem("local9PmText", ninePmText.val());
    local9PmText = localStorage.getItem("local9PmText");
    console.log(local9PmText);
});

//10Pm
tenPmBtn.on('click', function () {
    localStorage.setItem("local10PmText", tenPmText.val());
    local10PmText = localStorage.getItem("local10PmText");
    console.log(local10PmText);
});

//11Pm
elevenPmBtn.on('click', function () {
    localStorage.setItem("local11PmText", elevenPmText.val());
    local11PmText = localStorage.getItem("local11PmText");
    console.log(local11PmText);
});

//12Pm
twelvePmBtn.on('click', function () {
    localStorage.setItem("local12PmText", twelvePmText.val());
    local12PmText = localStorage.getItem("local12PmText");
    console.log(local12PmText);
});

//For Nick to do later just in case
var currentHour = moment();
currentHour.format("H");
console.log(currentHour.format("H"));

// if (currentHour.format("H") == 13) {
//     twelveAmText.addClass("past");
//     onePmText.addClass("present");
//     twoPmText.addClass("future");
// }
if (currentHour.format("H") == 0) {
    // oneAmText.addClass("future");
    // twoAmText.addClass("future");
    // threeAmText.addClass("future");
    // fourAmText.addClass("future");
    // fiveAmText.addClass("future");
    // sixAmText.addClass("future");
    // sevenAmText.addClass("future");
    // eightAmText.addClass("future");
    // nineAmText.addClass("future");
    // tenAmText.addClass("future");
    // elevenAmText.addClass("future");
    // twelveAmText.addClass("future");
    // onePmText.addClass("future");
    // twoPmText.addClass("future");
    // threeAmText.addClass("future");

    elevenPmText.removeClass("present");
    elevenPmText.addClass("past");
    twelvePmText.removeClass("future");
    twelvePmText.addClass("present")
}

if (currentHour.format("H") >= 1) {
    oneAmText.addClass("present");
    twoAmText.addClass("future");
    threeAmText.addClass("future");
    fourAmText.addClass("future");
    fiveAmText.addClass("future");
    sixAmText.addClass("future");
    sevenAmText.addClass("future");
    eightAmText.addClass("future");
    nineAmText.addClass("future");
    tenAmText.addClass("future");
    elevenAmText.addClass("future");
    twelveAmText.addClass("future");
    onePmText.addClass("future");
    twoPmText.addClass("future");
    threePmText.addClass("future");
    fourPmText.addClass("future");
    fivePmText.addClass("future");
    sixPmText.addClass("future");
    sevenPmText.addClass("future");
    eightPmText.addClass("future");
    ninePmText.addClass("future");
    tenPmText.addClass("future");
    elevenPmText.addClass("future");


    twelvePmText.removeClass("present");
    twelvePmText.addClass("future");
    oneAmText.removeClass("future");
    oneAmText.addClass("present");
}

if (currentHour.format("H") >= 2) {
    oneAmText.removeClass("present");
    oneAmText.addClass("past");
    twoAmText.removeClass("future");
    twoAmText.addClass("present");
}

if (currentHour.format("H") >= 3) {
    twoAmText.removeClass("present");
    twoAmText.addClass("past");
    threeAmText.removeClass("future");
    threeAmText.addClass("present");
}

if (currentHour.format("H") >= 4) {
    threeAmText.removeClass("present");
    threeAmText.addClass("past");
    fourAmText.removeClass("future");
    fourAmText.addClass("present");
}

if (currentHour.format("H") >= 5) {
    fourAmText.removeClass("present");
    fourAmText.addClass("past");
    fiveAmText.removeClass("future");
    fiveAmText.addClass("present");
}

if (currentHour.format("H") >= 6) {
    fiveAmText.removeClass("present");
    fiveAmText.addClass("past");
    sixAmText.removeClass("future");
    sixAmText.addClass("present");
}

if (currentHour.format("H") >= 7) {
    sixAmText.removeClass("present");
    sixAmText.addClass("past");
    sevenAmText.removeClass("future");
    sevenAmText.addClass("present");
}

if (currentHour.format("H") >= 8) {
    sevenAmText.removeClass("present");
    sevenAmText.addClass("past");
    eightAmText.removeClass("future");
    eightAmText.addClass("present");
}

if (currentHour.format("H") >= 9) {
    eightAmText.removeClass("present");
    eightAmText.addClass("past");
    nineAmText.removeClass("future");
    nineAmText.addClass("present");
}

if (currentHour.format("H") >= 10) {
    nineAmText.removeClass("present");
    nineAmText.addClass("past");
    tenAmText.removeClass("future");
    tenAmText.addClass("present");
}

if (currentHour.format("H") >= 11) {
    tenAmText.removeClass("present")
    tenAmText.addClass("past");
    elevenAmText.removeClass("future");
    elevenAmText.addClass("present");
}

if (currentHour.format("H") >= 12) {
    elevenAmText.removeClass("present");
    elevenAmText.addClass("past");
    twelveAmText.removeClass("future");
    twelveAmText.addClass("present");
}

if (currentHour.format("H") >= 13) {
    twelveAmText.removeClass("present");
    twelveAmText.addClass("past");
    onePmText.removeClass("future");
    onePmText.addClass("present");
}

if (currentHour.format("H") >= 14) {
    onePmText.removeClass("present");
    onePmText.addClass("past");
    twoPmText.removeClass("future");
    twoPmText.addClass("present");
}

if (currentHour.format("H") >= 15) {
    twoPmText.removeClass("present");
    twoPmText.addClass("past");
    threePmText.removeClass("future");
    threePmText.addClass("present");
}

if (currentHour.format("H") >= 16) {
    threePmText.removeClass("present");
    threePmText.addClass("past");
    fourPmText.removeClass("future");
    fourPmText.addClass("present");
}

if (currentHour.format("H") >= 17) {
    fourPmText.removeClass("present");
    fourPmText.addClass("past");
    fivePmText.removeClass("future");
    fivePmText.addClass("present");
}

if (currentHour.format("H") >= 18) {
    fivePmText.removeClass("present");
    fivePmText.addClass("past");
    sixPmText.removeClass("future");
    sixPmText.addClass("present");
}

if (currentHour.format("H") >= 19) {
    sixPmText.removeClass("present");
    sixPmText.addClass("past");
    sevenPmText.removeClass("future");
    sevenPmText.addClass("present");
}

if (currentHour.format("H") >= 20) {
    sevenPmText.removeClass("present");
    sevenPmText.addClass("past");
    eightPmText.removeClass("future");
    eightPmText.addClass("present");
}

if (currentHour.format("H") >= 21) {
    eightPmText.removeClass("present");
    eightPmText.addClass("past");
    ninePmText.removeClass("future");
    ninePmText.addClass("present");
}

if (currentHour.format("H") >= 22) {
    ninePmText.removeClass("present");
    ninePmText.addClass("past");
    tenPmText.removeClass("future");
    tenPmText.addClass("present");
}

if (currentHour.format("H") >= 23) {
    tenPmText.removeClass("present");
    tenPmText.addClass("past");
    elevenPmText.removeClass("future");
    elevenPmText.addClass("present");
}
