import React from 'react'


const Variance = ({variance}) => {
  return (
    <div className="mt-6 w-96 border rounded-lg overflow-hidden bg-white ">
      <div className="p-6">
        <h5 className="text-xl font-bold mb-2 text-blue-gray">
          Variance
        </h5>
        <p className="text-sm text-gray-700">
            {variance}
        </p>
      </div>
    </div>
  )
}

export default Variance