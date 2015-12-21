(function($) {
    $.fn.parallax = function(options) {
        var windowHeight = $(window).height();
        var settings = $.extend({
            speed: 0.15,
			coffset: "0"
        }, options);
        return this.each(function() {
            var $this = $(this);
            $(document).scroll(function() {
				doP();
            });
			$(document).ready(function() {
                doP();
            });
			
			function doP(){
                var scrollTop = $(window).scrollTop();
                console.log(scrollTop);
				var cOffset = settings.coffset;
                console.log(cOffset);
                var offset = $this.offset().top;
                console.log(offset);
                var height = $this.outerHeight();
                console.log(height);
                if (offset + height <= scrollTop || offset >= scrollTop + windowHeight) return;
                var yBgPosition = Math.round((offset - scrollTop) * settings.speed) + parseInt(settings.coffset);
                console.log(yBgPosition);
                $this.css('background-position', 'center ' + yBgPosition + 'px');
			}
        });
    };
}(jQuery));