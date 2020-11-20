var express = require('express');
var router = express.Router();
const API_KEY = "a2b2948f";
const API_URL = "http://www.omdbapi.com/";

const axios = require('axios');

//Tableau d'objets
/*
 {
  id: String,
  movie: String,
  yearOfRelease: Number,
  duration: Number // en minutes,
  actors: [String, String],
  poster: String // lien vers une image d'affiche,
  boxOffice: Number // en USD$,
  rottenTomatoesScore: Number
 }
*/


let movies = [{
    id: "0",
    movie: "Legacy",
    yearOfRelease: "2020",
    duration: "136",// en minutes
    actors: ["James", "Nathaly"],
    poster: "img_default", // lien vers une image d'affiche
    BoxOffice: "500000", // en USD$
    rottenTomatoesScore: "0"
}];

/*GET*/
router.get('/', (req, res) => {
  //List 
  res.status(200).json({ movies });
});

/* GET one movie. */
router.get('/:id', (req, res) => {
    const { id } = req.params;
    // Find movie in DB
    const user = _.find(movies, ["id", id]);
    // Return title
    res.status(200).json({
      message: 'Movie found!',
      title 
    });
});


/* PUT new movie. */
router.put('/', (req, res) => {
    // Get the data from request from request
    const { title } = req.body;
    // Create new unique id
    const id = _.uniqueId();
    // Insert it in array (normaly with connect the data with the database)
    //movies.push({ title, id });
    axios({
        method: 'get',
        url: 'http://www.omdbapi.com/?t=${name}&apikey=4c950265',
        responseType: 'json'
    })
    .then(function(response){
        const data=response.data;
        tab_films.push({data, id});

        res.status(200).json({
            message: 'Film ajouté ${id}',
            movie: {data, id}
        });
    });
    });

  /* UPDATE user. */
router.post('/:id', (req, res) => {
    // Get the :id of the user we want to update from the params of the request
    const { id } = req.params;
    // Get the new data of the user we want to update from the body of the request
    const { title } = req.body;
    // Find in DB
    const userToUpdate = _.find(movies, ["id", id]);
    // Update data with new data (js is by address)
    titleToUpdate.title = title;
  
    // Return message
    res.json({
      message: `Movie updated ${id} with ${user}`
    });
  });
  
  /* DELETE user. */
  router.delete('/:id', (req, res) => {
    // Get the :id of the user we want to delete from the params of the request
    const { id } = req.params;
  
    // Remove from "DB"
    _.remove(movies, ["id", id]);
  
    // Return message
    res.json({
      message: `Movie removed ${id}`
    });
  });


  // Je n'ai réussi à terminer le TP car je n'ai pas réussi à utiliser l'API que vous nous avez fourni 