let moviesUl = document.getElementById('moviesUl')
let movies = moviesList.Search
const titleInp = document.getElementById('titleInp')
const yearInp = document.getElementById('yearInp')
const imgInp = document.getElementById('imgInp')
const submitBttn = document.getElementById('submitBttn')
const deleteBttn = document.getElementById('deleteBttn')

// Add Movie

submitBttn.addEventListener('click', function() {

    let newMovie = {
        Title: `${titleInp.value}`,
        Year: `${yearInp.value}`,
        Poster: `${imgInp.value}`,
    }
    movies.push(newMovie)
    displayMovies()
})

//

function displayMovies() {
    moviesUl.innerHTML = ''
    const display = movies.map(function(movie) {
        return `<li>
        <h1>${movie.Title}</h1>
        <div>${movie.Year}</div>
        <img src = ${movie.Poster}>
        <button onclick="deleteFunction('${movie.Title}')" id="deleteBttn">Delete</button>
        </li>`
    })
    moviesUl.innerHTML += display.join('')
}
function deleteFunction(movie) {
    let  deleteFilter = movies.filter((item)=> (item.Title !== movie)) 
    movies = deleteFilter
    displayMovies()
}

displayMovies()