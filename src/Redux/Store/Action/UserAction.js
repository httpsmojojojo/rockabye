// src/store/actions/userActions.js
import { SET_LEVEL, SET_WALLET_BALANCE } from '../actionTypes';
import { SET_PACKAGE_QUANTITY, SET_PACKAGES } from './actionTypes';
// Action to set the level
export const setLevel = (level) => ({
  type: SET_LEVEL,
  payload: level,
});

// Action to set the wallet balance
export const setWalletBalance = (balance) => ({
  type: SET_WALLET_BALANCE,
  payload: balance,
});
export const setPackageQuantity = (packageId, quantity) => ({
    type: SET_PACKAGE_QUANTITY,
    payload: { packageId, quantity },
  });
  
  // Action to set the available packages
  export const setPackages = (packages) => ({
    type: SET_PACKAGES,
    payload: packages,
  });


  // const BUY_CAKE='BUY_CAKE'
  // const BuyCake=()=>{
  //   return(

  //     {
        
  //       type:BUY_CAKE,
  //       info:'frist action review'
  //     }
  //   )

  // }