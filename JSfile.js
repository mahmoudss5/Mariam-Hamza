function remindme() {
    alert("Reminder set! You will be reminded soon through an email.");
  
  function buy() {
      var url = 'test2.html';
    }
  
  }
  function playAudio() {
      var audio = document.getElementById("myAudio");
      audio.play();
    }
   
  
      function validateForm() {
        var fname = document.getElementById('fname').value.trim();
        var lname = document.getElementById('lname').value.trim();
        var em = document.getElementById('em').value.trim();
        var pwd = document.getElementById('pwd').value.trim();
        var phone = document.getElementById('phone').value.trim();
        var tickets = document.getElementById('tickets').value.trim();
        var method = document.querySelector('input[name="method"]:checked');
      
        if (fname === '' || lname === '' || em === '' || pwd === '' || phone === '' || tickets === '' || !method) {
          alert('Please fill in all fields and select a payment method.');
          return false;
        }
        return true; 
      }
  
      function validateForm1() {
        var email = document.getElementById("em").value;
        var password = document.getElementById("pwd").value;
        var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/;
        if (!emailRegex.test(email)) {
            document.getElementById("emailError").innerText = "Invalid email format";
            return false;
        } else {
            document.getElementById("emailError").innerText = "";
        }
        if (password.length < 8) {
            document.getElementById("passwordError").innerText = "Password must be at least 8 characters long";
            return false;
        } else {
            document.getElementById("passwordError").innerText = "";
        }}
        function searchbooks() {
          const query = document.getElementById('searchinput8').value.toLowerCase(); 
          const bookContainers = document.querySelectorAll('.card');
          bookContainers.forEach(container => {
            const titleElement = container.querySelector('h1'); 
            const titleText = titleElement.innerText.toLowerCase(); 
            if (titleText.includes(query)) {
              container.style.display = 'block';
            } else {
              container.style.display = 'none'; 
            }
          });
         }
  