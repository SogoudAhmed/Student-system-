const fs = require("fs");

const addNote = (name, student_id, grade, comment) => {
    const notes = loadNotes(); 
  
    const duplicate_id = notes.filter((note) => {
       
      return note.student_id === student_id;
    });
    console.log(duplicate_id);
  
    if (duplicate_id.length === 0) {
      notes.push(
        {
            name: name,
            student_id: student_id,
            grade: grade,
            comment, comment
        }
      );
      saveNotes(notes);
      console.log("Saved Successfully");
    } else {
      console.log("Error Duplicate student_id");
    }
  };
    //////////////////////////////////

  const loadNotes = () => {
  
    try {
      const dataBuffer = fs.readFileSync("notes.json").toString();
      return JSON.parse(dataBuffer);
    } catch (e) {
      return [];
    }
  };
  
  //////////////////////////////////
  const saveNotes = (notes) => {
    const saveData = JSON.stringify(notes);
    fs.writeFileSync("notes.json", saveData);
  };
  
  ////////////////////////////////////

  const readNote = (student_id) => {
    const notes = loadNotes()
    const note = notes.find((note) => {
        return note.student_id === student_id

    })
    console.log(note)
    if (note) {
        console.log(note)
        console.log(note.name)
        console.log(note.student_id)
        console.log(note.grade)
        console.log(note.comment)

    }
    
}

  ////////////////////////////////////

  const listNode = () => {
    const notes = loadNotes()
    notes.forEach((note) => {
        console.log(note.student_id)

    });
}
  ////////////////////////////////////

  
  
  const removeNote = (student_id) =>{
      const notes = loadNotes()
      const notesToKeep = notes.filter((note)=>{
         
          return note.student_id !== student_id

      })
      console.log(notesToKeep)
      saveNotes(notesToKeep)
     
  }

  /////////////////////////////
  
  module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    readNote: readNote,
    listNode: listNode
  }
  