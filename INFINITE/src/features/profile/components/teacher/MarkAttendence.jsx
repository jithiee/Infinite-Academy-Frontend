import React from 'react'

const MarkAttendence = () => {
  return (
    <div>
      <h1>Mark Attendance</h1>
      <form>
        <div>
          <label htmlFor="studentName">Student Name</label>
          <input type="text" id="studentName" name="studentName" />
        </div>
        <div>
          <label>
            <input type="radio" name="attendance" value="present" /> Present
          </label>
          <label>
            <input type="radio" name="attendance" value="absent" /> Absent
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default MarkAttendence