let layout = document.getElementById('layout')
let sourcesBttn = document.getElementById('sourcesBttn')
const articles = news.articles
// const dropdown = document.getElementById('sources')
// const sourcesArray = sources.sources

// Articles Display

const display = articles.map(function(article) {
    return `<li>
    <h1>${article.title}</h1>
    <div>author: ${article.author}</div>
    <div>${article.description}</div>
    <div>${article.url}</div>
    <img class = 'artPic' src = '${article.urlToImage}' width = '300px'>
    </li>`
})
layout.innerHTML += display.join('')


// const sourceNames = sourcesArray.map(function(source) {
//     return `<option>${source.id}</option>`
// })
// dropdown.innerHTML += sourceNames

// dropdown.addEventListener('change' , function() {
//     const filteredArticle = articles.filter(function(article) {
//     const selectedSource = dropdown.value
//     console.log(article, selectedSource)
//     return article.source.id == selectedSource
// })
// const sourcesFinal = filteredArticle.map(function(article){
//     `<li>
//     <h1>${article.title}</h1>
//     <div>author: ${article.author}</div>
//     <div>${article.description}</div>
//     <div>${article.url}</div>
//     <img class = 'artPic' src = '${article.urlToImage}' width = '300px'>
//     </li>`
// })
// layout.innerHTML += sourcesFinal.join('')
// })