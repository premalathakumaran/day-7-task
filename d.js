//d.Print the total population of countries using reduce function


var reques = new XMLHttpRequest();
reques.open("GET","https://restcountries.com/v2/all");
reques.send();
reques.onload=function(){
    var resul=JSON.parse(reques.response);
    var total = resul.reduce((acc,curr) =>{
        return acc+curr.population;
    } ,0);

    console.log(total);
 
}