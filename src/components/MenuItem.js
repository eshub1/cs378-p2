import React from 'react';
const MenuItem = ({ menuItems }) => {
    return (
        <>
        {menuItems.map((menuItem) => (
            <div class="row" key={menuItem.id}>
              <div class="col-5">
                <div class="card-body d-flex flex-column align-items-center justify-content-center">
                  <img src={`/images/${menuItem.imageName}`} style={{ width: '90%', height: 'auto' }} class="image" alt={`Photo of ${menuItem.imageName}`} />
                </div>
              </div>
  
              <div class="col-7">
                <div class="card-body d-flex flex-column align-items-left justify-content-left">
                  <div>
                    <h5 class="card-title">{menuItem.title}</h5>
                    <p class="card-text">{menuItem.description}</p>
  
                    <div class="d-flex justify-content-between align-items-center">
                      <p class="card-price">{menuItem.price}</p>
  
                      <div class="btn-add">
                        <button type="button" className="btn">Add</button>
                      </div>                    
                    </div>
  
                  </div>
                </div>
              </div>
  
            </div>
            ))}

        </>
    );
};

export default MenuItem;
