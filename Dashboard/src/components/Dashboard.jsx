import { Grid, Paper, Typography } from '@mui/material';
import Transactions from './Transactions';
import { mockTransactions } from '../data/mockData';  // Import the mock transaction data

function Dashboard() {
  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom>Dashboard</Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <Paper style={{ padding: '20px' }}>
            <Typography variant="h6">Sales Obtained</Typography>
            <Typography variant="h4">837</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper style={{ padding: '20px' }}>
            <Typography variant="h6">New Clients</Typography>
            <Typography variant="h4">86,435</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper style={{ padding: '20px' }}>
            <Typography variant="h6">Traffic Received</Typography>
            <Typography variant="h4">23,784,133</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper style={{ padding: '20px' }}>
            <Typography variant="h6">Revenue Generated</Typography>
            <Typography variant="h4">$271,434.63</Typography>
          </Paper>
        </Grid>
      </Grid>
      
      {/* Pass the mock transactions to the Transactions component */}
      <Transactions transactions={mockTransactions} />
    </div>
  );
}

export default Dashboard;