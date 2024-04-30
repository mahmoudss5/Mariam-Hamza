document.getElementById("toggleIframeBtn3").addEventListener("click", function() {
    var iframe = document.getElementById("myIframe3");

    if (iframe.style.display === "none") {
        iframe.style.display = "block";
    } else {
        iframe.style.display = "none";
    }
});

document.getElementById('twitterBtn3').addEventListener('click', function(event) {
    event.preventDefault();
    alert('Sorry, Twitter is unavailable now');
});



document.addEventListener('DOMContentLoaded', function() {
    const ratings = document.querySelectorAll('.rating3');

    ratings.forEach(rating => {
        const stars = rating.children;

        for (let i = 0; i < stars.length; i++) {
            stars[i].addEventListener('click', function() {
                // Display an alert with the rating value
                alert('You rated this book ' + (i) + ' star(s)!');

                // Update the selected stars visually
                for (let j = 0; j < stars.length; j++) {
                    if (j <= i) {
                        stars[j].classList.add('selected');
                    } else {
                        stars[j].classList.remove('selected');
                    }
                }

                // Update data-rating attribute of the parent div
                rating.setAttribute('data-rating', i+1 );
            });
        }
    });
});



function mOver(obj) {
    obj.innerHTML = "more learning more power";
    obj.style.fontSize = "60px"; 
    obj.style.textAlign = "center";
    obj.style.width = "100%";
    obj.style.marginTop = "20px";
    obj.style.marginBottom = "20px";
    obj.style.fontFamily = "sans-serif";  
    obj.style.color="black"
  }
  
  function mOut(obj) {
    obj.innerHTML = "just follow your passion";
    obj.style.fontSize = "60px"; 
    obj.style.textAlign = "center";
    obj.style.width = "100%";
    obj.style.marginTop = "20px";
    obj.style.marginBottom = "20px";
    obj.style.fontFamily = "sans-serif";
    obj.style.color="#4AE5EB"
  
  }
  function toggleSearchForm() {
    const searchForm = document.getElementById('search-form6');
  
    if (searchForm.style.display == 'block') {
      searchForm.style.display = 'none';
    } else {
      searchForm.style.display = 'block';
    }
  }
  function darkmood() {
    document.body.classList.toggle('dark-mode'); 
  }
  function showBuyAlert() {
    window.alert("Thank you for your interest! The book will be added to your cart.");
  }
  function darkmood() {
   document.body.classList.toggle('dark-mode'); 
  }
  function toggleSearchForm() {
   const searchForm = document.getElementById('search-form66');
  
   if (searchForm.style.display === 'block') {
     searchForm.style.display = 'none';
   } else {
     searchForm.style.display = 'block';
   }
  }
  function searchBookTitles() {
   const query = document.getElementById('search-input').value.toLowerCase();  // Get the search query
   const bookContainers = document.querySelectorAll('.book6');  // Get all book6 elements
  
   // Loop through all book containers
   bookContainers.forEach(container => {
     const titleElement = container.querySelector('.book-title');  // Get the book title within the container
     const titleText = titleElement.innerText.toLowerCase();  // Get the title text
  
     // Hide or show the container based on the search query
     if (titleText.includes(query)) {
       container.style.display = 'block';  // Show the container
     } else {
       container.style.display = 'none';  // Hide the container
     }
   });
  }