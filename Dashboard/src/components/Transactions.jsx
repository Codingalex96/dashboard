import { mockTransactions } from '../data/mockData';
import { Paper, Typography, Box } from '@mui/material';

function Transactions() {
  return (
    <Paper style={{ padding: '20px', marginTop: '20px', height: '300px', overflowY: 'scroll' }}>
      <Typography variant="h6">Recent Transactions</Typography>
      <Box>
        {mockTransactions.map((tx, index) => (
          <Box key={index} style={{ padding: '10px 0', borderBottom: '1px solid #ccc' }}>
            <Typography>Transaction ID: {tx.txId}</Typography>
            <Typography>User: {tx.user}</Typography>
            <Typography>Date: {tx.date}</Typography>
            <Typography>Cost: ${tx.cost}</Typography>
          </Box>
        ))}
      </Box>
    </Paper>
  );
}

export default Transactions;