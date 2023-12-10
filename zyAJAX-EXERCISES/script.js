const d = document;
const $main = d.querySelector("main");
const $header = d.querySelector("header");

//⚠️Be careful with the e.preventDefault() with <a>

//---------------------OPTION 1----------------------//
// const getHTMLX = options => {
//   let { url, success, error } = options;
//   const xhr = new XMLHttpRequest();

//   xhr.addEventListener("readystatechange", event => {
//     if (xhr.readyState !== 4) return;
//     if (xhr.status >= 200 && xhr.status < 300) {
//       const html = xhr.responseText;
//       success(html);
//     } else {
//       const message = xhr.statusText || "Something happend!";
//       error(`Error ${xhr.status}: ${message}`);
//     }
//   });

//   xhr.open("GET", url);
//   xhr.setRequestHeader("Content-type", "text/html; charset=utf-8");
//   xhr.send();
// };

// d.addEventListener("DOMContentLoaded", event => {
//   getHTMLX({
//     url: "/zyAJAX-EXERCISES/AJAX1/assets/home.html",
//     success: html => ($main.innerHTML = html),
//     error: err => ($main.innerHTML = err),
//   });
// });

//----------------------OPTION 2 ---------------------//

const recyclableGET = async url => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw {
        status: response.status,
        message: response.statusText || "Whoops something went wrong!",
      };
    }
    const dataHTML = await response.text();
    return dataHTML;
  } catch (error) {
    console.warn(error);
  }
};

const renderHome = () => {
  d.addEventListener("DOMContentLoaded", async event => {
    try {
      const homeURL = "/zyAJAX-EXERCISES/AJAX1/assets/home.html";
      const htmlHOME = await recyclableGET(homeURL);
      $main.innerHTML = htmlHOME;
    } catch (error) {
      console.warn(error);
    }
  });
};

const renderNav = () => {
  d.addEventListener("DOMContentLoaded", async event => {
    try {
      const navURL = "/zyAJAX-EXERCISES/AJAX1/assets/nav.html";
      const getNAV = await recyclableGET(navURL);
      $header.innerHTML = getNAV;
    } catch (error) {
      console.warn(error);
    }
  });
};

const renderAnyOtherPage = () => {
  d.addEventListener("click", async event => {
    event.preventDefault();
    if (event.target.matches("a")) {
      const newPAGE = await recyclableGET(event.target.href);
      $main.innerHTML = newPAGE;
    }
  });
};

renderNav();
renderHome();
renderAnyOtherPage();
// ---------------------OPTION 3----------------------//

// const getHTML = async url => {
//   try {
//     const response = await fetch(url);
//     if (!response.ok) {
//       throw {
//         status: response.status,
//         message: response.statusText || "Whoops something went wrong!",
//       };
//     }
//     const data = await response.text();
//     $main.innerHTML = data;
//   } catch (error) {
//     console.error(error);
//   }
// };

// d.addEventListener("DOMContentLoaded", e => {
//   d.addEventListener("click", e => {
//     e.preventDefault();
//     if (e.target.matches("a")) {
//       getHTML(e.target.href);
//     }
//   });
// });

// getHTML("/zyAJAX-EXERCISES/AJAX1/assets/home.html");
