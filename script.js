
// theme section --------------------------------------------------------------------------------------------------------------
const toggleButton = document.getElementById('theme-toggle');
const body = document.body;

// Function to toggle theme and update button text
toggleButton.addEventListener('click', () => {
    if (body.classList.contains('dark-theme')) {
        body.classList.replace('dark-theme', 'light-theme');
        toggleButton.textContent = '🌙 Dark';
    } else {
        body.classList.replace('light-theme', 'dark-theme');
        toggleButton.textContent = '☀️ Light';
    }
});

// about section ---------------------------------------------------------------------------------------------------------------
var tablinks=document.getElementsByClassName('tab-links');
var tabcontents=document.getElementsByClassName('tab-contents');

function opentab(tabname)
{
    for(tablink of tablinks)
    {
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents)
    {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

// ------- See More and See Less Button Functionality --------------------------------------------

    const seeMoreBtn = document.getElementById('see-more-btn');
    const workList = document.querySelector('.work-list');

    // Add event listener to the button
    seeMoreBtn.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent default anchor behavior

        // Toggle the hidden class on the extra works
        workList.classList.toggle('show-more');

        // Update button text
        if (workList.classList.contains('show-more')) {
            seeMoreBtn.textContent = 'See Less';
        } else {
            seeMoreBtn.textContent = 'See More';
        }
    });
    
    // ----Side Menu functionality-----------------------------------------------------------------------------------------------------------
    
    var sidemenu=document.getElementById("sidemenu");
    function openmenu(){
        sidemenu.style.right="0";
    }
    function closemenu(){
        sidemenu.style.right="-200px"
    }


    // ----Contact form Google sheet connection script---------------------------------------------------------------------------------
    
  const scriptURL = 'https://script.google.com/macros/s/AKfycbxHnHmisHwpanOh5z7Ink1zpF76Q5yxhjeDS6Hv6BRmDys7YBApahrM2YWW84KaSrVm/exec'
  const form = document.forms['submit-to-google-sheet']
  const message=document.getElementById("message");

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => { message.innerHTML="Message Sent Successfully"})
        setTimeout(function(){
            message.innerText="";
        }, 7000)
        form.reset()

      .catch(error => console.error('Error!', error.message))
  })
