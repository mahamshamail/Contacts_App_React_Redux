import { 
  FETCH_CONTACTS, 
  NEW_CONTACT 
} from '../actions/types';

const initialState = {
   items: [],
  contactItems: [],
  contactItem: {} 
};

export default function(state = initialState, action) {
  switch (action.type) {
   
    case FETCH_CONTACTS:
      console.log(' FETCH_CONTACTS reducer');
      return {
        ...state,
        items: action.payload
      };
    case NEW_CONTACT:
      console.log(' NEW_CONTACT reducer');
      return {
        ...state,
        contactItem: action.payload
      };
   
    default:
      return state;
  }
}
