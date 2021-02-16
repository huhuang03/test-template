#!/usr/bin/env node

import Project from "./project"
import Config from "./config"
import templateMgr from "./template/template_manager";

var p = new Project()

const parser = require('yargs')
.command('list', 'list all templates', (yargs) => {
  console.log(`All tmplates:`);
  console.log(`\t${templateMgr.tempaltes.map((t) => t.name).join("\n\t")}`);
})
<<<<<<< HEAD
// Can delete?? Maybe.
=======
.option('tName', {
  alias: 't',
  type: 'string',
  description: '[-t] The tempalte name'
})
>>>>>>> 77ad852794a39040bbd1a9571bff8a9a16adb9ef
.option('name', {
  alias: 'n',
  type: 'string',
  description: 'The project name.(But I don\'t what this mean.)'
})
.option('out', {
  alias: 'o',
  type: 'string',
  description: 'The output folder'
})

for (let t of p.templates) {
  parser.command(t.name, `create a ${t.name} type project`, () => {}, function(argv) {
    var out = `t_${t.name}`
    p.build(new Config(out, t.name, out))
  })
}

parser.parse()

// const argv = parser.argv