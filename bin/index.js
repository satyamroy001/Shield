#! /usr/bin/env node
const states= require("../util/states");
const districts= require("../util/districts");
const slots= require("../util/slots");
//states();
//districts(36);
//slots(737);
const program = require("commander");

program.option("-a","--available","avaialble slots")
program
  .command('states')
  .description('list down all the states')
  .action(states);
  program
  .command('districts <stateid>')
  .description('Get all districts for state using state id')
  .action(districts);
  program
  .command('slots <districtid>')
  .description('Get all slots for district id')
  .action(slots);
  program
  .command('developer')
  .description('Get to know about the developer')
  .action(function(){
      console.log("Made with love by satyam roy, from west bengal India")
  })


program.parse();