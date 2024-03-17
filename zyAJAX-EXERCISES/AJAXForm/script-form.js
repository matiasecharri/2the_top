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

gsap.to($form, {
  opacity: 1,
  duration: 0.6,
  y: 80,
});

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

const gsapAnimationsForm = () => {
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

// document.addEventListener("submit", event => {
//   event.preventDefault();
//   if (preSendTest()) {
//     fetch(
//       `https://formsubmit.co/ajax/matiasecharri@hotmail.com`,
//       {
//         method: "POST",
//         body: new FormData(event.target),
//       },
//       $loader.classList.remove("none"),
//       $submitButton.classList.add("denegated"),
//       ($form.style.pointerEvents = "none")
//     )
//       .then(res => (res.ok ? res.json() : Promise.reject()))
//       .then(json => {
//         console.log(json);
//         if (JSON.parse(json.success) === false) {
//           $loader.classList.add("none");
//           $message.innerText = json.message;
//           $message.classList.remove("none");
//         }
//         $loader.classList.add("none");
//         $message.classList.remove("none");
//         resetForm($form);
//         setTimeout(() => {
//           $message.classList.add("none");
//           $submitButton.classList.remove("denegated");
//           gsapAnimationsForm();
//           $title.style.zIndex = 99;
//           $title.addEventListener("click", event => {
//             gsap.to($title, {
//               opacity: 0,
//               duration: 1.5,
//               y: -100,
//             });
//             setTimeout(() => {
//               window.location.reload();
//             }, 1500);
//           });
//         }, 800);
//       })
//       .catch(err => {
//         console.error(err);
//         $loader.classList.add("none");
//         $message.innerText = err.statusText || "Try again";
//         $message.classList.remove("none");
//       });
//   }
// });

// Different way:
// const formData = new FormData();
// formData.append('name', $form[0].value);
// formData.append('email', $form[1].value);
// formData.append('message', $form[2].value);
// formData.append('comment', $form[3].value || "no extra comment");

document.addEventListener("submit", async event => {
  event.preventDefault();
  if (preSendTest()) {
    try {
      $loader.classList.remove("none");

      const options = {
        method: "POST",
        body: new FormData(event.target),
        headers: {
          "Content-Type": "application/json",
        },
      };

      const response = await fetch(
        "https://formsubmit.co/ajax/matiasecharri@hotmail.com",
        options
      );

      if (!response.ok) {
        const errorResponse = await response.json();
        throw new Error(errorResponse.message || "Something went wrong");
      }

      const json = await response.json();
      console.log(json);

      if (!JSON.parse(json.success) === true) {
        $loader.classList.add("none");
        $message.innerText = "Whoops";
        $message.classList.remove("none");
        throw new Error(json.message || "Verification needed");
      }

      $loader.classList.add("none");
      $message.classList.remove("none");
      setTimeout(() => {
        $message.classList.add("none");
        gsapAnimationsForm();
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
      }, 600);
    } catch (error) {
      console.error(error);
      $loader.classList.add("none");
      $message.innerText = "Something went wrong";
      $message.classList.remove("none");
    }
  }
});
