import React from "react";

const Modal = ({ isOpen, onClose, job }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg w-1/2 relative">
        <h2 className="text-xl font-bold mb-4">Job Details</h2>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-red-500 text-white p-2 rounded-full"
        >
          Close
        </button>
        <div>
          <img className="w-20 rounded-lg mb-4" src={job.file} alt="Job" />
          <p className="mb-2">
            <strong>Title:</strong> {job.jobtitle}
          </p>
          <p className="mb-2">
            <strong>Posted Date:</strong> {job.postedDate}
          </p>
          <p className="mb-2">
            <strong>Experience:</strong> {job.experience}
          </p>
          <p className="mb-2">
            <strong>Profession:</strong> {job.profession}
          </p>
          <p className="mb-2">
            <strong>Candidates:</strong> {job.candidates}
          </p>
          <p className="mb-2">
            <strong>Cash:</strong> {job.cash}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
