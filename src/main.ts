import {getTemplates, writeTemplate} from './template/index.ts';

const templates = getTemplates()

const parser = require('yargs')
  .scriptName('tt')
  .command('list', 'list all templates', () => {
    console.log(`All templates:`);
    console.log(`\t${templates.join('\n\t')}`);
  })
  .option('template', {
    alias: 't',
    type: 'string',
    choices: templates,
    description: '[-t] The template name'
  })
  .option('out', {
    alias: 'o',
    type: 'string',
    description: 'The output folder'
  })
  .demandCommand()

for (let t of templates) {
  parser.command(t.name, `create a ${t.name} type project`, () => {
  }, function () {
    const out = `t_${t.name}`;
    writeTemplate(t, {outFolder: out})
  })
}

parser.parse()
