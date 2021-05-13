function insert(value: any) {
    (document.getElementById("text") as HTMLInputElement).value = (document.getElementById("text") as HTMLInputElement).value + value;
    
}

function equal(){
    let result = (document.getElementById("text") as HTMLInputElement).value;
    if(result != ""){
        (document.getElementById("text") as HTMLInputElement).value = eval(result);
        let historyList = (document.getElementById("historyValues"));
        let create = document.createElement("ul");
        create.appendChild(document.createTextNode(result + " = " + eval(result)));
        historyList?.appendChild(create);
        (document.getElementById("text") as HTMLInputElement).value = "";
    }
    else{
        alert("No value!");
    }
}