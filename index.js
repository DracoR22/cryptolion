const form = document.querySelector('#search-form');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  const searchInput = document.querySelector('#search-input').value.toLowerCase();
  switch (searchInput) {
    case 'btc':
      window.location.href = 'https://www.coingecko.com/en/coins/bitcoin';
      break;
    case 'eth':
      window.location.href = 'https://www.coingecko.com/en/coins/ethereum';
      break;
    case 'bnb':
      window.location.href = 'https://www.coingecko.com/en/coins/bnb';
      break;
    case 'doge':
      window.location.href = 'https://www.coingecko.com/en/coins/dogecoin';
      break;
    case 'ada':
      window.location.href = 'https://www.coingecko.com/en/coins/cardano';
      break;
    case 'xrp':
      window.location.href = 'https://www.coingecko.com/en/coins/xrp';
      break;
    case 'usdt':
        window.location.href = 'https://www.coingecko.com/en/coins/tether';
     break;
     case 'steth':
        window.location.href = 'https://www.coingecko.com/en/coins/lido-staked-ether';
    break;
     case 'matic':
            window.location.href = 'https://www.coingecko.com/en/coins/polygon';
     break;
     case 'sol':
                window.location.href = 'https://www.coingecko.com/en/coins/solana';
    break;
    default:
      alert('Sorry, we do not support the search term you entered. Please try again.');
      break;
  }
});


// NAV 1

document.querySelector(".menu-btn").addEventListener("click", () =>{
  document.querySelector("#hero nav").classList.toggle("show");
}
)

// NAV 2

document.querySelector(".menu-btn2").addEventListener("click", () =>{
document.querySelector(".nav2 ul").classList.toggle("show2");
}
)
