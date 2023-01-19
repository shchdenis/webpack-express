//import "@babel/polyfill";
import '!!html-loader!./html/index.html';
import "!!html-loader!./html/partials/head.html";
import "!!html-loader!./html/partials/header.html";
import "!!html-loader!./html/pages/about.html";
import "./scss/index.scss";
import "./img/img.jpg"

// if (typeof (module.hot) !== 'undefined') {
//     module.hot.accept() // eslint-disable-line no-undef
// }
if (module.hot) {
    module.hot.accept(
        ['!!html-loader!./html/index.html',
            "!!html-loader!./html/partials/head.html",
            "!!html-loader!./html/partials/header.html",
            "!!html-loader!./html/pages/about.html"],
        function () { location.reload() }
    )
}






