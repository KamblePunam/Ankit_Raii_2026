// // Back button logic (safe & reliable)
// document.getElementById("backBtn").addEventListener("click", () => {
//   if (window.history.length > 1) {
//     window.history.back();
//   } else {
//     window.location.href = "index.html"; // fallback page
//   }
// });

// // Form submit handling
// document.getElementById("contactForm").addEventListener("submit", function (e) {
//   e.preventDefault();
//   alert("✅ Your message has been sent successfully!");
//   this.reset();
// });




document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const formData = new FormData(this);

  fetch("php/contact_save.php", {
    method: "POST",
    body: formData
  })
  .then(res => res.text())
  .then(data => {
    if (data.trim() === "success") {
      alert("Message sent successfully!");
      this.reset();
    } else {
      alert("Something went wrong!");
    }
  });
});
