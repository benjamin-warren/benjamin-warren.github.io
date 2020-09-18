const el = document.querySelector("#test_module_1");

el.addEventListener("mousemove", (e) => {
  el.style.backgroundPositionX = -e.offsetX + "px";
  el.style.backgroundPositionY = -e.offsetY + "px";
});



$('#test_module_2').hover(
    function() {
        $('#btn').fadeIn('slow');
    },function() {
        $('#btn').fadeOut('slow');
    }
);
