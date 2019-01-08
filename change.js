var imgs={"image1.jpg":[1,2,4],"image2.jpg":[2,3,5],"image3.jpg" :[4,6,7],"image4.jpg":
[7,8,9], "image5.jpg" :[10,11,12], "image6.jpg" :[13,14,15], "image7.jpg" :[16,17,18],
 "image8.jpg" :[19,20,21],"image9.jpg" :[22,23,24]
};

var imgs2=["image1.jpg","image2.jpg","image3.jpg","image4.jpg"
,"image5.jpg","image6.jpg","image7.jpg","image8.jpg"
,"image9.jpg","image10.jpg","image11.jpg","image12.jpg"
,"image13.jpg","image14.jpg","image15.jpg","image16.jpg"
,"image17.jpg","image18.jpg","image19.jpg","image20.jpg"
,"image21.jpg","image22.jpg","image23.jpg","image24.jpg"];

var images=["image1.jpg","image2.jpg","image3.jpg","image4.jpg"
,"image5.jpg","image6.jpg","image7.jpg","image8.jpg"
,"image9.jpg"];
var uni1=[];
var uni2=[];
var uni3=[];
var selected=[];
function changeIMG1(){
if(images.length<=6){selected.push(uni1[(6-images.length)/3]);}
if(images.length==0){trans();}
change();
}
function change(){var x=  Math.floor(Math.random() * images.length);
uni1.push(images[x]);
document.getElementById("gazo1").src=images[x];
images.splice(x,1);
var x=  Math.floor(Math.random() * images.length);
document.getElementById("gazo2").src=images[x];
uni2.push(images[x]);
images.splice(x,1);
var x=  Math.floor(Math.random() * images.length);
uni3.push(images[x]);
document.getElementById("gazo3").src=images[x];
images.splice(x,1);
}
function changeIMG2(){
if(images.length<=6){selected.push(uni2[(6-images.length)/3]);}
if(images.length==0){alert(selected);}
  change();
}
function changeIMG3(){
  if(images.length<=6){selected.push(uni3[(6-images.length)/3]);}
if(images.length==0){alert(selected);}
  change();

}
var exh=[[644,834,934],[7,12,11],[30,23,25],[34,45,54]];
function trans(){
var  sum=[]; var num=0;
  for(y=0;y<3;y++) {for(x=0;x<selected.length;x++){
    num+=Number(imgs[selected[x]][y]);} sum.push(num);}
    var zz=[];
    for(x=0;x<exh.length;x++){var u=0;
       for(y=0;y<3;y++) {var t=Number(exh[x][y])-Number(sum[y]);
u+=Math.abs(t);
       }    zz.push(u);
      }
var z=[];
for(i=0;i<zz.length;i++){z.push(zz[i]);}
var nav=Math.min.apply(null,zz);

for(i=0;i<z.length;i++)
{if(z[i]==nav){var key1=i;}}
zz.splice(key1,1);
nav=Math.min.apply(null,zz);
for(i=0;i<z.length;i++)
{if(z[i]==nav){var key2=i;}}
for(i=0;i<z.length;i++)
{if(zz[i]==nav){var key2p=i;}}
zz.splice(key2p,1);
nav=Math.min.apply(null,zz);
for(i=0;i<z.length;i++)
{if(z[i]==nav){var key3=i;}}
alert(z); alert(key3);
}
