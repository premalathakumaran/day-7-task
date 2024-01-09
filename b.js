//b.Get all the countries with a population of less than 2 lakhs using Filter function


var request1 = new XMLHttpRequest();
request1.open("GET","https://restcountries.com/v2/all");
request1.send();
request1.onload=function(){
    var result1=JSON.parse(request1.response);
    const pop = result1.filter((element)=>{
        return element.population<200000;
    })
console.log(pop);}