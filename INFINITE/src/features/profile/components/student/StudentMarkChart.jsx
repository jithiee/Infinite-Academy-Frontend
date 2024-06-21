// Import React and the required Recharts components
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';

// Sample data for the chart
const data = [
    { name: 'Jun', marks: 85 },  // June - 85 marks out of 100
    { name: 'Jul', marks: 78 },  // July - 78 marks out of 100
    { name: 'Aug', marks: 92 },  // August - 92 marks out of 100
    { name: 'Sept', marks: 74 },  // September - 74 marks out of 100
    { name: 'Oct', marks: 88 },  // October - 88 marks out of 100
    { name: 'Nov', marks: 95 },  // November - 95 marks out of 100
    { name: 'Dec', marks: 80 },  // December - 80 marks out of 100
    { name: 'Jan', marks: 90 },  // January - 90 marks out of 100
    { name: 'Feb', marks: 76 },  // February - 76 marks out of 100
    { name: 'Mar', marks: 89 }  // March - 89 marks out of 100
  ];
  

// React component to render the bar chart
const StudentMarkChart = () => {
  return (
    <ResponsiveContainer width="100%" height={250}>
    <BarChart data={data}>
      <XAxis dataKey="name" stroke="#8884d8" />
      <YAxis />
      <Tooltip />
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <Bar dataKey="marks" fill="#8884d8" barSize={20} />
    </BarChart>
  </ResponsiveContainer>
  
  );
};

// Export the component as default
export default StudentMarkChart;
