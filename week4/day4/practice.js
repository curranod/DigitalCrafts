const list = document.getElementById('list')
fetch('https://food2fork.ca/api/recipe/search/?page=2&query=beef carrot potato onion' {
    method: 'GET',
    headers: {
        'Authorization': 'Token 9c8b06d329136da358c2d00e76946b0111ce2c48'
    }
    .then(response => result.json())
    .then(result => console.log(result))
})
