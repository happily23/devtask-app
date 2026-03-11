let animation = document.querySelector('.interval-animation-js');

let showCat = true;
function repeat()
{
    if(showCat)
    {
         animation.innerHTML = `<img src="https://static.vecteezy.com/system/resources/thumbnails/036/146/780/small_2x/ai-generated-cute-tabby-kitten-sitting-on-floor-and-looking-at-camera-photo.jpg">`;
    }
    else
    {
        animation.innerHTML = `Hello`;
    }
    showCat = !showCat;
    
    
}

//setInterval( repeat, 2000);
