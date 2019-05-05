
window.addEventListener('DOMContentLoaded', function() {
  if (localStorage.getItem('games')) { var games = localStorage.getItem('games'); } else { var games = 0; }
  if (localStorage.getItem('wins')) { var wins = localStorage.getItem('wins'); } else { var wins = 0; }
  if (localStorage.getItem('losses')) { var losses = localStorage.getItem('losses'); } else { var losses = 0; }
  document.querySelector('.games').innerHTML = games;
  document.querySelector('.wins').innerHTML = wins;
  document.querySelector('.losses').innerHTML = losses;
  // On click
  let btns = document.querySelectorAll('.col');
  var numArray = [0,1,2,3,4,5,6,7,8];
  for (var i = 0; i < btns.length; i++) {
    btns[i].onclick = function(event) {
      if(!document.querySelector('.table-wrapper').classList.contains('active')) {
        let targetAttribute = event.target.getAttribute('data-target');
        newTarget = event.target;
        if(numArray.indexOf(+targetAttribute) !== -1) {
          putCross(targetAttribute, newTarget, numArray);
        }
      }
    }
  }
  // new game btn
  document.querySelector('.btn-ng').onclick = function() {
    location.reload(true);
  }
  // reset btn
  document.querySelector('.btn-rst').onclick = function() {
    games = 0;
    wins = 0;
    losses = 0;
    localStorage.setItem('games', games);
    localStorage.setItem('wins', wins);
    localStorage.setItem('losses', losses);
    location.reload(true);
  }
});
// Put Cross on click
function putCross(targetAttribute, newTarget, numArray) {
  newTarget.innerHTML = 'x';
  indexInArray = numArray.indexOf(+targetAttribute);
  numArray.splice(indexInArray, 1);
  checkWhoWonCross(numArray);
}
// Put zero (random)
function putZero(numArray) {
  function getRandomNumber(numArray) {
    for(var j, x, i = numArray.length; i; j = parseInt(Math.random() * i), x = numArray[--i], numArray[i] = numArray[j], numArray[j] = x);
    return numArray;
  };
  var randomResult = getRandomNumber(numArray).pop();
  dataTarget = document.querySelector('[data-target="' + randomResult + '"]');
  dataTarget.innerHTML = '0';
  checkWhoWonZero();
} 
// Check who won after cross
function checkWhoWonCross(numArray) {
  let selector0 = document.querySelector('[data-target="' + 0 + '"]').innerHTML;
  let selector1 = document.querySelector('[data-target="' + 1 + '"]').innerHTML;
  let selector2 = document.querySelector('[data-target="' + 2 + '"]').innerHTML;
  let selector3 = document.querySelector('[data-target="' + 3 + '"]').innerHTML;
  let selector4 = document.querySelector('[data-target="' + 4 + '"]').innerHTML;
  let selector5 = document.querySelector('[data-target="' + 5 + '"]').innerHTML;
  let selector6 = document.querySelector('[data-target="' + 6 + '"]').innerHTML;
  let selector7 = document.querySelector('[data-target="' + 7 + '"]').innerHTML;
  let selector8 = document.querySelector('[data-target="' + 8 + '"]').innerHTML;
       if(selector0 == 'x' && selector1 == 'x' && selector2 == 'x') { wins(); games(); document.querySelector('.line.one').classList.add('visible'); }
  else if(selector3 == 'x' && selector4 == 'x' && selector5 == 'x') { wins(); games(); document.querySelector('.line.two').classList.add('visible'); }
  else if(selector6 == 'x' && selector7 == 'x' && selector8 == 'x') { wins(); games(); document.querySelector('.line.three').classList.add('visible'); }
  else if(selector0 == 'x' && selector3 == 'x' && selector6 == 'x') { wins(); games(); document.querySelector('.line.four').classList.add('visible'); } 
  else if(selector1 == 'x' && selector4 == 'x' && selector7 == 'x') { wins(); games(); document.querySelector('.line.five').classList.add('visible'); }
  else if(selector2 == 'x' && selector5 == 'x' && selector8 == 'x') { wins(); games(); document.querySelector('.line.six').classList.add('visible'); } 
  else if(selector6 == 'x' && selector4 == 'x' && selector2 == 'x') { wins(); games(); document.querySelector('.line.seven').classList.add('visible'); } 
  else if(selector0 == 'x' && selector4 == 'x' && selector8 == 'x') { wins(); games(); document.querySelector('.line.eight').classList.add('visible'); }
  else { 
    if(numArray.length == 0) { 
      games(); 
      end();
      document.querySelector('.m-window-gameover').classList.add('active');
      setTimeout(closeModal, 1500);
    } else {
      putZero(numArray); 
    }
  }
}
// Check who won after zero
function checkWhoWonZero() {
  let selector0 = document.querySelector('[data-target="' + 0 + '"]').innerHTML;
  let selector1 = document.querySelector('[data-target="' + 1 + '"]').innerHTML;
  let selector2 = document.querySelector('[data-target="' + 2 + '"]').innerHTML;
  let selector3 = document.querySelector('[data-target="' + 3 + '"]').innerHTML;
  let selector4 = document.querySelector('[data-target="' + 4 + '"]').innerHTML;
  let selector5 = document.querySelector('[data-target="' + 5 + '"]').innerHTML;
  let selector6 = document.querySelector('[data-target="' + 6 + '"]').innerHTML;
  let selector7 = document.querySelector('[data-target="' + 7 + '"]').innerHTML;
  let selector8 = document.querySelector('[data-target="' + 8 + '"]').innerHTML;
  if(selector0 == '0' && selector1 == '0' && selector2 == '0') { losses(); games(); document.querySelector('.line.one').classList.add('visible'); }
  if(selector3 == '0' && selector4 == '0' && selector5 == '0') { losses(); games(); document.querySelector('.line.two').classList.add('visible'); }
  if(selector6 == '0' && selector7 == '0' && selector8 == '0') { losses(); games(); document.querySelector('.line.three').classList.add('visible'); }
  if(selector0 == '0' && selector3 == '0' && selector6 == '0') { losses(); games(); document.querySelector('.line.four').classList.add('visible'); } 
  if(selector1 == '0' && selector4 == '0' && selector7 == '0') { losses(); games(); document.querySelector('.line.five').classList.add('visible'); }
  if(selector2 == '0' && selector5 == '0' && selector8 == '0') { losses(); games(); document.querySelector('.line.six').classList.add('visible'); } 
  if(selector6 == '0' && selector4 == '0' && selector2 == '0') { losses(); games(); document.querySelector('.line.seven').classList.add('visible'); } 
  if(selector0 == '0' && selector4 == '0' && selector8 == '0') { losses(); games(); document.querySelector('.line.eight').classList.add('visible'); }
}
// End of the game. you can't click after it.
function end() {
  if(document.querySelector('.table-wrapper').classList.contains('active')) {
    document.querySelector('.table-wrapper').classList.remove('active');
  } else {
    document.querySelector('.table-wrapper').classList.add('active');
  }
}
// Count games
function games() {
  if (localStorage.getItem('games')) {
    var games = localStorage.getItem('games');
  } else {
    var games = 0;
  }
  games = +games + 1;
  localStorage.setItem('games', games);
  end();
};
// Count wind
function wins() {
  document.querySelector('.m-window-win').classList.add('active');
  setTimeout(closeModal, 1500);
  if (localStorage.getItem('wins')) {
    var wins = localStorage.getItem('wins');
  } else {
    var wins = 0;
  }
  wins = +wins + 1;
  localStorage.setItem('wins', wins);
};
// Count losses 
function losses() {
  document.querySelector('.m-window-lose').classList.add('active');
  setTimeout(closeModal, 1500);
  if (localStorage.getItem('losses')) {
    var losses = localStorage.getItem('losses');
  } else {
    var losses = 0;
  }
  losses = +losses + 1;
  localStorage.setItem('losses', losses);
};
// Close modal windows
function closeModal() {
  document.querySelector('.m-window-win').classList.remove('active');
  document.querySelector('.m-window-lose').classList.remove('active');
  document.querySelector('.m-window-gameover').classList.remove('active');
}
// function loadAnimation() {
//   start = 50,
//   end = 0,
//   timer = setInterval(function () {
//     document.querySelector('.games').innerHTML = (start--);
//     document.querySelector('.wins').innerHTML = (start--);
//     document.querySelector('.losses').innerHTML = (start--);
//     if (start < 0) {
//       clearInterval(timer);
//       if (localStorage.getItem('games')) { var games = localStorage.getItem('games'); } else { var games = 0; }
//       if (localStorage.getItem('wins')) { var wins = localStorage.getItem('wins'); } else { var wins = 0; }
//       if (localStorage.getItem('losses')) { var losses = localStorage.getItem('losses'); } else { var losses = 0; }
//       document.querySelector('.games').innerHTML = games;
//       document.querySelector('.wins').innerHTML = wins;
//       document.querySelector('.losses').innerHTML = losses;
//     }
//   }, 50);
// }


