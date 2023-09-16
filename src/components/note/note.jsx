import { useState } from "react"

const Note = () => {
    const notes = [
        {
            id: 1,
            note:"complete task one"
        },
        {
            id: 2,
            note:"complete task two"
        },
        {
            id: 3,
            note:"complete task three"
        },
    ]
    const [allNotes, setAllNotes]=useState(notes)
    const [note, setNote] = useState("")
    
  const handleChange = (e) => {
        setNote(e.target.value)
    }
   const handleSubmit = () => {
       if (note === "") return;
       const newNote = { id: note.length + 1, note }
       setAllNotes([...allNotes, newNote])
       setNote("")
   }
    return (
        <div className="p-3 bg-white mt-6">
            <header className="flex flex-row items-center justify-between">
                <div className="flex flex-row">
                    <h2>Note</h2>
                    <span className="ml-2 rounded-3xl bg-gray-400 text-white p-[2px]">{ notes.length}</span>
                </div>
                <div>
                    <p>more</p>
                </div>
            </header>
            <div className="mt-4">
                {
                    allNotes.map(note => (
                        <div key={note.id}>
                            <input type="checkbox" />
                            <span className="ml-2">{ note.note}</span>
                        </div>
                    ))
                }
            </div>
            <div className="border flex flex-rowitems-center mt-3 rounded-xl overflow-hidden px-1">
                <input type="text" value={note} placeholder="Add note" className="outline-none p-1 w-[98%]" onChange={handleChange} />
                <button className="bg-black text-white" onClick={handleSubmit}>➕</button>
            </div>
        </div>
    )
}
export default Note