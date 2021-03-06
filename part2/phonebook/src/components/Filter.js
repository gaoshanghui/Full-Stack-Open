import React from 'react'

const Filter = ({newFilter, handleFilterChange}) => {
  return (
    <div>
      <h3>filter shown with</h3>
      <input value={newFilter} onChange={handleFilterChange}/>
    </div>
  )
}

export default Filter