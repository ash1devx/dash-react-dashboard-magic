
import React from 'react';
import { CloudUpload } from 'lucide-react';

export function UploadSection() {
  return (
    <div className="rounded-lg bg-white p-6 shadow-sm">
      <h2 className="text-xl font-semibold mb-8">Upload New Exam Sheets</h2>
      <div className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-12">
        <div className="rounded-full bg-gray-100 p-4 mb-4">
          <CloudUpload className="h-12 w-12 text-gray-400" />
        </div>
        <p className="mb-2 text-lg">Drag & Drop or <span className="text-blue-500">browse</span></p>
        <p className="text-sm text-gray-500">Supports: JPEG, JPG, PNG, PDF</p>
      </div>
    </div>
  );
}
