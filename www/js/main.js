/*jslint sloppy:true, browser:true, devel:true, white:true, vars:true, eqeq:true, plusplus:true */
/*global $:false, intel:false*/
/** 
 * This function runs once the page is loaded, but intel is not yet active 
 */

document.addEventListener("intel.xdk.device.ready", function () {
    //this function actually hides the status bar  
    intel.xdk.device.hideStatusBar();

}, false);
//
//var db = openDatabase("my.db", '1.0', "My WebSQL Database", 2 * 1024 * 1024);
//var create = function () {
//    db.transaction(function (tx) {
//        tx.executeSql("CREATE TABLE IF NOT EXISTS exp_general (id integer primary key, image blob, description text, DateOfPurchase text, PriceOfPurchase text, finished integer)");
//    });
//};
//var insert = function (dataURL, description, date, price, finishedValue) {
//    db.transaction(function (tx) {
//        tx.executeSql("INSERT INTO exp_general (image, description, DateOfPurchase, PriceOfPurchase, finished) VALUES (?,?,?,?,?)", [dataURL, description, date, price, finishedValue]);
//    });
//
//    $.ajax({
//        url: 'http://10.0.4.13:81/bliss_bitesize/exp/ajax_exp_home.php',
//        cache: false,
//        async: false,
//        data: {'request': 'insertEntry', 'image': "dataURL", 'description': description, 'DateOfPurchase': date, 'PriceOfPurchase': price, 'finished': finishedValue},
//        dataType: 'json',
//        success: function (data) {
//        }
//
//    });
//
//};



function checkConnectionHome() {
    var networkState = navigator.connection.type;
    var states = {};
    states[Connection.UNKNOWN] = 'Unknown connection';
    states[Connection.ETHERNET] = 'Ethernet connection';
    states[Connection.WIFI] = 'WiFi connection';
    states[Connection.CELL_2G] = 'Cell 2G connection';
    states[Connection.CELL_3G] = 'Cell 3G connection';
    states[Connection.CELL_4G] = 'Cell 4G connection';
    states[Connection.CELL] = 'Cell generic connection';
    states[Connection.NONE] = 'No network connection';
    //  alert('Connection type: ' + states[networkState]);
    if (networkState == "none") {
        alertify.alert("Please make sure you are connected to the internet before entering this page.", function (e, str) {

        });

        return false;
    } else {
        return true;

    }
}


/**
 * Prevent Default Scrolling 
 */
//var preventDefaultScroll = function (event)
//{
//    // Prevent scrolling on this element
//    event.preventDefault();
//    window.scroll(0, 0);
//    return false;
//};
window.document.addEventListener("touchmove", preventDefaultScroll, false);
function full_screen()
{
    //We selected the page using APP Framework's selectors library and then made it full screen using APP Framework's UI JavaScript interfaces
    $.ui.showModal("#favs", "fade");
}
var image;
function onSuccess(imageURI)
{
    var pic1 = document.getElementById("photoone");
    pic1.src = imageURI;
    $(".imageSelector").hide();
    $(".imageHolder").css({"height": "150px", "top": "calc(50% - 210px)"});
    $(".imageHolder").fadeIn(1000);
    image = imageURI;
}
//function loadList() {
//
//
//    db.transaction(function (tx) {
//        tx.executeSql('SELECT * FROM exp_general ORDER BY id DESC', [], function (tx, results) {
//            var len = results.rows.length, i;
//
//            var t, j;
//            var f = new Array();
//
//            for (t = 0; t < len; t++) {
//                f[t] = new Array();
//                f[t][0] = results.rows.item(t).image;
//                f[t][1] = results.rows.item(t).description;
//                f[t][2] = results.rows.item(t).PriceOfPurchase;
//                f[t][3] = results.rows.item(t).finished;
//                f[t][4] = results.rows.item(t).id;
//            }
//            var image = new Image();
//
//            var str = "<ul class='list' style=''>";
//            for (var t in f) {
//                image.src = f[t][0];
//                str += "<li><a class='hover' onclick='viewSpecificEntry(" + f[t][4] + ");' href='#detailitem'><table class ='listView'><tr><td><img style=' height:40px;' id='imageList' src='" + image.src + "' /></td><td><div id='descriptionList'>" + f[t][1] + "</div></td></tr></table><div id='priceList'>" + '&#8356;' + f[t][2] + "</div></a></li>";
//            }
//            str += '</ul>';
//            $('#listviewpage').append(str);
//        }, null);
//    });
//
//}
function goHome() {
    window.location = "driveComputing_homePage.html";
}
function load5receipts() {

    db.transaction(function (tx) {

        tx.executeSql('SELECT * FROM exp_general LIMIT 5', [], function (tx, results) {
            var len = results.rows.length;

            var t, j;
            var f = new Array();

            for (t = 0; t < len; t++) {
                f[t] = new Array();
                f[t][0] = results.rows.item(t).image;
                f[t][1] = results.rows.item(t).description;
                f[t][2] = results.rows.item(t).PriceOfPurchase;
                f[t][3] = results.rows.item(t).finished;
            }
            var image = new Image();

            var str = "<ul class='list' style=''>";
            for (var t in f) {
                image.src = f[t][0];
                if (f[t][1].length > 20) {
                    str += "<li><a href='#detailitem'><img style=' height:40px;' id='base64image' src='" + image.src + "' />" + f[t][1].substring(0, 17) + "...&nbsp&nbsp&nbsp&nbsp" + f[t][2] + "</a></li>";

                }

                str += "<li><a href='#detailitem'><img style=' height:40px;' id='base64image' src='" + image.src + "' />" + f[t][1] + " &nbsp&nbsp&nbsp&nbsp" + f[t][2] + "</a></li>";
            }
            str += '</ul>';
            $('#listviewpage').append(str);
        }, null);
    });
}
;

function viewSpecificEntry(id) {

    db.transaction(function (tx) {
        tx.executeSql('SELECT * FROM exp_general WHERE id = ' + id + '', [], function (tx, results) {
            var len = results.rows.length, i;
            for (i = 0; i < len; i++) {
                var description = "<div class='itemDesc'>" + results.rows.item(i).description + "</div>";
                var price = "<div class='itemDesc'>Total price of receipt:</div><div class='priceOfPurchase'>&#8356;" + results.rows.item(i).PriceOfPurchase + "</div>";
                var date = "<div class='itemDesc'>Date receipt uploaded:</div><div class='priceOfPurchase'>" + results.rows.item(i).DateOfPurchase + "</div>";
                var img = "<center><img id='descriptionImage' src='" + results.rows.item(i).image + "' /></center>";

            }

            $('#detailitem').empty();
            $('#detailitem').append(img + "<br>");
            $('#detailitem').append(description + "<br>");
            $('#detailitem').append(price + "<br>");
            $('#detailitem').append(date);
        }, null);
    });

}


function onFail(message) {
    console.log("Picture failure: " + message);
}
function redirectToList() {
    window.location = "driveComputing_listPage.html";
}
function onOpenConfirm() {
    var finishedValue;
    if (($('#descriptionBox').val() && $('#dateBox').val() && $('#priceBox').val() !== "")) {
        finishedValue = "Complete";
    } else {
        finishedValue = "Not Complete";
    }
    document.getElementById("confirmLink").innerHTML = "Confirm";
    var canvas = document.getElementById("photoConfirm");
    var ctx = canvas.getContext("2d");
    var descriptionConfirm = document.getElementById("descriptionBox").value;
    var dateConfirm = document.getElementById("dateBox").value;
    var priceConfirm = document.getElementById("priceBox").value;
    $("#confirmLink").hide();
    $("#addLink").show();
    $("#editLink").show();
    document.getElementById("descriptionConfirm").innerHTML = descriptionConfirm;
    document.getElementById("dateConfirm").innerHTML = dateConfirm;
    document.getElementById("priceConfirm").innerHTML = priceConfirm;
    document.getElementById("finishedConfirm").innerHTML = finishedValue;
    var image = document.getElementById("photoone");

    ctx.drawImage(image, 0, 0, 150, 150 * image.height / image.width);

}
function editEntry() {
    $("#confirmLink").show();
    $("#addLink").hide();
    $("#editLink").hide();
}

//Camera button functionality
function takepicture()
{
    navigator.camera.getPicture(onSuccess, onFail, {quality: 50, destinationType: Camera.DestinationType.FILE_URI, saveToPhotoAlbum: true});
}
function getpicture()
{
    navigator.camera.getPicture(onSuccess, onFail, {
        allowEdit: true,
        correctOrientation: true,
        destinationType: Camera.DestinationType.FILE_URI,
        sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
        targetHeight: 315,
        targetWidth: 320
    });
}

var URL = localStorage.getItem('URL');
var pin = sessionStorage.random;
if (pin == null || "") {
    pin = 0;
}

function loginChk() {

    $.ajax({
        url: URL + "/bliss_bitesize/ajax/ajax_expen.php",
        cache: false,
        async: false,
        data: {'request': 'loginChk', pin: pin},
        dataType: 'json',
        error: function (jqXHR, textStatus, errorThrown) {
            alert(errorThrown);
            console.log(errorThrown);
        },
        success: function (data)
        {
            if (data.errMsg == "notValid") {
                alertify.alert("You have not logged in.<br>Please try again.", function (e, str) {

                    window.location = 'index.html';
                });
            }

        }
    });
}


