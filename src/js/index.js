$(".btn-light").on("click", function() {
  $(".btn-light").css("transform", "rotate(180deg)");
  $(".section-menu").toggleClass("close", "wrapper");
  $("span").css("display", "none");
});
