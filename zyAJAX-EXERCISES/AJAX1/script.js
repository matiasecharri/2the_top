const d = document;
const $main = d.querySelector("main");
const $header = d.querySelector("header");
const $footer = d.querySelector("footer");
let isPlaying = false;

//⚠️Be careful with the e.preventDefault() with <a>, SPA

//----------------------OPTION 1----------------------//
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

// ---------------------OPTION 2----------------------//

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

//----------------------OPTION 3---------------------//

const player = file => {
  if (isPlaying === true) {
    return;
  }
  const audio = new Audio(file);
  audio.volume = 0.2;
  audio.play();
  isPlaying = true;
};

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

const renderFooter = () => {
  d.addEventListener("DOMContentLoaded", async event => {
    const URLfooter = "/zyAJAX-EXERCISES/AJAX1/assets/footer.html";
    const HTMLfooter = await recyclableGET(URLfooter);
    $footer.innerHTML = HTMLfooter;
  });
};

const renderAnyOtherPage = () => {
  d.addEventListener("click", async event => {
    if (event.target.matches("a")) {
      event.preventDefault();
      const newPAGE = await recyclableGET(event.target.href);
      $main.innerHTML = newPAGE;
      player("/zyAJAX-EXERCISES/AJAX1/assets/song.mp3");
    }
  });
};

renderNav();
renderHome();
renderFooter();
renderAnyOtherPage();
