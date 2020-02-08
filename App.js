var pics = [
    'imgs/kitty_bed.jpg', 
    'imgs/kitty_basket.jpg', 
    'imgs/kitty_laptop.jpg', 
    'imgs/kitty_door.jpg', 
    'imgs/kitty_sink.jpg', 
    'imgs/kitty_wall.jpg', 
  ]
  
  var btn = document.querySelector('button')
  var img = document.querySelector('img')
  
  var Index = 1;
  btn.addEventListener('click', function() {
    if (Index === 6) {
      Index = 0
    }
    img.src = pics[Index]
    Index = Index + 1
  })