const d = document;
const $table = d.querySelector(".content-characters");
const $form = d.querySelector(".crud-form");
const $title = d.querySelector(".crud-title");
const $fragment = d.createDocumentFragment();
const $sendButton = d.getElementById("send");

const printer = array => {
  array.forEach(character => {
    console.log(character);
  });
};

const consumeApi = async () => {
  try {
    const response = await fetch("http://localhost:5000/cyberpunk-characters");
    const data = await response.json();
    /*Handling errors*/
    if (!response.ok) {
      throw {
        message: response.statusText || "🚬 Oops Something happend!",
        status: response.status,
      };
    }
    /*Actions if everything goes OK!*/
    printer(data);
  } catch (error) {
    console.warn(error);
  }
};
consumeApi();
