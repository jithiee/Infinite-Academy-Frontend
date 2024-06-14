import React from 'react'

const Marks = ({data}) => {
    const months = ['June', 'July', 'August', 'September', 'October', 'November', 'December', 'January', 'February', 'March'];

    return (
        <div className="overflow-x-auto bg-white">
       
       <table>
        <tr>
            <th colspan="26">Table Name</th>
        </tr>
        <tr>
            <th rowspan="2">Subject</th>
            <th rowspan="2">Teacher</th>
              {months.map(month => (
            <th key={month} className="px-4 py-2 text-left" colSpan='2'>{month}</th>
          ))}
        </tr>
        <tr>
            <th>Total</th>
            <th>Mark</th>
            <th>Total</th>
            <th>Mark</th>
            <th>Total</th>
            <th>Mark</th>
            <th>Total</th>
            <th>Mark</th>
            <th>Total</th>
            <th>Mark</th>
            <th>Total</th>
            <th>Mark</th>
            <th>Total</th>
            <th>Mark</th>
            <th>Total</th>
            <th>Mark</th>
            <th>Total</th>
            <th>Mark</th>
            <th>Total</th>
            <th>Mark</th>
        </tr>
        <tr>
        <td>Math</td>
        <td>Mr. Smith</td>
        <td>100</td>
        <td>85</td>
        <td>100</td>
        <td>88</td>
        <td>100</td>
        <td>90</td>
        <td>100</td>
        <td>82</td>
        <td>100</td>
        <td>85</td>
        <td>100</td>
        <td>85</td>
        <td>100</td>
        <td>88</td>
        <td>100</td>
        <td>90</td>
        <td>100</td>
        <td>82</td>
        <td>100</td>
        <td>85</td>
      </tr>
      <tr>
        <td>Science</td>
        <td>Ms. Johnson</td>
        <td>100</td>
        <td>80</td>
        <td>100</td>
        <td>82</td>
        <td>100</td>
        <td>85</td>
        <td>100</td>
        <td>85</td>
        <td>100</td>
        <td>85</td>
        <td>100</td>
        <td>82</td>
        <td>100</td>
        <td>85</td>
        <td>100</td>
        <td>85</td>
        <td>100</td>
        <td>85</td>
        <td>100</td>
        <td>82</td>
      </tr>
    </table>
      </div>
  )
}

export default Marks