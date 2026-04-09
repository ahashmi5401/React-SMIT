import React from 'react'

const stats = [
  { number: '20+', label: 'Projects Completed' },
  { number: '15+', label: 'Happy Clients' },
  { number: '1+',  label: 'Years Experience' },
  { number: '100%', label: 'On-Time Delivery' },
]

const Stats = () => {
  return (
    <div className='border-t border-gray-100 p-4'>
      <div className='grid grid-cols-2 md:grid-cols-4'>
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`px-6 py-6 ${
              index !== stats.length - 1 ? 'border-r border-gray-100' : ''
            } ${index < 2 ? 'border-b md:border-b-0 border-gray-100' : ''}`}
          >
            <h2 className='text-3xl font-medium text-gray-900'>{stat.number}</h2>
            <span className='text-gray-500 text-sm'>{stat.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Stats