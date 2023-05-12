import React from 'react'
import ActivityEmptyState from '../../assets/img/activity-empty-state.png'

const EmptyActivity = () => {
  return (
    <div className='activity-empty-state'>
      <img src={ActivityEmptyState} alt={ActivityEmptyState}></img>
    </div>
  )
}

export default EmptyActivity