// we created this so that we can get rid of writing same code again and again
import React, { useReducer } from "react";
export default (reducer, actions, initialState) => {
  const Context = React.createContext();
  const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    // console.log(state)
    //actions=== {addBlogPost: (dispatch)=>{return()=>{}}}
    // here we are looping actions object  (for example if we get addblogpost as key while loopping actions then we will call with help of dispatch argument that will return ()=>{} function inside that that function we will pass in children as prop by that function all our child can make change to our state )
    const boundActions = {};
    for (let key in actions) {
      boundActions[key] = actions[key](dispatch);
      //key==='addBlogPost'
      //boundActions.addBlogPost
    //   actions[key](dispatch like call that function inside addBlogPost
      //boundActions[key]=add_blogPost(dispatch)
    }
    return <Context.Provider value={{ state,...boundActions }}>{children}</Context.Provider>;
  };  return { Context, Provider };
};
 