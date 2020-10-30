var express = require('express');
var router = express.Router();
var api = require('../modals/movies');

router.post('/search',async function(req,res){
	let result = await api.searchMovie(req);
	//console.log(result)
	res.json(result);
});

router.post('/searchbygenres',async function(req,res){
	if(req.body.genres.length==0){
		res.json("Please add genres");
		return
	}
	let result = await api.searchMovieByGenres(req);
	//console.log(result)
	if(result.length>0){
		res.json(result);
	}else{
		res.json("Not found")
	}
	
});

router.post('/searchbyrating',async function(req,res){
	
	let result = await api.searchMovieByRating(req);
	//console.log(result)
	if(result.length>0){
		res.json(result);
	}else{
		res.json("Not found")
	}
	
});

router.post('/searchbyreleaseyear',async function(req,res){
	let result = await api.searchMovieByYear(req);
	//console.log(result)
	if(result.length>0){
		res.json(result);
	}else{
		res.json("Not found")
	}
});

router.get('/:id',async function(req,res){
	let result = await api.getMovieById(req);
	//console.log(result)
	if(result.length>0){
		res.json(result[0]);
	}else{
		res.json("Not found")
	}
	
});

module.exports = router;

