const $title = document.querySelector("h2");
const $form = document.querySelector(".contact-form1");
const $legend = document.querySelector(".contact-form1 legend");
const $loader = document.querySelector(".container-loader");
const $message = document.querySelector(".container-success");
const $submitButton = document.getElementById("submit-button");
const regex = {
  name: /^[a-zA-Z\s]{3,}$/,
  email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
};

const validatorName = (field, regex) => {
  if (field.value.length === 0) {
    field.style.background = "white";
  }
  if (!regex.test(field.value) && field.value.length !== 0) {
    field.style.background = "rgb(237, 155, 172)";
  }
  if (regex.test(field.value)) {
    field.style.background = "white";
  }
};

const preSendTest = () => {
  if (
    regex.name.test($form[0].value) &&
    regex.email.test($form[1].value) &&
    regex.name.test($form[2].value)
  ) {
    return true;
  } else {
    return false;
  }
};

const resetForm = form => {
  const $formFields = form.querySelectorAll(
    `input[type='text'], input[type='email'], textarea`
  );
  $formFields.forEach(field => {
    field.value = "";
  });
};

gsap.to($form, {
  opacity: 1,
  duration: 1,
  y: 80,
});

$form.addEventListener("input", event => {
  if (
    event.target.matches("input[name=user-name]") ||
    event.target.matches("input[name=user-subject]")
  ) {
    validatorName(event.target, regex.name);
  }

  if (event.target.matches("input[name=user-email]")) {
    validatorName(event.target, regex.email);
  }
});

document.addEventListener("submit", event => {
  event.preventDefault();
  if (preSendTest()) {
    $loader.classList.remove("none");
    $submitButton.classList.add("denegated");
    setTimeout(() => {
      $loader.classList.add("none");
      $message.classList.remove("none");
      resetForm($form);
      setTimeout(() => {
        $message.classList.add("none");
        $submitButton.classList.remove("denegated");
        // window.location.reload();
        gsap.to($form[4], {
          x: 180,
          opacity: 0,
          duration: 0.5,
        });
        gsap.to($form[0], {
          x: -180,
          opacity: 0,
          duration: 0.5,
        });
        gsap.to($form[1], {
          x: -280,
          opacity: 0,
          duration: 0.5,
        });
        gsap.to($form[2], {
          x: 380,
          opacity: 0,
          duration: 0.5,
        });
        gsap.to($form[3], {
          x: 180,
          opacity: 0,
          duration: 0.5,
        });
        gsap.to($legend, {
          opacity: 0,
          x: 50,
          duration: 0.8,
        });
        gsap.to($title, {
          delay: 0.7,
          opacity: 1,
          duration: 1.6,
          y: -20,
        });
        $title.style.zIndex = 99;
        $title.addEventListener("click", event => {
          gsap.to($title, {
            opacity: 0,
            duration: 1.5,
            y: -100,
          });
          setTimeout(() => {
            window.location.reload();
          }, 1500);
        });
      }, 800);
    }, 1500);
  }
});
