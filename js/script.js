// Toggle Dark Mode
const toggle = document.getElementById('toggle-theme');
toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// Submit Message Function
function submitMessage() {
  let name = document.getElementById("name").value.trim();
  let question = document.getElementById("question").value.trim();

  if (name === "" || question === "") {
    alert("Please fill in both fields!");
    return;
  }

  document.getElementById("user-name").innerText = name;

  let messageContainer = document.getElementById("messages");
  let messageItem = document.createElement("div");
  messageItem.classList.add("message-item");
  messageItem.innerHTML = `<strong>${name}:</strong> ${question}`;

  messageContainer.appendChild(messageItem);

  document.getElementById("name").value = "";
  document.getElementById("question").value = "";
}

// Toggle Navbar (Burger Menu)
const menuToggle = document.getElementById('menu-toggle');
const navbarLinks = document.getElementById('navbar-links');

menuToggle.addEventListener('click', () => {
  navbarLinks.classList.toggle('active');
});
