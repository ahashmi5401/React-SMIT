import React from 'react'

const TechStack = () => {
  return (
    <div className='px-6 py-8'>
      <p className='text-xs text-gray-400 uppercase tracking-widest mb-4'>Tech Stack</p>
      <div className='flex flex-wrap gap-3'>
        {['React', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'Figma', 'Python' , 'Pandas' , 'Matplotlib' , 'Scikit Learn' , 'Machine Learning'].map((skill) => (
          <span
            key={skill}
            className='text-sm text-gray-500 bg-gray-50 border border-gray-200 px-4 py-1.5 rounded-full hover:bg-gray-100 transition-colors cursor-default'
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  )
}

export default TechStack