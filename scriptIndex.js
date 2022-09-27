(function(){
    'use strict';
    const aimage = ['image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg', 'image5.jpg'];
    let count = 0;
    const prev = document.querySelector('#previous');
    const next = document.querySelector('#next');
    prev.addEventListener('click', function(){

        count--;
        if(count < 0) (count = aimage.length -1)
        document.getElementById('myimage').src = aimage[count]; 
        
    });
    next.addEventListener('click',function(){
        count++
        if(count > aimage.length - 1)( count = 0)
        document.getElementById('myimage').src = aimage[count];

    })
})();