import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';

const TeacherProfile = ({ isClassTeacher }) => {
  const students = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
    { id: 3, name: 'Michael Johnson' },
    { id: 4, name: 'Emily Davis' },
  ];

  const leaveApplications = [
    { id: 1, studentName: 'John Doe', reason: 'Medical', status: 'Pending' },
    { id: 2, studentName: 'Jane Smith', reason: 'Personal', status: 'Approved' },
    { id: 3, studentName: 'Michael Johnson', reason: 'Family', status: 'Pending' },
  ];

  const [selectedClass, setSelectedClass] = useState('');
  const [selectedDivision, setSelectedDivision] = useState('');
  const [marks, setMarks] = useState({});
  const [post, setPost] = useState('');
  const [attendance, setAttendance] = useState({});
  const [activeSection, setActiveSection] = useState('uploadPost');

  const handleClassChange = (e) => {
    setSelectedClass(e.target.value);
  };

  const handleDivisionChange = (e) => {
    setSelectedDivision(e.target.value);
  };

  const handleMarkChange = (studentId, subject, mark) => {
    setMarks({
      ...marks,
      [studentId]: {
        ...marks[studentId],
        [subject]: mark
      }
    });
  };

  const handlePostChange = (e) => {
    setPost(e.target.value);
  };

  const handleAttendanceChange = (studentId, isPresent) => {
    setAttendance({
      ...attendance,
      [studentId]: isPresent
    });
  };

  const approveLeave = (id) => {
    const updatedLeaveApplications = leaveApplications.map(app =>
      app.id === id ? { ...app, status: 'Approved' } : app
    );
    setLeaveApplications(updatedLeaveApplications);
  };

  return (
    <div className="container mx-auto p-6 bg-gradient-to-b from-gray-200 to-gray-400 rounded-lg shadow-lg bg-gray-300">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">Teacher Profile</h1>

      {/* Profile Details */}
      <div className="mb-8 p-6 bg-gradient-to-r from-blue-100 to-blue-200 rounded-lg shadow-lg border border-blue-500">
        <h2 className="text-2xl font-bold mb-3 text-blue-700">My Profile</h2>
        <p className="text-gray-900 mb-1"><span className="font-semibold text-blue-600">Name:</span> Jane Smith</p>
        <p className="text-gray-900"><span className="font-semibold text-blue-600">Subject:</span> Mathematics</p>
      </div>

      {/* Navigation Bar */}
      <nav className="mb-6">
        <ul className="flex justify-center space-x-4">
          <li>
            <button
              className={`p-2 rounded-md ${activeSection === 'uploadPost' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
              onClick={() => setActiveSection('uploadPost')}
            >
              Upload Post
            </button>
          </li>
          <li>
            <button
              className={`p-2 rounded-md ${activeSection === 'addMarks' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
              onClick={() => setActiveSection('addMarks')}
            >
              Add Marks
            </button>
          </li>
          {isClassTeacher && (
            <>
              <li>
                <button
                  className={`p-2 rounded-md ${activeSection === 'approveLeave' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
                  onClick={() => setActiveSection('approveLeave')}
                >
                  Approve Leave
                </button>
              </li>
              <li>
                <button
                  className={`p-2 rounded-md ${activeSection === 'markAttendance' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
                  onClick={() => setActiveSection('markAttendance')}
                >
                  Mark Attendance
                </button>
              </li>
            </>
          )}
        </ul>
      </nav>

      {/* Content Sections */}
      {activeSection === 'uploadPost' && (
        <div className="mb-8 bg-white shadow-md rounded-md p-6">
            <h2 className="text-xl font-semibold mb-4">Upload Post</h2>
            <textarea
            className="border-2 border-gray-300 p-2 rounded-md w-full outline-none text-sm"
            placeholder="Write something..."
            value={post}
            onChange={handlePostChange}
            ></textarea>
            <button className="bg-blue-500 text-white p-2 mt-4 rounded-md hover:bg-blue-600 transition-colors duration-300 ease-in-out">
            Submit
            </button>
        </div>
        )}

        {activeSection === 'addMarks' && (
        <div className="mb-8 p-6 bg-white rounded-lg shadow-md border border-gray-300">
            <h2 className="text-2xl font-bold mb-4 text-blue-600">Add Marks</h2>
            <div className="flex items-center mb-4">
            <select className="border p-3 mr-4 rounded-md outline-none bg-blue-50 focus:ring-2 focus:ring-blue-400" value={selectedClass} onChange={handleClassChange}>
                <option value="" disabled>Select Class</option>
                <option value="Class 1">Class 1</option>
                <option value="Class 2">Class 2</option>
            </select>
            <select className="border p-3 rounded-md outline-none bg-blue-50 focus:ring-2 focus:ring-blue-400" value={selectedDivision} onChange={handleDivisionChange}>
                <option value="" disabled>Select Division</option>
                <option value="A">A</option>
                <option value="B">B</option>
            </select>
            </div>
            {selectedClass && selectedDivision && (
            <div>
                <h3 className="text-lg font-semibold mb-3 text-blue-500">Students</h3>
                {students.map(student => (
                <div key={student.id} className="flex items-center mb-3 p-2 bg-gray-50 rounded-md shadow-sm">
                    <p className="mr-4 text-gray-800 font-medium">{student.name}</p>
                    <input
                    type="text"
                    placeholder="Subject"
                    className="border p-2 mr-2 rounded-md outline-none bg-blue-50 focus:ring-2 focus:ring-blue-400"
                    onChange={(e) => handleMarkChange(student.id, 'subject', e.target.value)}
                    />
                    <input
                    type="number"
                    placeholder="Marks"
                    className="border p-2 rounded-md outline-none bg-blue-50 focus:ring-2 focus:ring-blue-400"
                    onChange={(e) => handleMarkChange(student.id, 'mark', e.target.value)}
                    />
                </div>
                ))}
            </div>
            )}
        </div>
        )}


        {isClassTeacher && activeSection === 'approveLeave' && (
        <div className="mb-8 p-6 bg-white rounded-lg shadow-md border border-gray-300">
            <h2 className="text-2xl font-bold mb-4 text-blue-600">Approve Leave Applications</h2>
            {leaveApplications.map(app => (
            <div key={app.id} className="flex items-center justify-between mb-4 p-3 bg-gray-50 rounded-md shadow-sm">
                <p className="text-gray-800 font-medium">{app.studentName} - {app.reason} <span className={`font-semibold ${app.status === 'Pending' ? 'text-yellow-500' : 'text-green-500'}`}>({app.status})</span></p>
                {app.status === 'Pending' && (
                <button
                    className="bg-blue-500 text-white p-2 rounded-md transition duration-300 ease-in-out transform hover:scale-105"
                    onClick={() => approveLeave(app.id)}
                >
                    Approve
                </button>
                )}
            </div>
            ))}
        </div>
        )}


        {isClassTeacher && activeSection === 'markAttendance' && (
        <div className="mb-8 p-6 bg-white rounded-lg shadow-md border border-gray-300">
            <h2 className="text-2xl font-bold mb-4 text-blue-600">Mark Attendance</h2>
            {students.map(student => (
            <div key={student.id} className="flex items-center mb-4 p-2 bg-gray-50 rounded-md shadow-sm">
                <p className="mr-4 text-gray-800 font-medium w-1/2">{student.name}</p>
                <button
                className={`p-2 mr-2 rounded-md transition duration-300 ease-in-out transform hover:scale-105 ${attendance[student.id] ? 'bg-green-500 text-white' : 'bg-gray-300 text-gray-700'}`}
                onClick={() => handleAttendanceChange(student.id, true)}
                >
                Present
                </button>
                <button
                className={`p-2 rounded-md transition duration-300 ease-in-out transform hover:scale-105 ${attendance[student.id] === false ? 'bg-red-500 text-white' : 'bg-gray-300 text-gray-700'}`}
                onClick={() => handleAttendanceChange(student.id, false)}
                >
                Absent
                </button>
            </div>
            ))}
        </div>
        )}

    </div>
  );
};

export default TeacherProfile;
