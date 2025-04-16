"use client";

const error = ({ error, reset }) => {
  return (
    <div>
      <h1 className="text-4xl text-center text-red-600">
        Something went wrong
      </h1>
      <p>{error.message}</p>

      <div className="text-center">
        <button onClick={() => reset()} className="p-2 bg-blue-500 my-5 cursor-pointer rounded-md">
          Try Again
        </button>
      </div>
    </div>
  );
};

export default error;
