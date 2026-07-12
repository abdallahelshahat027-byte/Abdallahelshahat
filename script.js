
// ===============================
// Abdallah Portfolio AI
// ===============================

// القائمة الجانبية

const menuBtn = document.getElementById("menuBtn");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");

menuBtn.onclick = () => {

    sidebar.classList.toggle("active");
    overlay.classList.toggle("active");

};

overlay.onclick = () => {

    sidebar.classList.remove("active");
    overlay.classList.remove("active");

};

// ===============================
// دارك مود
// ===============================

const darkBtn = document.getElementById("darkBtn");

darkBtn.onclick = () => {

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){

        localStorage.setItem("theme","dark");

    }else{

        localStorage.setItem("theme","light");

    }

};

if(localStorage.getItem("theme")=="dark"){

    document.body.classList.add("dark");

}

// ===============================
// زر العودة للأعلى
// ===============================

const topBtn=document.getElementById("topBtn");

window.onscroll=function(){

    if(document.documentElement.scrollTop>300){

        topBtn.style.display="block";

    }else{

        topBtn.style.display="none";

    }

};

topBtn.onclick=function(){

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });
  // ===============================
// Abdallah AI Assistant
// ===============================

function askAI(){

let input=document.getElementById("question");
let chat=document.getElementById("chatBox");

let q=input.value.trim();

if(q=="") return;

let user=document.createElement("div");
user.className="user-message";
user.innerHTML="🧑 "+q;

chat.appendChild(user);

let answer="";

let text=q.toLowerCase();

if(text.includes("خبر") || text.includes("experience")){

answer="لدي خبرة كمسؤول مشتريات في شركة بوابة السيارة ومجموعة شركات النجم الذهبي، مع خبرة في التفاوض وإدارة الموردين وتقليل التكاليف.";

}

else if(text.includes("مهار") || text.includes("skill")){

answer="أجيد Odoo ERP وZoho ERP وإدارة العقود والتفاوض الاحترافي وإدارة المخاطر وتحليل البيانات وإدارة المخزون.";

}

else if(text.includes("مؤهل") || text.includes("تعليم")){

answer="ليسانس حقوق من جامعة الزقازيق، ودبلومة الإدارة القانونية للشركات، بالإضافة إلى دورات في المشتريات وسلاسل الإمداد.";

}

else if(text.includes("لغة")){

answer="أتحدث العربية كلغة أم، والإنجليزية بمستوى احترافي.";

}

else if(text.includes("تواصل") || text.includes("رقم") || text.includes("هاتف")){

answer="رقم الهاتف: 0565120349 - البريد الإلكتروني: Abdallahelshahat027@gmail.com";

}

else if(text.includes("kpi") || text.includes("انجاز")){

answer="حققت خفضاً في تكاليف المشتريات بنسبة تصل إلى 15% وتقليل زمن التوريد بنسبة 25% مع الحفاظ على دقة مخزون تتجاوز 98%.";

}

else{

answer="يمكنك سؤالي عن الخبرات، المهارات، المؤهلات، اللغات، الإنجازات أو معلومات التواصل.";

}

let bot=document.createElement("div");

bot.className="bot-message";

chat.appendChild(bot);

let i=0;

let speed=setInterval(()=>{

bot.innerHTML="🤖 "+answer.substring(0,i);

i++;

if(i>answer.length){

clearInterval(speed);

}

},20);

chat.scrollTop=chat.scrollHeight;

input.value="";

}

document.getElementById("question").addEventListener("keypress",function(e){

if(e.key==="Enter"){

askAI();

}

});// ===============================
// فتح وإغلاق البطاقات
// ===============================

const buttons = document.querySelectorAll(".card-btn");
const cards = document.querySelectorAll(".popup-card");

buttons.forEach(button=>{

button.onclick=function(){

cards.forEach(card=>{

card.classList.remove("active");

});

const target=document.getElementById(this.dataset.target);

if(target){

target.classList.add("active");

target.scrollIntoView({

behavior:"smooth",
block:"start"

});

}

};

});

// ===============================
// ترجمة عربي / إنجليزي
// ===============================

let lang="ar";

const translateBtn=document.getElementById("translateBtn");

if(translateBtn){

translateBtn.onclick=function(){

if(lang=="ar"){

lang="en";

translateBtn.innerHTML='<i class="fa-solid fa-language"></i> عربي';

document.documentElement.lang="en";
document.documentElement.dir="ltr";

}else{

lang="ar";

translateBtn.innerHTML='<i class="fa-solid fa-language"></i> English';

document.documentElement.lang="ar";
document.documentElement.dir="rtl";

}
// ===============================
// Animation On Scroll
// ===============================

const sections=document.querySelectorAll(".section");

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0)";

}

});

},{
threshold:0.2
});

sections.forEach(section=>{

section.style.opacity="0";
section.style.transform="translateY(50px)";
section.style.transition=".7s";

observer.observe(section);

});

// ===============================
// Welcome Message
// ===============================

window.addEventListener("load",()=>{

setTimeout(()=>{

console.log("Welcome To Abdallah Portfolio AI");

},500);

});

// ===============================
// Current Year
// ===============================

const year=document.getElementById("year");

if(year){

year.textContent=new Date().getFullYear();

}

// ===============================
// Active Menu
// ===============================

const navLinks=document.querySelectorAll(".sidebar nav a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top=section.offsetTop-150;

if(scrollY>=top){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")=="#"+current){

link.classList.add("active");

}

});

});

// ===============================
// End
// ===============================
};

}
  
  


