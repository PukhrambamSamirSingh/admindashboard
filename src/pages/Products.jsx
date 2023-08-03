import { useState } from "react"
import DataTable from "../components/DataTable"
import Add from "../components/Add"
import { products } from "../data"

const Products = () => {
    const [open, setOpen] = useState(false)
    const columns = [
        { field: "id", headerName: "ID", width: 90 },
        {
            field: "img",
            headerName: "Image",
            width: 100,
            renderCell: (params) => {
                return <img className='w-8 h-8 rounded-full object-cover' src={params.row.img} alt="" />
            }
        },
        {
            field: "title",
            headerName: "Title",
            type: "string",
            width: 250
        },
        {
            field: "color",
            headerName: "Color",
            type: "string",
            width: 150
        },
        {
            field: "price",
            headerName: "Price",
            type: "string",
            width: 100
        },
        {
            field: "producer",
            headerName: "Producer",
            type: "string",
            width: 150
        },
        {
            field: "createdAt",
            headerName: "Created At",
            type: "string",
            width: 100
        },
        {
            field: "inStock",
            headerName: "In Stock",
            type: "boolean",
            width: 150
        }
    ]

    return (
        <div className="w-full h-full">
            <div className="flex items-center gap-5 mb-5">
                <h1 className="text-xl font-bold">Products</h1>
                <button onClick={() => setOpen(true)} className="border border-gray-400 p-1.5 text-sm">Add New Products</button>
            </div>
            <DataTable slug="products" columns={columns} rows={products} />
            {open && <Add slug="product" columns={columns} setOpen={setOpen} />}
        </div>
    )
}

export default Products
