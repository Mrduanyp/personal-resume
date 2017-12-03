$(function(){

    $("#scroll").height($(window).height()-$("#main_nav").height());
    $(".ulLi").width($(window).width());
  })


// js代码生成小圆点

  var scroll = document.getElementById("scroll");
  var ul = document.getElementById("ul");
  var ulLis = ul.children;
  var liWidth = document.body.offsetWidth;



  // ul.appendChild(ul.children[0].cloneNode(true));

  var ol = document.createElement("ol");
  var olLis = ol.children;
  scroll.appendChild(ol);
  for (var i=0;i<ulLis.length-1;i++){
    var li = document.createElement("li");
    li.innerHTML = i+1;
    ol.appendChild(li);
  }
  ol.children[0].className = "current";




  // JS动画部分
    // 封装一个animate函数
  function animate(obj,target){
    clearInterval(obj,timer);
    var speed = obj.offsetLeft < target ? 15 : -15;
    obj.timer = setInterval(function(){
      var result = target - obj.offsetLeft;
      obj.style.left = obj.offsetLeft + speed + "px";

      if (Math.abs(result) <= Math.abs(speed)) {
        clearInterval(obj.timer);
        obj.style.left = target + "px";
      }
    },10);
  }

    // 定时器函数
  var timer = null;
  var key = 0;
  var circle = 0;
  timer = setInterval(autoplay,1000);
  function autoplay(){
    key++;
    if(key > ulLis.length-1){
      ul.styel.left = 0;
      key = 1;
    }

    animate(ul,-key*liWidth);

    circle++;
    if(circle > olLis.length-1){
      circle = 0;
    }
    // for (var i = 0;i < olLis.length;i++) {
    //   olLis[i].className = "";
    //   olLis[i].click(function(){
        
    //   })
    // }
    olLis[circle].className = "current";
  }

  // for (var i = 0; i < 4; i++) {
  //   $(".button_list span").eq(i).click(function () {
  //     var tabindex= $(this).attr("tabindex");
  //     listLeft = listLeft + 770 * (index - tabindex);
  //     console.log(listLeft,tabindex,index);
  //     index=tabindex;
  //     $(this).addClass("on").siblings().removeClass("on");
  //     $(".img_list").animate({left: listLeft + "px"}, 500)

  //   })
  // }  