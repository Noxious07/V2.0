function sendEmail() {
  let parms = {
    name: document.getElementById("fname-txt").value,
    email: document.getElementById("mym-txt").value,
    message: document.getElementById("shrt-dis").value,
  }

  emailjs.send("service_yh3tibb", "template_onqatbo", parms)
    .then(function() {
      alert("Email Sent!!");
      document.querySelector(".contact-form").reset();
    })
    .catch(function(error) {
      alert("Failed to send email. Please try again.");
      console.log(error);
    });
}