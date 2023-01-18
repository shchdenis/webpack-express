//import "@babel/polyfill";
import "./html/index.html";
import "./scss/index.scss"

// if (typeof (module.hot) !== 'undefined') {
//     module.hot.accept() // eslint-disable-line no-undef
// }
// module.hot.accept()
if (module.hot) {
    module.hot.accept("./html/index.html", function () {
        console.log("RELOADED!!!");
        location.reload()
    });
}

