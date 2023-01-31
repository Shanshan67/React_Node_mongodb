import React from 'react'

function GoalItem({goal}) {
  return (
    <div className='goal'>
        <div>
            {new Date(goal.createdAt).toLocaleString('en-US')}
        </div>
        <h2>{goal.text}</h2>
        <button onClick={} className='close'>x</button>
    </div>
  )
}

export default GoalItem