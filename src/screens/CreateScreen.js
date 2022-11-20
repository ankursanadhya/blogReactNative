import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Context } from "../context/BlogContext";
import BlogPostForm from "../component/BlogPostForm";
const CreateScreen = ({ navigation }) => {
  const { addBlogPost } = useContext(Context);
  return (
    <BlogPostForm
      onSubmitFunction={(title, content) => {
        addBlogPost(title, content, () => 
          navigation.navigate("IndexScreen"));
      }}
    />
  );
};
const styles = StyleSheet.create({
  inputBox: {
    margin: 10,
    borderWidth: 1,
    borderColor: "black",
    fontSize: 22,
    paddingLeft: 10,
  },
  text: {
    fontSize: 18,
    margin: 5,
    fontWeight: "700",
  },
});
export default CreateScreen;
// import React, { useState, useContext } from "react";
// import { Text, View, TextInput, StyleSheet, Button } from "react-native";
// import { Context } from "../context/BlogContext";
// const CreateScreen = ({ navigation }) => {
//   const [title, setTitle] = useState("");
//   const [content, setContent] = useState("");
//   const { addBlogPost } = useContext(Context);
//   return (
//     <View style={{ margin: 10 }}>
//       <Text style={styles.text}>Enter Title</Text>
//       <TextInput
//         style={styles.inputBox}
//         name={title}
//         onChangeText={(text) => {
//           setTitle(text);
//         }}
//       />
//       <Text style={styles.text}>Enter Content</Text>
//       <TextInput
//         style={styles.inputBox}
//         name={content}
//         onChangeText={(text) => {
//           setContent(text);
//         }}
//       />
//       <Button
//         title="click to save post"
//         onPress={() =>
//           addBlogPost(title, content, () => {
//             navigation.navigate("Blog");
//           })
//         }
//       />
//     </View>
//   );
// };
// const styles = StyleSheet.create({
//   inputBox: {
//     margin: 10,
//     borderWidth: 1,
//     borderColor: "black",
//     fontSize: 22,
//     paddingLeft: 10,
//   },
//   text: {
//     fontSize: 18,
//     margin: 5,
//     fontWeight: "700",
//   },
// });
// export default CreateScreen;
