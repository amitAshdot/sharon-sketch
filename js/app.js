document.addEventListener("DOMContentLoaded", function () {
    var headers = new Headers();
    headers.append('Service-Worker-Allowed', '/');
    if ("serviceWorker" in navigator) {
        window.addEventListener("load", function () {
            navigator.serviceWorker.register("sw.js")
                .catch(err => console.log("service worker not registered", err))
        })
    }


    // When the user scrolls the page, execute myFunction
    window.onscroll = function () { setFixed() };
    let header = document.getElementById("header");
    let viewPortWidth = window.innerWidth
    let sticky = viewPortWidth * 0.011111 * 6;//5% of the viewport width
    const setFixed = () => {

        if (window.pageYOffset > sticky)
            header.classList.add("sticky");
        else
            header.classList.remove("sticky");
    }

    // -----START IS ON SCREEN-----
    // Helper function from: http://stackoverflow.com/a/7557433/274826
    const isElementInViewport = el => {
        const pixFromElementTop = 1;
        // special bonus for those using jQuery
        if (typeof jQuery === "function" && el instanceof jQuery) {
            el = el[0];
        }
        let rect = el.getBoundingClientRect();
        return (
            (rect.top + pixFromElementTop <= 0 && rect.bottom >= 0) ||
            (rect.bottom + pixFromElementTop >=
                (window.innerHeight || document.documentElement.clientHeight) &&
                rect.top + pixFromElementTop <=
                (window.innerHeight || document.documentElement.clientHeight)) ||
            (rect.top + pixFromElementTop >= 0 &&
                rect.bottom + pixFromElementTop <=
                (window.innerHeight || document.documentElement.clientHeight))
        );
    };
    // Detect request animation frame
    let scroll =
        window.requestAnimationFrame ||
        // IE Fallback
        function (callback) {
            window.setTimeout(callback, 1000 / 60);
        };
    let elementsToShow = document.querySelectorAll(".show-on-scroll");

    const loop = () => {
        Array.prototype.forEach.call(elementsToShow, function (element) {
            if (isElementInViewport(element)) {
                element.classList.add("is-visible");
            } else {
                element.classList.remove("is-visible");
            }
        });
        scroll(loop);
    };

    // Call the loop for the first time
    loop();

    // -----END IS ON SCREEN-----


    //------START LESSON-----
    // events
    $(".lesson").click(function (e) {
        e.preventDefault();
        showLesson(e);
        changeLessonColor(e);
    });
    $(".lesson-hidden-exit").click(function (e) {
        e.preventDefault();
        hideLesson();
    });
    $(".lesson-hidden-btn").click(function (e) {
        let element = document.getElementById("first");
        scrollToElement(element);
        hideLesson();
    })
    // utils
    const showLesson = (event) => {
        let lesson = event.currentTarget;
        let lessonId = lesson.id;
        let lessonHide = document.getElementById(`${lessonId}-hidden`);
        lessonHide.style.display = "block";
        lessonHide.style.opacity = "1";
        lesson.classList.add("show");
        lesson.classList.add("show");
    }
    const hideLesson = () => {
        let lesson = document.getElementsByClassName("lesson");
        let lessonHide = document.getElementsByClassName("lesson-hidden");
        for (let i = 0; i < lesson.length; i++) {
            lesson[i].classList.remove("show");
            lessonHide[i].style.display = "none";
            lessonHide[i].style.opacity = "0";
        }
    }

    const changeLessonColor = (element) => {
        let lesson = element.currentTarget;
        let root = document.documentElement;
        let currentBG = window.getComputedStyle(lesson).backgroundColor
        $(".lesson-hidden-exit").css({ "backgroundColor": currentBG });
        $(".lesson-hidden-btn").css({ "backgroundColor": currentBG });
        root.style.setProperty(' --currentColor', window.getComputedStyle(lesson).backgroundColor);
        root.style.setProperty('--currentColorDark', window.getComputedStyle(lesson).backgroundColor);
    }
    //------END LESSON-----
    // -----START EMAIL VALIDATION-----
    const isNumberKey = (evt) => {
        let charCode = (evt.which) ? evt.which : evt.keyCode
        if (charCode > 31 && (charCode < 48 || charCode > 57)) return false;
        return true;
    }
    let phoneNumberInput = document.getElementById("phone");
    phoneNumberInput.onkeypress = isNumberKey

    const validateEmail = (email) => {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    const validatePhone = (phone) => {
        const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
        return re.test(String(phone));
    }

    const validateForm = () => {
        let flag = false, name = document.getElementById("name"), email = document.getElementById("email"),
            phone = document.getElementById("phone");

        if (name.value.length < 2) {
            name.classList.add("error");
            flag = true;
        }
        if (validateEmail(email.value) === false) {
            email.classList.add("error");
            flag = true;
        }
        if (validatePhone(phone.value) === false) {
            phone.classList.add("error");
            flag = true;
        }
        if (flag) {
            message.innerHTML = "אנא מלא/י את כל השדות הנדרשים";
            message.classList.add("error");
        }
        return flag ? false : true;
    }
    // -----END EMAIL VALIDATION-----

    // -----START EMAIL SUBMIT-----
    document.getElementById("form").addEventListener("submit", async function (e) {
        if (validateForm()) {
            e.preventDefault();
            var form = document.getElementById("form");
            var formData = $(form).serialize(); //serialize this particular form
            // alert(formData)
            $.ajax({
                type: 'POST',
                url: '../mail.php',
                data: formData,
                success: function (e) {
                    debugger
                    window.location = "thank-you.html";
                }
            }).done(function (response) {
                console.log(response);

            });
            return true
        } else {
            e.preventDefault();
            return false
        }
    });
    // }, { passive: true });
    // -----END EMAIL SUBMIT-----


    // -----START CAROUSEL-----
    $(".slider").slick({
        rtl: true,
        infinite: true,
        centerMode: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    dots: true
                }
            }, {
                breakpoint: 300,
                settings: "unslick" // destroys slick
            }]
    })
    // -----END CAROUSEL-----

    // -----START SCROLL TO ELEMENT-----
    const scrollToElement = (element) => {

        window.scroll({
            behavior: 'smooth',
            top: element.offsetTop
        });
    }
    // -----END SCROLL TO ELEMENT-----


    // document.getElementById("popup-btn").addEventListener("click", function (e) {
    //     e.preventDefault();
    //     let element = document.getElementById("third");
    //     scrollToElement(element);
    //     document.getElementById("popup").style.display = "none";
    // }
    // );
    // ----- CLOSING POPUP -----
    // document.getElementById("popup-exit").addEventListener("click", function (e) {
    //     e.preventDefault();
    //     document.getElementById("popup").style.display = "none";
    // });
    // ----- CLOSING POPUP -----

    // ----- START SHOWING POPUP -----
    // setTimeout(() => {
    //     document.getElementById("popup").style.display = "block";

    // }, 5000)
    // ----- END SHOWING POPUP -----


    // new PerformanceObserver((list) => {
    //     const latestEntry = list.getEntries().at(-1);
    //     if (latestEntry?.element?.getAttribute('loading') == 'lazy') {
    //         console.warn('Warning: LCP element was lazy loaded', latestEntry);
    //     }
    // }).observe({ type: 'largest-contentful-paint', buffered: true });
}, { passive: true });