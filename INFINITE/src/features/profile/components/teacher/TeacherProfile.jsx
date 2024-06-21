import React, { useState } from 'react';
import TeacherNavbar from './TeacherNavbar';
import AddMark from './AddMark';
import MarkAttendence from './MarkAttendence';
import ApproveLeave from './ApproveLeave';
import PostForm from '../../../posts/components/PostForm';

const TeacherProfile = ({ isClassTeacher }) => {
  const [activeSection, setActiveSection] = useState('addmarks'); // Default active section

  const renderContent = () => {
    switch (activeSection) {
      case 'uploadPost':
        return <PostForm />;
      case 'addmarks':
        return <AddMark/>;
      case 'markattendance':
        return <MarkAttendence/>;
      case 'approveleave':
        return <ApproveLeave />;
      default:
        return null;
    }
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
      <TeacherNavbar isClassTeacher={isClassTeacher} setActiveSection={setActiveSection} />

      {/* Content Sections */}
      <div className="mt-8">
        {renderContent()}
      </div>
    </div>
  );
};

export default TeacherProfile;
