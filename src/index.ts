#!/usr/bin/env node

import Project from "./project"
import Config from "./config"
import templateMgr from "./template/template_manager";

const argv = require('yargs')
.command('list', 'list all templates', (yargs) => {
  console.log(`All tmplates:`);
  console.log(`\t${templateMgr.tempaltes.map((t) => t.name).join("\n\t")}`);
})
.option('name', {
  alias: 'n',
  type: 'string',
  description: 'The project name'
})
.option('tName', {
  alias: 't',
  type: 'string',
  description: 'The tempalte name'
})
.option('out', {
  alias: 'o',
  type: 'string',
  description: 'The output folder'
})
.argv

if (!argv._[0]) { // has no command
  new Project().build(new Config(argv.name, argv.tName, argv.out));
}
