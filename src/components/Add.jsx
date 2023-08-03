import PropTypes from "prop-types"
import { MdOutlineCancel } from "react-icons/md"

const Add = (props) => {
    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <div className="w-full h-full absolute top-0 left-0 bg-gray-900/40 flex items-center justify-center">
            <div className="p-12 rounded-xl bg-gray-900 relative">
                <MdOutlineCancel className="text-xl cursor-pointer absolute top-2 right-2" onClick={() => props.setOpen(false)} />
                <h1 className="text-2xl font-bold mb-10">Add new {props.slug}</h1>
                <form className="flex justify-between max-w-lg flex-wrap" onSubmit={handleSubmit}>
                    {props.columns.filter(item => item.field !== "id" && item.field !== "img").map((column) => (
                        <div className="flex flex-col gap-3 mb-5" key={column.field}>
                            <label className="text-sm" htmlFor="">{column.headerName}</label>
                            <input className="p-2 bg-transparent text-white outline-none border border-gray-600 rounded-lg" type={column.type} placeholder={column.field} />
                        </div>
                    ))}
                    <button className="w-full border border-gray-500 p-2 rounded-lg">Send</button>
                </form>
            </div>
        </div>
    )
}

export default Add
Add.propTypes = {
    slug: PropTypes.string.isRequired,
    columns: PropTypes.array.isRequired,
    setOpen: PropTypes.func.isRequired
}
