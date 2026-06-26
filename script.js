/* ==========================
   SIDEBAR MENU
========================== */

const menuBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("closeBtn");
const sidebar = document.getElementById("sidebar");

if(menuBtn){
menuBtn.addEventListener("click", () => {
sidebar.classList.add("active");
});
}

if(closeBtn){
closeBtn.addEventListener("click", () => {
sidebar.classList.remove("active");
});
}

/* ==========================
   TYPING EFFECT
========================== */

const words = [
"Web Development",
"Video Editing",
"Graphic Design",
"Thumbnail Design",
"Logo Design"
];

let wordIndex = 0;
let charIndex = 0;

const typingText =
document.querySelector(".typing-text");

function typeEffect(){

if(!typingText) return;

let currentWord = words[wordIndex];

typingText.textContent =
currentWord.substring(0,charIndex);

charIndex++;

if(charIndex > currentWord.length){

setTimeout(() => {

charIndex = 0;

wordIndex++;

if(wordIndex >= words.length){
wordIndex = 0;
}

},1500);

}

}

setInterval(typeEffect,120);

/* ==========================
   SCROLL ANIMATION
========================== */

const observer =
new IntersectionObserver((entries)=>{

entries.forEach((entry)=>{

if(entry.isIntersecting){
entry.target.classList.add("show");
}

});

},{
threshold:0.2
});

document
.querySelectorAll(
".skill-card,.project-card,.team-card"
)
.forEach((el)=>{

el.classList.add("hidden");

observer.observe(el);

});

/* ==========================
   SKILL CLICK SCROLL
========================== */

const skillCards =
document.querySelectorAll(".skill-card");

skillCards.forEach((card)=>{

card.addEventListener("click",()=>{

document
.getElementById("projects")
.scrollIntoView({
behavior:"smooth"
});

});

});

/* ==========================
   NAVBAR SHADOW
========================== */

window.addEventListener("scroll",()=>{

const navbar =
document.querySelector(".navbar");

if(window.scrollY > 50){

navbar.style.boxShadow =
"0 10px 30px rgba(0,0,0,.08)";

}else{

navbar.style.boxShadow = "none";

}

});

/* ==========================
   SIDEBAR AUTO CLOSE
========================== */

document
.querySelectorAll(".sidebar a")
.forEach(link=>{

link.addEventListener("click",()=>{

sidebar.classList.remove("active");

});

});<script>
window.onload = () => {
  setTimeout(()=>{
    document.getElementById("loader").style.display="none";
  },1500);
};

const cursor = document.getElementById("cursor");
document.addEventListener("mousemove",(e)=>{
  cursor.style.left = e.pageX + "px";
  cursor.style.top = e.pageY + "px";
});

const counters = document.querySelectorAll(".counter");
counters.forEach(counter=>{
  let update = ()=>{
    let target = +counter.getAttribute("data-target");
    let count = +counter.innerText;
    let inc = target/100;
    if(count < target){
      counter.innerText = Math.ceil(count + inc);
      setTimeout(update,30);
    } else {
      counter.innerText = target;
    }
  };
  update();
});

function filterSkills(type){
  let items = document.querySelectorAll(".skill-item");
  items.forEach(item=>{
    if(type==="all"){
      item.style.display="inline-block";
    } else {
      item.style.display = item.classList.contains(type) ? "inline-block":"none";
    }
  });
}
</script>
