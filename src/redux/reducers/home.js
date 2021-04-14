import actions from "../actions";
import types from "../types";


const INITIAL_STATE = {

    // myarray: [],
    // selecteditem: '',
    count: 0,
    // isLoggedin: false,
    // userData: {},
    // infinitearray:[],
    // data:[]
  };
  
  const home = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case types.DETAILS:
        const { newObj } = action.payload;
        //  alert(JSON.stringify(newObj))
        return { ...state, newObj }
      
      default:return{
        ...state
    }
    }
    
  
   
  };
  
  
 export default home;
