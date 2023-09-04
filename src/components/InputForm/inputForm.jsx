export const Inputform = ({handleChange, label, ...others} ) => (
    
    <div className=" w-[100%] relative ">
        {label ?
            (<label className={`${
                others.value ? "shrink" : ""
            }`}>
                {label}
            </label>)
            : null}
        <input onChange={handleChange} {...others} className=" bg-white text-gray-400 text-[18px] block border-black border p-1 pl-2 ml-1 rounded-lg md:w-[100%] w-[95%] mb-3  outline-none" />
    </div>
)
