document.addEventListener("DOMContentLoaded", function () {
    // When the user scrolls the page, execute myFunction
    // window.onscroll = function () { setFixed() };
    // let header = document.getElementById("header");
    // let viewPortWidth = window.innerWidth
    // let sticky = viewPortWidth * 0.011111 * 5;//5% of the viewport width
    // const setFixed = () => {
    //     if (window.pageYOffset > sticky)
    //         header.classList.add("sticky");
    //     else
    //         header.classList.remove("sticky");
    // }

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
    let lessons = $(".lesson").click(function (e) {
        e.preventDefault();

        toggleLesson(e);
    });

    const toggleLesson = (event) => {
        debugger

        let lesson = event.currentTarget;
        let lessonHide = lesson.children[2];
        if (lesson.classList.contains("show")) {
            lessonHide.style.display = "none";
            lessonHide.style.opacity = "0";
            lesson.classList.remove("show");
        } else {
            lessonHide.style.display = "block";
            lessonHide.style.opacity = "1";
            lesson.classList.add("show");
        }

    }



    // -----START EMAIL VALIDATION-----
    const isNumberKey = (evt) => {
        let charCode = (evt.which) ? evt.which : evt.keyCode
        if (charCode > 31 && (charCode < 48 || charCode > 57))
            return false;
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
        // if (customer.value === "") {
        //     customer.classList.add("error");
        //     flag = true;
        // }
        if (flag) {
            message.innerHTML = "אנא מלא/י את כל השדות הנדרשים";
            message.classList.add("error");
        }
        return flag ? false : true;
    }
    // -----END EMAIL VALIDATION-----

    // -----START EMAIL SUBMIT-----
    document.getElementById("form").addEventListener("submit", function (e) {
        if (validateForm()) {
            e.preventDefault();
            // var data = $(this).serialize();
            // // console.log(data)
            // $.ajax({
            //     type: "POST",
            //     url: 'https://app.powerlink.co.il/web/webtoaccount.aspx',
            //     data: data,
            //     success: function (answer) {
            //         $.ajax({
            //             type: "POST",
            //             url: 'mail.php',
            //             data: data,
            //             success: function (mail) {
            //                 window.location.href = 'thanks.html';
            //             }
            //         });
            //     }
            // });
            return true
        } else {
            e.preventDefault();
            return false
        }
    }, { passive: true });
    // -----END EMAIL SUBMIT-----


    // -----START CAROUSEL-----
    $(".slider").slick({
        infinite: false,
        rtl: true,
        infinite: true,
        centerMode: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                infinite: true
            }
        }, {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                dots: true
            }
        }, {
            breakpoint: 300,
            settings: "unslick" // destroys slick
        }]
    });

    // -----END CAROUSEL-----
}, { passive: true });