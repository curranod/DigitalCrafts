const postTitleDiv = document.createElement('ul')
for ( let [i] = 0; [i] < posts.length; i++) {
    postTitleDiv.innerHTML = posts[i].title
    const postBody = postTitleDiv.appendChild('li')


}