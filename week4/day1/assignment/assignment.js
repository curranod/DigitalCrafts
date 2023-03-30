const movieList = document.getElementById('movieList')
const movieCard = document.getElementById('movieCard')

const request = new XMLHttpRequest

function generateRoster() {
request.addEventListener('load', function() {
    const movies = JSON.parse(this.response)
    const movie = movies.Search
    let movieItems = movie.map((m) => {
        return `
        <div id="movieCard">
            <a onmouseover="generateCard('${m.imdbID}')">
            <img src="${m.Poster}" id = "poster">
            <p id= "Title">${m.Title}</p>
            </a>
        </div>`
    })
    movieList.innerHTML += movieItems.join('')
})
request.open ('GET','https://www.omdbapi.com/?s=batman&apikey=ae3ef426')
request.send()
}

function generateCard(imdbID) {
    const request = new XMLHttpRequest()

    request.addEventListener('load', function() {
        const parsed = JSON.parse(this.response)
        
        const movie = `
        <div class="bigCard">
            <div class="main">
                <h1 class="bigTitle">${parsed.Title}</h1>
                <img src="${parsed.Poster} class="bigPoster">
            </div>
            <div class="info">
                <p>Year: ${parsed.Year}</p>
                <p>Rated: ${parsed.Rated}</p>
                <p>Released: ${parsed.Released}</p>
                <p>Director:${parsed.Director}</p>
            </div>
        </div>
        `;
        movieCard.innerHTML = movie
    })
    let id = imdbID
    request.open('GET', `http://www.omdbapi.com/?i=${id}&apikey=ae3ef426`)
    request.send()
}

generateRoster()