import { mockRevenueData } from '../data/mockData';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

function RevenueChart() {
  return (
    <BarChart width={600} height={300} data={mockRevenueData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="revenue" fill="#82ca9d" />
    </BarChart>
  );
}

export default RevenueChart;