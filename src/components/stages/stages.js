  var container = $(".stages"),
      steps = $(".stages__step", container),
      bar = $(".stages__progress", container),
      divider = steps.length - 1;

  function setActive(current) {
      var fill = current - 1,
          percent = (fill * 100) / divider;

      steps.removeClass("active").eq(current - 1).addClass("active");

      bar.css({
          width: percent + "%"
      });
  }

  steps.on({
      click: function () {
          var index = $(this).index();
          $(this).prevAll().addClass("complated");
          $(this).nextAll().removeClass("complated");
          setActive(index + 1);
      }
  });