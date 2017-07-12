
function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.querySelector("div.target");
}

function increaseRankBy(n){
  var num = document.querySelectorAll(".ranked-list");
  for (var i = 0; i < num.length; i++){
    num[i].innerHTML = (parseInt(num[i], 10) + n).toString();
  }
}

function deepestChild(){
  return document.querySelector("div#grand-node div div div div");
}
