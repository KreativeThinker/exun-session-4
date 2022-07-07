import * as fs from "fs";

function check(data, string) {
  if (data.includes(string)) {
    return true;
  } else return false;
}

let s = process.argv.slice(2);
let string = "";
s.forEach((w) => {
  string = string + w + " ";
});

fs.readFile("example.txt", "utf8", function (err, data) {
  if (err) throw err;
  console.log(check(data, string));
});
