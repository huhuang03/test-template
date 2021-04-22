#!/usr/bin/env node

import Project from "./project"
import Config from "./config"
import templateMgr from "./template/template_manager";

const p = new Project();

const templates = templateMgr.tempaltes.map(t => t.name)

const parser = require('yargs')
    .scriptName("mytmp")
    .command('list', 'list all templates', () => {
        console.log(`All templates:`);
        console.log(`\t${templates.join("\n\t")}`);
    })
    .option('tName', {
        alias: 't',
        type: 'string',
        description: '[-t] The tempalte name'
    })
    .option('out', {
        alias: 'o',
        type: 'string',
        description: 'The output folder'
    })
    .demandCommand()

for (let t of p.templates) {
  parser.command(t.name, `create a ${t.name} type project`, () => {}, function() {
      const out = `t_${t.name}`;
      p.build(new Config(t.name, out))
  })
}

// why you don't show the help??

// parser.command({
//   command: '*',
//   handler() {
//     console.log(`All tmplates:`);
//     console.log(`\t${templateMgr.tempaltes.map((t) => t.name).join("\n\t")}`);
//   }
// })

parser.parse()
