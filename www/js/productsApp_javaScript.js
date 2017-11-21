var ajaxLink = "http://10.0.4.106:81/app_ajax/ajax_products/ajax_calls.php";    // Link to ajax calls page; allows page link to be quickly and easily changed.

document.addEventListener("deviceready", onDeviceReady, false);    // Initialises Vibration plugin
function onDeviceReady() {
    console.log(navigator.vibrate);
}

function vibrate(time=1000)    // Function to make stuff vibrate. Vibrates for 1000ms by default.
{
    navigator.vibrate(time);
}