// components/Table.jsx
import React from 'react';
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const CustomTable = ({ data, handleEdit, handleDelete }) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Type</TableCell>
            <TableCell align="right">Description</TableCell>
            <TableCell align="right">Amount</TableCell>
            <TableCell align="right">Date</TableCell>
            <TableCell align="right">Time</TableCell>
            <TableCell align="right">Edit</TableCell>
            <TableCell align="right">Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item) => (
            <TableRow key={item.amount}>
              <TableCell component="th" scope="row">
                {item.type}
              </TableCell>
              <TableCell align="right">{item.description}</TableCell>
              <TableCell align="right">${item.amount}</TableCell>
              <TableCell align="right">{item.date}</TableCell>
              <TableCell align="right">{item.time}</TableCell>
              <TableCell align="right">
                <IconButton variant="outlined" color='primary' onClick={() => handleEdit(item)}>
                  <EditIcon />
                </IconButton>
              </TableCell>
              <TableCell align="right">
                <IconButton aria-label='delete' variant="outlined" color="error" onClick={() => handleDelete(item)}>
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CustomTable;
