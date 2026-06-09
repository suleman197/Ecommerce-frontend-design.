function searchProduct() {
  const query = document.querySelector('.navbar-center input')?.value || '';
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

function applyPrice() {
  const min = document.getElementById('minPrice')?.value || 0;
  const max = document.getElementById('maxPrice')?.value || 999999;
  alert("Price range applied: " + min + " - " + max);
}

function subscribe() {
  const email = document.getElementById('email')?.value || '';
  if (!email) {
    alert("Please enter your email");
    return;
  }
  alert("Subscribed with: " + email);
}

document.addEventListener('DOMContentLoaded', function () {
  const menuIcon = document.querySelector('.menu-icon');
  if (menuIcon) {
    menuIcon.addEventListener('click', function() {
      alert("Menu clicked");
    });
  }

  document.querySelectorAll('.navbar-left a').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      alert(this.textContent + " clicked");
    });
  });

  const langCurrency = document.querySelector('.lang-currency');
  if (langCurrency) {
    langCurrency.addEventListener('click', function() {
      alert("Language & Currency settings clicked");
    });
  }

  const shipTo = document.querySelector('.ship-to');
  if (shipTo) {
    shipTo.addEventListener('click', function() {
      alert("Shipping option clicked");
    });
  }

  const verifiedOnly = document.getElementById('verifiedOnly');
  if (verifiedOnly) {
    verifiedOnly.addEventListener('change', function() {
      alert(this.checked ? "Filter: Verified only ON" : "Filter: Verified only OFF");
    });
  }

  const sortOptions = document.getElementById('sortOptions');
  if (sortOptions) {
    sortOptions.addEventListener('change', function() {
      alert("Sorting by: " + this.value);
    });
  }

  const gridView = document.getElementById('gridView');
  if (gridView) {
    gridView.addEventListener('click', function() {
      alert("Grid view selected");
    });
  }

  const listView = document.getElementById('listView');
  if (listView) {
    listView.addEventListener('click', function() {
      alert("List view selected");
    });
  }
});
