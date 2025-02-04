
import { SET_CARD_DATA } from '../ActionType';

const initialState = {
  user: {
    name: 'James',
    level: 29,
    walletBalance: 340.54,
  },
  cardData: [
{

  title: 'Pickup & Delivery',
  time: '12:00 PM',
  date: '10th Oct 2024',
  senderAddress: 'Kilometer 6, 278H, Street 201R, Kroalkor Village, Unnamed Road, Phnom Penh',
  receiverAddress: '2nd Floor 01, 25 Mao Tse Toung Blvd (245), Phnom Penh 12302, Cambodia',
  status:"In Progress",
  // customeDetail:[
  //   {
  //     itemTitle:"Customer",
  //     itemData:"Western Equipment",
  //     icon:<UserIcon/>
  //   },
  //   {
  //     itemTitle:"Trip",
  //     itemData:"Single",
  //     icon:<TripIcon/>

  //   },
  //   {
  //     itemTitle:"Transport",
  //     itemData:"Own Fleet",
  //     icon:<TransportIcon/>

  //   },
  //   {
  //     itemTitle:"Vehicle",
  //     itemData:"171-KE2398",
  //     icon:<VechileNumberIcon/>

  //   },
  //   {
  //     itemTitle:"Driver",
  //     itemData:"Adam Roche",
  //     icon:<DriverIcon/>

  //   },
  //   {
  //     itemTitle:"Material",
  //     itemData:"10 mm chippings",
  //     icon:<MaterailIcon/>

  //   },
  //   {
  //     itemTitle:"Custom Order No",
  //     itemData:"123565688",
  //     icon:<OrderIcon/>

  //   },
    
    

  
  // ]
},
{

  title: 'Pickup & Delivery',
  time: '12:00 PM',
  date: '10th Oct 2024',
  senderAddress: 'Kilometer 6, 278H, Street 201R, Kroalkor Village, Unnamed Road, Phnom Penh',
  receiverAddress: '2nd Floor 01, 25 Mao Tse Toung Blvd (245), Phnom Penh 12302, Cambodia',
  status:"Finished Jobs",
  // customeDetail:[
  //   {
  //     itemTitle:"Customer",
  //     itemData:"Western Equipment",
  //     icon:<UserIcon/>
  //   },
  //   {
  //     itemTitle:"Trip",
  //     itemData:"Single",
  //     icon:<TripIcon/>

  //   },
  //   {
  //     itemTitle:"Transport",
  //     itemData:"Own Fleet",
  //     icon:<TransportIcon/>

  //   },
  //   {
  //     itemTitle:"Vehicle",
  //     itemData:"171-KE2398",
  //     icon:<VechileNumberIcon/>

  //   },
  //   {
  //     itemTitle:"Driver",
  //     itemData:"Adam Roche",
  //     icon:<DriverIcon/>

  //   },
  //   {
  //     itemTitle:"Material",
  //     itemData:"10 mm chippings",
  //     icon:<MaterailIcon/>

  //   },
  //   {
  //     itemTitle:"Custom Order No",
  //     itemData:"123565688",
  //     icon:<OrderIcon/>

  //   },
    
    

  
  // ]
}
  ]
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CARD_DATA:
      return {
        ...state,
        cardData: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
