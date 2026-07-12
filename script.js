// ===================================
// Abdallah Portfolio Script
// ===================================

// Elements
const menuBtn = document.getElementById("menuBtn");
const sidebar = document.getElementById("sidebar");
const themeBtn = document.getElementById("themeBtn");
const langBtn = document.getElementById("langBtn");
const topBtn = document.getElementById("topBtn");
const question = document.getElementById("question");
const chatBox = document.getElementById("chatBox");

// Overlay
const overlay = document.createElement("div");
overlay.id = "overlay";
document.body.appendChild(overlay);

// ===============================
// Sidebar
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
// Dark Mode
// ===============================

if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
}

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
        localStorage.setItem("theme","dark");
    }else{
        localStorage.setItem("theme","light");
    }

});

// ===============================
// Scroll Top
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

});

// ===============================
// Language
// ===============================

let currentLang="ar";

langBtn.addEventListener("click",()=>{

    if(currentLang==="ar"){

        document.documentElement.lang="en";
        document.documentElement.dir="ltr";
        currentLang="en";

    }else{

        document.documentElement.lang="ar";
        document.documentElement.dir="rtl";
        currentLang="ar";

    }

});
// =======================================
// Abdallah AI Engine
// =======================================

// تنظيف السؤال
function normalizeQuestion(text){

    return text
        .toLowerCase()
        .replace(/[؟?!.,،]/g,"")
        .replace(/\s+/g," ")
        .trim();

}

// البحث داخل قاعدة البيانات
function findAnswer(question){

    const q = normalizeQuestion(question);

    let bestAnswer = "";
    let bestScore = 0;

    knowledge.forEach(item=>{

        let score = 0;

        item.keywords.forEach(keyword=>{

            if(q.includes(keyword.toLowerCase())){
                score++;
            }

        });

        if(score > bestScore){
            bestScore = score;
            bestAnswer = item.answer;
        }

    });

    if(bestAnswer !== ""){
        return bestAnswer;
    }

    return `
🤖 عذراً، لا أملك إجابة لهذا السؤال.

يمكنك سؤالي عن:

• الخبرات
• المهارات
• المؤهلات
• المشتريات
• الموردين
• العقود
• Odoo ERP
• Zoho ERP
• مقابلات العمل
`;
}

// الكتابة التدريجية
function typeWriter(element,text){

    let i = 0;

    element.innerHTML = "🤖 ";

    const timer = setInterval(()=>{

        element.innerHTML = "🤖 " + text.substring(0,i);

        i++;

        chatBox.scrollTop = chatBox.scrollHeight;

        if(i > text.length){
            clearInterval(timer);
        }

    },15);

}

// إرسال السؤال
function askAI(){

    const q = question.value.trim();

    if(q==="") return;

    const user=document.createElement("div");
    user.className="user-message";
    user.innerHTML="🧑 "+q;

    chatBox.appendChild(user);

    const bot=document.createElement("div");
    bot.className="bot-message";

    chatBox.appendChild(bot);

    const answer=findAnswer(q);

    typeWriter(bot,answer);

    question.value="";

    chatBox.scrollTop=chatBox.scrollHeight;

}

// Enter
question.addEventListener("keydown",(e)=>{

    if(e.key==="Enter"){
        askAI();
    }

});

// رسالة البداية
window.addEventListener("load",()=>{

    const bot=document.createElement("div");

    bot.className="bot-message";

    bot.innerHTML=`
🤖 مرحباً 👋

أنا Abdallah AI.

اسألني أي سؤال عن عبدالله الشحات أو خبراته أو المشتريات.
`;

    chatBox.appendChild(bot);

});
// =======================================
// Animation On Scroll
// =======================================

const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

},{threshold:0.2});

sections.forEach(section=>{

    section.style.opacity="0";
    section.style.transform="translateY(40px)";
    section.style.transition="0.6s";

    observer.observe(section);

});

// =======================================
// Active Menu
// =======================================

const navLinks=document.querySelectorAll(".sidebar nav a");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const top=section.offsetTop-150;

        if(window.scrollY>=top){
            current=section.id;
        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#"+current){

            link.classList.add("active");

        }

    });

});

// =======================================
// Portfolio Loaded
// =======================================

window.addEventListener("load",()=>{

    console.log("✅ Abdallah Portfolio Loaded");

});

