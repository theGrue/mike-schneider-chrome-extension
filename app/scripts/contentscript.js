'use strict';

function addMikeSchneider() {
  var trendItems = document.querySelectorAll('.trend-name');
  var trendLocation = document.querySelector('.trend-location');
  for(var i = 0; i < trendItems.length; i++) {
    if (trendItems[i].innerHTML.indexOf('#') === 0) {
      var split = trendItems[i].innerHTML.replace(/([A-Z])/g, ' $1').split(' ');
      var end = split.lastIndexOf('A') !== -1 ? split.lastIndexOf('A') :
      split.lastIndexOf('On') !== -1 ? split.lastIndexOf('On') + 1 :
      split.lastIndexOf('Into') !== -1 ? split.lastIndexOf('Into') + 1 :
      split.length;
      trendItems[i].innerHTML = split.slice(0, end).concat(['MikeSchneider']).join('');
    }
    else {
      var split = trendItems[i].innerHTML.split(' ');
      var end = split.length > 1 ? split.length - 1 : split.length;
      trendItems[i].innerHTML = split.slice(0, end).concat(['mike schneider']).join(' ');
    }
  }
  trendLocation.innerHTML = 'mike schneider Trends';
  //console.log('mike schneider added', trendItems);
}

window.addEventListener('load', addMikeSchneider);