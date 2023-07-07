// Envoi d'une requête GET à l'API
fetch("https://quotes15.p.rapidapi.com/quotes/random/?language_code=en", {
    "method": "GET",
    "headers": {
    "x-rapidapi-host": "quotes15.p.rapidapi.com",
    'X-RapidAPI-Key': '26fac2d393msh757428e7ddd32f8p1c7137jsnf56d93c39f43'
    }
})
// Extraction des données JSON de la réponse de la requête
.then(response => response.json())
// Affichage de la citation et de l'auteur 
.then(response => {
    console.log(response);
            
    document.getElementById('quote').innerHTML = response.content;
    document.getElementById('author').innerHTML = '- ' + response.originator.name + ' -';
    console.log(response.originator.language_code)
    console.log(response.originator.name)
    console.log(response.originator.description)
})



