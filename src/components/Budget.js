import React from 'react';

function Budget({ totalBudget, remainingBudget }) {
  return (
    <div className="budget-display">
      <h3>Total Budget: ₹{totalBudget}</h3>
      <h3>Remaining Budget: ₹{remainingBudget}</h3>
    </div>
  );
}

export default Budget;
