import React from 'react'
import './table.scss'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'

function TableData() {
    function createData(id, Product, customer, data, amount , paymentMethod , status) {
      return { id, Product, customer, data, amount, paymentMethod, status }
    }

    
    const rows = [
      createData(
        '1',
        'Amazon Card',
        'Bolu Adesanyan',
        '3 sept',
        '$200',
        'Online',
        'confirmed'
      ),
      createData(
        '2',
        'Apple Card',
        'Mike Smith',
        '3 April',
        '$4500',
        'Online',
        'pending'
      ),
      createData(
        '3',
        'Tesla Card',
        'Moreno',
        '2 sept',
        '$500',
        'Payment on Delivery',
        'Pending'
      ),
      createData(
        '4',
        'Amazon Card',
        'Bolu',
        '3 sept',
        '$2000',
        'Online',
        'confirmed'
      ),
      createData(
        '5',
        'Itunes Card',
        'Bolu',
        '5 August',
        '$680',
        'Online',
        'confirmed'
      ),
    ]
  return (
    <div className='tableContainer'>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell align='center'>Tracking Id</TableCell>
              <TableCell align='center' className='tableCell'>Customer</TableCell>
              <TableCell align='center' className='tableCell'>Data</TableCell>
              <TableCell align='center' className='tableCell'>Product</TableCell>
              <TableCell align='center' className='tableCell'>Amount</TableCell>
              <TableCell align='center' className='tableCell'>Payment Method</TableCell>
              <TableCell align='center' className='tableCell'>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align='center' component='th' scope='row'>
                  {row.id}
                </TableCell>
                <TableCell align='center'>{row.Product}</TableCell>
                <TableCell align='center'>{row.customer}</TableCell>
                <TableCell align='center'>{row.data}</TableCell>
                <TableCell align='center'>{row.amount}</TableCell>
                <TableCell align='center'>{row.paymentMethod}</TableCell>
                <TableCell className={row.status === 'confirmed' ? 'success' : 'delay'} align='center'>{row.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default TableData