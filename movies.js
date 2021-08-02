const movieUL = document.getElementById("moviesUL")
const movieDetails = document.getElementById("movieDetails")    
let request = new XMLHttpRequest() 


request.addEventListener('load', function(){
    const result = JSON.parse(this.responseText)
    console.log(result.Search)
    

    const movieDetails = result.Search.map((result) =>{
        return `<div class = "movie">
        </div>
    <img src = '${result.Poster}'/>
    <p>'${result.Title}'</p>
    <p>'${result.Year}'</p>
    <p>'${result.imdbID}'</p>
    <button data-movieid = ${result.imdbID} onclick ="window.location.href='http://www.omdbapi.com/?i=${result.imdbID}&apikey=796d6fd7';">Movie Details</button>`
   
    })
    movieUL.innerHTML = movieDetails.join("")
})            

request.open ("GET", "http://www.omdbapi.com/?s=batman&apikey=796d6fd7" )
request.send()
