var imgs={"image1.jpg":[1,2,4],"image2.jpg":[2,3,5]
};

var imgs2=["image1.jpg","image2.jpg","image3.jpg","image4.jpg"
,"image5.jpg","image6.jpg","image7.jpg","image8.jpg"
,"image9.jpg","image10.jpg","image11.jpg","image12.jpg"
,"image13.jpg","image14.jpg","image15.jpg","image16.jpg"
,"image17.jpg","image18.jpg","image19.jpg","image20.jpg"
,"image21.jpg","image22.jpg","image23.jpg","image24.jpg"];

var images=["image1.jpg","image2.jpg","image3.jpg"];
var uni1="";
var uni2="";
var uni3="";
var selected=[];
function changeIMG1(){

  if(images.length>=5){selected.push(uni1);}
  if(images.length==0){ location.href = "answer.html"; }
var x=  Math.floor(Math.random() * images.length);
uni1=images[x];
document.getElementById("gazo1").src=images[x];
images.splice(x,1);
var x=  Math.floor(Math.random() * images.length);
document.getElementById("gazo2").src=images[x];
uni2=images[x];
images.splice(x,1);
var x=  Math.floor(Math.random() * images.length);
uni3=images[x];
selected.push(images[x]);
document.getElementById("gazo3").src=images[x];
images.splice(x,1);
}
function changeIMG2(){
  if(images.length>=5){selected.push(uni2);}
  var x=  Math.floor(Math.random() * images.length);
  uni1=images[x];
  document.getElementById("gazo1").src=images[x];
  images.splice(x,1);
  var x=  Math.floor(Math.random() * images.length);
  document.getElementById("gazo2").src=images[x];
  uni2=images[x];
  images.splice(x,1);
  var x=  Math.floor(Math.random() * images.length);
  uni3=images[x];
  selected.push(images[x]);
  document.getElementById("gazo3").src=images[x];
  images.splice(x,1);
}
function changeIMG3(){
  if(images.length>=5){selected.push(uni3);}
  var x=  Math.floor(Math.random() * images.length);
  uni1=images[x];
  document.getElementById("gazo1").src=images[x];
  images.splice(x,1);
  var x=  Math.floor(Math.random() * images.length);
  document.getElementById("gazo2").src=images[x];
  uni2=images[x];
  images.splice(x,1);
  var x=  Math.floor(Math.random() * images.length);
  uni3=images[x];
  selected.push(images[x]);
  document.getElementById("gazo3").src=images[x];
  images.splice(x,1);

}
