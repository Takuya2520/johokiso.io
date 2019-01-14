var imgs={"image1.jpg":[17,14,13,2,11,4,9],"image2.jpg":[10,9,20,3,15,8,5],"image3.jpg" :[7,20,8,3,3,4,25],"image4.jpg":
[12,10,8,10,14,9,7], "image5.jpg" :[13,5,17,4,14,9,8], "image6.jpg" :[6,14,15,17,10,3,5],
"image7.jpg" :[5,5,12,14,17,12,5],"image8.jpg" :[10,5,21,7,10,9,8],"image9.jpg" :[7,10,20,4,15,5,9]
,"image10.jpg" : [4,19,5,21,4,8,9],"image11.jpg" : [16,10,17,4,10,4,9] ,"image12.jpg" : [19,17,9,6,4,5,10]
, "image13.jpg" : [7,20,5,5,6,7,20],"image14.jpg" : [3,10,10,20,10,3,4],"image15.jpg" : [7,7,18,5,10,20,3],
"image16.jpg" : [14,11,15,5,3,20,2]
,"image17.jpg" : [16,12,17,10,5,5,5],"image18.jpg" : [7,20,6,6,6,5,20],"image19.jpg" : [4,20,5,20,6,6,2],
"image20.jpg": [4,20,520,6,6,2]
,"image21.jpg" : [7,20,5,5,6,7,20],"image22.jpg" : [15,12,5,6,5,20,7],"image23.jpg" : [14,13,5,6,5,20,7],
"image24.jpg" : [15,7,20,5,12,6,5]
};

var imgs2=["image1.jpg","image2.jpg","image3.jpg","image4.jpg"
,"image5.jpg","image6.jpg","image7.jpg","image8.jpg"
,"image9.jpg","image10.jpg","image11.jpg","image12.jpg"
,"image13.jpg","image14.jpg","image15.jpg","image16.jpg"
,"image17.jpg","image18.jpg","image19.jpg","image20.jpg"
,"image21.jpg","image22.jpg","image23.jpg","image24.jpg"];

var images=["image1.jpg","image2.jpg","image3.jpg","image4.jpg"
,"image5.jpg","image6.jpg","image7.jpg","image8.jpg"
,"image9.jpg", "image10.jpg","image11.jpg","image12.jpg"
,"image13.jpg","image14.jpg","image15.jpg","image16.jpg"
,"image17.jpg","image18.jpg","image19.jpg","image20.jpg"
,"image21.jpg","image22.jpg","image23.jpg","image24.jpg"];
var uni1=[];
var uni2=[];
var uni3=[];
var selected=[];
function changeIMG1(){
if(images.length<=21){selected.push(uni1[(21-images.length)/3]);}
if(images.length==9){trans();
images.splice(0,images.length);}
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
if(images.length<=21){selected.push(uni2[(21-images.length)/3]);}
if(images.length==9){trans();
images.splice(0,images.length);}
  change();

}
function changeIMG3(){
  if(images.length<=21){selected.push(uni3[(21-images.length)/3]);}
if(images.length==9){trans();
images.splice(0,images.length);
}
  change();


}

var exh=[[21,32,62,41,62,32,25],[74,13,11,41,32,32,76],[30,53,25,41,32,32,76],[34,45,54,41,32,32,76]
,[30,45,50,87,21,49,20],[68,53,17,23,22,22,50],[41,23,34,31,60,43,34],[44,34,53,64,12,67,54]
,[32,10,12,45,23,13,12],[32,21,43,34,35,36,10],[26,52,21,70,24,35,37],[21,32,12,43,34,35,36]
,[45,32,21,43,24,35,36],[32,21,43,12,34,35,36],[32,21,43,34,35,36,10],[32,12,29,43,34,35,36]
,[32,12,43,34,35,36,22],[32,12,43,14,35,36,52],[32,12,13,33,34,35,36],[32,12,43,17,34,35,36]
,[32,12,43,34,22,35,36],[32,12,43,11,34,35,36],[32,12,43,10,34,35,36],[32,12,43,16,34,35,36]
,[52,12,73,24,55,21,36],[32,22,73,17,54,35,26],[42,32,42,13,34,75,36]
];
function trans(){
var  sum=[]; var num=0;
  for(y=0;y<7;y++) {for(x=0;x<selected.length;x++){
    num+=Number(imgs[selected[x]][y]);} sum.push(num); num=0;}
    var zz=[];
    for(x=0;x<exh.length;x++){var u=0;
       for(y=0;y<7;y++) {var t=Number(exh[x][y])-Number(sum[y]);
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
for(i=0;i<zz.length;i++)
{if(zz[i]==nav){var key2p=i;}}
zz.splice(key2p,1);
nav=Math.min.apply(null,zz);
for(i=0;i<z.length;i++)
{if(z[i]==nav){var key3=i;}}
var m=[];
if(key1==key2){for(i=0;i<z.length;i++){if(z[i]==z[key1]){m.push(i);}}
key1=m[0];
key2=m[1];}

var m2=[];
if(key2==key3){for(i=0;i<z.length;i++){if(z[i]==z[key1]){m2.push(i);}}
key2=m2[0];
key3=m2[1];
}

var ro=[["imagea.jpg","毛利悠子 ただし抵抗はあるものとする","10/27~3/24 十和田市現代美術館 ","http://towadaartcenter.com/exhibitions/assume-that-there-is-friction-and-resistance/"],
["imageaa.jpg","ムンク展","10/27~1/20 東京都美術館","https://munch2018.jp/"],
["imageb.jpg","ヒスロム　仮設するヒト","11/3~1/20 仙台メディアテーク","https://www.smt.jp/projects/hyslom_ten/"],
["imagec.jpg","フェルメール展","10/5~2/3 上野の森美術館","https://www.vermeer.jp/"]
,["imaged.jpg","カタストロフと美術の力","10/6~1/20　森美術館","https://www.mori.art.museum/jp/exhibitions/catastrophe/" ]
,["imagee.jpg","フィリップスコレクション展","10/17~2/11 三菱一号美術館","https://mimt.jp/pc/"],
["imagef.jpg","雲の抵抗","10/27~1/20 水戸芸術館","https://www.arttowermito.or.jp/gallery/gallery02.html?id=502"],
["imageg.jpg","　光 resonance 音　","1/7~3/24 秋田県立美術館","https://www.akita-museum-of-art.jp/event/show_detail.php?serial_no=238"]
,["imageh.jpg", "ブルーノムナーリ","11/17~1/27 世田谷美術館","https://www.setagayaartmuseum.or.jp/exhibition/special/detail.php?id=sp00191"],
["imagei.jpg","民藝 MINGEI","11/2~2/24 21_21 DESIGN SIGHT","http://www.2121designsight.jp/program/mingei"],
["imagej.jpg","扇の国日本","11/28~1/20 サントリー美術館","https://www.suntory.co.jp/sma/exhibition/2018_5/"],
["imagek.jpg","吉村芳生 超絶技巧を超えて","11/23~1/20 東京ステーションギャラリー","http://www.ejrcf.or.jp/gallery/exhibition/201811_yoshimura.html"],
["imagel.jpg","驚異の超絶技巧","1/26~4/14 富山県立美術館","https://www.aham.jp/exhibition/future/tyouzetugikou/"],
["imagem.jpg","ニュー・ウェイブ　現代美術の80年代","11/3~1/20　国際美術館","http://www.nmao.go.jp/exhibition/2018/1980.html"]
,["imagen.jpg","松江泰治　地名事典","12/8~2/24 広島市現代美術館", "https://www.hiroshima-moca.jp/exhibition/"],
["imageo.jpg","杉本博司と天正少年使節","11/23~1/27 長崎県立美術館","http://www.nagasaki-museum.jp/exhibition/archives/1047"],
["imagep.jpg","ブリューゲル展","1/23~4/1 東京都美術館","http://www.ntv.co.jp/brueghel/"],
["imageq.jpg","建築 × 写真　ここのみに在る光","11/23~1/27 写真美術館","https://topmuseum.jp/contents/exhibition/index-3108.html"],
["imager.jpg","国立トレチャコフ美術館","11/23~1/27 Bunkamura","http://www.bunkamura.co.jp/museum/exhibition/18_russia/"]
,["images.jpg","終わりのむこうへ : 廃墟の美術史","12/8~1/31 松濤美術館","http://www.shoto-museum.jp/exhibitions/181haikyo/"],
["imaget.jpg","バブルラップ","12/15~3/3 熊本市立美術館","https://www.camk.jp/exhibition/bubblewrap/"],
["imageu.jpg","アルヴァ・アアルト　もうひとつの自然","12/8~2/3 名古屋市美術館","http://www.art-museum.city.nagoya.jp/aalto"],
["imagev.jpg","めがねと旅する美術展","11/23~1/27 静岡県立美術館","	http://torimega.com/megane/"],
["imagew.jpg","起点としての80年代","1/5~3/24 静岡市美術館","http://www.shizubi.jp/exhibition/future_190105.php"]
,["imagex.jpg","レイモン・サヴィニャック","1/5~2/11 広島県立美術館","http://www.hpam.jp/"],
["imagey.jpg","木をめぐる美術","1/5~2/11 旭川美術館","http://www.dokyoi.pref.hokkaido.lg.jp/hk/abj/nature_and_art.pdf"]
["imagez.jpg","アールデコと異境へのまなざし","10/6~1/14 東京庭園美術館", "https://www.teien-art-museum.ne.jp/"]
];
document.getElementById("gazo1").src="";
document.getElementById("gazo2").src="";
document.getElementById("gazo3").src="";
document.getElementById("gaz1").src=ro[key1][0];
document.getElementById("gaz2").src=ro[key2][0];
document.getElementById("gaz3").src=ro[key3][0];
document.getElementById("nori").innerHTML="You would like…";

var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
  type: 'radar',
  data: {
    labels: ["Modernity", "Authentic", "Avangard", "Oriental", "Novel", "Practical", "Europeanclassic"],
    datasets: [{
      label: 'yourchoice',
      backgroundColor: "rgba(153,255,51,0.4)",
      borderColor: "rgba(153,255,51,1)",
      data: sum
    },   {
         label: 'exhibition1',
         backgroundColor: "rgba(255,153,0,0.4)",
         borderColor: "rgba(255,153,0,1)",
         data: exh[key1]
       }
    ]
  }
});
var ctx2 = document.getElementById("myChart2");
var myChart2 = new Chart(ctx2, {
  type: 'radar',
  data: {
    labels: ["Modernity", "Authentic", "Avangard", "Oriental", "Novel", "Practical", "Europeanclassic"],
    datasets: [{
      label: 'exhibition2',
      backgroundColor: "rgba(153,255,51,0.4)",
      borderColor: "rgba(153,255,51,1)",
      data: exh[key2]
    }, {
         label: 'exhibition3',
         backgroundColor: "rgba(255,153,0,0.4)",
         borderColor: "rgba(255,153,0,1)",
         data: exh[key3]
       }
    ]
  }
});

document.getElementById("texta1").innerHTML=ro[key1][1];
document.getElementById("texta2").innerHTML=ro[key1][2];
document.getElementById("urla").href=ro[key1][3];
document.getElementById("textb1").innerHTML=ro[key2][1];
document.getElementById("textb2").innerHTML=ro[key2][2];
document.getElementById("urlb").href=ro[key2][3];
document.getElementById("textc1").innerHTML=ro[key3][1];
document.getElementById("textc2").innerHTML=ro[key3][2];
document.getElementById("urlc").href=ro[key3][3];
alert(selected);
}
