#!/usr/bin/env node

const boxen = require("boxen");
const chalk = require("chalk");
const clear = require("clear");

clear();

const data = {
    name: chalk.bold.green("              Mustan Ali"),
    work: chalk.white("Front End Developer"),
    github: chalk.gray("https://github.com/") + chalk.green("mustan-ali"),
    linkedin: chalk.gray("https://linkedin.com/in/") + chalk.blue("mustan-ali"),
    Npm: chalk.gray("https://npmjs.com/") + chalk.red("~mustanali"),
    npx: chalk.green("npx") + " " + chalk.white("mustan"),

    labelWork: chalk.white.bold("       Work:"),
    labelGitHub: chalk.white.bold("     GitHub:"),
    labelLinkedIn: chalk.white.bold("   Linkedin:"),
    labelNpm: chalk.white.bold("        NPM:"),
    labelCard: chalk.white.bold("       Card:")
};

const me = boxen(
    [
        `${data.name}`,
        ``,
        `${data.labelWork}  ${data.work}`,
        `${data.labelGitHub}  ${data.github}`,
        `${data.labelLinkedIn}  ${data.linkedin}`,
        `${data.labelNpm}  ${data.Npm}`,
        ``,
        `${data.labelCard}  ${data.npx}`
    ].join("\n"),
    {
        width: 50,
        margin: 1,
        float: 'left',
        padding: 1,
        borderStyle: "bold",
        borderColor: "green"
    }
);

console.log(me);

const tip = [
    `Tip: Try ${chalk.cyanBright.bold("cmd/ctrl + click")} on the links above`,
    '',
].join("\n");

console.log(tip);
