import React from 'react';

const LeaveLetterForm = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8  ">
            <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-lg shadow-lg">
                <div>
                    <h2 className="text-center text-3xl font-extrabold text-gray-900">Student Leave Application</h2>
                    <p className="mt-2 text-center text-sm text-gray-600">
                        Please fill in the details below
                    </p>
                </div>
                <form className="mt-8 space-y-6" action="#" method="POST">
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <label htmlFor="student-name" className="sr-only">Student Name</label>
                            <input id="student-name" name="student-name" type="text" required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Student Name" />
                        </div>
                        <div>
                            <label htmlFor="class" className="sr-only">Class</label>
                            <input id="class" name="class" type="text" required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Class" />
                        </div>
                        <div>
                            <label htmlFor="division" className="sr-only">Division</label>
                            <input id="division" name="division" type="text" required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Division" />
                        </div>
                        <div>
                            <label htmlFor="classteacher" className="sr-only">Class Teacher</label>
                            <select id="classteacher" name="classteacher" required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm">
                                <option value="" disabled selected>Select Class Teacher</option>
                                <option value="teacher1">Teacher 1</option>
                                <option value="teacher2">Teacher 2</option>
                                <option value="teacher3">Teacher 3</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="phone" className="sr-only">Phone</label>
                            <input id="phone" name="phone" type="number" required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Phone" />
                        </div>
                        <div>
                            <label htmlFor="start-date" className="sr-only">Start Date</label>
                            <input id="start-date" name="start-date" type="date" required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Start Date" />
                        </div>
                        <div>
                            <label htmlFor="end-date" className="sr-only">End Date</label>
                            <input id="end-date" name="end-date" type="date" required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="End Date" />
                        </div>
                        <div>
                            <label htmlFor="reason" className="sr-only">Reason for Leave</label>
                            <textarea id="reason" name="reason" rows="3" required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Reason for Leave"></textarea>
                        </div>
                    </div>
                    <div>
                        <button type="submit"
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Apply for Leave
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default LeaveLetterForm;
