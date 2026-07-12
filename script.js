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

    }// ===============================
// Abdallah AI Assistant v2.0
// ===============================

const question = document.getElementById("question");
const chatBox = document.getElementById("chatBox");

// قاعدة البيانات

const knowledge = [

{
keywords:[
"عرف نفسك","قدم نفسك","احكي عن نفسك",
"من انت","مين انت","نبذه",
"about","introduce","tell me about yourself","who are you"
],

answer:`
أنا Abdallah AI، المساعد الشخصي لعبدالله الشحات.

يسعدني الإجابة عن أي سؤال يتعلق بالسيرة الذاتية لعبدالله.

الاسم:
عبدالله الشحات

العمر:
27 سنة.

الجنسية:
مصري.

المحافظة:
الشرقية.

المدينة:
الزقازيق.

مكان العمل الحالي:
الرياض - المملكة العربية السعودية.

المسمى الوظيفي:
Procurement Officer.

يمتلك عبدالله خبرة عملية في إدارة المشتريات، إدارة الموردين، التفاوض، العقود، إدارة المخزون، وتحسين التكاليف.

كما يمتلك خلفية قانونية قوية تساعده في إدارة العقود وتقليل المخاطر.
`
},

{
keywords:[
"خبره","خبرات","experience","career","employment","اشتغلت","وظيفه","work"
],

answer:`
عبدالله لديه خبرة عملية كمسؤول مشتريات.

عمل في:

شركة بوابة السيارة
من يناير 2025 وحتى الآن.

وقبلها:

مجموعة شركات النجم الذهبي
من يناير 2023 حتى ديسمبر 2024.

ومن أهم مسؤولياته:

• إدارة الموردين.

• إدارة أوامر الشراء.

• التفاوض.

• مراجعة العقود.

• تقليل التكاليف.

• تحسين دورة الشراء.

• إدارة المخزون.

• متابعة التوريد.

• التنسيق مع المالية والمخازن.
`
},

{
keywords:[
"ملخص","summary","نبذه مختصره","professional summary"
],

answer:`
عبدالله مسؤول مشتريات استراتيجي بخبرة عملية مثبتة في إدارة المشتريات، التفاوض، تحسين التكاليف، وإدارة العقود.

يمتلك خلفية قانونية قوية تساعده في تقليل المخاطر وتحقيق أفضل قيمة للشركة مع الحفاظ على الجودة.
`
},

{
keywords:[
"العمر","سن","age"
],

answer:`
عبدالله يبلغ من العمر 27 عاماً.
`
},

{
keywords:[
"منين","بلد","مدينه","محافظه","where","country","egypt"
],

answer:`
عبدالله من جمهورية مصر العربية.

محافظة الشرقية.

مدينة الزقازيق.

ويعمل حالياً بمدينة الرياض بالمملكة العربية السعودية.
`
},

{
keywords:[
"تواصل","ايميل","رقم","واتساب","contact","phone","email"
],

answer:`
📍 الرياض

📱 0565120349

📧 Abdallahelshahat027@gmail.com
`
},

{
keywords:[
"لغه","english","arabic","language"
],

answer:`
العربية:
اللغة الأم.

الإنجليزية:
حوالي 70% مع القدرة على استخدامها في العمل والتعامل مع الموردين.
`
},

{
keywords:[
"هوايات","hobby"
],

answer:`
الهوايات:

• القراءة.

• التعليم المستمر.

• متابعة التكنولوجيا.

• تطوير الذات.
`
},

{
keywords:[
"تعليم","جامعه","مؤهل","education","qualification"
],

answer:`
المؤهلات:

ليسانس حقوق
جامعة الزقازيق.

دبلومة الإدارة القانونية للشركات.

دورات في:

Procurement

Supply Chain

Contract Management
`
},

{
keywords:[
"مهارات","skills","skill"
],

answer:`
المهارات:

✔ Procurement

✔ Odoo ERP

✔ Zoho ERP

✔ Contract Management

✔ Negotiation

✔ Inventory Management

✔ Cost Reduction

✔ Supplier Management

✔ Vendor Evaluation

✔ Data Analysis
`
}

];// =======================================
// HR & Interview Knowledge
// =======================================

knowledge.push(

{
keywords:[
"ليه نوظفك","لماذا نوظفك","why should we hire you","hire","اختارك"
],
answer:`
عبدالله يجمع بين الخبرة العملية والخلفية القانونية، وهي ميزة تساعده على إدارة العقود، تقليل المخاطر، وتحقيق أفضل قيمة للشركة.

كما يمتلك خبرة في:
• التفاوض الاحترافي.
• إدارة الموردين.
• تقليل التكاليف.
• أنظمة Odoo ERP و Zoho ERP.
• إدارة المخزون وسلاسل الإمداد.
`
},

{
keywords:[
"نقاط القوة","قوة","strength","strengths"
],
answer:`
من أبرز نقاط قوة عبدالله:

✔ التفاوض.

✔ بناء علاقات قوية مع الموردين.

✔ تحليل البيانات واتخاذ القرار.

✔ تحمل ضغط العمل.

✔ إدارة العقود.

✔ حل المشكلات.

✔ التخطيط للمشتريات.

✔ الالتزام والدقة.
`
},

{
keywords:[
"نقاط الضعف","عيوب","ضعف","weakness","weaknesses"
],
answer:`
يركز عبدالله كثيراً على التفاصيل للوصول لأفضل نتيجة، لكنه تعلم الموازنة بين الدقة وسرعة الإنجاز من خلال تحديد الأولويات وإدارة الوقت.
`
},

{
keywords:[
"هدفك","طموح","career goal","future","بعد خمس","5 years"
],
answer:`
يطمح عبدالله إلى التطور إلى منصب Procurement Manager ثم Supply Chain Manager، والمساهمة في بناء منظومة مشتريات استراتيجية تعتمد على التحول الرقمي وتقليل التكاليف وتحسين أداء الموردين.
`
},

{
keywords:[
"راتب","الراتب","salary","expected salary"
],
answer:`
عبدالله مرن فيما يخص الراتب، ويبحث عن فرصة عمل توفر بيئة احترافية وتطوراً مهنياً، مع راتب يتناسب مع خبرته ومسؤوليات الوظيفة.
`
},

{
keywords:[
"ليه المشتريات","why procurement","procurement"
],
answer:`
اختار عبدالله مجال المشتريات لأنه يجمع بين التحليل والتفاوض والتخطيط واتخاذ القرار، ويتيح له تحقيق تأثير مباشر على أرباح الشركة وكفاءة التشغيل.
`
},

{
keywords:[
"ضغط","ضغط العمل","work pressure","stress"
],
answer:`
عبدالله معتاد على العمل تحت الضغط، ويعتمد على ترتيب الأولويات، التخطيط المسبق، والتواصل المستمر مع الإدارات والموردين لضمان تنفيذ المهام في الوقت المحدد.
`
},

{
keywords:[
"انجاز","achievement","achievement"
],
answer:`
من أبرز الإنجازات:

• خفض تكاليف المشتريات بنسبة وصلت إلى 15%.

• تقليل Lead Time بنسبة 25%.

• الحفاظ على دقة المخزون فوق 98%.

• تقليل Stock-out إلى أقل من 2%.

• تحسين العلاقات مع الموردين.
`
},

{
keywords:[
"سبب ترك","تركت","leave","why leave"
],
answer:`
عبدالله يبحث دائماً عن بيئة عمل تمنحه فرصة أكبر للتطور المهني، والمشاركة في مشاريع أكثر تحدياً، وتحقيق قيمة مضافة للشركة.
`
},

{
keywords:[
"فشل","failure","mistake","خطأ"
],
answer:`
عبدالله يؤمن أن أي تحدٍ أو خطأ هو فرصة للتعلم، ويحرص دائماً على تحليل الأسباب ووضع إجراءات تمنع تكرارها مستقبلاً.
`
},

{
keywords:[
"فريق","team","teamwork"
],
answer:`
يؤمن عبدالله أن نجاح المشتريات يعتمد على التعاون مع الإدارات المختلفة مثل المالية، المخازن، التشغيل، والإدارة العليا لتحقيق أفضل النتائج.
`
}

);
    
// =======================================
// Procurement Knowledge
// =======================================

knowledge.push(

{
keywords:[
"odoo","اودو","erp","zoho","زوهو","system","برنامج"
],
answer:`
عبدالله يمتلك خبرة عملية في استخدام:

• Odoo ERP

• Zoho ERP

لإدارة دورة المشتريات بالكامل، وتشمل:

- إنشاء Purchase Orders.
- متابعة طلبات الشراء.
- متابعة الموردين.
- إدارة المخزون.
- إصدار التقارير.
- متابعة الفواتير.
- مراقبة حركة الأصناف.
`
},

{
keywords:[
"supplier","vendor","مورد","الموردين","vendors","suppliers"
],
answer:`
عبدالله يؤمن أن المورد شريك نجاح وليس مجرد بائع.

لذلك يركز على:

• تقييم الموردين.

• Vendor Scorecard.

• تحسين العلاقات.

• التفاوض.

• سرعة التوريد.

• جودة المنتجات.

• الالتزام بالعقود.
`
},

{
keywords:[
"contract","عقد","العقود","legal"
],
answer:`
بفضل الخلفية القانونية لعبدالله يستطيع:

• مراجعة العقود.

• اكتشاف البنود عالية الخطورة.

• حماية حقوق الشركة.

• صياغة شروط الجزاءات.

• مراجعة شروط الدفع.

• تقليل المخاطر القانونية.
`
},

{
keywords:[
"kpi","performance","مؤشرات","انجاز","نتائج"
],
answer:`
أبرز مؤشرات الأداء:

• خفض التكاليف من 12% إلى 15%.

• تقليل Lead Time بنسبة 25%.

• الحفاظ على Inventory Accuracy أكثر من 98%.

• تقليل Stock-out لأقل من 2%.

• تقليل المرتجعات لأقل من 1%.
`
},

{
keywords:[
"inventory","مخزون","stock","warehouse"
],
answer:`
يمتلك عبدالله خبرة في:

• Inventory Management.

• Forecasting.

• Reorder Point.

• Safety Stock.

• ABC Analysis.

• تقليل العجز.

• تحسين دقة المخزون.
`
},

{
keywords:[
"تفاوض","negotiation","فاوض","price"
],
answer:`
يعتمد عبدالله في التفاوض على:

• دراسة السوق.

• مقارنة عروض الأسعار.

• بناء علاقة طويلة مع المورد.

• التفاوض على الجودة والسعر ومدة السداد ومدة التوريد.

• تحقيق أفضل قيمة للشركة.
`
},

{
keywords:[
"tco","total cost","التكلفة الاجمالية"
],
answer:`
يعتمد عبدالله على مفهوم

Total Cost of Ownership (TCO)

أي أن قرار الشراء لا يعتمد على السعر فقط.

بل يتم تقييم:

• الجودة.

• عمر المنتج.

• الصيانة.

• تكاليف التشغيل.

• سرعة التوريد.

• المخاطر.

لتحقيق أفضل قيمة للشركة.
`
},

{
keywords:[
"srm","relationship","علاقة الموردين"
],
answer:`
يؤمن عبدالله أن Supplier Relationship Management من أهم عوامل نجاح المشتريات.

ويركز على:

• الشفافية.

• الثقة.

• تقييم الأداء.

• الاجتماعات الدورية.

• التحسين المستمر.
`
},

{
keywords:[
"challenge","problem","تحدي","مشكلة"
],
answer:`
أحد أبرز التحديات:

واجه نقصاً في المواد الخام أدى لتوقف جزئي بالإنتاج.

قام بإعادة تقييم الموردين.

وأنشأ نظام Forecasting للتنبؤ بالاحتياجات.

والنتيجة:

خفض Lead Time بنسبة 30%.

وضمان استمرار الإنتاج بنسبة 100%.
`
},

{
keywords:[
"procurement cycle","دورة الشراء","purchase cycle"
],
answer:`
دورة المشتريات التي يتبعها عبدالله:

1- استلام طلب الشراء.

2- مراجعة الاحتياج.

3- طلب عروض الأسعار.

4- تقييم الموردين.

5- التفاوض.

6- إصدار Purchase Order.

7- متابعة التوريد.

8- الاستلام والفحص.

9- اعتماد الفاتورة.

10- تقييم المورد.
`
}

);

// =======================================
// Smart Search Engine
// =======================================

function findAnswer(question){

const q=question.toLowerCase().trim();

let bestAnswer=null;
let highestScore=0;

knowledge.forEach(item=>{

let score=0;

item.keywords.forEach(word=>{

if(q.includes(word.toLowerCase())){

score++;

}

});

if(score>highestScore){

highestScore=score;
bestAnswer=item.answer;

}

});

if(bestAnswer){

return bestAnswer;

}

return `أنا Abdallah AI.

أنا متخصص فقط في السيرة الذاتية لعبدالله الشحات.

يمكنني الإجابة عن:

• الخبرات.

• المهارات.

• المؤهلات.

• الإنجازات.

• KPIs.

• Odoo ERP.

• Zoho ERP.

• إدارة الموردين.

• العقود.

• إدارة المخزون.

• الرؤية المهنية.

• الفلسفة الشرائية.

• معلومات التواصل.

• وأغلب أسئلة مقابلات الـ HR.`;

}
});

// ==


    

    }// ===============================
// Animation On Scroll
// ===============================

const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.style = "";

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

},{threshold:0.2});

sections.forEach(section=>{

    section.style.opacity="0";
    section.style.transform="translateY(40px)";
    section.style.transition=".6s";

    observer.observe(section);

});// =======================================
// Abdallah AI Engine
// =======================================

function typeMessage(element, text) {

    let i = 0;

    const typing = setInterval(() => {

        element.innerHTML = "🤖 " + text.substring(0, i);

        i++;

        chatBox.scrollTop = chatBox.scrollHeight;

        if (i > text.length) {

            clearInterval(typing);

        }

    }, 15);

}

function askAI() {

    const q = question.value.trim();

    if (!q) return;

    const user = document.createElement("div");
    user.className = "user-message";
    user.innerHTML = "🧑 " + q;

    chatBox.appendChild(user);

    const bot = document.createElement("div");
    bot.className = "bot-message";

    chatBox.appendChild(bot);

    const answer = findAnswer(q);

    typeMessage(bot, answer);

    question.value = "";

    chatBox.scrollTop = chatBox.scrollHeight;

}

question.addEventListener("keypress", (e) => {

    if (e.key === "Enter") {

        askAI();

    // =======================================
// Advanced Interview Knowledge
// =======================================

knowledge.push(

{
keywords:["ليه نوظفك","why should we hire you","اختارك","hire"],
answer:`
أنصح باختيار عبدالله لأنه يجمع بين الخبرة العملية والخلفية القانونية.

ما يميزه:

✔ تقليل التكاليف.

✔ التفاوض الاحترافي.

✔ إدارة العقود.

✔ بناء علاقات قوية مع الموردين.

✔ العمل على Odoo ERP و Zoho ERP.

✔ سرعة التعلم.

✔ القدرة على اتخاذ القرار.

✔ العمل تحت الضغط.

✔ التفكير التحليلي.
`
},

{
keywords:["نقطة قوة","strength","strengths"],
answer:`
أهم نقاط قوة عبدالله:

• التفاوض.

• حل المشكلات.

• القيادة.

• التواصل.

• إدارة الوقت.

• التحليل.

• إدارة الموردين.

• التخطيط.

• اتخاذ القرار.

• التعلم السريع.
`
},

{
keywords:["نقطة ضعف","weakness","weaknesses"],
answer:`
يركز عبدالله على التفاصيل بدرجة كبيرة لضمان الجودة.

لكنه تعلم تحقيق التوازن بين الدقة وسرعة التنفيذ باستخدام التخطيط وتحديد الأولويات.
`
},

{
keywords:["هدف","career goal","future","5 years","خمس سنوات"],
answer:`
يطمح عبدالله إلى الوصول لمنصب Procurement Manager ثم Supply Chain Manager.

كما يسعى للحصول على شهادات احترافية مثل:

• CIPS

• CSCP

• CPSM

والعمل على قيادة فرق المشتريات والتحول الرقمي.
`
},

{
keywords:["مرتب","راتب","salary"],
answer:`
عبدالله مرن في مناقشة الراتب.

يهتم بالحصول على فرصة تسمح له بتحقيق قيمة للشركة والتطور المهني أكثر من اهتمامه بالراتب فقط.
`
},

{
keywords:["ضغط","stress","pressure"],
answer:`
يتعامل عبدالله مع ضغط العمل من خلال:

• ترتيب الأولويات.

• التخطيط.

• التواصل مع الفريق.

• متابعة التنفيذ أولاً بأول.

مما يساعده على إنجاز المهام في الوقت المحدد.
`
},

{
keywords:["نجاح","achievement","انجاز"],
answer:`
من أبرز الإنجازات:

✔ خفض تكاليف الشراء بنسبة 15%.

✔ تقليل Lead Time بنسبة 25%.

✔ الحفاظ على دقة المخزون فوق 98%.

✔ تقليل Stock-out لأقل من 2%.

✔ تحسين أداء الموردين.
`
},

{
keywords:["فشل","failure","mistake"],
answer:`
عبدالله يؤمن أن كل تحدٍ هو فرصة للتعلم.

وعند حدوث أي مشكلة يقوم بتحليل السبب الجذري ووضع إجراءات تمنع تكرارها مستقبلاً.
`
},

{
keywords:["ليه المشتريات","why procurement"],
answer:`
اختار عبدالله مجال المشتريات لأنه يجمع بين:

• التفاوض.

• التحليل.

• الإدارة.

• اتخاذ القرار.

• تحقيق وفر مالي للشركة.

وهو المجال الذي يرى أنه يستطيع تقديم أكبر قيمة فيه.
`
},

{
keywords:["هواية","hobby"],
answer:`
الهوايات:

• القراءة.

• التعليم المستمر.

• متابعة التكنولوجيا.

• متابعة أحدث الممارسات في المشتريات وسلاسل الإمداد.
`
},

{
keywords:["لغة","english","arabic"],
answer:`
العربية:
اللغة الأم.

الإنجليزية:
حوالي 70%.

ويستطيع استخدامها في الاجتماعات وقراءة العقود والتعامل مع الموردين.
`
},

{
keywords:["تواصل","contact","phone","email"],
answer:`
📍 الرياض - المملكة العربية السعودية

📱 0565120349

📧 Abdallahelshahat027@gmail.com
`
}
// =======================================
// Smart AI Enhancements
// =======================================

// تنظيف السؤال
function normalizeQuestion(text){

return text
.toLowerCase()
.replace(/[؟?!.,،]/g,"")
.replace(/\s+/g," ")
.trim();

}

// البحث الذكي
function findAnswer(question){

const q = normalizeQuestion(question);

let best = "";
let score = 0;

knowledge.forEach(item=>{

let current = 0;

item.keywords.forEach(word=>{

if(q.includes(word.toLowerCase())){

current++;

}

});

if(current > score){

score = current;
best = item.answer;

}

});

if(best !== "") return best;

return `
أنا Abdallah AI، المساعد الشخصي لعبدالله الشحات.

أستطيع الإجابة عن أي سؤال يتعلق بـ:

✔ السيرة الذاتية.

✔ الخبرات العملية.

✔ المشتريات.

✔ الموردين.

✔ العقود.

✔ إدارة المخزون.

✔ التفاوض.

✔ KPIs.

✔ الإنجازات.

✔ Odoo ERP.

✔ Zoho ERP.

✔ المهارات.

✔ المؤهلات.

✔ الرؤية المهنية.

✔ الطموحات.

✔ العمل تحت الضغط.

✔ أسئلة مقابلات العمل.

إذا أعدت صياغة السؤال بطريقة مختلفة فسأحاول مساعدتك.
`;

}

// كتابة الرد تدريجياً

function typeWriter(element,text){

let i=0;

element.innerHTML="🤖 ";

const timer=setInterval(()=>{

element.innerHTML="🤖 "+text.substring(0,i);

i++;

chatBox.scrollTop=chatBox.scrollHeight;

if(i>text.length){

clearInterval(timer);

}

},15);

}

// تشغيل الذكاء

function askAI(){

const q=question.value.trim();

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

question.addEventListener("keypress",(e)=>{

if(e.key==="Enter"){

askAI();

}

});

// رسالة الترحيب

window.addEventListener("load",()=>{

const bot=document.createElement("div");

bot.className="bot-message";

bot.innerHTML=`
🤖 مرحباً 👋

أنا Abdallah AI.

المساعد الشخصي لعبدالله الشحات.

يمكنني الإجابة عن أي سؤال يتعلق بالسيرة الذاتية والخبرات العملية والمشتريات وإدارة الموردين والعقود والمهارات والمؤهلات ومقابلات العمل.

اسألني أي سؤال.
`;

chatBox.appendChild(bot);

});
);
        

});


// ===============================
// Active Menu
// ===============================

const navLinks=document.querySelectorAll(".sidebar nav a");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const top=section.offsetTop-150;

        if(window.scrollY>=top){

            current=section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#"+current){

            link.classList.add("active");

        }

    });

});

// ===============================
// Welcome
// ===============================

window.addEventListener("load",()=>{

    console.log("Abdallah Portfolio Loaded");

});

});
