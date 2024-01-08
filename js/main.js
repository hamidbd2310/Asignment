function darkModeBtn() {
    let element = document.body;
    element.dataset.bsTheme=element.dataset.bsTheme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('mode', element.dataset.bsTheme);
    
  }
  function setThemeOnLoad() {
    let savedTheme = localStorage.getItem('mode');
    if (savedTheme) {
      document.body.dataset.bsTheme = savedTheme;
    }
  }
  /*
  document.getElementById('darkModeToggleBtn').addEventListener('click', function() {
    toggleDarkModeBtn();
  });*/

  setThemeOnLoad();



  let ageInput = document.getElementById('ageInput');
  let customRange = document.getElementById('customRange');
  
  ageInput.addEventListener('input', function() {
    let age = ageInput.value;
    let childCard = document.getElementById('childCard');
    let adultCard = document.getElementById('adultCard');
  
    if (age >= 18) {
      childCard.style.display = 'none';
      adultCard.style.display = 'block';
    } else {
      childCard.style.display = 'block';
      adultCard.style.display = 'none';
    }
    document.getElementById('age').innerHTML = 'Your Age is : ' + age;
  });
  
  customRange.addEventListener('input', function() {
    let age = customRange.value;
    let childCard = document.getElementById('childCard');
    let adultCard = document.getElementById('adultCard');
  
    if (age >= 18) {
      childCard.style.display = 'none';
      adultCard.style.display = 'block';
    } else {
      childCard.style.display = 'block';
      adultCard.style.display = 'none';
    }
    document.getElementById('age').innerHTML = 'Your Age is : ' + age;
  });
  

  //Clock
  function updateClock() {
    var dateNow = new Date();
    var hour = ('0' + dateNow.getHours() % 12).slice(-2); 
    var minute = ('0' + dateNow.getMinutes()).slice(-2); 
    var second = ('0' + dateNow.getSeconds()).slice(-2); 
    var AMPM = hour <= 12 ? 'PM' : 'AM';
  
    document.getElementById("hour").innerHTML = hour;
    document.getElementById("minute").innerHTML = minute;
    document.getElementById("second").innerHTML = second;
    document.getElementById("AMPM").innerHTML = AMPM;
  }
  
  setInterval(updateClock, 1000);
  
