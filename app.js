
const fs = require('fs')

// fs.writeFileSync('notes.txt')
// const validator = require('validator')
// console.log(process.argv)

const notes = require('./notes')
const yargs = require("yargs");


yargs.command({
  command: "add",
  describe: "Add notes",
    builder: {
    name: {
      describe: "This is student name",
      demandOption: true,
      type: "string",
    },
    student_id: {
        describe: "This is student id",
        demandOption: true,
        type: "number",
      },
      grade: {
        describe: "This is student grade",
        demandOption: true,
        type: "Number",
      },
      comment: {
        describe: "write a comment",
        demandOption: false,
        type: "string",
      }

  },
  handler: (argv) => {
     notes.addNote(argv.name,argv.student_id,argv.grade,argv.comment)

},
});

yargs.command({
  command: "read",
  builder: {
    student_id: {
      describe: "This is student id",
      demandOption: true,
      type: "number",
    }

  },
  handler: (argv) => {
    notes.readNote(argv.student_id)
  

},
});

yargs.command({
  command: "delete",
  describe: "Delete note",
  builder: {
      student_id: {
      describe: "This is student id",
      demandOption: true,
      type: "number",
    },

  },
  handler: (argv) => {
    notes.removeNote(argv.student_id)
},
});

yargs.command({
  command: "list",
  describe: "List note",
  handler: (argv) => {
    notes.listNote(argv.student_id)
  },
});

yargs.parse()


