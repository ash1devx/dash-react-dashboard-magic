
import React from 'react';
import { BookOpen } from 'lucide-react';

type StudentData = {
  id: number;
  name: string;
  percentage: string;
  attendance: number;
  marks: number;
  totalMarks: number;
};

const studentData: StudentData[] = [
  {
    id: 1,
    name: "Mohit Kumar",
    percentage: "40%",
    attendance: 80,
    marks: 423,
    totalMarks: 500
  },
  // Add more dummy data if needed
];

export function StudentsTable() {
  return (
    <div className="rounded-lg bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold">Students Details</h2>
        <button className="text-sm text-gray-500 hover:text-primary">View All</button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b text-left text-sm text-gray-500">
              <th className="pb-3 font-medium">Product Name</th>
              <th className="pb-3 font-medium">Percentage</th>
              <th className="pb-3 font-medium">Average Attendance</th>
              <th className="pb-3 font-medium">Marks</th>
              <th className="pb-3 font-medium">Total Marks</th>
              <th className="pb-3 font-medium"></th>
            </tr>
          </thead>
          <tbody>
            {studentData.map((student) => (
              <tr key={student.id} className="border-b">
                <td className="py-3">
                  <div className="flex items-center gap-3">
                    <div className="rounded-md bg-gray-100 p-2">
                      <BookOpen className="h-5 w-5 text-gray-500" />
                    </div>
                    <span>{student.name}</span>
                  </div>
                </td>
                <td className="py-3">{student.percentage}</td>
                <td className="py-3">{student.attendance}</td>
                <td className="py-3">{student.marks}</td>
                <td className="py-3">{student.totalMarks}</td>
                <td className="py-3">
                  <button className="rounded-full bg-emerald-500 px-4 py-1 text-sm font-medium text-white">
                    View All
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
