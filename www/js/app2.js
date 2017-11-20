function checkConnection() {
    var networkState = navigator.connection.type;
    var states = {};
    states[Connection.NONE] = 'No network connection';
    //  alert('Connection type: ' + states[networkState]);
    if (networkState == "none") {
        alertify.alert("You are currently not connected to internet.<br>Please connect to internet to be able to use all features on this app.", function (e, str) {
        });
        return false;
    } else {
        return true;
    }
}