$(function () {
  $(".carousel").carousel({ interval: 2000 });
  $("#carouselButton").click(function () {
    if ($("#carouselButton").children("i").hasClass("fa-pause")) {
      $(".carousel").carousel("pause");
      $("#carouselButton").children("i").removeClass("fa-pause");
      $("#carouselButton").children("i").addClass("fa-play");
    } else {
      $(".carousel").carousel("cycle");
      $("#carouselButton").children("i").removeClass("fa-play");
      $("#carouselButton").children("i").addClass("fa-pause");
    }
  });

  $("#reserveButton").click(function () {
    $("#reserveModal").modal("show");
    console.log("reserve");
  });

  $("#loginButton").click(function () {
    $("#loginModal").modal("show");
    console.log("reserve");
  });

});

// Another alternative method with on('click')

// $(function () {
//   $(".carousel").carousel({ interval: 2000 });
//   $("#carouselButton").on('click', function () {
//     if ($("#carouselButton").children("i").hasClass("fa-pause")) {
//       $(".carousel").carousel("pause");
//       $("#carouselButton").children("i").removeClass("fa-pause");
//       $("#carouselButton").children("i").addClass("fa-play");
//     } else {
//       $(".carousel").carousel("cycle");
//       $("#carouselButton").children("i").removeClass("fa-play");
//       $("#carouselButton").children("i").addClass("fa-pause");
//     }
//   });

// });
