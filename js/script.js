var IE = (!! window.ActiveXObject && +(/msie\s(\d+)/i.exec(navigator.userAgent)[1])) || NaN;
var autoScrolling = true;
var afterResize = function() {
  location.reload();
};
if (IE <= 9) {
  autoScrolling = false;
  afterResize = function() {
  };
}

$(document).ready(function() {
    $('#fullpage').fullpage({
        navigation: true,
        navigationPosition: 'right',
        resize: true,
        scrollingSpeed: 700,
        //css3: true,
        scrollOverflow: false,
        loopBottom: false,
        loopTop: false,
        paddingTop: '2.5em',
        paddingBottom: '7.857em',
        verticalCentered: true,
        lockAnchors: false,
        anchors:['intro', 'course', 'schedule', 'about'],
        menu: '#menu',
        responsiveWidth: 1180,
        responsiveHeight: 700,
        autoScrolling: autoScrolling,
        fitToSection: autoScrolling,

        afterResize: function() {
          afterResize();
        }

    });
});