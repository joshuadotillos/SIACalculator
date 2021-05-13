"use strict";
function insert(value) {
    document.getElementById("text").value = document.getElementById("text").value + value;
}
function equal() {
    var result = document.getElementById("text").value;
    if (result != "") {
        document.getElementById("text").value = eval(result);
        var historyList = (document.getElementById("historyValues"));
        var create = document.createElement("ul");
        create.appendChild(document.createTextNode(result + " = " + eval(result)));
        historyList === null || historyList === void 0 ? void 0 : historyList.appendChild(create);
        document.getElementById("text").value = "";
    }
    else {
        alert("No value!");
    }
}
