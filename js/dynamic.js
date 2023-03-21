//function to run when page load
$(document).ready(function () {
    // Give the URL parameters variable names
    var forParam = getParameterByName('for');

    console.log(forParam);
    //get data from data object by param value
    var dataObj = data[forParam];


    // ----- DYNAMIC HTML -----
    const htmlToInner = `
            <div class="dynamic-right ">
                <picture>
                    <source media="(max-width: 760px)" srcset=${dataObj.singleImg.src} width="535" height="586">
                    <img src=${dataObj.singleImg.src} alt=${dataObj.singleImg.alt} class="top-img" width="104" height="104"
                    fetchpriority="high" />
                </picture>
            </div>
            <div class="dynamic-left">
                <h2 class="dynamic-title ">${dataObj.title}</h2>
                <p? class="dynamic-text ">
                    ${dataObj.text}
                </p>
                <div class="dynamic-cta show-on-scroll">
                    <a class="dynamic-cta-btn btn" href="#third">בואו ניפגש</a>
                    <div class="u-fake-border u-round"></div>
                </div>
            </div>
        `

    console.log(dataObj);
    if (dataObj) {
        var dynamic = document.getElementById('dynamic');
        dynamic.innerHTML = htmlToInner
    }




});



// ----- GET URL PARAMS -----
function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}


//make an object with keys of: 'soldier','couples' & 'injury' the values will be an object with keys of 'title','text','imgArr'
const data = {
    'soldiers': {
        'title': 'חיילימים',
        'text': 'אנחנו מעריכים את כוחות הביטחון מאוד, לכן פינקנו אותכם עם מחירים מיוחדים ואטקרטיבים! תשאירו פרטים ונחזור אליכם בהקדם',
        'imgArr': [
            {
                "id": "1",
                "src": "images/1.jpg",
                "alt": "image 1"
            },
            {
                "id": "2",
                "src": "images/2.jpg",
                "alt": "image 2"
            },
            {
                "id": "3",
                "src": "images/3.jpg",
                "alt": "image 3"
            }
        ],
        'singleImg': {
            "id": "3",
            "src": "./images/mobileimg-new/13.webp",
            "alt": "image 3"
        }
    },
    'couples': {
        'title': 'זוגות',
        'text': 'זוגות',
        'imgArr': [
            {
                "id": "1",
                "src": "images/1.jpg",
                "alt": "image 1"
            },
            {
                "id": "2",
                "src": "images/2.jpg",
                "alt": "image 2"
            },
            {
                "id": "3",
                "src": "images/3.jpg",
                "alt": "image 3"
            },
        ],
        'singleImg': {
            "id": "3",
            "src": "images/3.jpg",
            "alt": "image 3"
        }
    },
    'injury': {
        'title': 'פציעה',
        'text': 'פציעה',
        'imgArr': [
            {
                "id": "1",
                "src": "images/1.jpg",
                "alt": "image 1"
            },
            {
                "id": "2",
                "src": "images/2.jpg",
                "alt": "image 2"
            },
            {
                "id": "3",
                "src": "images/3.jpg",
                "alt": "image 3"
            }
        ],
        'singleImg': {
            "id": "3",
            "src": "images/3.jpg",
            "alt": "image 3"
        }
    }
}
