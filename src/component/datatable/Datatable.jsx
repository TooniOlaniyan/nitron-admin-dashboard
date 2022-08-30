import React from 'react'
import './datatable.scss'
import { userRows , userColumns } from '../datatableSource'


import { DataGrid } from '@mui/x-data-grid'



function Datatable() {
  const action = [
    {
      field: 'action',
      headerName: 'Action',
      width: 160,
      renderCell: () => {
        return (
          <div className='actionCell'>
            <div className='viewButton'>View</div>
            <div className='deleteButton'>Delete</div>
          </div>
        )
      }
    }
  ]
  return (
    <div className='dataTable'>
      <div style={{ height: 650, width: '100%' }}>
        <DataGrid
          rows={userRows}
          columns={userColumns.concat(action)}
          pageSize={10}
          rowsPerPageOptions={[10]}
          checkboxSelection
        />
      </div>
    </div>
  )
}

export default Datatable