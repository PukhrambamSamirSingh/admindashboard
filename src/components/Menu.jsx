import { Link } from "react-router-dom"
import { menu } from "../data"

const Menu = () => {
    return (
        <div className="w-full">
            {menu.map((item) => (
                <div className="flex flex-col gap-2 mb-5" key={item.id}>
                    <span className="uppercase hidden lg:flex">{item.title}</span>
                    {item.listItems.map((listItem) => (
                        <Link to={listItem.url} className="flex items-center gap-2 p-2 hover:bg-gray-900" key={listItem.id}>
                            <img className="w-6 h-6 object-contain" src={listItem.icon} alt="" />
                            <span className="text-sm font-thin hidden lg:flex">{listItem.title}</span>
                        </Link>
                    ))}
                </div>
            ))}
        </div>
    )
}

export default Menu
