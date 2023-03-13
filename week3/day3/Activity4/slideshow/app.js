const images = ['poster1.png', 'poster2.png','poster3.png','poster4.png','poster4.png']

const posterImage = document.getElementById('posterImage')


// how can I access 'poster2.png' from the images array 
const poster = images[1]
console.log(poster)

// how can I change posterImage to show poster2.png 
let index = 1
setInterval(function() {
    index++
    if(index >= images.length) {
        index = 0 
    }
    posterImage.setAttribute('src', images[index])
}, 2000)