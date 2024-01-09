//1.Solving problems using array functions on the rest countries' data 
//a.Get all the countries from the Asia continent /region using the Filter function


var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v2/all");
request.send();
request.onload=function(){
    var result=JSON.parse(request.response);
     result.filter((countries) => {
           return countries.region ==="Asia";
     })
     console.log(result);
}