const toggle = document.getElementById('toggle-theme');
  toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
  });

  function submitMessage() {
    let name = document.getElementById("name").value.trim();
    let question = document.getElementById("question").value.trim();

    if (name === "" || question === "") {
      alert("Please fill in both fields!");
      return;
    }

    document.getElementById("user-name").innerText = name; // Updating greeting
    
    let messageContainer = document.getElementById("messages");
    let messageItem = document.createElement("div");
    messageItem.classList.add("message-item");
    messageItem.innerHTML = `<strong>${name}:</strong> ${question}`;

    messageContainer.appendChild(messageItem);

    document.getElementById("name").value = "";
    document.getElementById("question").value = "";
  }
