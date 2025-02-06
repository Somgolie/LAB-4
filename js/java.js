function square(number){
    return number*number;
}
function enter(){
    let input= document.getElementById("numberInput").value;
    let answer= square(input);
    document.getElementById("output").textContent="The square of "+input+" is "+answer;
}