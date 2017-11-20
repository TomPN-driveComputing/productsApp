/*
 * Please see the included README.md file for license terms and conditions.
 */


// This file is a suggested starting place for your code.
// It is completely optional and not required.
// Note the reference that includes it in the index.html file.


/*jslint browser:true, devel:true, white:true, vars:true */
/*global $:false, intel:false app:false, dev:false, cordova:false */



// This file contains your event handlers, the center of your application.
// NOTE: see app.initEvents() in init-app.js for event handler initialization code.

function myEventHandler() {
    "use strict";

    var ua = navigator.userAgent;
    var str;

    if (window.Cordova && dev.isDeviceReady.c_cordova_ready__) {
        str = "It worked! Cordova device ready detected at " + dev.isDeviceReady.c_cordova_ready__ + " milliseconds!";
    } else if (window.intel && intel.xdk && dev.isDeviceReady.d_xdk_ready______) {
        str = "It worked! Intel XDK device ready detected at " + dev.isDeviceReady.d_xdk_ready______ + " milliseconds!";
    } else {
        str = "Bad device ready, or none available because we're running in a browser.";
    }

    console.log(str);
}


// ...additional event handlers here...

function thirdPartyEmulator() {
    alert("This feature uses a third party barcode scanner plugin. Third party plugins are not supported on emulator or app preview. Please build app to test.");
}
            function circle(numValue) {
                var image = document.getElementById('number1');
                if (image.src.match("circle")) {
                    var image = document.getElementById('number2');
                    if (image.src.match("circle")) {
                        var image = document.getElementById('number3');
                        if (image.src.match("circle")) {
                            var image = document.getElementById('number4');
                            if (image.src.match("circle")) {
                            } else {
                                $("#password").val(function (index, val) {
                                    return val + numValue;
                                });
                                image.src = "images/circle.png";
                                setTimeout(function () {
                                    submit();
                                }, 200);

                            }
                        } else {
                            $("#password").val(function (index, val) {
                                return val + numValue;
                            });
                            image.src = "images/circle.png";
                        }
                    } else {
                        $("#password").val(function (index, val) {
                            return val + numValue;
                        });
                        image.src = "images/circle.png";
                    }
                } else {
                    $('#password').val(numValue);
                    image.src = "images/circle.png";
                }
            }

            function line() {
                var str = $('#password').val();
                var image = document.getElementById('number4');
                if (image.src.match("icon")) {

                    var image = document.getElementById('number3');
                    if (image.src.match("icon")) {

                        var image = document.getElementById('number2');
                        if (image.src.match("icon")) {

                            var image = document.getElementById('number1');
                            if (image.src.match("icon")) {

                            } else {
                                $('#password').val(str = str.substring(0, str.length - 1));
                                image.src = "images/icon.png";
                            }

                        } else {
                            $('#password').val(str = str.substring(0, str.length - 1));
                            image.src = "images/icon.png";
                        }
                    } else {
                        $('#password').val(str = str.substring(0, str.length - 1));
                        image.src = "images/icon.png";
                    }
                } else {
                    $('#password').val(str = str.substring(0, str.length - 1));
                    image.src = "images/icon.png";
                }

            }

            function submit() {
                if (checkConnectionType() == true) {
                    var pin = document.getElementById("result").innerHTML = localStorage.getItem("pin");
                    var image1 = document.getElementById('number1');
                    var image2 = document.getElementById('number2');
                    var image3 = document.getElementById('number3');
                    var image4 = document.getElementById('number4');
                    //alert($('#password').val());
                    if ($('#password').val() === pin) {
                        window.location = "driveComputing_homePage.html";
                        var random = randomnumber = Math.floor(Math.random() * 1111111111111);
                        sessionStorage.setItem('random', random);
                        unqNum(random);
                        //// defining the session variable
                        //alert(sessionStorage.random);
                        //  sessionStorage.removeItem('fullname');
                        $('.loader').show().fadeOut(2000);
                    } else {
                        navigator.vibrate(1000);
                        $("#passCodeTable").addClass("animate");
                        setTimeout(function () {
                            $("#passCodeTable").removeClass("animate");
                        }, 700);
                    }

                    setTimeout(function () {


                        image1.src = "images/icon.png";
                        image2.src = "images/icon.png";
                        image3.src = "images/icon.png";
                        image4.src = "images/icon.png";
                    }, 450);
                    //alert('This was the incorrect pin! Please try again.');

                }
            }
            function helpRedirect() {
                window.location = "driveComputing_homePage.html";
            }
            function connectRedirect() {
                window.location = "driveComputing_settingPage.html";
            }

         


