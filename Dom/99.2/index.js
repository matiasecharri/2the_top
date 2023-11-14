const $targetElement = document.getElementById("theBall");
const $targetElement2 = document.getElementById("title2");
//Callback is just a function used as argument

const opciones = {
  root: null,
  rootMargin: "-120px",
  threshold: 0.5,
};

const opciones2 = {
  root: null,
  rootMargin: "-180px",
  threshold: 0.8,
};

const observer = new IntersectionObserver(miCallback, opciones);
observer.observe($targetElement);
// observer.observe($targetElement2);

function miCallback(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      console.log("On vh");
      $targetElement.classList.add("show");
      // observer.unobserve($targetElement);
    } else {
      $targetElement.classList.remove("show");
    }
  });
}

const observer2 = new IntersectionObserver(miCallback2, opciones2);
observer2.observe($targetElement2);

function miCallback2(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      console.log("On vh");
      $targetElement2.classList.add("show");
      // observer.unobserve($targetElement);
    } else {
      $targetElement2.classList.remove("show");
    }
  });
}

//Resume, we need the object options for an extra setup:
const options3 = {
  root: null,
  rootMargin: "-120px",
  threshold: 0.5,
};

//Then we create a new Instance of the object observer, needs a callback and the object options
const observer3 = new IntersectionObserver(miCallback3, options3);

//We need to start observing the element
observer3.observe($targetElement2);

//Inside of the call back we set the actions, like in a normal function.
function miCallback3(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      console.log("On vh");
      $targetElement2.classList.add("show");
      //We can unobserve the object
      // observer.unobserve($targetElement);
    } else {
      $targetElement2.classList.remove("show");
    }
  });
}
