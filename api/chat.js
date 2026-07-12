export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const { message } = req.body;

  const response = await fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=" + process.env.GEMINI_API_KEY, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      contents: [
        {
          parts: [
            {
              text: `
أنت Abdallah AI، المساعد الشخصي لعبدالله الشحات.

أجب فقط عن المعلومات المتعلقة بعبدالله الشحات.
إذا كان السؤال خارج هذه المعلومات فقل إنك متخصص في الإجابة عن ملف عبدالله الشحات.

السؤال:
${message}
`
            }
          ]
        }
      ]
    })
  });

  const data = await response.json();

  const answer =
    data.candidates?.[0]?.content?.parts?.[0]?.text ||
    "عذراً، لم أتمكن من الإجابة.";

  res.status(200).json({ answer });
}
