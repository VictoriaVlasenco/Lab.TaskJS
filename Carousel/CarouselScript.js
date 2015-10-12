var itemsJson = {
  images:[
    {
      "title": "Picture_1",
      "url":"http://i11.pixs.ru/storage/0/8/3/1HdbGBQH0j_4914239_19099083.jpg"
    },
    {
      "title": "Picture_2",
      "url":"http://i11.pixs.ru/storage/2/0/3/Z54yZHeirk_3099621_19101203.jpg"
    },
    {
      "title": "Picture_2",
      "url":"http://i11.pixs.ru/storage/0/8/3/1HdbGBQH0j_4914239_19099083.jpg"
    },
    {
      "title": "Picture_2",
      "url":"http://i11.pixs.ru/storage/2/0/3/Z54yZHeirk_3099621_19101203.jpg"
    },
    {
      "title": "Picture_2",
      "url":"http://i11.pixs.ru/storage/2/0/3/Z54yZHeirk_3099621_19101203.jpg"
    }
  ]
};

var Carousel = function(viewPort, itemWidth, items){
  this.viewPort = viewPort;
  this.itemWidth = itemWidth;
  this.items = items;
  this.activeId = 1;
  
  this.createOutput(items);
  this.buttonPress();

};

Carousel.prototype.createOutput = function(itemsJson){
  var carousel = document.getElementById('gallery');
  carousel.style.width = this.viewPort * (this.itemWidth+20)+"px";
  
  var div = document.getElementById('carousel');
  div.style.width = this.viewPort * (this.itemWidth+20)+"px";
  
  carousel.appendChild(document.createElement('ul'));

  for (i = 0; i < itemsJson.images.length; i++){
    var image = document.createElement('img');
    image.setAttribute('src',itemsJson.images[i].url);
    image.setAttribute('width',this.itemWidth);
    
    var li = document.createElement('li');
    li.setAttribute('id',i);

    carousel.querySelector('ul').appendChild(li).appendChild(image);
    
  }
  var firstImage = document.getElementById('0');
  firstImage.style.borderWidth = '3px';
};

Carousel.prototype.buttonPress = function(){
  var right = document.getElementById('right');
  var left = document.getElementById('left');
  var id = this.activeId;
  var viewPort = this.viewPort;
  var len = this.items.images.length;
  var width = this.itemWidth;
  var shift = 0;
  var idBefore = viewPort;
  var count = viewPort - 1;
  var isRightArrow = false;
  
  var rightButtonPress = function(){
    isRight = true;
    var image = document.getElementById(id);
    image.style.borderWidth = "3px";
    var ul = document.querySelector('ul');
    
    if(id >= viewPort && id < len - 1 ){
      shift -= width +24;
      ul.style.marginLeft = shift + 'px';
    }
    if (id > 0)
      idBefore = id-1;
    var imageBefore = document.getElementById(idBefore);
    imageBefore.style.borderWidth = "0px";
    if (id < len - 1)
      id++;
    isRightArrow = true;
  };
  var leftButtonPress = function(){
    
    var image = document.getElementById(id -1);
    image.style.borderWidth = "3px";
    var ul = document.querySelector('ul');
    
    if(isRightArrow)
      count = viewPort -1;
    
    if(count === 0 && id > 1){
      shift += width +24;
      ul.style.marginLeft = shift + 'px';
    }else{
      count--;
    }
    if(idBefore < len)
      idBefore = id;

    var imageBefore = document.getElementById(idBefore);
    imageBefore.style.borderWidth = "0px";
    if(id > 1)
      id--;
    isRightArrow = false;
  };
    right.addEventListener( "click" , rightButtonPress);
    left.addEventListener( "click" , leftButtonPress);
};


var c = new Carousel(2,150,itemsJson);
