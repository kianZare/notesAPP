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
        const savedNotes = notes || [];
        return savedNotes.sort((a, b) => {
            return new Date(a.updated) > new Date(b.updated) ? -1 : 1
        });
    }
    saveNote() {

    }
    deleteNote() {

    }
};

console.log(NotesAPI.getAllNotes())