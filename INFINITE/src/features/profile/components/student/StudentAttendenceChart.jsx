import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'late', value: 52 },
  { name: 'present', value: 85 },
  { name: 'excused', value: 50 },
  { name: 'leave', value: 20 }  
];

const COLORS = ['#FFBB28','#00C49F','#FF8042','#FF6666' ,];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
   <svg>
  <text 
    x={x} 
    y={y} 
    fill="black" 
    textAnchor={x > cx ? 'start' : 'end'} 
    dominantBaseline="central"
  >
    {`${data[index].name}: ${data[index].value}`}
    <tspan className="percentage" x={x} dy="1.2em">
      {`${(percent * 100).toFixed(0)}%`}
    </tspan>
  </text>
  <style>
    {`
      .percentage {
        visibility: hidden;
      }
      text:hover .percentage {
        visibility: visible;
      }
    `}
  </style>
</svg>

  );
};

const StudentAttendanceChart = () => {
  return (
    <div>
      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={100} // Adjust the outer radius to make the pie smaller
            innerRadius={40} // Adjust the inner radius to control the thickness of the slices
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default StudentAttendanceChart;
