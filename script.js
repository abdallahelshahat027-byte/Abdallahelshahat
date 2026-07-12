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
function findAnswer(question){

    const q = normalizeQuestion(question);

    // مرادفات الكلمات
    const synonyms = {
        "اسم":["اسم","الاسم","مين","من","تعرف","عرف","نفسك"],
        "عمر":["عمر","سن","سنة","كام","age"],
        "خبرة":["خبرة","خبرتك","اشتغلت","وظيفتك","شغل","experience"],
        "مهارة":["مهارة","مهارات","تميز","مميزات","skills"],
        "تعليم":["تعليم","مؤهل","جامعة","شهادة","دراسة","education"],
        "راتب":["راتب","مرتب","salary"],
        "قوة":["قوة","تميز","مميزات","strength"],
        "ضعف":["ضعف","عيوب","weakness"],
        "هدف":["هدف","طموح","مستقبل","career"],
        "شركة":["بوابة","النجم","شركة","company"],
        "اودو":["odoo","اودو"],
        "زوهو":["zoho","زوهو"]
    };

    let bestAnswer = "";
    let bestScore = 0;

    knowledge.forEach(item=>{

        let score = 0;

        item.keywords.forEach(keyword=>{

            keyword = normalizeQuestion(keyword);

            if(q.includes(keyword))
                score += 10;

            const words = keyword.split(" ");

            words.forEach(word=>{

                if(q.includes(word))
                    score += 2;

                for(const key in synonyms){

                    if(synonyms[key].includes(word)){

                        synonyms[key].forEach(s=>{

                            if(q.includes(s))
                                score++;

                        });

                    }

                }
// ===============================
// Smart Normalize V2
// ===============================

function normalizeQuestion(text){

    return text
        .toLowerCase()

        // إزالة التشكيل
        .replace(/[ًٌٍَُِّْـ]/g,"")

        // توحيد الحروف
        .replace(/[أإآ]/g,"ا")
        .replace(/ة/g,"ه")
        .replace(/ى/g,"ي")
        .replace(/ؤ/g,"و")
        .replace(/ئ/g,"ي")

        // حذف الرموز
        .replace(/[؟?!.,،؛:()"']/g," ")

        // حذف الإيموجي
        .replace(/[\u{1F300}-\u{1FAFF}]/gu," ")

        // حذف المسافات الزائدة
        .replace(/\s+/g," ")

        .trim();

}

// ===============================
// Smart Synonyms
// ===============================

const smartDictionary = {

hello:[
"ازيك","ازيك؟","عامل اي","عامل ايه","اخبارك",
"السلام عليكم","السلام","صباح الخير",
"مساء الخير","هلا","اهلا","هاي","hello","hi"
],

name:[
"اسمك","اسم","مين انت","من انت",
"عرف نفسك","احكي عن نفسك",
"قدم نفسك","نبذه","نبذة",
"who are you","introduce yourself",
"tell me about yourself"
],

age:[
"سنك","العمر","كام سنه","كام سنة",
"كم عمرك","عندك كام سنة","age","how old"
],

country:[
"منين","انت منين","بلدك",
"فين","مدينه","مدينة",
"محافظه","محافظة",
"where are you from",
"country","city"
],

job:[
"بتشتغل اي",
"شغلك",
"شغال اي",
"وظيفتك",
"وظيفه",
"شغلك اي",
"وظيفتك اي",
"current job",
"job title"
],

experience:[
"خبره",
"خبرة",
"خبرات",
"خبرتك",
"اشتغلت فين",
"فين اشتغلت",
"work experience",
"experience"
],

hire:[
"ليه اشغلك",
"اشغلك ليه",
"ليه نوظفك",
"لماذا نوظفك",
"why hire you",
"why should we hire you",
"best candidate"
],

skills:[
"مهارات",
"المهارات",
"بتعرف تعمل اي",
"skills",
"skill"
],

education:[
"تعليم",
"المؤهل",
"المؤهلات",
"دراستك",
"الشهاده",
"education",
"degree"
],

salary:[
"راتب",
"مرتب",
"الراتب",
"salary",
"expected salary"
]

};
// ===============================
// Smart Find Answer V2
// ===============================

function findAnswer(question){

    const q = normalizeQuestion(question);

    // البحث المباشر
    let bestAnswer = "";
    let bestScore = 0;

    knowledge.forEach(item=>{

        let score = 0;

        item.keywords.forEach(keyword=>{

            const key = normalizeQuestion(keyword);

            if(q.includes(key) || key.includes(q)){
                score += 5;
            }

            const words = key.split(" ");

            words.forEach(word=>{

                if(word.length>2 && q.includes(word)){
                    score++;
                }

            });

        });

        if(score > bestScore){

            bestScore = score;
            bestAnswer = item.answer;

        }

    });

    if(bestAnswer!==""){
        return bestAnswer;
    }

    // البحث بالمرادفات
    for(const group in smartDictionary){

        for(const word of smartDictionary[group]){

            if(q.includes(normalizeQuestion(word))){

                knowledge.forEach(item=>{

                    item.keywords.forEach(keyword=>{

                        const k = normalizeQuestion(keyword);

                        if(k.includes(group) || k===group){

                            bestAnswer=item.answer;

                        }

                    });

                });

            }

        }

    }

    if(bestAnswer!==""){
        return bestAnswer;
    }

    return `🤖

عذراً، لم أفهم السؤال.

يمكنك سؤالي عن أي شيء يخص عبدالله الشحات مثل:

• التعريف بنفسه
• العمر
• مكان الإقامة
• الخبرات
• الشركات التي عمل بها
• المهارات
• المؤهلات
• نقاط القوة والضعف
• الإنجازات
• المشتريات
• الموردين
• العقود
• Odoo ERP
• Zoho ERP
• Excel
• المقابلات الشخصية
• الراتب المتوقع
• الأهداف المهنية
`;
}                
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

