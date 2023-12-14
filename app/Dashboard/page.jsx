'use client';

import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import TextField from '@mui/material/TextField';

const Dashboard = () => {
  const [showAddDetailsModal, setShowAddDetailsModal] = useState(false);
  const [type, setType] = useState('income');
  const [amount, setAmount] = useState('');
  const [data, setData] = useState([]);
  const [total, setTotal] = useState('');
  const [editItem, setEditItem] = useState(null);
  const [description, setDescription] = useState('');
  const [incomeTotal, setIncomeTotal] = useState('');
  const [expenseTotal, setExpenseTotal] = useState('');
  const [newDataArray, setNewDataArray] = useState(null);
  const [searchText, setSearchText] = useState('');
  const [incomeByCategory, setIncomeByCategory] = useState({});
  const [expenseByCategory, setExpenseByCategory] = useState({});

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('incomeExpenseData'));
    if (storedData) {
      setData(storedData);
      updateTotal(storedData);
      updateIncomeTotal(storedData);
      updateExpenseTotal(storedData);
    }
  }, []);

  useEffect(() => {
    if (newDataArray) {
      localStorage.setItem('incomeExpenseData', JSON.stringify(newDataArray));
      updateTotal(newDataArray);
      updateIncomeTotal(newDataArray);
      updateExpenseTotal(newDataArray);
    }
  }, [newDataArray]);  

  useEffect(() => {
    // Calculate income and expense by category when data changes
    const calculateByCategory = () => {
      const incomeCategories = {};
      const expenseCategories = {};

      data.forEach((item) => {
        const category = item.type === 'income' ? item.description : item.description;
        const amount = item.amount;

        if (item.type === 'income') {
          incomeCategories[category] = (incomeCategories[category] || 0) + amount;
        } else {
          expenseCategories[category] = (expenseCategories[category] || 0) + amount;
        }
      });

      setIncomeByCategory(incomeCategories);
      setExpenseByCategory(expenseCategories);
    };

    calculateByCategory();
  }, [data]);

  const handleEdit = (item) => {
    setEditItem(item);
    setType(item.type);
    setAmount(item.amount);
    setShowAddDetailsModal(true);
  };

  const handleDelete = (item) => {
    const updatedData = data.filter((entry) => entry !== item);
    setData(updatedData);
    setNewDataArray(updatedData); // Update the newDataArray state
    localStorage.setItem('incomeExpenseData', JSON.stringify(updatedData));
  
    // Recalculate totals
    updateTotal(updatedData);
    updateIncomeTotal(updatedData);
    updateExpenseTotal(updatedData);
  };

  const handleAddDetailsClick = () => {
    setEditItem(null);
    setShowAddDetailsModal(true);
  };

  const handleTypeChange = (event) => setType(event.target.value);
  const handleAmountChange = (event) => {
    const inputValue = event.target.value;
    setAmount(inputValue === '' ? '' : Number(inputValue));
  };

  const updateIncomeTotal = (data) => {
    setIncomeTotal((prevIncomeTotal) => {
      const incomeAmount = data.reduce((acc, curr) => (curr.type === 'income' ? acc + curr.amount : acc), 0);
      return incomeAmount;
    });
  };

  const updateExpenseTotal = (data) => {
    setExpenseTotal((prevExpenseTotal) => {
      const expenseAmount = data.reduce((acc, curr) => (curr.type === 'expense' ? acc + curr.amount : acc), 0);
      return expenseAmount;
    });
  };

  const updateTotal = (data) => {
    setTotal((prevTotal) => {
      const incomeTotal = data.reduce((acc, curr) => (curr.type === 'income' ? acc + curr.amount : acc), 0);
      const expenseTotal = data.reduce((acc, curr) => (curr.type === 'expense' ? acc + curr.amount : acc), 0);
      return incomeTotal - expenseTotal;
    });
  };

  // Filtered data based on the search text
  const filteredData = data.filter(item =>
    item.description.toLowerCase().includes(searchText.toLowerCase())
  );
  
  const handleSubmit = (event) => {
    event.preventDefault();
  
    const currentDate = new Date();
    const newData = {
      type,
      amount,
      description,
      date: currentDate.toISOString().split('T')[0],
      time: currentDate.toLocaleTimeString(),
    };
  
    if (editItem) {
      const updatedData = data.map((item) => (item === editItem ? newData : item));
      setData(updatedData);
      setNewDataArray(updatedData);
    } else {
      const updatedDataArray = [...data, newData];
      setData(updatedDataArray);
      setNewDataArray(updatedDataArray);
    }
  
    localStorage.setItem('incomeExpenseData', JSON.stringify(newDataArray));
  
    setShowAddDetailsModal(false);
    setEditItem(null);
    setAmount(0);
    setDescription('');
  };
  

  return (
    <div className="flex flex-col justify-center items-center">
     <div className="flex justify-between gap-4 text-center mt-2 text-2xl font-mono">
        <Button color="primary" variant='outlined' onClick={handleAddDetailsClick} className="mb-5">
          Add
        </Button>
        <h1 className={data.length > 0 ? 'hidden' : ''}>No data available</h1>
        <h1 className={data.length > 0 ? '' : 'hidden'}>List of Income & Expense</h1>
      </div>

      {showAddDetailsModal && (
              <Modal
              open={showAddDetailsModal}
              onClose={() => setShowAddDetailsModal(false)}
              aria-labelledby="add-details-modal-title"
              aria-describedby="add-details-modal-description"
            >
              <Box className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
              w-50% bg-white border-2 border-black rounded-5 shadow-2xl p-5'>

                <Typography id="add-details-modal-title" variant="h6" component="h2" className='flex justify-center'>
                  {editItem ? 'Edit Details' : 'Add Details'}
                </Typography>

                <form onSubmit={handleSubmit}>
                  {/* <Box sx={{ border: '1px solid #ddd', padding: '5px', display: 'flex', justifyContent: 'center' }}>
                    <Select value={type} onChange={handleTypeChange}>
                      <MenuItem value="income">Income</MenuItem>
                      <MenuItem value="expense">Expense</MenuItem>
                    </Select>
                  </Box> */}
                  <br />
                  <Box sx={{ border: '1px solid #ddd', padding: '5px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <label htmlFor="type" className='p-3'>Type:</label>
                    <Select
                      id="type"
                      value={type}
                      onChange={handleTypeChange}
                      style={{ minWidth: '150px', marginBottom: '10px' }}
                    >
                      <MenuItem value="income">Income</MenuItem>
                      <MenuItem value="expense">Expense</MenuItem>
                    </Select>

                    {type === 'income' ? (
                      <>
                        <label htmlFor="incomeDescription" className='p-3'>Income Description:</label>
                        <Select
                          id="incomeDescription"
                          value={description}
                          onChange={(event) => setDescription(event.target.value)}
                          style={{ minWidth: '150px', marginBottom: '10px' }}
                        >
                          <MenuItem value="Salary">Salary</MenuItem>
                          <MenuItem value="Profits">Profits</MenuItem>
                          <MenuItem value="Stocks">Stocks</MenuItem>
                          <MenuItem value="Royalties">Royalties</MenuItem>
                          <MenuItem value="Gift">Gift</MenuItem>
                          <MenuItem value="Bonus">Bonus</MenuItem>
                          <MenuItem value="Capital Gains">Capital Gains</MenuItem>
                          {/* Add more income-related menu items as needed */}
                        </Select>
                      </>
                    ) : (
                      <>
                        <label htmlFor="expenseDescription" className='p-3'>Expense Description:</label>
                        <Select
                          id="expenseDescription"
                          value={description}
                          onChange={(event) => setDescription(event.target.value)}
                          style={{ minWidth: '150px', marginBottom: '10px' }}
                        >
                          <MenuItem value="Dues">Dues</MenuItem>
                          <MenuItem value="Rent">Rent</MenuItem>
                          <MenuItem value="Food">Food</MenuItem>
                          <MenuItem value="Transportation">Transportation</MenuItem>
                          <MenuItem value="Losses">Losses</MenuItem>
                          <MenuItem value="Emergencies">Emergencies</MenuItem>
                          <MenuItem value="Bills">Bills</MenuItem>
                          <MenuItem value="Taxes">Taxes</MenuItem>
                          {/* Add more expense-related menu items as needed */}
                        </Select>
                      </>
                    )}

                    <input
                      type="text"
                      placeholder="Enter additional details"
                      value={description}
                      onChange={(event) => setDescription(event.target.value)}
                      style={{ marginBottom: '10px' }}
                    />

                    {/* <Button color="primary" type="submit">
                      Save
                    </Button> */}
                  </Box>


                  <br />
                  <Box sx={{ border: '1px solid #ddd', padding: '5px', display: 'flex', justifyContent: 'center' }}>
                    <label htmlFor="amount" className='p-3'>Amount:</label>
                    <input
                      type="text"  // Use text type instead of number to allow custom validation
                      id="amount"
                      placeholder="Enter Amount"
                      value={amount}
                      onChange={handleAmountChange}
                      onKeyDown={(e) => {
                        if (!/[0-9]/.test(e.key) && !['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
                          e.preventDefault();
                        }
                      }}
                    />
                  </Box>
                  <br />
                  <Box className='flex justify-center'>
                    <Button color="primary" type="submit">
                      Save
                    </Button>
                  </Box>
                </form>

              </Box>
            </Modal>
      )}
      <TextField
        id="standard-basic"
        label="Search" variant="outlined"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        fullWidth
        size="small" 
        className=""
      />
      {filteredData.length > 0 && (
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 550 }} aria-label="simple table">
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
            {filteredData.map((item) => (
              <TableRow className=':last-child > td, :last-child > th { border-0 }' key={item.amount}>
                <TableCell component="th" scope="row">
                  {item.type}
                </TableCell>
                <TableCell align="right">{item.description}</TableCell>
                <TableCell align="right">${item.amount}</TableCell>
                <TableCell align="right">{item.date}</TableCell>
                <TableCell align="right">{item.time}</TableCell>
                <TableCell align="right">
                  <IconButton variant="outlined" color='primary' onClick={() => handleEdit(item)}><EditIcon/></IconButton>
                </TableCell>
                <TableCell align="right">
                  <IconButton aria-label='delete' variant="outlined" color="error" onClick={() => handleDelete(item)}><DeleteIcon /></IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        </TableContainer>
      )}
      <br/>
      <Box sx={{ border: '1px solid #ddd', padding: '5px', display: 'flex', justifyContent: 'center' }}>
        <Typography variant="h6">Total :</Typography>
        <Typography variant="h6" color="primary">
          {total > 0 ? `+${total}` : total}
        </Typography>
      </Box>
      
      <div className='flex gap-5'>
        <Box className='bg-green-200' sx={{padding: '10px', textAlign: 'center', marginTop: '5px' }}>
          <h2>Total Income: ${incomeTotal}</h2>
        </Box>

        <Box className='bg-red-300' sx={{padding: '10px', textAlign: 'center', marginTop: '5px' }}>
          <h2>Total Expense: ${expenseTotal}</h2>
        </Box>
      </div>

      <Box className='flex justify-center gap-10' variant='outlined'>
        {/* Display income by category */}
        <div>
          <h2 className='text-center mt-5 text-success'>Incomes:</h2>
          {Object.entries(incomeByCategory).map(([category, amount]) => (
            <div key={category} className="text-center">
              <span>{category}:</span>
              <span>${amount}</span>
            </div>
          ))}
        </div>

        {/* Display expense by category */}
        <div>
          <h2 className='text-center mt-5 text-error' >Expenses:</h2>
          {Object.entries(expenseByCategory).map(([category, amount]) => (
            <div key={category} className="text-center">
              <span>{category}:</span>
              <span>${amount}</span>
            </div>
          ))}
        </div>
      </Box>

    </div>
  );
};

// export { Dashboard, incomeTotal, expenseTotal, total };
export default Dashboard;