function openAI(){
  document.getElementById("aiChat").style.display = "flex";
}

function closeAI(){
  document.getElementById("aiChat").style.display = "none";
}

function sendMessage(){
  const input = document.getElementById("aiInput");
  const msg = input.value.trim();
  if(msg === "") return;

  const chat = document.getElementById("aiMessages");

  const userMsg = document.createElement("div");
  userMsg.className = "ai-msg user";
  userMsg.innerText = msg;
  chat.appendChild(userMsg);

  input.value = "";

  setTimeout(() => {
    const botMsg = document.createElement("div");
    botMsg.className = "ai-msg bot";
    botMsg.innerText = getAIReply(msg);
    chat.appendChild(botMsg);
    chat.scrollTop = chat.scrollHeight;
  }, 600);
}

function getAIReply(question){
  question = question.toLowerCase();

  if(question.includes("math")) return "I can help you with Maths formulas 📐";
  if(question.includes("english")) return "I can help improve English ✍️";
  if(question.includes("chemistry")) return "Need help with Chemistry? 🧪";
  if(question.includes("how")) return "Tell me the topic, I’ll explain step by step 🙂";

  return "Ask me any study-related question 📚";
}