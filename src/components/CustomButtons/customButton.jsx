export const CustomButton = ({ children }) => {
    return (
        <div className="mt-3">
            <button className="bg-Dark text-white p-2 rounded-lg  w-[100%]">
                {children}
            </button>
        </div>
    )
}