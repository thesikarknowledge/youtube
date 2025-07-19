/*===================================================
    Template Scripts
====================================================*/
(function ($) {
    "use strict";

    // Preloader
    $(window).on('load', function () {
        $('body').addClass('loaded');
    });

    $(document).ready(function () {

        var html = $('html');

        // Responsive Classes
        function responsiveClasses() {
            var body = $('body');
            if ($(window).width() < 992) {
                body.removeClass('viewport-lg');
                body.addClass('viewport-sm');
            } else {
                body.removeClass('viewport-sm');
                body.addClass('viewport-lg');
            }
        }

        // ResponsiveClasses();
        $(window).on("resize", function () {
            responsiveClasses();
        }).resize();

        // Sitcky Header
        if ($('body').hasClass('viewport-lg')) {
            var primaryHeader = $('.main-header'),
                triggerPoint = primaryHeader.height(),
                yOffset = 0;

            if (!primaryHeader.hasClass('transparent')) {
                var primaryHeader = $('.main-header'),
                    headerClone = primaryHeader.clone();
                primaryHeader.after('<div class="sticky-header"></div>');
                $('.sticky-header').html(headerClone);
                var headerSelector = $(".sticky-header");
            }

            $(window).on('scroll', function () {
                yOffset = $(window).scrollTop();
                if (primaryHeader.hasClass('transparent')) {
                    if (yOffset >= 20) {
                        primaryHeader.addClass('sticky-fixed-top');
                    } else {
                        primaryHeader.removeClass('sticky-fixed-top');
                    }
                } else {
                    if (yOffset >= triggerPoint) {
                        headerSelector.addClass('sticky-fixed-top');
                    } else {
                        headerSelector.removeClass('sticky-fixed-top');
                    }
                }
            });
        }

        // Mobile Menu
        function mobileMenu() {
            $("header.main-header").after('<div class="mobile-navigation-menu"><button id="mobile-menu-close"><i class="la la-close"></i></button></div>');
            var menuWrapper = $("header.main-header .navigation-menu .main-menu").clone();
            $('.mobile-navigation-menu #mobile-menu-close').after(menuWrapper);

            $("#mobile-menu-close, .mobile-menu-icon").on("click", function () {
                $(".mobile-menu-icon").toggleClass("menu-open");
                $(".mobile-navigation-menu").toggleClass("open-mobile-menu");
            });

            $(".mobile-navigation-menu ul li:has(ul)").each(function () {
                $(this).append('<span class="dropdown-plus"></span>');
                $(this).addClass("dropdown_menu");
            });

            $(".mobile-navigation-menu .dropdown-plus").on("click", function () {
                $(this).prev("ul").slideToggle(300);
                $(this).toggleClass("dropdown-open");
                $(".mobile-navigation-menu ul li:has(ul)").toggleClass("dropdown-open");
            });

            $(".mobile-navigation-menu .dropdown_menu a").append("<span></span>");
        }

        mobileMenu();

        // Popup Search Box
        $(function () {
            $('#popup-search-box').removeClass('toggled');

            $('.dl-search-icon').on('click', function (e) {
                e.stopPropagation();
                $('#popup-search-box').toggleClass('toggled');
                $("#popup-search").focus();
            });

            $('#popup-search-box input').on('click', function (e) {
                e.stopPropagation();
            });

            $('#popup-search-box, body').on('click', function () {
                $('#popup-search-box').removeClass('toggled');
            });
        });

        // Popup Sidebox
        function sideBox() {
            $("body").removeClass("open-sidebar");
            $(document).on("click", ".sidebar-trigger", function (e) {
                e.preventDefault();
                $("body").toggleClass("open-sidebar");
            });
            $(document).on("click", ".sidebar-trigger.close, #sidebar-overlay", function (e) {
                e.preventDefault();
                $("body.open-sidebar").removeClass("open-sidebar");
            });
        }

        sideBox();

        // Venobox Active
        $('.venobox').venobox({
            spinner: 'spinner-pulse',
        });

        // Custom Cursor
        function customCursor() {
            $('body').append('<div class="dl-cursor"></div>');
            var cursor = $('.dl-cursor'),
                linksCursor = $('a, .swiper-nav, .cursor-effect, button, input[type="submit"]'),
                crossCursor = $('.cross-cursor');

            $(window).on('mousemove', function (e) {
                cursor.css({
                    'transform': 'translate(' + (e.clientX - 5) + 'px,' + (e.clientY - 5) + 'px)',
                    'visibility': 'inherit'
                });
            });

            $(window).on('mouseout', function () {
                cursor.css('visibility', 'hidden');
            });
        }

        if ($('body').hasClass('viewport-lg')) {
            customCursor();
        }

        //Project Carousel
        var swiperProject = new Swiper(".project-carousel", {
            slidesPerView: 3,
            spaceBetween: 30,
            slidesPerGroup: 1,
            loop: true,
            autoplay: false,
            speed: 400,
            pagination: {
                el: ".project-carousel-wraper .carousel-pagination",
                clickable: true,
            },
            navigation: {
                nextEl: '.carousel-button-next',
                prevEl: '.carousel-button-prev'
            },
            breakpoints: {
                // when window width is >= 320px
                320: {
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                    spaceBetween: 25
                },
                // when window width is >= 767px
                767: {
                    slidesPerView: 2,
                    slidesPerGroup: 1,
                    spaceBetween: 30
                },
                // when window width is >= 1024px
                1024: {
                    slidesPerView: 4,
                    slidesPerGroup: 1
                }
            }
        });

        //Testimonial Carousel
        var swiperTestimonial = new Swiper(".testimonial-carousel", {
            slidesPerView: 1,
            spaceBetween: 0,
            loop: true,
            autoplay: false,
            speed: 400,
            pagination: {
                el: ".testimonial-carousel-wraper .carousel-pagination",
                clickable: true,
            },
            navigation: {
                nextEl: '.carousel-button-next',
                prevEl: '.carousel-button-prev'
            }
        });

        //Testimonial Carousel 2
        var swiperTestimonial2 = new Swiper(".testimonial-carousel-2", {
            slidesPerView: 3,
            spaceBetween: 20,
            slidesPerGroup: 1,
            loop: true,
            autoplay: false,
            speed: 700,
            pagination: {
                el: ".carousel-wraper .carousel-pagination",
                clickable: true,
            },
            navigation: {
                nextEl: '.carousel-button-next',
                prevEl: '.carousel-button-prev'
            },
            breakpoints: {
                // when window width is >= 320px
                320: {
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                    spaceBetween: 10
                },
                // when window width is >= 767px
                767: {
                    slidesPerView: 2,
                    slidesPerGroup: 1,
                    spaceBetween: 20
                },
                // when window width is >= 1024px
                1024: {
                    slidesPerView: 3,
                    slidesPerGroup: 1
                }
            }
        });

        //Sponsor Carousel
        var swiperSponsor = new Swiper(".sponsor-carousel", {
            slidesPerView: "5",
            spaceBetween: 30,
            slidesPerGroup: 1,
            loop: true,
            autoplay: true,
            speed: 700,
            pagination: {
                el: ".sponsor-carousel .swiper-pagination",
                clickable: true,
            },
            breakpoints: {
                // when window width is >= 320px
                320: {
                    slidesPerView: 2,
                    slidesPerGroup: 1,
                    spaceBetween: 10
                },
                // when window width is >= 767px
                767: {
                    slidesPerView: 3,
                    slidesPerGroup: 1,
                    spaceBetween: 0
                },
                // when window width is >= 1024px
                1024: {
                    slidesPerView: 5,
                    slidesPerGroup: 1
                }
            }
        });

        // Accordion
        $('.accordion-collapse').on('shown.bs.collapse', function () {
            $(this).parent().addClass('active');
        });

        $('.accordion-collapse').on('hidden.bs.collapse', function () {
            $(this).parent().removeClass('active');
        });

        // Funfact Counter
        $('.counter-item').waypoint(
            function () {
                var odo = $(".counter-item .odometer");
                odo.each(function () {
                    var countNumber = $(this).attr("data-count");
                    $(this).html(countNumber);
                });
            }, {
                offset: "80%",
                triggerOnce: true
            }
        );

        // Pricing Switcher
        if ($('#pricing-switch-toggle').length) {
            var toggleSwitch = $('#pricing-switch-toggle span.pricing-switch');
            var TabTitle = $('#pricing-switch-toggle li');
            var monthTabTitle = $('#pricing-switch-toggle li.month');
            var yearTabTitle = $('#pricing-switch-toggle li.year');
            var monthTabContent = $('#month');
            var yearTabContent = $('#year');
            // hidden show deafult;
            monthTabContent.fadeIn();
            yearTabContent.fadeOut();

            function toggleHandle() {
                if (toggleSwitch.hasClass('on')) {
                    yearTabContent.fadeOut();
                    monthTabContent.fadeIn();
                    monthTabTitle.addClass('active');
                    yearTabTitle.removeClass('active');
                } else {
                    monthTabContent.fadeOut();
                    yearTabContent.fadeIn();
                    yearTabTitle.addClass('active');
                    monthTabTitle.removeClass('active');
                }
            };
            monthTabTitle.on('click', function () {
                toggleSwitch.addClass('on').removeClass('off');
                toggleHandle();
                return false;
            });
            yearTabTitle.on('click', function () {
                toggleSwitch.addClass('off').removeClass('on');
                toggleHandle();
                return false;
            });
            toggleSwitch.on('click', function () {
                toggleSwitch.toggleClass('on off');
                toggleHandle();
            });
        }

        // WorkFlow line animation
        const workfowLine = document.querySelector('.wf-line-progress');
        gsap.registerPlugin(ScrollTrigger);
        const loopBoxes = gsap.utils.toArray(".workflow-items .workflow-item");
        loopBoxes.forEach((box, index) => {
            gsap.to(box.querySelector('.wf-line-progress'), {
                height: 100 + '%',
                ease: 'sine.out',
                duration: 4,
                scrollTrigger: {
                    trigger: box,
                    start: 'top center-=50',
                    end: 'bottom center-=50',
                    scrub: 0.3,
                    // markers: true
                }
            });
            gsap.to(box.querySelector('.workfow-count'), {
                backgroundColor: 'var(--primary-color)',
                boxShadow: '0px 0px 0px 5px rgba(var(--primary-rgb), 0.3)',
                color: '#fff',
                ease: "sine.out",
                scrollTrigger: {
                    trigger: box,
                    start: 'top center-=50',
                    end: 'bottom center-=50',
                    scrub: 0.3
                }
            });
        });

        // Parallax
        function parallaxItem() {
            var $items = $('.parallax-item');
            if ($items.length) {
                $items.each(function () {
                    var $currentItem = $(this),
                        $y = Math.floor(Math.random() * (-100 - (-25)) + (-25));
                    $currentItem.attr(
                        'data-parallax',
                        '{"y": ' + $y + ', "smoothness": ' + '30' + '}'
                    );
                });
            }

            initParallax();
        }

        function initParallax() {
            var parallaxInstances = $('[data-parallax]');

            if (parallaxInstances.length && !html.hasClass('touchevents') && typeof ParallaxScroll === 'object') {
                ParallaxScroll.init();
            }
        }

        parallaxItem();


        lfAnimatedText({
            selector: '.cd-headline',
            animationDelay: 2500,
        });

        // Wow JS Active
        new WOW().init();

        // Current Year
        var currentYear = new Date().getFullYear();
        $('#currentYear').append(currentYear);

        // Scrool To Top
        var scrollTop = $("#scroll-top");
        $(window).on('scroll', function () {
            var topPos = $(this).scrollTop();
            if (topPos > 100) {
                $('#scrollup').removeClass('hide');
                $('#scrollup').addClass('show');

            } else {
                $('#scrollup').removeClass('show');
                $('#scrollup').addClass('hide');
            }
        });

        $(scrollTop).on("click", function () {
            $('html, body').animate({
                scrollTop: 0
            }, 100);
            return false;
        });

        // Atropos
        var atropos = $('.js-atropos');
        if(atropos.length){
            const myAtropos = Atropos({
                el: '.js-atropos'
            });
        }

        $('.features-tab .nav-link').on('click', function () {
            if(atropos.length){
                const myAtropos = Atropos({
                    el: '.features-tab .tab-pane.show.active .js-atropos'
                });
            }
        });

    });


})(jQuery);
