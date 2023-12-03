const d = document;
const $table = d.querySelector(".content-characters");
const $form = d.querySelector(".crud-form");
const $title = d.querySelector(".crud-title");
const $sendButton = d.getElementById("send");
const $fragment = d.createDocumentFragment();

const ajax = options => {
  let { url, method, success, error, data } = options;

  const request = new XMLHttpRequest();

  request.addEventListener("readystatechange", event => {
    if (request.readyState !== 4) return;
    if (request.status >= 200 && request.status < 300) {
      const json = JSON.parse(request.responseText);
      success(json);
    } else {
      const message = request.statusText || "An error happend";
      error(`⚠️${message} ${request.status}`);
    }
  });

  request.open(method || "GET", url);
  request.setRequestHeader("Content-type", "application/json;charset=utf-8");
  request.send(JSON.stringify(data));
};

const getAllCharacters = () => {
  ajax({
    url: "http://localhost:5000/cyberpunk-characters",
    method: "GET", //If the user doesnt specifies a method is going to apply GET as default (line 24)
    success: res => {
      console.log(res);
      const characters = res;
      characters.forEach(element => {
        console.log(element);
      });
    },
    error: err => {
      console.warn(err);
    },
    data: null, //Not needed
  });
};

d.addEventListener("DOMContentLoaded", getAllCharacters);
