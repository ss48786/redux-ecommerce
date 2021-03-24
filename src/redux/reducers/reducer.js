
import imagePath from '../../constants/imagePath';
import navigationString from '../../constants/navigationString';
import types from "../../redux/types"
const INITIAL_STATE = {

  myarray: [],
  selecteditem: '',
  count: 0,
  isLoggedin: false,
  userData: {}
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.DETAILS:
      const { newObj } = action.payload;
      //  alert(JSON.stringify(newObj))
      return { ...state, newObj }

    case types.CART:
      const { cartarray, index } = action.payload;
      // alert(JSON.stringify(cartarray[index]))

      if (!state.myarray.includes(cartarray[index])) {
        var status = [...state.myarray, cartarray[index]];
      }
      // alert(JSON.stringify(status))
      return {
        ...state,
        myarray: [...status]
      };

    case types.EDIT:
      return {
        ...state, count: state.count - 1,
      };

    case types.LOGGED_IN:
      const userData = { ...action.payload };
      return { ...state, userData, isLoggedin: true };

    default: return state;
  }
};
export default reducer;