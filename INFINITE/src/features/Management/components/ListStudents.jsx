import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faBan } from '@fortawesome/free-solid-svg-icons';

const classes = [
  { id: 1, name: 'Class 1' },
  { id: 2, name: 'Class 2' },
  // Add more classes as needed
];

const divisions = [
  { id: 1, name: 'A', classId: 1 },
  { id: 2, name: 'B', classId: 1 },
  { id: 3, name: 'A', classId: 2 },
  { id: 4, name: 'B', classId: 2 },
  // Add more divisions as needed
];

const students = [
  { id: 1, name: 'John Doe', classId: 1, divisionId: 1 },
  { id: 2, name: 'Jane Smith', classId: 1, divisionId: 2 },
  { id: 3, name: 'Alice Johnson', classId: 2, divisionId: 3 },
  { id: 4, name: 'Bob Brown', classId: 2, divisionId: 4 },
  // Add more students as needed
];

const ListStudents = () => {
  const [selectedClass, setSelectedClass] = useState('');
  const [selectedDivision, setSelectedDivision] = useState('');
  const [filteredStudents, setFilteredStudents] = useState([]);

  const handleClassChange = (event) => {
    setSelectedClass(event.target.value);
    setSelectedDivision('');
    setFilteredStudents([]);
  };

  const handleDivisionChange = (event) => {
    setSelectedDivision(event.target.value);
    const filtered = students.filter(
      (student) =>
        student.classId === parseInt(selectedClass) &&
        student.divisionId === parseInt(event.target.value)
    );
    setFilteredStudents(filtered);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex flex-col items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-3xl mb-6">
        <div className="w-full">
          <label className="block mb-2 text-lg font-semibold text-gray-700">
            Select Class:
          </label>
          <select
            value={selectedClass}
            onChange={handleClassChange}
            className="p-3 w-full border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">--Select Class--</option>
            {classes.map((cls) => (
              <option key={cls.id} value={cls.id}>
                {cls.name}
              </option>
            ))}
          </select>
        </div>

        {selectedClass && (
          <div className="w-full">
            <label className="block mb-2 text-lg font-semibold text-gray-700">
              Select Division:
            </label>
            <select
              value={selectedDivision}
              onChange={handleDivisionChange}
              className="p-3 w-full border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">--Select Division--</option>
              {divisions
                .filter((div) => div.classId === parseInt(selectedClass))
                .map((div) => (
                  <option key={div.id} value={div.id}>
                    {div.name}
                  </option>
                ))}
            </select>
          </div>
        )}
      </div>

      {filteredStudents.length > 0 && (
        <div className="w-full max-w-5xl bg-white rounded-lg shadow-md p-6 overflow-x-auto max-h-[400px]">
          <h2 className="text-xl font-bold mb-4 text-gray-800 text-center">
            Student List
          </h2>
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-4 py-2 text-sm font-semibold text-gray-700">
                  Name
                </th>
                <th className="px-4 py-2 text-sm font-semibold text-gray-700">
                  Email
                </th>
                <th className="px-4 py-2 text-sm font-semibold text-gray-700">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredStudents.map((student) => (
                <tr key={student.id} className="hover:bg-gray-100">
                  <td className="px-4 py-2 text-left text-sm text-gray-700">
                    {student.name}
                  </td>
                  <td className="px-4 py-2 text-left text-sm text-gray-700">
                    {/* Replace with actual email */}
                    example@example.com
                  </td>
                  <td className="px-4 py-2 text-left text-sm text-gray-700">
                    <a
                      href="#"
                      className="text-info hover:text-blue-500 me-3"
                      title="View"
                    >
                      <FontAwesomeIcon icon={faEye} />
                    </a>
                    <a
                      href="#"
                      className="text-danger hover:text-red-500"
                      title="Delete"
                    >
                      <FontAwesomeIcon icon={faBan} />
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ListStudents;
