
const fullMenu = document.getElementById('fullMenu')
const fullMenuBttn = document.getElementById('fullMenuBttn')
const startersBttn = document.getElementById('Starters')
const entreesBttn = document.getElementById('Entrees')
const dessertsBttn = document.getElementById('Desserts')
const starters = document.createElement('ul')


//default

const menu = dishes.map(function(dish) {
    return `<li>
    <div>${dish.title}</div>
    <div>${dish.description}</div>
    <div>${dish.price}</div>
    <img class = 'dishPic' src = '${dish.imageURL}'>
    </li>`
})
fullMenu.innerHTML = menu.join('')

//Full menu

fullMenuBttn.addEventListener('click', function() {
    const menu = dishes.map(function(dish) {
        return `<li>
        <div>${dish.title}</div>
        <div>${dish.description}</div>
        <div>${dish.price}</div>
        <img class = 'dishPic' src = '${dish.imageURL}'>
        </li>`
    })
    fullMenu.innerHTML = menu.join('')
})

//Starters

startersBttn.addEventListener('click', function() {
    const startersFilter = dishes.filter(function(dish) {
        return dish.course == 'Starters'
    })
    const startersMenu = startersFilter.map(function(dish) {
        return `<li>
        <div>${dish.title}</div>
        <div>${dish.description}</div>
        <div>${dish.price}</div>
        <img class = 'dishPic' src = '${dish.imageURL}'>
        </li>`
    })
    fullMenu.innerHTML = startersMenu.join('')
})

// entrees

entreesBttn.addEventListener('click', function () {
    const entreesFilter = dishes.filter(function(dish) {
        return dish.course == 'Entrees'
    })
    const entreesMenu = entreesFilter.map(function(dish) {
        return `<li>
        <div>${dish.title}</div>
        <div>${dish.description}</div>
        <div>${dish.price}</div>
        <img class = 'dishPic' src = '${dish.imageURL}'>
        </li>`
    })
    fullMenu.innerHTML = entreesMenu.join('')
})
//desserts

dessertsBttn.addEventListener('click', function() {
    const dessertsFilter = dishes.filter(function(dish) {
        return dish.course == 'Desserts'
    })
    const dessertsMenu = dessertsFilter.map(function(dish) {
        return `<li>
        <div>${dish.title}</div>
        <div>${dish.description}</div>
        <div>${dish.price}</div>
        <img class = 'dishPic' src = '${dish.imageURL}'>
        </li>`
    })
    fullMenu.innerHTML = dessertsMenu.join('')
})
