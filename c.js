//c.Print the following details name, capital, flag using forEach function

var requestt = new XMLHttpRequest();
requestt.open("GET","https://restcountries.com/v2/all");
requestt.send();
requestt.onload=function(){
    var resultt=JSON.parse(requestt.response);
   resultt.map(element => {
    console.log(element.name);
        console.log(element.capital);
        console.log(element.flag); 

   });
}
