var k;
function prev(){
  for (var j=0; j< 3; j++) {
      var a=document.querySelectorAll(".page-img")[j].getAttribute("src");
      if(a[2]<=1)
      {
        k=5-a[2];
      }
      else {
        k=a[2]-1;
      }
      document.querySelectorAll(".page-img")[j].setAttribute("src","i-"+k+".jpg");
      document.querySelectorAll(".page-img")[j].style.animation="open 1200ms ease-in-out";
  }
  setTimeout(function (){
    for (var i = 0; i <3 ; i++) {
        document.querySelectorAll(".page-img")[i].style.animation="none";
    }
  },1000);
}

function next(){
  for (var j=0; j< 3; j++) {
    var b=document.querySelectorAll(".page-img")[j].getAttribute("src");
    if(b[2]>=4)
    {
      k=parseInt(b[2])-3;
    }
    else {
      k=parseInt(b[2])+1;
    }
    document.querySelectorAll(".page-img")[j].setAttribute("src","i-"+k+".jpg");
    document.querySelectorAll(".page-img")[j].style.animation="open 1200ms ease-in-out";
  }
  setTimeout(function (){
    for (var i = 0; i <3 ; i++) {
        document.querySelectorAll(".page-img")[i].style.animation="none";
    }
  },1000);
}
