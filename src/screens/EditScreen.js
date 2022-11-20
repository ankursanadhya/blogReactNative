import React, { useContext } from "react";
import { Context } from "../context/BlogContext";
import BlogPostForm from "../component/BlogPostForm";
const EditScreen = (props) => {
  const { state, editBlogPost } = useContext(Context);
  const blogPost = state.find((item) => item.id === props.route.params.id);

  // console.log(props.route.params.id);
  return (
    <BlogPostForm
      initialValues={{ title: blogPost.title, content: blogPost.content, }}
      onSubmitFunction={(title, content) => {
        editBlogPost(props.route.params.id, title, content, () => 
          props.navigation.pop());
      }}
    />
  );
};
export default EditScreen;
