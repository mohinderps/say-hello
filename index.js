#! /usr/bin/env node
import figlet from "figlet";
import gradient from "gradient-string";
import { program } from "commander";

program.option("-n, --name <char>", "your name", "world");

program.parse();

const options = program.opts();

figlet(`Hello, ${options.name} !`, function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(gradient.rainbow.multiline(data));
});
