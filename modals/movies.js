'use strict';
var db = require('./db');
const imdb = require('imdb-api')


module.exports = {
	searchMovieByGenres : async(req)=>{
		var genres = "'" + req.body.genres.join("','") + "'";

		return await db.getResults("select m.* from movie_genres mg join movies m on m.id=mg.movieid and mg.genres in ("+genres+") group by m.id");
	},
	searchMovieByRating : async(req)=>{
		return await db.getResults("select * from movies where rating "+req.body.with+" '"+req.body.rating+"'");
	},
	searchMovieByYear : async(req)=>{
		return await db.getResults("select * from movies where releaseyear between '"+req.body.from+"' and  '"+req.body.to+"'");
	},
	getMovieById : async(req)=>{
		return await db.getResults("select * from movies where id='"+req.params.id+"'");
	},
	searchMovie : async(req)=>{
        let result = await db.getResults("select * from movies where title='"+req.body.title+"'");        
		if(result.length==0){
			return await imdb.get({name: req.body.title}, {apiKey: '76e4da07', timeout: 30000})
			.then(async function(data){
				let movie = {
					'title':data.title,
					'releaseyear':data.year,
					'rating':data.rating,
					'genres':data.genres,
				}
				console.log(movie)
				let m = await db.insert('movies',movie);
				var genres = data.genres.split(',');

				for(let i=0;i<genres.length;i++){
					await db.insert('movie_genres',{movieid:m.insertId,genres:genres[i]});
				}
				
				return movie;				
			})
			.catch((e)=>{return e});

		}else{
			return result[0];
		}		
    }
}
