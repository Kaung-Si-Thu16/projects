function toLB(){
    let kg = Number(document.querySelector("#input").value);
    
    let lb = kg/0.453592;

    document.querySelector("#result").innerHTML = lb.toFixed(2) + "lb";

    document.querySelector("#input").value = "";
}

function toKG() {
    let lb = Number(document.querySelector("#input2").value);

    let kg = lb/2.2046;

    document.querySelector("#result2").innerHTML = kg.toFixed(2) + "kg";

    document.querySelector("#input2").value = "";
}