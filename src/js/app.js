// Connection to api
// const api = {
//   key: "329f79d936msh83ef107e62bf9e6p1dcc29jsnb8cd5c51e052",
//   base: "https://rapidapi.p.rapidapi.com/properties/v2/detail"
// }

fetch("https://realtor.p.rapidapi.com/properties/v2/list-for-sale?sort=relevance&city=New%20York%20City&limit=200&offset=0&state_code=NY", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "realtor.p.rapidapi.com",
		"x-rapidapi-key": "5b154f89b5msha8786097e4e3804p1df7b1jsna8ec570e4922"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.log(err);
});
