$(document).ready(function(){

  $("#photo").mouseover(function(){


  });


  $("ul li:first-child").click(function(){
    $("main .a").show();
    $("main .b").hide();
    $("main .c").hide();
    $("main .d").hide();
    $("main .e").hide();
  });

  $("ul li:nth-child(2)").click(function(){
    $("main .a").hide();
    $("main .b").show();
    $("main .c").hide();
    $("main .d").hide();
    $("main .e").hide();
  });

  $("ul li:nth-child(3)").click(function(){
    $("main .a").hide();
    $("main .b").hide();
    $("main .c").show();
    $("main .d").hide();
    $("main .e").hide();
  });
  $("ul li:nth-child(4)").click(function(){
    $("main .a").hide();
    $("main .b").hide();
    $("main .c").hide();
    $("main .d").show();
    $("main .e").hide();
  });
  $("ul li:nth-child(5)").click(function(){
    $("main .a").hide();
    $("main .b").hide();
    $("main .c").hide();
    $("main .d").hide();
    $("main .e").show();
  });








































}
