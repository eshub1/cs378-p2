import React from 'react';

const Feeder = ({ menuItems, subtotal, clearAll }) => {

    const clearSubTotal = () => {
        clearAll(); // Call the clearAll function to reset all values
      };
    
    

  return (
    <div style={{ position: 'fixed', bottom: 0, width: '100%', backgroundColor: 'white', borderTop: '1px solid black', height: '15%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 20px' }}>
      <p style={{ margin: 0 }}>SUBTOTAL: {subtotal.toFixed(2)}</p>
      <div>
        <button onClick={() => {}} style={{ marginRight: '10px' }}>ORDER</button>
        <button onClick={() => clearSubTotal()}  style={{ marginRight: '10px' }}>CLEAR ALL</button>
      </div>
    </div>
  );
};

export default Feeder;
