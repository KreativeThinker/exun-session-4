import express from "express";
const app = express();
const port = 3000;

app.get("/number", (req, res) => {
  res.send("Go to /number/:num to check is :num is prime or composite");
});

function check(n) {
  console.log(n);
  let isPrime = "prime";

  if (n == 1) {
    isPrime = "neither prime nor composite";
  } else if (n > 1) {
    for (let i = 2; i < n; i++) {
      if (n % i == 0) {
        isPrime = "composite";
        break;
      }
    }
  }

  return isPrime;
}

app.get("/number/:num", (req, res) => {
  let n = req.params.num;
  n++;
  res.send(`The number ${n} is ${check(n)}`);
});

app.listen(port, () => {
  console.log("Port");
});
