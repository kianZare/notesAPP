const notes = [
    {
        id: 2,
        title: 'Note 2',
        body: 'This is note 2',
        updated:"2022-10-31T15:03:23.556Z",
    },
    {
        id: 1,
        title: 'Note 1',
        body: 'This is note 1',
        updated:"2022-10-31T15:02:00.411Z",
    },
];


class NotesAPI {
    static getAllNotes() {
        const savedNotes = JSON.parse(localStorage.getItem("notes-app")) || [];
        return savedNotes.sort((a, b) => {
            return new Date(a.updated) > new Date(b.updated) ? -1 : 1
        });
    }
    static saveNote(noteToSave) {
        // 1. existed or Not
        const notes = NotesAPI.getAllNotes();
        const existedNote = notes.find((n) => n.id == noteToSave.id);

        if (existedNote) {
            existedNote.title = noteToSave.title;
            existedNote.body = noteToSave.body;
            existedNote.updated = new Date().toISOString();
        } else {
            noteToSave.id = new Date().getTime();
            noteToSave.updated = new DataTransfer().toISOString();
            notes.push(noteToSave)        
        }
        localStorage.setItem("notes-app", JSON.stringify(notes));
    }
    static deleteNote(id) {
        const notes = NotesAPI.getAllNotes();
        const filtedrNotes = notes.filter(n => n.id !== id);
        localStorage.setItem("notes-app", JSON.stringify(filtedrNotes));
    }
};

console.log(NotesAPI.deleteNote());
