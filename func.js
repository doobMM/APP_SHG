window.onload = function() {
  var evaluating = document.getElementById('evaluate');
  var clicked = 0;
  evaluating.onclick = function() {
    alert("why?");
    if(clicked===0){
      this.style.color = 'yellow';
      clicked = 1;
    } else {
      this.style.color = 'gray';
      clicked = 0;
    }
  }
};
