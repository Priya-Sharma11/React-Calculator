import React from 'react'

function Buttons() {
  const buttons=['(','C',')','/','9','8','7','*','6','5','4','-','3','2','1','+','0','.','%','='];
  return (
    <div className="button-container">
      {buttons.map((buttonName) =>  <button className="button">{buttonName}</button>)}
      </div>
  )
}

export default Buttons
