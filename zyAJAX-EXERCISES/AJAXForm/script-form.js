const $form = document.querySelector(".contact-form1");
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
      }, 1500);
    }, 1500);
  }
});
