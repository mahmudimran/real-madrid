import React from 'react';

const Cart = (props) => {
    const cartPlayer =props.cartPlayer;
    let totalSalary = 0;
    for (let i = 0; i < cartPlayer.length; i++) {
        const player = cartPlayer[i];
         totalSalary = totalSalary + player.salary; 
    }

    return (
        <div>
            <h5>Total Add Player : {cartPlayer.length}</h5>
            <h5>Total Player Salary: ${totalSalary}</h5>
        </div>
    );
};

export default Cart;