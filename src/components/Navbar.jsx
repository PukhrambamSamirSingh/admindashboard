import { FiSearch } from "react-icons/fi"
import { MdOutlineNotificationsNone } from "react-icons/md"
import { AiOutlineExpand, AiOutlineSetting, AiOutlineAppstore } from "react-icons/ai"

const Navbar = () => {
    return (
        <div className="w-full p-5 flex justify-between">
            <div className="flex items-center gap-2">
                <img className="w-10 h-10 object-cover" src="https://cdn-icons-png.flaticon.com/512/6292/6292175.png" alt="" />
                <span className="font-bold">samiradmin</span>
            </div>
            <div className="flex items-center gap-5">
                <FiSearch className="text-lg hidden sm:flex" />
                <AiOutlineAppstore className="text-lg hidden sm:flex" />
                <AiOutlineExpand className="text-lg hidden sm:flex" />
                <div className="flex items-center relative">
                    <MdOutlineNotificationsNone className="text-lg" />
                    <span className="absolute w-4 h-4 bg-red-500 text-white top-[-10px] right-[-10px] flex items-center justify-center rounded-full text-sm">1</span>
                </div>
                <div className="flex items-center gap-2">
                    <img className="w-6 h-6 rounded-full object-cover" src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80" alt="" />
                    <span>Samir</span>
                </div>
                <AiOutlineSetting className="text-lg" />
            </div>
        </div>
    )
}

export default Navbar
