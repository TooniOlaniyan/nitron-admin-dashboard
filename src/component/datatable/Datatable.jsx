import React from 'react'
import './datatable.scss'
import { userRows , userColumns } from '../datatableSource'


import { DataGrid } from '@mui/x-data-grid'



function Datatable() {
  return (
    <div className='dataTable'>
      <div style={{ height: 650, width: '100%' }}>
        <DataGrid
          rows={userRows}
          columns={userColumns}
          pageSize={10}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
      </div>
    </div>
  )
}

export default Datatable