import imagePath from '../../constants/imagePath';
import navigationString from '../../constants/navigationString';
import types from '../../redux/types';
 import {clearUserData} from "../../utils/Utils"
const INITIAL_STATE = {
  myarray: [],
  selecteditem: '',
  count: 0,
  isLoggedin: false,
  userData: {},
  infinitearray: [],
  data: [],
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // case types.DETAILS:
    //   const {newObj} = action.payload;
    //   //  alert(JSON.stringify(newObj))
    //   return {...state, newObj};

    case types.CART:
      const {cartarray, index} = action.payload;
      // alert(JSON.stringify(cartarray[index]))

      if (!state.myarray.includes(cartarray[index])) {
        var status = [...state.myarray, cartarray[index]];
        cartarray[index].quantity += 1;
      }
      alert(JSON.stringify(status));
      return {
        ...state,
        myarray: [...status],
      };

    // case types.DATASEARCH:
    //   const data = [...action.payload]
    //  console.log("reducer got it",data)
    //   return {
    //     ...state, infinitearray: data
    //     //  infinitearray:[...state.infinitearray,data]

    //   };

    case types.DATASEARCH:
      const data = [...state.infinitearray, ...action.payload];
      console.log('data at infinite array in reducer ', data);

      return {
        ...state,
        infinitearray: [...data],
      };

    case types.LOGGED_IN:
      const userData = {...action.payload};
      console.log(userData, 'userdata at redux');
      return {...state, userData, isLoggedin: true};

    default:
      return state;

    case types.COLOR:
      const {colorarray} = action.payload;

      return {
        ...state,
        colorarray,
      };

    case types.NEARUSER:
      const {usersearch} = action.payload;

      return {
        ...state,
        usersearch,
      };

  
      case types.LOGOUT:

        clearUserData();
        return{
          ...state,
          userData:{}

        }

  }
};

export default reducer;
