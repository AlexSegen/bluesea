var Layout = function () {

    // handle on page scroll
    var handleHeaderOnScroll = function() {
        if ($(window).scrollTop() > 60) {
            $("body").addClass("page-on-scroll");
        } else {
            $("body").removeClass("page-on-scroll");
        }
    }

    var handleHeaderFixed = function () {
        //jQuery to collapse the navbar on scroll
        $(window).scroll(function() {
            if ($(".navbar").offset().top > 50) {
                $(".navbar").addClass("top-nav-collapse");
            } else {
                $(".navbar").removeClass("top-nav-collapse");
            }
        });

        //jQuery for page scrolling feature - requires jQuery Easing plugin
        $(function() {
            var padding = 70;

            $('.page-scroll a').on('click', function(event) {
                var $anchor = $(this);
                $('html, body').stop().animate({
                    scrollTop: $($anchor.attr('href')).offset().top - padding
                }, 1500, 'easeInOutExpo');
                event.preventDefault();
            });
        });

        //Collapse Navbar When It's Clickicked
        $('.navbar-nav li a, .navbar-brand').on("click", function(event) {
            $(".navbar-collapse.in").collapse('hide');
        });
    }

    return {
        init: function () {

            // initial setup for fixed header
            handleHeaderOnScroll();

            // animated navbar toggle
            handleHeaderFixed();

            // handle minimized header on page scroll
            $(window).scroll(function() {
                handleHeaderOnScroll();
                handleHeaderFixed();
            });
        },

        // To get the correct viewport width based on  http://andylangton.co.uk/articles/javascript/get-viewport-size-javascript/
        getViewPort: function() {
            var e = window,
                a = 'inner';
            if (!('innerWidth' in window)) {
                a = 'client';
                e = document.documentElement || document.body;
            }

            return {
                width: e[a + 'Width'],
                height: e[a + 'Height']
            };
        },
    };
}();