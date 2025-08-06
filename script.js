function throwSuitcase() {
  const container = document.getElementById('suitcaseContainer');
  container.classList.add('suitcase-thrown');
  setTimeout(() => {
    document.querySelector('.form-heading').style.display = 'block';
    document.getElementById('admissionForm').style.display = 'flex';
  }, 1000);
}

function toggleChat() {
  const win = document.getElementById('chatWindow');
  win.style.display = (win.style.display === 'block') ? 'none' : 'block';
}

function sendMessage() {
  const input = document.getElementById('userInput');
  const msgs = document.getElementById('chatMessages');
  const text = input.value.trim();
  if (!text) return;
  msgs.innerHTML += `<p><strong>You:</strong> ${text}</p>`;
  let reply = "I'm not sure about that. Try asking about submit, email, photo, or required.";

  const t = text.toLowerCase();
  if (t.includes('submit')) reply = "To submit, click the 'Submit Form' button below the fields.";
  else if (t.includes('email')) reply = "Please enter a valid email in the 'Email' field.";
  else if (t.includes('photo')) reply = "Upload a recent passport-size photo in the upload field.";
  else if (t.includes('required')) reply = "Fields marked required * must be filled.";

  msgs.innerHTML += `<p><strong>AI:</strong> ${reply}</p>`;
  input.value = '';
  msgs.scrollTop = msgs.scrollHeight;
}

document.getElementById("admissionForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Form submitted! (Demo only — set up backend to actually receive it.)");
});

document.getElementById("watchVideoBtn").addEventListener("click", function () {
  window.open('https://youtu.be/FWfu9LSZ8lQ?si=6tFH0xkuXqOSAhOj', '_blank');
});

