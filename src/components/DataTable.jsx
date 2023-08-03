import { Box } from '@mui/material';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import PropTypes from "prop-types"
import { Link } from 'react-router-dom';
import { MdPageview } from "react-icons/md"
import { MdOutlineDelete } from "react-icons/md"

const DataTable = (props) => {
    const handleDelete = (id) => {
        console.log(id + "id has been deleted")
    }
    const actionColumns = {
        field: "action",
        headerName: "Action",
        width: 150,
        renderCell: (params) => {
            return (
                <div className='flex gap-4'>
                    <Link to={`/${props.slug}/${params.row.id}`}>
                        <MdPageview className='text-xl text-white' />
                    </Link>
                    <div className='cursor-pointer' onClick={() => handleDelete(params.row.id)}>
                        <MdOutlineDelete className='text-xl text-white' />
                    </div>
                </div>
            )
        }
    }

    return (
        <div>
            <Box sx={{ height: 500, width: '100%' }}>
                <DataGrid
                    className="bg-gray-600 p-5"
                    rows={props.rows}
                    columns={[...props.columns, actionColumns]}
                    initialState={{
                        pagination: {
                            paginationModel: {
                                pageSize: 10,
                            },
                        },
                    }}
                    slots={{ toolbar: GridToolbar }}
                    slotProps={{
                        toolbar: {
                            showQuickFilter: true,
                            quickFilterProps: { debounceMs: 500 }
                        }
                    }}
                    pageSizeOptions={[5]}
                    checkboxSelection
                    disableRowSelectionOnClick
                    disableColumnFilter
                    disableDensitySelector
                    disableColumnSelector
                />
            </Box>
        </div>
    )
}

export default DataTable
DataTable.propTypes = {
    rows: PropTypes.array.isRequired,
    columns: PropTypes.array.isRequired,
    slug: PropTypes.string.isRequired
}