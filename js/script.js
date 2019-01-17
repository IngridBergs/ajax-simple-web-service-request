/*

    Een typische Ajax flow: maak een asynchrone aanvraag aan een remote server via JavaScript en verwerk het antwoord;
    Het JSON (JavaScript Object Notation) formaat;
    DOM manipulatie: de DOM aanpassen naargelang het resultaat van een Ajax request.

    Indien het verzoek aan de webservice mislukt, geef dan een foutmelding.
    Indien het verzoek slaagt, vorm het JSON antwoord om in HTML
    en geef deze weer. Laat je webpagina er leuk uitzien m.b.v. CSS / SCSS


    //Common Types of HTTP Statuses
    // 200: OK
    // 404: ERROR
    // 403: FORBIDDEN


    //we can fetch data from our local machine or server, public API.

*/

function genQuote(){
// //Create the XHR Object
    var xhr = new XMLHttpRequest();
    console.log(xhr);
    xhr.onload = function() {
        if(xhr.status == 200){
            var result = JSON.parse(xhr.responseText);
            console.log (result);
            document.getElementById("author").innerHTML = result.author;
            //document.getElementById("response").innerHTML = result.photo;
            
            document.getElementById("photo").src = result.photo;
            document.getElementById("quote").innerHTML = result.quote;
        }
    }
    xhr.onerror = function(){
        alert("Er is iets mis gelopen bij de HttpRequest , probeer het opnieuw aub!");
    }
    //Call the open function, GET-type of request, url, true-asynchronous
    xhr.open("GET", "https://thatsthespir.it/api", true);
    //call send
    xhr.send();
};






// verouderder code !!!

// ik had een oudere versie
//maak gebruik van xhr.onload want die komt pas door als readyState 4 is
//dus schrijf maw een functie onload en onerror
//want ik kreeg 3x de alert message , nl als de readyState van 0 naar 4 in stapjes gaat
//quote kwam wel direct door

/*        function genQuote() {
            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    var result = JSON.parse(xhr.responseText);
                    console.log (result);
                    document.getElementById("response").innerHTML = result.quote;
                }
                else{
                    alert("Er is iets mis gelopen bij de HttpRequest , probeer het opnieuw aub!");
                }
            };


    //Call the open function, GET-type of request, url, true-asynchronous
    xhr.open("GET", "https://thatsthespir.it/api", true);

    //call send
    xhr.send();
};*/
