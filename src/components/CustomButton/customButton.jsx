export const CustomButton = ({children, ...others}) => (
    <button {...others} className="border rounded-2xl bg-Dark p-1 text-white w-[100%]">
        {children}
    </button>

)
