import React, { useState, useContext } from "react";
import { Text, View, TextInput, StyleSheet, Button } from "react-native";
const BlogPostForm = ({ onSubmitFunction, initialValues }) => {
  const [title, setTitle] = useState(initialValues.title);
  const [content, setContent] = useState(initialValues.content);
  return (
    <View style={{ margin: 10 }}>
      <Text style={styles.text}>Enter Title</Text>
      <TextInput
        style={styles.inputBox}
        value={title}
        onChangeText={(text) => {
          setTitle(text);
        }}
      />
      <Text style={styles.text}>Enter Content</Text>
      <TextInput
        style={styles.inputBox}
        value={content}
        onChangeText={(text) => {
          setContent(text);
        }}
      />
      <Button
        title="click to save post"
        onPress={() => onSubmitFunction(title, content)}
      />
    </View>
  );
};
BlogPostForm.defaultProps = {
  initialValues: {
    title: "",
    content: "",
  },
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
export default BlogPostForm;
