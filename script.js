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

// =======================================
// Abdallah AI Engine V3
// =======================================

// تنظيف السؤال
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
        .replace(/[^\w\s\u0600-\u06FF]/g," ")

        // حذف المسافات
        .replace(/\s+/g," ")

        .trim();

}

// مرادفات
const smartDictionary={

hello:[
"ازيك","عامل اي","عامل ايه","اخبارك","السلام عليكم","السلام","اهلا","هاي","هلا","hi","hello"
],

about:[
"عرف نفسك","احكي عن نفسك","قدم نفسك","مين انت","من انت","نبذه","نبذة","about","introduce yourself"
],

age:[
"كام سنه","كام سنة","سنك","العمر","كم عمرك","age"
],

country:[
"منين","بلدك","فين","مدينة","محافظة","where are you from"
],

experience:[
"خبره","خبرة","خبرتك","خبرات","اشتغلت فين","فين اشتغلت","experience"
],

skills:[
"مهارات","المهارات","بتعرف تعمل اي","skills"
],

education:[
"المؤهل","المؤهلات","تعليم","دراستك","education"
],

salary:[
"راتب","مرتب","salary"
],

hire:[
"ليه اشغلك","ليه نوظفك","why should we hire you"
    
]

};
// البحث الذكي
function findAnswer(question){

    const q = normalizeQuestion(question);

    let bestAnswer = "";
    let bestScore = 0;

    knowledge.forEach(item=>{

        let score = 0;

        item.keywords.forEach(keyword=>{

            const key = normalizeQuestion(keyword);

            // تطابق كامل
            if(q === key){
                score += 100;
            }

            // يحتوي الكلمة
            if(q.includes(key)){
                score += 40;
            }

            // الكلمة تحتوي السؤال
            if(key.includes(q)){
                score += 30;
            }

            // مقارنة كلمة بكلمة
            const qWords = q.split(" ");
            const kWords = key.split(" ");

            qWords.forEach(word=>{

                if(word.length < 2) return;

                if(kWords.includes(word)){
                    score += 8;
                }else{

                    kWords.forEach(k=>{

                        if(
                            k.startsWith(word) ||
                            word.startsWith(k)
                        ){
                            score += 3;
                        }

                    });

                }

            });

        });

        if(score > bestScore){

            bestScore = score;
            bestAnswer = item.answer;

        }

    });

    if(bestAnswer !== ""){
        return bestAnswer;
    }

    // البحث بالمرادفات
    for(const group in smartDictionary){

        for(const word of smartDictionary[group]){

            if(q.includes(normalizeQuestion(word))){

                knowledge.forEach(item=>{

                    item.keywords.forEach(keyword=>{

                        const key = normalizeQuestion(keyword);

                        if(
                            key.includes(group) ||
                            key === group
                        ){
                            bestAnswer = item.answer;
                        }

                    });

                });

            }

        }

    }

    if(bestAnswer !== ""){
        return bestAnswer;
    }

    return `
🤖 آسف، لم أفهم السؤال.

أنا أجيب فقط عن عبدالله الشحات.

اسألني عن:

• الخبرات
• المهارات
• المؤهلات
• الشركات
• العمر
• مكان الإقامة
• الإنجازات
• المشتريات
• الموردين
• العقود
• Odoo ERP
• Zoho ERP
• مقابلات العمل
`;
                   }

// =======================================
// كتابة تدريجية
// =======================================

function typeWriter(element,text){

    let i = 0;

    element.innerHTML = "🤖 ";

    const timer = setInterval(()=>{

        element.innerHTML = "🤖 " + text.substring(0,i);

        chatBox.scrollTop = chatBox.scrollHeight;

        i++;

        if(i > text.length){
            clearInterval(timer);
        }

    },10);

}

// =======================================
// إرسال السؤال
// =======================================

function askAI(){

    const q = question.value.trim();

    if(q === "") return;

    // رسالة المستخدم
    const user = document.createElement("div");

    user.className = "user-message";
    user.innerHTML = "🧑 " + q;

    chatBox.appendChild(user);

    // رسالة البوت
    const bot = document.createElement("div");

    bot.className = "bot-message";
    bot.innerHTML = "🤖 جاري التفكير...";

    chatBox.appendChild(bot);

    chatBox.scrollTop = chatBox.scrollHeight;

    setTimeout(()=>{

        setTimeout(()=>{

    let answer = "";

    try{

        answer = findAnswer(q);

    }catch(e){

        console.error(e);

        answer = "❌ خطأ: " + e.message;

    }

    typeWriter(bot,answer);

},300);
    },300);

    question.value="";

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
🤖 أهلاً بك 👋

أنا <b>Abdallah AI</b>.

يمكنني الإجابة عن أي سؤال يخص عبدالله الشحات فقط.

مثل:

• عرف نفسك
• خبرتك
• مهاراتك
• مؤهلاتك
• الشركات التي عملت بها
• الإنجازات
• لماذا نوظفك؟
`;

    chatBox.appendChild(bot);

});
// =======================================
// فهم الأسئلة بذكاء
// =======================================

function smartSearch(question){

    const q = normalizeQuestion(question);

    let bestAnswer = "";
    let bestScore = 0;

    knowledge.forEach(item=>{

        let score = 0;

        item.keywords.forEach(keyword=>{

            const key = normalizeQuestion(keyword);

            // تطابق كامل
            if(q === key) score += 100;

            // يحتوي
            if(q.includes(key)) score += 40;

            // العكس
            if(key.includes(q)) score += 30;

            // تشابه الكلمات
            const qWords = q.split(" ");
            const kWords = key.split(" ");

            qWords.forEach(word=>{

                if(word.length < 2) return;

                if(kWords.includes(word)){

                    score += 10;

                }else{

                    kWords.forEach(k=>{

                        if(
                            word.startsWith(k) ||
                            k.startsWith(word)
                        ){
                            score += 5;
                        }

                    });

                }

            });

        });

        if(score > bestScore){

            bestScore = score;
            bestAnswer = item.answer;

        }

    });

    return {
        answer: bestAnswer,
        score: bestScore
    };

}

// استبدل findAnswer بهذه النسخة

function findAnswer(question){

    const result = smartSearch(question);

    if(result.score >= 10){

        return result.answer;

    }

    return `🤖

لم أفهم السؤال.

أنا أجيب فقط عن عبدالله الشحات.

يمكنك سؤالي عن:

• من هو عبدالله الشحات
• العمر
• الخبرة
• الشركات
• المهارات
• المؤهلات
• الإنجازات
• نقاط القوة
• نقاط الضعف
• Odoo ERP
• Zoho ERP
• Excel
• الموردين
• العقود
• المقابلات الشخصية
• الراتب المتوقع
• الأهداف المهنية
• المشتريات
`;
}
