const newsUl = document.getElementById('newsUl')

async function getIds() {
    const response = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty')
    const array = await response.json()
    array.map((id) => getArticles(id))
}

async function getArticles(articleId) {
    const id = articleId
    const response = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`)
    const article = await response.json()
    const date = new Date(article.time * 1000)

    const story = `
    <h1> ${article.title}</h1>
    <a href="${article.url}" target=_>Article link</a>
    <li>By: ${article.by}</li>
    <li>date: ${date.toLocaleDateString('en-US')}</li>
    `
    newsUl.innerHTML += story
}
getIds()