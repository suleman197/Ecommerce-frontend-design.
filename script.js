function searchProduct() {
  let query = document.querySelector('.navbar-center input').value;
  alert("Searching for: " + query);
}

function openProfile() {
  alert("Profile clicked");
}

function openMessage() {
  alert("Messages clicked");
}

function openOrders() {
  alert("Orders clicked");
}

function openCart() {
  alert("Cart clicked");
}


// second part //

// Menu icon click
document.querySelector('.menu-icon').addEventListener('click', function() {
  alert("Menu clicked");
});

// Left links
document.querySelectorAll('.navbar-left a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    alert(this.textContent + " clicked");
  });
});

// Right settings
document.querySelector('.lang-currency').addEventListener('click', function() {
  alert("Language & Currency settings clicked");
});

document.querySelector('.ship-to').addEventListener('click', function() {
  alert("Shipping option clicked");
});


// third part//

function goHome() {
  alert("Navigating to Home");
}

function goClothings() {
  alert("Navigating to Clothings");
}

function goMensWear() {
  alert("Navigating to Men's wear");
}

function goSummer() {
  alert("Navigating to Summer clothing");
}


// side wla ki java//
function applyPrice() {
  let min = document.getElementById('minPrice').value;
  let max = document.getElementById('maxPrice').value;
  alert("Price range applied: " + min + " - " + max);
}


// fifth part//


// Checkbox filter
document.getElementById('verifiedOnly').addEventListener('change', function() {
  if (this.checked) {
    alert("Filter: Verified only ON");
  } else {
    alert("Filter: Verified only OFF");
  }
});

// Sorting dropdown
document.getElementById('sortOptions').addEventListener('change', function() {
  alert("Sorting by: " + this.value);
});

// View icons
document.getElementById('gridView').addEventListener('click', function() {
  alert("Grid view selected");
});

document.getElementById('listView').addEventListener('click', function() {
  alert("List view selected");
});
