// ===================================
// Abdallah Portfolio Script
// ===================================

// العناصر
const menuBtn = document.getElementById("menuBtn");
const sidebar = document.getElementById("sidebar");
const themeBtn = document.getElementById("themeBtn");
const langBtn = document.getElementById("langBtn");
const topBtn = document.getElementById("topBtn");

// إنشاء Overlay تلقائياً
const overlay = document.createElement("div");
overlay.id = "overlay";
document.body.appendChild(overlay);

// ===============================
// القائمة الجانبية
// ===============================

menuBtn.addEventListener("click", () => {

    sidebar.classList.toggle("active");
    overlay.classList.toggle("active");

});

overlay.addEventListener("click", () => {

    sidebar.classList.remove("active");
    overlay.classList.remove("active");

});

// ===============================
// دارك مود
// ===============================

if(localStorage.getItem("theme")=="dark"){

    document.body.classList.add("dark");

}

themeBtn.addEventListener("click",()=>{

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){

        localStorage.setItem("theme","dark");

    }else{

        localStorage.setItem("theme","light");

    }

});

// ===============================
// زر أعلى الصفحة
// ===============================

window.addEventListener("scroll",()=>{

    if(window.scrollY>300){

        topBtn.style.display="block";

    }else{

        topBtn.style.display="none";

    }

});

topBtn.addEventListener("click",()=>{

    window.scrollTo({

        top:0,
        behavior:"smooth"

    });

});// ===============================
// الترجمة (عربي / إنجليزي)
// ===============================

let currentLang = "ar";

langBtn.addEventListener("click",()=>{

    if(currentLang==="ar"){

        document.documentElement.lang="en";
        document.documentElement.dir="ltr";

        langBtn.innerHTML='<i class="fa-solid fa-language"></i>';

        currentLang="en";

    }else{

        document.documentElement.lang="ar";
        document.documentElement.dir="rtl";

        langBtn.innerHTML='<i class="fa-solid fa-language"></i>';

        currentLang="ar";

    }

});

// ===============================
// Abdallah AI Assistant
// ===============================

const question=document.getElementById("question");
const chatBox=document.getElementById("chatBox");

function askAI(){

    const q=question.value.trim();

    if(q==="") return;

    const user=document.createElement("div");
    user.className="user-message";
    user.innerHTML="🧑 "+q;

    chatBox.appendChild(user);

    let answer="";

    const text=q.toLowerCase();

    if(text.includes("خبر") || text.includes("experience")){

        answer="لدي خبرة كمسؤول مشتريات في شركة بوابة السيارة ومجموعة شركات النجم الذهبي، مع خبرة في التفاوض وإدارة الموردين وتقليل التكاليف.";

    }

    else if(text.includes("مهار")){

        answer="أجيد Odoo ERP وZoho ERP وإدارة العقود والتفاوض وإدارة المخاطر وتحليل البيانات.";

    }

    else if(text.includes("مؤهل") || text.includes("تعليم")){

        answer="ليسانس حقوق، ودبلومة الإدارة القانونية للشركات، ودورات في المشتريات وسلاسل الإمداد.";

    }

    else if(text.includes("لغة")){

        answer="العربية لغة أم، والإنجليزية مستوى احترافي.";

    }

    else if(text.includes("تواصل") || text.includes("رقم")){

        answer="رقم الهاتف: 0565120349 - البريد: Abdallahelshahat027@gmail.com";

    }

    else if(text.includes("kpi") || text.includes("إنجاز")){

        answer="حققت خفضاً في تكاليف الشراء بنسبة 15% وتقليل زمن التوريد بنسبة 25%.";

    }

    else{

        answer="يمكنك سؤالي عن الخبرات، المهارات، المؤهلات، اللغات أو معلومات التواصل.";

    }

    const bot=document.createElement("div");
    bot.className="bot-message";

    chatBox.appendChild(bot);

    let i=0;

    const typing=setInterval(()=>{

        bot.innerHTML="🤖 "+answer.substring(0,i);

        i++;

        if(i>answer.length){

            clearInterval(typing);

        }

    },20);

    chatBox.scrollTop=chatBox.scrollHeight;

    question.value="";

}

question.addEventListener("keypress",(e)=>{

    if(e.key==="Enter"){

        askAI();

    }

});
