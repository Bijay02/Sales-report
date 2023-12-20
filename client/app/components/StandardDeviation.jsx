import React from 'react'


const StandardDeviation = ({standardDeviation}) => {
  return (
    <div className="mt-6 w-96 border rounded-lg overflow-hidden bg-white">
      <div className="p-6">
        <h5 className="text-xl font-bold mb-2 text-blue-gray">
          Standard Deviation
        </h5>
        <p className="text-sm text-gray-700">
            {standardDeviation}
        </p>
      </div>
    </div>
  )
}

export default StandardDeviation