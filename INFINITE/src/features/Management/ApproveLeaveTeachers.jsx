import React from 'react';

const ApproveLeaveTeachers = () => {
  return (
    <section className="min-h-screen bg-gradient-to-r from-slate-300 to-slate-500">
      <div className="container mx-auto py-5">
        <div className="flex justify-center">
          <div className="w-full xl:w-10/12">
            <div className="bg-slate-500 rounded-2xl p-5 shadow-lg border border-white border-opacity-5">
              <div className="text-center pt-3 pb-2">
                <h2 className="text-white text-2xl font-bold my-4">Approve Leave</h2>
              </div>
              <div className="overflow-x-auto">
                <table className="table-auto w-full text-white border-none">
                  <thead>
                    <tr className='border-b-4 border-white'>
                      <th className="px-4 py-2">Name</th>
                      <th className="px-4 py-2">Subject</th>
                      <th className="px-4 py-2">Date</th>
                      <th className="px-4 py-2">Reason</th>
                      <th className="px-4 py-2">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                     <tr className="font-normal border-b-2 border-white">
                      <td className="px-4 py-8">Anu</td>
                      <td className="px-4 py-2">Maths</td>
                      <td className="px-4 py-2">10/06/24 <br />- 11/06/24</td>
                      <td className="px-4 py-2">Medical Leave</td>
                      <td className="px-4 py-2">
                        <button className="bg-green-500 text-white px-2 py-1 rounded">Approved</button>
                      </td>
                    </tr>
                    <tr className="font-normal border-b-1 border-white">
                      <td className="px-4 py-2">Kumar</td>
                      <td className="px-4 py-2">Physics</td>
                      <td className="px-4 py-2">10/06/24 <br />- 11/06/24</td>
                      <td className="px-4 py-2">Medical Leave</td>
                      <td className="px-4 py-2">
                        <button className="bg-orange-500 text-white px-2 py-1 rounded">Approve</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ApproveLeaveTeachers;
