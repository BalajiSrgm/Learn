function UserAction() {
    var xhttp = new XMLHttpRequest();
    var id = document.getElementById("lg_username");
    var password = document.getElementById("lg_password");
    var na = $('#lg_password');
    xhttp.open("POST", "${pageContext.request.contextPath}/service/getLoginDetails", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send();
    var response = JSON.parse(xhttp.responseText);
}