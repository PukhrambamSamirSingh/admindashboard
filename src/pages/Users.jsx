import { useState } from "react";
import DataTable from "../components/DataTable"
import { userRows } from "../data";
import Add from "../components/Add";


const Users = () => {
    const [open, setOpen] = useState(false)
    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
            field: 'img',
            headerName: 'Avatar',
            width: 100,
            renderCell: (params) => {
                return <img className='w-8 h-8 rounded-full object-cover' src={params.row.img || "https://icon-library.com/images/no-photo-icon/no-photo-icon-0.jpg"} alt="" />
            }
        },
        {
            field: 'firstName',
            headerName: 'First name',
            type: 'string',
            width: 150
        },
        {
            field: 'lastName',
            headerName: 'Last name',
            type: 'string',
            width: 150
        },
        {
            field: 'email',
            headerName: 'Email',
            type: 'string',
            width: 200
        },
        {
            field: 'phone',
            headerName: 'Phone',
            type: 'string',
            width: 150
        },
        {
            field: 'createdAt',
            headerName: 'created At',
            type: 'string',
            width: 100
        },
        {
            field: "verified",
            headerName: "Verified",
            width: 150,
            type: "boolean"
        }
    ];

    return (
        <div className="w-full h-full">
            <div className="flex items-center gap-5 mb-5">
                <h1 className="text-xl font-bold">Users</h1>
                <button onClick={() => setOpen(true)} className="border border-gray-400 p-1.5 text-sm">Add New User</button>
            </div>
            <DataTable slug="users" columns={columns} rows={userRows} />
            {open && <Add slug="user" columns={columns} setOpen={setOpen} />}
        </div>
    )
}

export default Users
