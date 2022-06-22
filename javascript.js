let loader=document.querySelector(".section0");
console.log(loader);
window.addEventListener('load',()=>{
  loader.classList.toggle("disppearloader");
  setTimeout(showhome,2000);

},false);


/* slide nav bar */

let bar=document.getElementById("showbar");
console.log(document.querySelector('.main-nav ul'));
bar.addEventListener('click',()=>{
  console.log(window.innerWidth);
  if(window.innerWidth<=700){
    document.querySelector('ul').classList.toggle('show');
    
  }
},false);

let stt=document.querySelectorAll(".main-nav ul li a");
for (let i=0;i<stt.length;i++){
  stt[i].addEventListener('click',()=>{
    document.querySelector('ul').classList.toggle('show');
  },false);
}

/* show caracter by caracter */

var ch=["Software Engineer","Problem solver","Freelancer","Song Writer"];
var f=0;
var i=0;
var time=150; 

function show(){

setTimeout(()=>{showtext(i)},time);
}

   function showtext (index){
   
       document.querySelector("#texts").innerHTML+=ch[index][f]+"";
       f++;
       if (f<ch[index].length){setTimeout(()=>{showtext(index)},time);} 
       else {
           f=0;
           setTimeout(()=>{hidetext(ch[index])},time);}
   }

   function hidetext(l){
        l=l.substring(0,l.length - 1);
       document.querySelector("#texts").innerHTML=l;
       
       if (l.length!=0){setTimeout(()=>{hidetext(l)},time);}
       else if (i<ch.length) {
           i++;
           if(i==ch.length){i=0;}
           setTimeout(()=>{showtext(i)},time);}  
   }
  
show();


/* Progress line */
var timecounter;
function counter(j,target,id1,id2){
 timecounter=10;
setTimeout(()=>{count(j,target,id1,id2)},timecounter);}

function count (j,target,id1,id2){
j++;
document.getElementById(id1).value=j;
document.getElementById(id2).innerHTML=j+"%";
if (j!=target){
 if (j==target-20){timecounter=10;}
     setTimeout(()=>{count(j,target,id1,id2)},timecounter);
} 
}
function animationline(){
counter(1,75,"line1","val1");
counter(1,20,"line2","val2");
counter(1,50,"line3","val3");
counter(1,60,"line4","val4");

}




/* hide top arrow*/
const viewport=document.documentElement.clientHeight;
const elementheight=document.querySelector(".section2").getBoundingClientRect().y;
const elemntbottom=document.querySelector(".section2").getBoundingClientRect().bottom;
window.addEventListener('scroll',()=>{
  if ((viewport>elementheight )&&(elemntbottom>0)){
    document.querySelector(".setdiv").classList.add("showarrow");
  }

},false);
function showhome (){
/*Reveal home description */
ScrollReveal().reveal('.home-description h6',{
  reset:true,
duration: 3000,
origin: "bottom",
distance: "100px",
easing: "cubic-bezier(0.5, 0, 0, 1)",
});

ScrollReveal().reveal('.set-texts',{
  reset:true,
duration: 3000,
origin: "left",
distance: "50px",
easing: "cubic-bezier(0.5, 0, 0, 1)",
});
ScrollReveal().reveal('.home-description button',{
  reset:true,
duration: 3000,
origin: "right",
distance: "50px",
easing: "cubic-bezier(0.5, 0, 0, 1)",
});

/*reveal laptop */
ScrollReveal().reveal('.homeanimation',{
  reset:true,
  duration: 4000,
  scale: 0.85
});
}
/*reveal about and text card*/

ScrollReveal().reveal('.aboutcard',{
  reset:true,
  origin: 'top',
  distance: '300px',
  easing: 'ease-in-out',
  duration: 800,
  });
  ScrollReveal().reveal('.textcard',{
    reset:true,
    origin: 'bottom',
    distance: '300px',
    easing: 'ease-in-out',
    duration: 1000,
    });

    ScrollReveal().reveal('.aboutcard img',{
      reset:true,
      origin: 'center',
      easing: 'ease-in-out',
      duration: 800,
      });

      ScrollReveal().reveal('.abouttext',{
        reset:true,
        origin: 'bottom',
        distance: '100px',
        easing: 'ease-in-out',
        duration: 800,
        });


/* reveal education boxs */

ScrollReveal().reveal('.right .content',{
reset:true,
origin: 'right',
distance: '300px',
easing: 'ease-in-out',
duration: 800,
});

ScrollReveal().reveal('.left .content',{
  reset:true,
  origin: 'left',
  distance: '300px',
  easing: 'ease-in-out',
  duration: 800,
  });

  /* reveal title*/
  ScrollReveal().reveal('.title',{
    reset:true,
    origin: 'bottom',
    distance: '50px',
    easing: 'ease-in-out',
    duration: 800,
    });

/*Reveal lineprogress */
ScrollReveal().reveal('.progress',{
  reset:true,
  origin: 'left',
  distance: '100px',
  easing: 'ease-in-out',
  duration: 800,
  afterReveal:function (){ animationline();}});

    /*reveal tech icons*/
    ScrollReveal().reveal('.settechitems img',{
      reset:true,
      origin: 'right',
      distance: '100px',
      easing: 'ease-in-out',
      duration: 800,
      });

      /*reveal projects*/
      ScrollReveal().reveal('.project',{
        reset:true,
        origin:'bottom',
        distance:'100px',
        easing: 'ease-in-out',
        duration: 800,
      });

/*reveal projectcover */
      let s=document.querySelectorAll('.projectcover');
      for(let l=0;l<s.length;l++){
      ScrollReveal().reveal(`#cover${l+1}`,{
        reset:true,
        duration: 800,
        afterReveal: function (){
          s[l].classList.add("slidecover");
          },
          afterReset: function (){
          s[l].classList.remove("slidecover");
           }

      });}
    

     




