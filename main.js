// const imagex = document.querySelector("img");
// const divx = document.getElementById("bigimage");
// const defaultImage = url(image1);

// imagex.onerror = function(){
//     imagex.src = defaultImage;
// } 

var image = document.getElementById("image1");
var div = document.getElementById("bigimage");

var src = image.src;

div.style.backgroundImage = "url(" + src + ")";
div.style.backgroundSize = "cover";
// div.defaultImage = url(image1);

var image1 = document.getElementById("image1");
var div1 = document.getElementById("bigimage");

  div1.style.display = "none";

image1.addEventListener("mouseover", function(){
    div1.style.display = "block";
    div1.style.backgroundImage = "url(" + image1.src + ")";
    div1.style.backgroundSize = "cover";
});

var image2 = document.getElementById("image2");
var div2 = document.getElementById("bigimage");

div2.style.display = "none";

image2.addEventListener("mouseover", function(){
    div2.style.display = "block";
    div2.style.backgroundImage = "url(" + image2.src + ")";
    div2.style.backgroundSize = "cover";
});

var image3 = document.getElementById("image3");
var div3 = document.getElementById("bigimage");

div3.style.display = "none";

image3.addEventListener("mouseover", function(){
    div3.style.display = "block";
    div3.style.backgroundImage = "url(" + image3.src + ")";
    div3.style.backgroundSize = "cover";
});

var image4 = document.getElementById("image4");
var div4 = document.getElementById("bigimage");

div4.style.display = "none";

image4.addEventListener("mouseover", function(){
    div4.style.display = "block";
    div4.style.backgroundImage = "url(" + image4.src + ")";
});

var image5 = document.getElementById("image5");
var div5 = document.getElementById("bigimage");

div.style.display = "none";

image5.addEventListener("mouseover", function(){
    div5.style.backgroundImage = "url(" + image5.src + ")";
});

var image6 = document.getElementById("image6");
var div6 = document.getElementById("bigimage");

div6.style.display = "none";

image6.addEventListener("mouseover", function(){
    div6.style.backgroundImage = "url(" + image6.src + ")";
    div6.style.backgroundSize = "cover";
});

var image7 = document.getElementById("image7");
var div7 = document.getElementById("bigimage");

div7.style.display = "none";

image7.addEventListener("mouseover", function(){
    div7.style.backgroundImage = "url(" + image7.src + ")";
    div7.style.backgroundSize = "cover";
})

var image8 = document.getElementById("image8");
var div8 = document.getElementById("bigimage");

div8.style.display = "none";

image8.addEventListener("mouseover", function(){
    div8.style.backgroundImage = "url(" + image8.src + ")";
    div8.style.backgroundSize = "cover";
});

var image9 = document.getElementById("image9");
var div9 = document.getElementById("bigimage");

div9.style.display = "none";

image9.addEventListener("mouseover", function(){
    div9.style.backgroundImage = "url(" + image9.src + ")";
    div9.style.backgroundSize = "cover";
 });

//  const divscroll = document.getElementsByClassName("right-wrapper");
//  divscroll.scrollBy(0,-100);