import createDataContext from "./createDataContext";
import jsonServer from "../api/jsonServer";
//blogContext responsible for providing data to child
//blogProvider resonsible for storing data
// we crated a component blogProvider that can accept another component more or less as an argument other argument is going to shown inside our blog provider
const blogReducer = (state, action) => {
  switch (action.type) {
    case "get_blogposts":
      return action.payload;

    // case "add_blogPost":
    //   return [
    //     ...state,
    //     {
    //       id: Math.floor(Math.random() * 999),
    //       title: action.payload.title,
    //       content: action.payload.content,
    //     },
    //   ];

    case "edit_blogPost":
      return state.map((item) => {
        if (item.id === action.payload.id) {
          return action.payload;
        } else {
          return item;
        }
      });
    case "delete_blogPost":
      return state.filter((blogPost) => blogPost.id !== action.payload);
    default:
      return state;
  }
};
// addblogpost need acccess to dispatch function of createDataContext
const addBlogPost = (dispatch) => {
  return async (title, content, callback) => {
    await jsonServer.post("/blogposts", { title: title, content: content });

    // we are writing jugaad here bcz we are not usong navigationoption to navigate netween screen so we just calling getBlohPosts again in this
    const response = await jsonServer.get("/blogposts");
    //response.data=[{},{},{}]

    dispatch({ type: "get_blogposts", payload: response.data });
    if (callback) {
      callback();
    }

    //before jsonserver code
    // dispatch({ type: "add_blogPost", payload: { title, content } });
    // if (callback) {
    //   callback();
    // }
  };

  // () => { dispatch({ type: "add_blogPost" });};  this function runs when we click on add blog button on APP
};

const deleteBlogPost = (dispatch) => {
  return async (id) => {
    await jsonServer.delete(`/blogPosts/${id}`);
    // this will remove our data from jsonserver db.json file
    dispatch({ type: "delete_blogPost", payload: id });
    // this is removing our data from local state other than this we can just call getBlog POst function again
  };
};

const editBlogPost = (dispatch) => {
  return async (id, title, content, callback) => {
    await jsonServer.put(`/blogPosts/${id}`, { title, content });
    dispatch({
      type: "edit_blogPost",
      payload: { id: id, title: title, content: content },
    });

    if (callback) {
      callback();
    }
  };
};

const getBlogPosts = (dispatch) => {
  return async () => {
    const response = await jsonServer.get("/blogposts");
    //response.data=[{},{},{}]

    dispatch({ type: "get_blogposts", payload: response.data });
  };
};

//we destructure whatever createDataContexxt provide
export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, deleteBlogPost, editBlogPost, getBlogPosts },
  []
);

//blog provider is the store hub which contain data

// import React, { useState } from "react";
// const BlogContext = React.createContext();
// //blogContext responsible for providing data to child
// //blogProvider resonsible for storing data
// // we crated a component blogProvider that can accept another component more or less as an argument other argument is going to shown inside our blog provider
// export const BlogProvider = ({ children }) => {
//   const [blogPosts, setBlogPosts] = useState([]);
//   const addBlogPost = () => {
//     setBlogPosts([
//       ...blogPosts,
//       { title: `Blog Post #${blogPosts.length + 1}` },
//     ]);
//   };
//   return (
//     <BlogContext.Provider value={{ data: blogPosts, addBlogPost }}>
//       {children}
//     </BlogContext.Provider>
//   );
// };
// //blog provider is the store hub which contain data
// export default BlogContext;
