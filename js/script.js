// === Toggle Dark Mode ===
const toggle = document.getElementById('toggle-theme');
if (toggle) {
  toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
  });
}

// === Submit Message ===
function submitMessage() {
  const nameInput = document.getElementById("name");
  const questionInput = document.getElementById("question");

  const name = nameInput.value.trim();
  const question = questionInput.value.trim();

  if (!name || !question) {
    alert("Please fill in both fields!");
    return;
  }

  // Update greeting
  const userNameDisplay = document.getElementById("user-name");
  if (userNameDisplay) {
    userNameDisplay.innerText = name;
  }

  // Create message item
  const messageContainer = document.getElementById("messages");
  const messageItem = document.createElement("div");
  messageItem.classList.add("message-item");
  messageItem.innerHTML = `<strong>${name}:</strong> ${question}`;

  messageContainer.appendChild(messageItem);

  // Reset form
  nameInput.value = "";
  questionInput.value = "";
}

// === Toggle Navbar (Burger Menu) ===
const menuToggle = document.getElementById('menu-toggle');
const navbarLinks = document.getElementById('navbar-links');

if (menuToggle && navbarLinks) {
  menuToggle.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
  });
}
