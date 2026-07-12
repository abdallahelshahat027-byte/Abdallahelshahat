// ===================================
// Abdallah Portfolio Script
// ===================================

// عناصر الصفحة
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

// ===================================
// القائمة الجانبية
// ===================================

if(menuBtn){

    menuBtn.addEventListener("click",()=>{

        sidebar.classList.toggle("active");
        overlay.classList.toggle("active");

    });

}

overlay.addEventListener("click",()=>{

    sidebar.classList.remove("active");
    overlay.classList.remove("active");

});

// ===================================
// الوضع الليلي
// ===================================

if(localStorage.getItem("theme")==="dark"){

    document.body.classList.add("dark");

}

if(themeBtn){

    themeBtn.addEventListener("click",()=>{

        document.body.classList.toggle("dark");

        localStorage.setItem(
            "theme",
            document.body.classList.contains("dark")
            ? "dark"
            : "light"
        );

    });

}

// ===================================
// تغيير اللغة
// ===================================

let currentLang="ar";

if(langBtn){

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

}

// ===================================
// زر العودة للأعلى
// ===================================

window.addEventListener("scroll",()=>{

    if(!topBtn) return;

    topBtn.style.display =
        window.scrollY>300
        ? "block"
        : "none";

});

if(topBtn){

    topBtn.addEventListener("click",()=>{

        window.scrollTo({

            top:0,
            behavior:"smooth"

        });

    });

}
// ===================================
// Abdallah AI Engine
// ===================================

// تنظيف السؤال
function normalizeQuestion(text){

    return text
        .toLowerCase()
        .replace(/[ًٌٍَُِّْـ]/g,"")
        .replace(/[أإآ]/g,"ا")
        .replace(/ة/g,"ه")
        .replace(/ى/g,"ي")
        .replace(/ؤ/g,"و")
        .replace(/ئ/g,"ي")
        .replace(/[^\w\s\u0600-\u06FF]/g," ")
        .replace(/\s+/g," ")
        .trim();

}

// حساب التشابه
function similarity(a,b){

    a = normalizeQuestion(a);
    b = normalizeQuestion(b);

    let score = 0;

    const wa = a.split(" ");
    const wb = b.split(" ");

    wa.forEach(word=>{

        if(word.length<2) return;

        if(wb.includes(word)){

            score += 5;

        }else{

            wb.forEach(w=>{

                if(
                    word.startsWith(w) ||
                    w.startsWith(word)
                ){
                    score += 2;
                }

            });

        }

    });

    return score;

}

// البحث داخل knowledge.js
function findAnswer(question){

    const q = normalizeQuestion(question);

    let bestAnswer = "";
    let bestScore = 0;

    knowledge.forEach(item=>{

        let score = 0;

        item.keywords.forEach(keyword=>{

            score += similarity(q,keyword);

        });

        if(score > bestScore){

            bestScore = score;
            bestAnswer = item.answer;

        }

    });

    if(bestScore >= 5){

        return bestAnswer;

    }

    return `🤖

عذراً، لا أستطيع الإجابة إلا عن عبدالله الشحات.

يمكنك سؤالي عن:

• عرف نفسك
• خبراتك
• مهاراتك
• مؤهلاتك
• الشركات التي عملت بها
• الإنجازات
• نقاط القوة
• نقاط الضعف
• لماذا نوظفك؟
• Odoo ERP
• Zoho ERP
• Excel
• المشتريات
• العقود
• الموردين
`;

}
// ===================================
// الكتابة التدريجية
// ===================================

function typeWriter(element,text){

    let i = 0;

    element.innerHTML = "";

    const timer = setInterval(()=>{

        element.innerHTML = "🤖 " + text.substring(0,i);

        if(chatBox){
            chatBox.scrollTop = chatBox.scrollHeight;
        }

        i++;

        if(i > text.length){
            clearInterval(timer);
        }

    },15);

}

// ===================================
// إرسال السؤال
// ===================================

function askAI(){

    if(!question || !chatBox) return;

    const q = question.value.trim();

    if(q==="") return;

    // رسالة المستخدم
    const user=document.createElement("div");
    user.className="user-message";
    user.innerHTML="🧑 "+q;
    chatBox.appendChild(user);

    // رسالة البوت
    const bot=document.createElement("div");
    bot.className="bot-message";
    bot.innerHTML="🤖 جاري التفكير...";
    chatBox.appendChild(bot);

    chatBox.scrollTop=chatBox.scrollHeight;

    // الرد
    const answer = findAnswer(q);

    typeWriter(bot,answer);

    question.value="";
}

// Enter
if(question){

    question.addEventListener("keydown",function(e){

        if(e.key==="Enter"){

            askAI();

        }

    });

}

// رسالة البداية
window.addEventListener("load",()=>{

    if(!chatBox) return;

    const bot=document.createElement("div");

    bot.className="bot-message";

    bot.innerHTML=`
🤖 أهلاً بك 👋<br><br>
أنا <b>Abdallah AI</b>.<br><br>
اسألني أي سؤال عن عبدالله الشحات وخبراته ومهاراته ومؤهلاته.
`;

    chatBox.appendChild(bot);

});
// ===================================
// فهم الأسئلة بصيغ مختلفة
// ===================================

const smartQuestions = {

hello:[
"ازيك","عامل اي","عامل ايه","اخبارك","السلام عليكم",
"السلام","اهلا","هلا","هاي","hello","hi"
],

about:[
"عرف نفسك",
"احكي عن نفسك",
"قدم نفسك",
"مين انت",
"من انت",
"نبذه",
"نبذة",
"tell me about yourself",
"introduce yourself"
],

age:[
"كام سنه",
"كام سنة",
"سنك",
"العمر",
"كم عمرك",
"مواليد"
],

experience:[
"خبره",
"خبرة",
"خبرتك",
"خبراتك",
"اشتغلت فين",
"فين اشتغلت",
"الشركات",
"تاريخك الوظيفي",
"career"
],

skills:[
"مهارات",
"المهارات",
"بتعرف تعمل اي",
"تميزك",
"skills"
],

education:[
"المؤهل",
"المؤهلات",
"تعليم",
"دراستك",
"جامعة",
"ليسانس",
"education"
],

hire:[
"ليه اشغلك",
"ليه نوظفك",
"اشغلك ليه",
"لماذا نوظفك",
"why should we hire you"
],

salary:[
"راتب",
"مرتب",
"salary",
"expected salary"
],

strength:[
"نقاط القوة",
"مميزاتك",
"ايه اللي يميزك",
"strength"
],

weakness:[
"نقاط الضعف",
"عيوبك",
"ضعف",
"weakness"
],

odoo:[
"odoo",
"اودو"
],

zoho:[
"zoho",
"زوهو"
]

};

// البحث بالمرادفات
const oldFindAnswer = findAnswer;

findAnswer = function(question){

    const q = normalizeQuestion(question);

    // البحث العادي
    let answer = oldFindAnswer(q);

    if(!answer.includes("عذراً")){
        return answer;
    }

    // البحث بالمرادفات
    for(const key in smartQuestions){

        for(const word of smartQuestions[key]){

            if(q.includes(normalizeQuestion(word))){

                for(const item of knowledge){

                    if(item.category && normalizeQuestion(item.category)===key){

                        return item.answer;

                    }

                }

            }

        }

    }

    return answer;

};
// ===================================
// Smart Interview Questions
// ===================================

const interviewReplies = [

{
words:[
"ازيك","عامل اي","اخبارك","السلام عليكم","هاي","هلا"
],
reply:"وعليكم السلام 🌹 أنا Abdallah AI، مساعد عبدالله الشحات. يمكنني الإجابة عن أي سؤال يخص خبراته ومهاراته ومؤهلاته."
},

{
words:[
"عرف نفسك","احكي عن نفسك","قدم نفسك","مين انت","من انت"
],
reply:"عبدالله الشحات مسؤول مشتريات يمتلك خبرة في إدارة المشتريات والتفاوض مع الموردين وإدارة العقود وتحليل التكاليف والعمل على أنظمة Odoo ERP وZoho ERP، ويهدف دائماً لتحقيق أفضل قيمة للشركة."
},

{
words:[
"ليه اشغلك","ليه نوظفك","لماذا نوظفك","why should we hire you"
],
reply:"لأن عبدالله يجمع بين الخبرة العملية في المشتريات والخلفية القانونية، ويتميز بالتفاوض الاحترافي وإدارة الموردين وتحليل التكاليف وتقليل المصروفات وتحسين دورة الشراء."
},

{
words:[
"نقاط القوة","قوتك","مميزاتك","ايه اللي يميزك"
],
reply:"من أبرز نقاط القوة: التفاوض الاحترافي، إدارة العقود، تحليل البيانات، إدارة الموردين، العمل على Odoo ERP وZoho ERP، وتحقيق وفورات في التكاليف."
},

{
words:[
"نقاط الضعف","ضعفك","عيوبك"
],
reply:"أركز دائماً على تطوير نفسي واكتساب مهارات جديدة بشكل مستمر، وأعتبر التعلم المستمر وسيلة لتحويل أي نقطة ضعف إلى نقطة قوة."
},

{
words:[
"هدفك","طموحك","خطتك"
],
reply:"هدفي هو التطور في مجال المشتريات وسلاسل الإمداد والوصول إلى منصب قيادي مع المساهمة في تحسين أداء الشركة وتقليل التكاليف."
}

];

// البحث في أسئلة المقابلات
const oldAnswer = findAnswer;

findAnswer = function(question){

    const q = normalizeQuestion(question);

    for(const item of interviewReplies){

        for(const word of item.words){

            if(q.includes(normalizeQuestion(word))){
                return item.reply;
            }

        }

    }

    return oldAnswer(question);

};
