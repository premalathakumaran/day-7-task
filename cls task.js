//rest country API Link: less than 1lakhs population.

var request1 = new XMLHttpRequest();
request1.open("GET", "https://restcountries.com/v2/all");
request1.send();
request1.onload = function () {
    var result1 = JSON.parse(request1.response);

    const pop = result1.reduce((accumulator, element) => {
        if (element.population < 100000) {
            accumulator.push(element);
        }
        return accumulator;
    }, []);

    console.log(pop);
}
