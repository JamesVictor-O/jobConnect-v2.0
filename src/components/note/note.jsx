import { useState } from "react"

const Note = () => {
    const [noteContainer, setNoteContainer]=useState([
        {
            id: 1,
            note: "complete task one",
            done:false
        },
        {
            id: 2,
            note: "complete task two",
            done:true
        },
        {
            id: 3,
            note: "complete task three",
            done:false
        },
    ])
    const [note, setNote] = useState("")
    
  const handleChange = (e) => {
        setNote(e.target.value)
    }
   const handleAddNewNote = () => {
       if (note === "") return;
       const new_Note_Id = note.length + 1;
       const newNote = { id: new_Note_Id, note , done:false}
       setNoteContainer([...noteContainer, newNote])
       setNote("")
    }
    const handleRemoveNote = (id) => {
      const  updateNoteContainer=noteContainer.map(note => {
            if (note.id === id) {
                return {...note, done:!note.done}
            }
            return note
        })
        setNoteContainer(updateNoteContainer)
       
    }
    return (
        <div className="p-3 bg-white mt-6 md:flex flex-col">
            <header className="flex flex-row items-center justify-between">
                <div className="flex flex-row">
                    <h2>Note</h2>
                    <span className="ml-2 rounded-3xl bg-gray-400 text-white p-[2px] px-1">{ noteContainer.length}</span>
                </div>
                <div>
                    <p>more</p>
                </div>
            </header>
            <div className="mt-4">
                {
                    noteContainer.map(note => (
                        <div key={note.id}>
                            <input type="checkbox" checked={note.done} onChange={()=> handleRemoveNote(note.id)} />
                            <span className={`ml-2 ${note.done ? "line-through": null}`}>{ note.note}</span>
                        </div>
                    ))
                }
            </div>
            <div className="border flex flex-rowitems-center mt-3 rounded-xl overflow-hidden px-1">
                <input type="text" value={note} placeholder="Add note" className="outline-none p-1 w-[98%]" onChange={handleChange} />
                <button className="bg-black text-white" onClick={handleAddNewNote}>➕</button>
            </div>
        </div>
    )
}
export default Note