const franc = require("franc");
const langs = require("langs");
const input = process.argv[2];
const colors = require("colors");

const langCode = franc(input);

if (langCode === "und") {
  console.log("Sorry, can't figure it out. Try another language!".red);
} else {
  const language = langs.where("3", langCode);

  console.log(`Our best guess is: ${language.name}`.green);
}
