export const Inputform = ({ name, details, handleChange,value}) => (
    
    <div className=" w-[90%]">
        <label className="">{name}:</label>
        <input name={name} value={value} onChange={handleChange} required className="border-black border p-1 ml-1 rounded-lg md:w-[90%] mb-4 w-[100%] outline-none" />
    </div>
)
