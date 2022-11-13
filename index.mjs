#!/usr/bin/env node
// 👆 Used to tell Node.js that this is a CLI tool

import boxen from "boxen";
import chalk from "chalk";

// require('console-png').attachTo(console);

import cpng from "console-png";
cpng.attachTo(console);

import fs from "fs";
import path from "path";
import {fileURLToPath} from "url";

const boxenOptions = {
  padding: 1,
  width: 90,
  title: "Dillon M. Baird",
  titleAlignment: "center",
  borderStyle: "double",
  borderColor: "#9DC4F8",
};

const intro = chalk.bold(
  "Hey 👋 I'm Dillon Baird.\n\nPassionate Software Engineer, UI/UX Engineer, Systems Architect, Graphic Designer, Security Researcher, and Consultant. 15+ years of experience. Adept in all stages of advanced software development and effective design.\n\nAttempting To Make The World A Better Place, One Line Of Code At A Time.\n\n\nFind me on the internet:\n\n",
);

const links = [
  { name: chalk.hex("#fff").bgHex("#0f111a")("Website"), url: "   https://DillonBaird.io" },
  { name: chalk.hex("#fff").bgHex("#5865F2")("LinkedIn"), url: "  https://linkedin.com/in/dillon-baird" },
  { name: chalk.hex("#fff").bgHex("#6e5494")("GitHub"), url: "    https://github.com/dillonbaird" },
  { name: chalk.hex("#fff").bgHex("#1DA1F2")("Twitter"), url: "   https://twitter.com/dillonmbaird" }
];

const linkList = links.map((link) => `${link.name} ${link.url}`).join("\n");

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// console.png(fs.readFileSync(__dirname + '/logo.png'));

console.log(boxen(intro + linkList, boxenOptions));