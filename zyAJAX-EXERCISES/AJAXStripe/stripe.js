import KEYS from "./stripekeys.js";
import BATMAN from "./trash.js";

const publicK = KEYS.public;
const secretK = KEYS.secret;
console.table(publicK, secretK);

BATMAN();
