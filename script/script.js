
let navbar = document.querySelector(".CHARMANT");
let ashop = document.getElementsByClassName("ashop");
let left = document.querySelectorAll(".left");
let right = document.querySelectorAll(".right");
let shopi = document.querySelector(".shopi");
let chstatus = true;

window.addEventListener("scroll", function () {
  let scrollPosition = window.scrollY;
  document.querySelector(".home").style.backgroundPosition = `2% ${30 + scrollPosition * 0.23}%`;

    if (window.scrollY > 720) {
       document.getElementsByClassName("navbar")[0].style.backgroundColor = "white"
        navbar.style.color = "black"; 
        shopi.style.color = "black";

        for(let i=0; i<ashop.length; i++){
          ashop[i].style.color = "black";
        }
        for(let i=0; i<left.length; i++){
          left[i].style.backgroundColor = "black";
          right[i].style.backgroundColor = "black";
        }
        
    } else {
      if(chstatus){
        document.getElementsByClassName("navbar")[0].style.backgroundColor = "transparent"
        navbar.style.color = "white"; // Default navbar color
        shopi.style.color = "white";
        for(let i=0; i<ashop.length; i++){
          ashop[i].style.color = "white";
        }
        for(let i=0; i<right.length; i++){
          left[i].style.backgroundColor = "white";
          right[i].style.backgroundColor = "white";
        }
      }
    }
});
window.addEventListener("scroll", function () {
  let scrollPosition = window.scrollY;
  let homeSection = document.querySelector(".home");

  // Check screen width for responsive behavior
  if (window.innerWidth < 1200) {
    homeSection.style.backgroundPosition = `35% ${50 + scrollPosition * 0.1}%`;
  } else {
    homeSection.style.backgroundPosition = `2% ${30 + scrollPosition * 0.2}%`;
  }
});



let textspan = document.querySelectorAll(".divspan > span");
let count = 0;

let changes = setInterval(function () {
    if (count < textspan.length) {
        textspan[count].style.opacity = "1";
        textspan[count].style.filter = "blur(0px)";
        textspan[count].style.top = "0px"; 
        textspan[count].style.transition = "opacity 1s ease, filter 1s ease, top 0.5s ease, left 0.5s ease"; 
        count++; 
    } else {
        clearInterval(changes);
    }
}, 60); 


let aboutspan = document.querySelectorAll(".about_span > span");
let itemhead = document.querySelectorAll(".itemhead > span");
let main_slide1head = document.querySelectorAll(".main_slide1head > span");
let contact_head_div = document.querySelectorAll(".contact_head_div > span");
let newchanges;
let inc = 0;
let incre = 0
let increse = 0
window.addEventListener("scroll",function(){
  if(scrollY > 700 && scrollY < 900){
    newchanges = setInterval(function () {
      if(inc < aboutspan.length){
        aboutspan[inc].style.opacity = "1"; 
        aboutspan[inc].style.filter = "blur(0px)"; 
        aboutspan[inc].style.top = "0px"; 
        aboutspan[inc].style.transition = "opacity 1s ease, filter 1s ease, top 0.5s ease, left 0.5s ease"; 
        inc++;
      }else{
        clearInterval(newchanges);
      }
    },200);

    document.querySelector(".about_p").style = "bottom:0px;transition-delay: 1s;opacity: 1;"
  }
  if(scrollY > 2300){
    inc = 0;
    let setchanges = setInterval(function () {
      if(inc < itemhead.length){
        itemhead[inc].style.opacity = "1"; 
        itemhead[inc].style.filter = "blur(0px)"; 
        itemhead[inc].style.top = "0px"; 
        itemhead[inc].style.transition = "opacity 1s ease, filter 1s ease, top 0.5s ease, left 0.5s ease"; 
        inc++;
      }else{
        clearInterval(setchanges);
      }
    },60);
  }

  if(scrollY > 3100){
    incre = 0;
    let setchangesss = setInterval(function () {
      if(incre < main_slide1head.length){
        main_slide1head[incre].style.opacity = "1"; 
        main_slide1head[incre].style.filter = "blur(0px)"; 
        main_slide1head[incre].style.top = "0px"; 
        main_slide1head[incre].style.transition = "opacity 1s ease, filter 1s ease, top 0.5s ease, left 0.5s ease"; 
        incre++;
      }else{
        clearInterval(setchangesss);
      }
    },60);
  }
  
  if(scrollY >4000){
    increse = 0;
    setchangesss = setInterval(function () {
      if(increse < contact_head_div.length){
        contact_head_div[increse].style.opacity = "1"; 
        contact_head_div[increse].style.filter = "blur(0px)"; 
        contact_head_div[increse].style.top = "0px"; 
        contact_head_div[increse].style.transition = "opacity 2s ease, filter 1s ease, top 0.5s ease, left 0.5s ease"; 
        increse++;
      }else{
        clearInterval(setchangesss);
      }
    },300);
  }
})


// change background image

function changeback(data){
  chstatus = true;

  document.querySelector(".home_content").style.display= "none";
  document.querySelector(".about").style.display = "none";
  document.querySelector(".about_card").style.display = "none";
  document.querySelector(".model").style.display="none";
  document.querySelector(".desimg").style.display = "none"; 
  document.querySelector(".shopitem").style.display = "none"

  // remove smooth scroll
  document.documentElement.style.scrollBehavior = "auto"; 
  document.querySelector(".home").scrollTop = 0;
  document.documentElement.scrollTop = 0;
  window.scrollTo(0, 0);

  document.querySelector(".descontent").style.display = "block";
document.querySelector(".home").style.display = "block";
document.getElementById("despara2").style.display="block";
  document.querySelector(".headname").style.display = "block"; 
  document.getElementById("despara1").style.display="none";
  document.querySelector(".desname").style.display="none"
if(data == "minimalist"){
  document.querySelector(".home").style.backgroundImage = `url("./img/girl1.jpg")`
  document.querySelector(".headname").innerHTML=`<h1 id="headname"><span>M</span><span>I</span><span>N</span><span>I</span><span>M</span><span>A</span><span>L</span><span>I</span><span>S</span><span>T</span> <span>E</span><span>L</span><span>E</span><span>G</span><span>A</span><span>N</span><span>N</span><span>E</span></h1>`;
  document.getElementById("despara2").style.display="block";
  document.getElementById("despara2").innerHTML=`Simplicity redefined—Minimalist Elegance celebrates the beauty of understated design. This collection is crafted for those who appreciate the quiet sophistication of clean lines, subtle details, and timeless pieces that enhance everyday style. Each item is designed to complement any look, whether worn alone for effortless refinement or layered for a modern twist. Perfect for those who value quality and versatility, Minimalist Elegance offers jewelry that speaks volumes in its simplicity.`
}
else if(data == "bridal"){
  document.querySelector(".home").style.backgroundImage = `url("./img/girl2.png")`
  document.querySelector(".headname").innerHTML=`<h1 id="headname">
        <span>B</span><span>R</span><span>I</span><span>D</span><span>A</span><span>L</span> <span>B</span><span>L</span><span>I</span><span>S</span><span>S</span>
      </h1>`
      document.getElementById("despara2").style.display="block";
  document.getElementById("despara2").innerHTML=`Celebrate love’s most precious moments with Bridal Bliss, a collection designed to enhance your wedding day with grace and sophistication. Featuring luminous pearls, sparkling stones, and intricate details, these pieces embody romance and elegance. Whether you’re walking down the aisle or commemorating a cherished anniversary, Bridal Bliss offers timeless jewelry that complements your beauty and captures the magic of your special day. Each piece is crafted to be a keepsake, treasured for years to come.`
}
else{
  document.querySelector(".home").style.backgroundImage = `url("./img/girl3.png")`
  document.querySelector(".headname").innerHTML=` <h1 id="headname">
        <span>T</span><span>I</span><span>M</span><span>E</span><span>L</span><span>E</span><span>S</span><span>S</span><br/> <span>C</span><span>L</span><span>A</span><span>S</span><span>S</span><span>I</span><span>C</span><span>S</span>
      </h1>`;
  document.getElementById("despara2").style.display="block";
  document.getElementById("despara2").innerHTML=`Timeless Classics is a collection inspired by the enduring beauty of tradition and elegance. Featuring iconic designs and refined craftsmanship, these pieces are perfect for those who value jewelry with lasting appeal. From heirloom-inspired lockets to classic pearl studs, each item tells a story of sophistication and grace. Designed to seamlessly transition from everyday wear to life’s grand occasions, Timeless Classics offers jewelry that transcends trends and becomes a staple in your collection.`
}

}


// UseFul

function useful(data){
  document.querySelector(".home").style.display = "none";
    document.querySelector(".about_card").style.display = "none"
    document.querySelector(".model").style.display = "none";
    document.querySelector(".about").style.display = "none";
    document.querySelector(".des").style.display = "none";
    document.querySelector(".item").style.display = "none";
    document.querySelector(".slide_conatiner").style.display = "none";
    document.querySelector(".contact_main").style = "display:none"
console.log(data);
chstatus = false;
    navbar.style.color = "black"; 
        shopi.style.color = "black";

        for(let i=0; i<ashop.length; i++){
          ashop[i].style.color = "black";
        }
        for(let i=0; i<left.length; i++){
          left[i].style.backgroundColor = "black";
          right[i].style.backgroundColor = "black";
        }
  if(data == "privacy"){
    document.querySelector(".privacy").style.display = "block";
    document.querySelector(".cookies").style.display = "none";
    document.querySelector(".terms").style.display = "none";
    document.querySelector(".delivery").style.display = "none";
  }
  else if(data == "cookies"){
    document.querySelector(".cookies").style.display = "block";
    document.querySelector(".terms").style.display = "none";
    document.querySelector(".delivery").style.display = "none";
    document.querySelector(".privacy").style.display = "none";
  }
  else if(data == "terms"){
    document.querySelector(".cookies").style.display = "none";
    document.querySelector(".terms").style.display = "block";
    document.querySelector(".delivery").style.display = "none";
    document.querySelector(".privacy").style.display = "none";
  }
  else{
    document.querySelector(".cookies").style.display = "none";
    document.querySelector(".terms").style.display = "none";
    document.querySelector(".delivery").style.display = "block";
    document.querySelector(".privacy").style.display = "none";
  }

  document.documentElement.style.scrollBehavior = "auto"; 
  document.querySelector(".home").scrollTop = 0;
  document.documentElement.scrollTop = 0;
  window.scrollTo(0, 0);
}


//shop item

function shop(){
  document.querySelector(".privacy").style.display = "none";
    document.querySelector(".cookies").style.display = "none";
    document.querySelector(".terms").style.display = "none";
    document.querySelector(".delivery").style.display = "none";
  document.documentElement.style.scrollBehavior = "auto"; 
  document.querySelector(".home").scrollTop = 0;
  document.documentElement.scrollTop = 0;
  window.scrollTo(0, 0);
  chstatus = false;
  navbar.style.color = "black"; 
  document.getElementsByClassName("navbar")[0].style.backgroundColor = "white"
        shopi.style.color = "black";

        for(let i=0; i<ashop.length; i++){
          ashop[i].style.color = "black";
        }
        for(let i=0; i<left.length; i++){
          left[i].style.backgroundColor = "black";
          right[i].style.backgroundColor = "black";
        }

    document.querySelector(".showproduct").style.display = "none"
   document.querySelector(".home").style.display = "none";
    document.querySelector(".about").style.display = "none";
    document.querySelector(".item").style.display = "none";
    document.querySelector(".descontent").style.display = "none";
    document.querySelector(".contact_main").style = "display:none;"
    document.querySelector(".shopitem").style = "display:flex;flex-direction:column;gap:30px"
    document.querySelector(".about_card").style = "display:block"
    document.querySelector(".model").style = "display:grid";
    document.querySelector(".slide_conatiner").style = "display:block"
}

function contact(){
  document.documentElement.style.scrollBehavior = "auto"; 
  document.querySelector(".home").scrollTop = 0;
  document.documentElement.scrollTop = 0;
  window.scrollTo(0, 0);
  
  document.querySelector(".contact_main").style = "display:flex;flex-direction: column;"
  document.querySelector(".home").style = "display:none"
  document.querySelector(".home_content").style.display= "none";
  document.querySelector(".about").style.display = "none";
  document.querySelector(".about_card").style.display = "none";
  document.querySelector(".model").style.display="none";
  document.querySelector(".des").style.display = "none";
  document.querySelector(".item").style.display = "none";
  document.querySelector(".slide_conatiner").style.display = "none"
  document.querySelector(".shopitem").style.display = "none";
  document.querySelector(".showproduct").style.display = "none"

  chstatus = false;
  navbar.style.color = "black"; 
  document.getElementsByClassName("navbar")[0].style.backgroundColor = "white"
        shopi.style.color = "black";

        for(let i=0; i<ashop.length; i++){
          ashop[i].style.color = "black";
        }
        for(let i=0; i<left.length; i++){
          left[i].style.backgroundColor = "black";
          right[i].style.backgroundColor = "black";
        }
}

let arrshop = [
  {
    img:"./img/shop1.avif",
    price:"$1100",
    realprice:"$1200",
    product:"Double Pendant Necklace"
  },
  {
    img:"./img/shop2.avif",
    price:"$1100",
    realprice:"$1150",
    product:"Charm Link Bracelet"
  },
  {
    img:"./img/shop3.avif",
    price:"$850",
    realprice:"$1000",
    product:"Teardrop Dangle Earrings"
  },
  {
    img:"./img/shop4.avif",
    price:"$3.6K",
    realprice:"$4000",
    product:"Diamond Teardrop Necklace"
  },
  {
    img:"./img/shop6.avif",
    price:"$500",
    realprice:"$600",
    product:"Delicate Knot Bracelet"
  },
  {
    img:"./img/shop7.avif",
    price:"$400",
    realprice:"$700",
    product:"Sphere Band Ring"
  },
  {
    img:"./img/shop8.avif",
    price:"$950",
    realprice:"$1100",
    product:"Classic Chain Necklace"
  },
  {
    img:"./img/shop9.avif",
    price:"$350",
    realprice:"$400",
    product:"Petite Infinity Ring"
  },
  {
    img:"./img/shop10.avif",
    price:"$850",
    realprice:"$1000",
    product:"Rosebud Stud Earrings"
  },
  {
    img:"./img/shop11.avif",
    price:"$1000",
    realprice:"$1300",
    product:"Starburst Pendant Necklace"
  },
  {
    img:"./img/shop12.avif",
    price:"$300",
    realprice:"$600",
    product:"Perfect Loop Ring"
  },
  {
    img:"./img/shop13.avif",
    price:"$450",
    realprice:"$700",
    product:"Linear Drop Earrings"
  },
  {
    img:"./img/shop14.avif",
    price:"$550",
    realprice:"$670",
    product:"Timeless Charm Anklet"
  },
  {
    img:"./img/shop15.avif",
    price:"$1200",
    realprice:"$1400",
    product:"Heirloom Link Bracelet"
  },
  {
    img:"./img/shop16.avif",
    price:"$650",
    realprice:"$900",
    product:"Bridal Glow Anklet"
  },
  {
    img:"./img/shop17.avif",
    price:"$1100",
    realprice:"$1300",
    product:"Pearl Harmony Bracelet"
  },
  {
    img:"./img/shop18.avif",
    price:"$350",
    realprice:"$660",
    product:"Barely There Anklet"
  },
  {
    img:"./img/shop19.avif",
    price:"$400",
    realprice:"$780",
    product:"Simple Chain Bracelet"
  },
  {
    img:"./img/shop20.avif",
    price:"$500",
    realprice:"$670",
    product:"Classic Pearl Studs"
  },
  {
    img:"./img/shop21.avif",
    price:"$1400",
    realprice:"$1570",
    product:"Classic Eternity Band"
  },
  {
    img:"./img/shop22.avif",
    price:"$1300",
    realprice:"$1470",
    product:"Vintage Locket Necklace"
  },
  {
    img:"./img/shop23.avif",
    price:"$800",
    realprice:"$970",
    product:"Radiance Studs"
  },
  {
    img:"./img/shop24.avif",
    price:"$1500",
    realprice:"$1670",
    product:"Eternity Band"
  },
  {
    img:"./img/shop25.avif",
    price:"$1200",
    realprice:"$1670",
    product:"Everlasting Pearl Necklace"
  },
  {
    img:"./img/shop2.7avif",
    price:"$400",
    realprice:"$570",
    product:"Tiny Halo Studs"
  },
  {
    img:"./img/shop28.avif",
    price:"$350",
    realprice:"$410",
    product:"Infinite Circle Ring"
  },
  {
    img:"./img/shop29.avif",
    price:"$450",
    realprice:"$520",
    product:"Aurora Bar Necklace"
  },
]


function shopcontainer(a){
  document.querySelector(".showproduct").style.display = "block"
  document.querySelector(".shopitem").style = "display:none"
  document.querySelector(".show1_img").innerHTML = ` <img src="${arrshop[a].img}" alt="">`
  document.querySelector(".show_img2").innerHTML = ` <img src="${arrshop[a].img}" alt="">`
  document.querySelector(".show_img3").innerHTML = ` <img src="${arrshop[a].img}" alt="">`
  document.querySelector(".show_img4").innerHTML = ` <img src="${arrshop[a].img}" alt="">`
  document.querySelector(".showhead").innerHTML = `<h1>${arrshop[a].product}</h1>`
  document.getElementById("price").innerText = arrshop[a].price;
  document.getElementById("real_price").innerText = arrshop[a].realprice


  chstatus = false;

  document.documentElement.style.scrollBehavior = "auto"; 
  document.querySelector(".home").scrollTop = 0;
  document.documentElement.scrollTop = 0;
  window.scrollTo(0, 0);

  document.querySelector(".home").style.display = "none"
  document.querySelector(".about").style.display = "none"
  document.querySelector(".des").style.display = "none"
   document.querySelector(".item").style.display = "none"
}

let container = document.querySelector(".shopcontent_container");
let items = document.querySelectorAll(".shopcontainer");

function dot() {
  container.style.justifyContent = "space-between";
  items.forEach((item ,i)=> {
    console.log("true")
    item.style.width = "calc(25% - 15px)"; 
     item.style.display = "block"
    document.querySelectorAll(".shopimg")[i].style.width = "100%"
    document.querySelectorAll(".goldcontent")[i].style.display = "block"


     document.querySelectorAll(".goldline")[i].style = "position:relative;top:0px;"
     document.querySelectorAll(".goldcontent > span")[i].style.top = "10px"
     document.querySelectorAll(".goldcontent")[i].style.padding = "30px 0px 30px 0px";
     document.querySelectorAll(".shop_pra")[i].style.display = "none"
  });
}

function cheat() {
  container.style.justifyContent = "left"; 
  items.forEach((item,i) => {
    console.log(i)
    item.style.width = "100%"; 
    item.style.display = "flex"
    
    document.querySelectorAll(".goldcontent")[i].style.padding = "30px 14px 30px 21px";
    document.querySelectorAll(".goldcontent > span")[i].style.top = "0px"
    document.querySelectorAll(".shop_pra")[i].style.display = "block"
    document.querySelectorAll(".goldline")[i].style = "position:absolute;top:17px;"
    // document.querySelectorAll(".gold-rate")[i].style = "display:none;"

    document.querySelectorAll(".shopimg")[i].style.width = "200px"
  });
}

let numbercount = 1;
document.querySelector(".counter").innerText = numbercount;
function plus(){
  numbercount = numbercount + 1;
  document.querySelector(".counter").innerText = numbercount;
}
function minus(){
  if(numbercount > 1){
    numbercount = numbercount - 1;
    document.querySelector(".counter").innerText = numbercount;
  }
}


// function showimag(data){
//   if(data == 'img1'){
//     document.querySelector(".show1_img > img").style.transform =  "scale(2)";
//   }
//   else if(data == 'img2'){
//    document.querySelector(".show1_img > img").style.scale = `5`
//   }
//   else{
//     document.querySelector(".show1_img > img").style.scale = `7`
//   }
// }