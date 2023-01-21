    // ----- deteced darkmode ----
    // if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    //     // dark mode
    //     document.body.classList.add("dark-mode");
    //     const debug = document.createElement('div');
    //     debug.style.position = 'fixed';
    //     debug.style.top = '0';
    //     debug.style.left = '0';
    //     debug.style.zIndex = '9999';
    //     debug.style.background = 'red';
    //     debug.style.color = 'white';
    //     debug.style.padding = '10px';
    //     debug.style.fontSize = '20px';
    //     debug.style.fontWeight = 'bold';
    //     debug.style.pointerEvents = 'none';
    //     debug.style.opacity = '0.5';
    //     debug.style.transition = 'opacity 0.3s ease';
    //     debug.innerText = 'Dark mode';
    //     document.body.appendChild(debug);
    //     window.debug = window.debug || function (msg) {
    //         debug.innerText = msg;
    //         debug.style.opacity = '1';
    //         setTimeout(function () {
    //             debug.style.opacity = '0.5';
    //         }, 1000);
    //     };

    // } else {
    //     // light mode
    //     document.body.classList.remove("dark-mode");

    //     const debug = document.createElement('div');
    //     debug.style.position = 'fixed';
    //     debug.style.top = '0';
    //     debug.style.left = '0';
    //     debug.style.zIndex = '9999';
    //     debug.style.background = 'red';
    //     debug.style.color = 'white';
    //     debug.style.padding = '10px';
    //     debug.style.fontSize = '20px';
    //     debug.style.fontWeight = 'bold';
    //     debug.style.pointerEvents = 'none';
    //     debug.style.opacity = '0.5';
    //     debug.style.transition = 'opacity 0.3s ease';
    //     debug.innerText = 'Light mode';
    //     document.body.appendChild(debug);
    //     window.debug =
    //         window.debug ||
    //         function (msg) {
    //             debug.innerText = msg;
    //             debug.style.opacity = '1';
    //             setTimeout(function () {
    //                 debug.style.opacity = '0.5';
    //             }, 1000);
    //         };


    //     debugger
    // }

    // window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
    //     const newColorScheme = event.matches ? "dark" : "light";
    // });
    // ----- deteced darkmode ----