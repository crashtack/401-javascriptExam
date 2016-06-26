var page = 'http://edr.com/example.html';

window.onpopstate = function(event) {
  console.log("location: " + document.location + ", state: " + JSON.stringify(event.state));
};

var run = function() {
  history.pushState({page: 1}, "title 1", "?page=1");
  history.pushState({page: 2}, "title 2", "?page=2");
  history.replaceState({page: 3}, "title 3", "?page=3");
  history.back();
  history.back();
  history.go(2);
};

var divideDemo = function (number, divisor) {
  var val = number / divisor;
  console.log(val);
};

var qQueryFunction1 = function () {
  jQuery('<img>', {
    src: 'Screenshot from 2016-06-25 19:37:45.png',
    alt: 'New Book',
    title: 'This is a good book to read'
  });
};
