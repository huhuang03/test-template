import Project from './project'

const argv = require('yargs')
.option('name', {
    alias: 'n',
    type: 'string',
    description: 'The porject name'
})
.option('tName', {
    alias: 't',
    type: 'string',
    description: 'The template name'
})
.option('out', {
    alias: 'o',
    type: 'string',
    description: 'The output folder'
}).argv


new Project().build(new Config(argv.name, argv.tName, argv.out));