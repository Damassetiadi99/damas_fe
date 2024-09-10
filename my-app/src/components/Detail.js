import React from 'react';
import { useLocation,useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const Detail = () => {
  const location = useLocation();
  const navigate = useNavigate()
  const { job } = location.state || {};  
  console.log(job)

  if (!job) {
    return <div>No job details found.</div>;
  }
  const handleBack = () => {
    navigate(-1);  
  };


  return (
    <div>
        <div className="flex items-center w-full my-4 ms-6 ">
          <span className="mr-2 cursor-pointer hover:text-gray-700">
            <FaArrowLeft  onClick={handleBack} className='text-gray-400 hover :cursor' />
          </span>
          <span className='text-indigo-500 font-bold'>Back</span>
        </div>
    <div className='p-4 flex border-2'>
      
      <div className="p-6 w-2/3 shadow-md">
        <div className='border-b'>
          <span className='text-gray-400 font-medium'>{job.status} / {job.city}</span>
          <h1 className="text-3xl font-bold mb-4">{job.jobName}</h1>
          </div>
        <h2 className="text-xl font-bold mb-2">{job.companyName} - {job.status}</h2>
        <p className="mb-4">{job.description}</p>

        <h3 className="text-lg font-bold">what we look for:</h3>
        <ul className="list-disc ml-5 mb-4">
          {job.requirements.map((req, index) => (
            <li key={index}>{req}</li>
          ))}
        </ul>

        <h3 className="text-lg font-bold">Benefits:</h3>
        <ul className="list-disc ml-5 mb-4">
          {job.benefits.map((benefit, index) => (
            <li key={index}>{benefit}</li>
          ))}
        </ul>

        <h3 className="text-lg font-bold">Application Process:</h3>
        <ul className="list-disc ml-5 mb-4">
          {job.applicationProcess.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ul>
        <div> 
          <span className='font-bold'>Notes : </span>
          <span className='text-xl font-medium italic'>{job.notes}</span>
           </div>
      </div>
      <div className="w-1/3 p-4">
          <div className="mb-4">
            <span className='font-bold my-2'>{job.companyName}</span>
            <img src={job.image} alt="Job Image" className="w-200 h-200 mb-4 rounded-lg shadow-md" />
          </div>
          <div>
            <p className="text-gray-600 mb-2">{job.aboutCompany}</p>
            <a href={job.companyLink} className="text-blue-500 hover:underline">Learn More</a>
          </div>
        </div>
      
    </div>
    </div>
  );
};

export default Detail;
