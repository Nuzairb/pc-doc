"use strict";
function _defineProperty(e, i, a) {
    return (
        i in e
            ? Object.defineProperty(e, i, {
                value: a,
                enumerable: !0,
                configurable: !0,
                writable: !0,
            })
            : (e[i] = a),
        e
    );
}
!(function (e) {
    function i() {
        e(window).width() < 1200
            ? e(".nav-wrapper .nav-wrap-inner").hide()
            : e(".nav-wrapper .nav-wrap-inner").show();
    }
    function a() {
        var i = e(".nav-wrapper .nav > li > ul"),
            a = e(".nav-wrapper .nav > li > ul ul");
        i.each(function () {
            e(window).width() > 991 &&
                e(this).offset().left + e(this).width() > e(window).width() &&
                e(this).css({ left: "auto", right: "0" });
        }),
            a.each(function () {
                e(window).width() > 991 &&
                    e(this).offset().left + e(this).width() > e(window).width() &&
                    e(this).css({ left: "auto", right: "100%" });
            });
    }
    e('ul.nav li a[href="#"]').on("click", function (e) {
        e.preventDefault();
    }),
        e(".nav-wrapper").menumaker({
            title: "<span></span>",
            format: "multitoggle",
        }),
        e(e(window)).on("scroll", function () {
            e("ul.nav").hasClass("open") ||
                e("#menu-button").removeClass("menu-opened");
        }),
        e(window).on("resize", function () {
            i();
        }),
        i(),
        a(),
        e(window).resize(a),
        e(window).on("scroll", function () {
            e(window).scrollTop() < 180
                ? e(".header-main.love-sticky").removeClass(
                    "sticky fixed-top fadeInDown animated"
                )
                : e(".header-main.love-sticky").addClass(
                    "sticky fixed-top fadeInDown animated"
                );
        }),
        e("[data-bg-img]")
            .css("background-image", function () {
                return 'url("' + e(this).data("bg-img") + '")';
            })
            .removeAttr("data-bg-img")
            .addClass("bg-img");
    e(window).on("load", function () {
        jQuery("img.svg").each(function () {
            var e = jQuery(this),
                i = e.attr("id"),
                a = e.attr("class"),
                n = e.attr("src");
            jQuery.get(
                n,
                function (n) {
                    var t = jQuery(n).find("svg");
                    void 0 !== i && (t = t.attr("id", i)),
                        void 0 !== a && (t = t.attr("class", a + " replaced-svg")),
                        !(t = t.removeAttr("xmlns:a")).attr("viewBox") &&
                        t.attr("height") &&
                        t.attr("width") &&
                        t.attr(
                            "viewBox",
                            "0 0 " + t.attr("height") + " " + t.attr("width")
                        ),
                        e.replaceWith(t);
                },
                "xml"
            );
        });
    });
    var n,
        t = [
            {
                featureType: "administrative.country",
                elementType: "geometry",
                stylers: [{ visibility: "simplified" }, { hue: "#ff0000" }],
            },
        ],
        o = e('[data-trigger="map"]');
    o.length &&
        ((n = o.data("map-options")),
            (window.initMap = function () {
                o.css("min-height", "440px"),
                    o.each(function () {
                        var i,
                            a,
                            o,
                            s,
                            r = e(this);
                        (n = r.data("map-options")),
                            (a = parseFloat(n.latitude, 10)),
                            (o = parseFloat(n.longitude, 10)),
                            (s = parseFloat(n.zoom, 10)),
                            (i = new google.maps.Map(r[0], {
                                center: { lat: a, lng: o },
                                zoom: s,
                                scrollwheel: !1,
                                disableDefaultUI: !0,
                                zoomControl: !0,
                                styles: t,
                            })),
                            (i = new google.maps.Marker({
                                position: { lat: a, lng: o },
                                map: i,
                                animation: google.maps.Animation.DROP,
                                draggable: !1,
                            }));
                    });
            }),
            initMap()),
        e("#map").length &&
        ((window.initMap = function () {
            var i = [
                ["Delhi", 28.70406, 77.102493],
                ["Jaipur", 26.9124, 75.7873],
                ["Nagaur", 27.1983, 73.7493],
                ["Jaisalmer", 26.9157, 70.9083],
                ["Sirsa", 29.5321, 75.0318],
                ["Shimla", 31.1048, 77.1734],
                ["Multan", 30.1575, 71.5249],
            ],
                a = new google.maps.Map(document.getElementById("map"), {
                    zoom: 7,
                    center: new google.maps.LatLng(28.704, 77.25),
                    mapTypeId: google.maps.MapTypeId.ROADMAP,
                });
            e("#map").css("min-height", "700px");
            var n,
                t,
                o = new google.maps.InfoWindow();
            for (t = 0; t < i.length; t++)
                (n = new google.maps.Marker({
                    position: new google.maps.LatLng(i[t][1], i[t][2]),
                    map: a,
                    animation: google.maps.Animation.DROP,
                    icon: "assets/img/map-marker.png",
                })),
                    google.maps.event.addListener(
                        n,
                        "click",
                        (function (e, n) {
                            return function () {
                                o.setContent(i[n][0]), o.open(a, e);
                            };
                        })(n, t)
                    );
        }),
            initMap());
    var s = e(".back-to-top");
    if (s.length) {
        var r = function () {
            e(window).scrollTop() > 400 ? s.addClass("show") : s.removeClass("show");
        };
        r(),
            e(window).on("scroll", function () {
                r();
            }),
            s.on("click", function (i) {
                i.preventDefault(), e("html,body").animate({ scrollTop: 0 }, 0);
            });
    }
    e(".offcanvas-trigger").on("click", function () {
        e(".offcanvas-wrapper, .offcanvas-overlay").addClass("show");
    }),
        e(".offcanvas-overlay, .offcanvas-close").on("click", function () {
            e(".offcanvas-wrapper, .offcanvas-overlay").removeClass("show");
        });
    new Swiper(".banner-slider", {
        speed: 1500,
        loop: !0,
        autoplay: { delay: 3e3 },
        pagination: { el: ".swiper-pagination", clickable: !0 },
    }),
        new Swiper(".service-slider", {
            slidesPerView: "auto",
            spaceBetween: 30,
            centeredSlides: !0,
            loop: !0,
            speed: 1500,
            autoplay: { delay: 3e3 },
            navigation: {
                nextEl: ".swiper-button-next-unique",
                prevEl: ".swiper-button-prev-unique",
            },
        }),
        new Swiper(".service-slider2", {
            loop: !0,
            speed: 1500,
            autoplay: { delay: 3e3 },
            navigation: {
                nextEl: ".swiper-button-next-unique2",
                prevEl: ".swiper-button-prev-unique2",
            },
            breakpoints: {
                0: { slidesPerView: 1, spaceBetween: 0 },
                768: { slidesPerView: 2, spaceBetween: 20 },
                1024: { slidesPerView: 3, spaceBetween: 30 },
            },
        }),
        new Swiper(".service-slider3", {
            loop: !0,
            speed: 1500,
            autoplay: { delay: 3e3 },
            navigation: {
                nextEl: ".swiper-button-next-unique.three",
                prevEl: ".swiper-button-prev-unique.three",
            },
            breakpoints: {
                0: { slidesPerView: 1, spaceBetween: 0 },
                768: { slidesPerView: 2, spaceBetween: 20 },
                1024: { slidesPerView: 3, spaceBetween: 30 },
            },
        }),
        new Swiper(".service-slider4", {
            loop: !0,
            speed: 1500,
            autoplay: { delay: 3e3 },
            navigation: {
                nextEl: ".swiper-button-next-unique.four",
                prevEl: ".swiper-button-prev-unique.four",
            },
            breakpoints: {
                0: { slidesPerView: 1, spaceBetween: 0 },
                768: { slidesPerView: 2, spaceBetween: 20 },
                1024: { slidesPerView: 3, spaceBetween: 30 },
            },
        }),
        new Swiper(".price-slider", {
            loop: !0,
            centeredSlides: !0,
            speed: 1500,
            autoplay: { delay: 3e3 },
            pagination: { el: ".swiper-pagination", clickable: !0 },
            breakpoints: {
                0: { slidesPerView: 1, spaceBetween: 30 },
                768: { slidesPerView: 2, spaceBetween: 20, centeredSlides: !1 },
                1024: { slidesPerView: 3, spaceBetween: 30, centeredSlides: !0 },
            },
        }),
        new Swiper(".testimonial-slider", {
            loop: !0,
            centeredSlides: !0,
            speed: 1500,
            autoplay: { delay: 3e3 },
            pagination: { el: ".swiper-pagination", clickable: !0 },
            breakpoints: {
                0: { slidesPerView: 1, spaceBetween: 30 },
                768: { slidesPerView: 2, spaceBetween: 20 },
                1199: { slidesPerView: 3, spaceBetween: 30 },
            },
        }),
        new Swiper(".testimonial-slider2", {
            loop: !0,
            speed: 1500,
            autoplay: { delay: 3e3 },
            pagination: { el: ".swiper-pagination", clickable: !0 },
            breakpoints: {
                0: { slidesPerView: 1, spaceBetween: 30 },
                768: { slidesPerView: 2, spaceBetween: 20 },
                1024: { slidesPerView: 3, spaceBetween: 30 },
                1399: { slidesPerView: 4, spaceBetween: 30 },
            },
        }),
        new Swiper(".testimonial-slider3", {
            loop: !0,
            speed: 1500,
            slidesPerView: 1,
            spaceBetween: 30,
            autoplay: { delay: 3e5 },
            pagination: { el: ".swiper-pagination", clickable: !0 },
        }),
        new Swiper(".video-slider", {
            loop: !0,
            speed: 1500,
            slidesPerView: 1,
            autoplay: { delay: 3e3 },
            pagination: { el: ".swiper-pagination", clickable: !0 },
        });
    e(window).on("load", function () {
        var e = new Swiper(".gallery-thumbs", {
            spaceBetween: 30,
            slidesPerView: 4,
            loop: !0,
            freeMode: !0,
            loopedSlides: 4,
            watchSlidesVisibility: !0,
            watchSlidesProgress: !0,
            direction: "horizontal",
            breakpoints: {
                1200: { spaceBetween: 30 },
                768: { spaceBetween: 20 },
                0: { spaceBetween: 10 },
            },
        });
        new Swiper(".gallery-top", {
            spaceBetween: 15,
            loop: !0,
            loopedSlides: 4,
            thumbs: { swiper: e },
        });
    }),
        e(".video-btn").magnificPopup({ type: "video" }),
        e(".gallery-link").magnificPopup({
            gallery: { enabled: !0 },
            type: "image",
        }),
        e(window).on("load", function () {
            e(".preloader").fadeOut(1e3);
        }),
        e("#countdown").length &&
        e("#countdown").countdown({ date: "08/16/2022 23:59:59" }),
        e(".counter").counterUp({ delay: 10, time: 1e3 }),
        e("#elevate-zoom").length &&
        (e("#img_01").elevateZoom(
            _defineProperty(
                {
                    gallery: "gal1",
                    cursor: "pointer",
                    galleryActiveClass: "active",
                    imageCrossfade: !0,
                    loadingIcon: "http://www.elevateweb.co.uk/spinner.gif",
                    zoomType: "inner",
                },
                "cursor",
                "crosshair"
            )
        ),
            e("#img_01").bind("click", function (i) {
                var a = e("#img_01").data("elevateZoom");
                return e.fancybox(a.getGalleryList()), !1;
            })),
        e(".plus").on("click", function () {
            var i = e(this).parent().find("input"),
                a = parseInt(i.val());
            isNaN(a) || i.val(a + 1);
        }),
        e(".minus").on("click", function () {
            var i = e(this).parent().find("input"),
                a = parseInt(i.val());
            !isNaN(a) && a > 1 && i.val(a - 1);
        }),
        e(".single-price, .single-feature, .single-specialist").on(
            "mouseenter",
            function () {
                e(".single-price, .single-feature, .single-specialist").removeClass(
                    "active"
                ),
                    e(this).addClass("active");
            }
        ),
        e(".search-toggle-btn").on("click", function () {
            e(".full-page-search").addClass("show");
        }),
        e(".search-close-btn").on("click", function () {
            e(".full-page-search").removeClass("show");
        }),
        jQuery(window).on("load", function () {
            e("#grid").isotope({ layoutMode: "packery", itemSelector: ".grid-item" });
        }),
        e(
            ".contact-form-wrap, .callback-form-wrap, .appointment-form-wrap, .estimated-form-wrap, .banner-form-wrap"
        ).on("submit", "form", function (i) {
            i.preventDefault();
            var a = e(this);
            a.ajaxSubmit({
                success: function (i) {
                    var n = e.parseJSON(i);
                    a.parent(
                        ".contact-form-wrap, .callback-form-wrap, .appointment-form-wrap, .estimated-form-wrap, .banner-form-wrap"
                    )
                        .find(".form-response")
                        .html("<span>" + n[1] + "</span>");
                },
            });
        }),
        e(".team").on("mouseenter", function (i) {
            e(".team").removeClass("active"), e(this).addClass("active");
        }),
        e(".dropdown").each(function () {
            e(".dropdown-btn").on("click", function () {
                e(this).siblings(".dropdown-menu").slideToggle(),
                    e(this).toggleClass("open");
            });
        });
    var l = e(".banner-img-elements");
    e(".layer").mousemove(function (e) {
        var i = (1 * e.pageX) / 100,
            a = (1 * e.pageY) / 100;
        l.css({ transform: "translate3d(" + i + "px, " + a + "px,0)" });
    }),
        e("#upfile").on("change", function () {
            var i = e(this).val().split("\\");
            e(".file-name").html(i[i.length - 1]);
        }),
        e(".upfile-wrap").on("click", function () {
            document.getElementById("upfile").click();
        });
    var p = new Date().getFullYear();
    e(".currentYear").html(p);
})(jQuery);
