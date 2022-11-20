import React, { useContext, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Button,
  TouchableOpacity,
} from "react-native";
import { Context } from "../context/BlogContext";
import { Feather } from "@expo/vector-icons";
const IndexScreen = ({ navigation }) => {
  // console.log(navigation);
  const { state, deleteBlogPost, getBlogPosts } = useContext(Context);
  useEffect(() => {
    getBlogPosts();

    const listener = navigation.addListener('didFocus', () => {
      getBlogPosts();
    });

    return () => {
      listener.remove();
    };
  }, []);

  return (
    <View>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text>Index Screen</Text>
        <TouchableOpacity onPress={() => navigation.navigate("CreateScreen")}>
          <Feather name="plus" size={30} style={{ marginLeft: 10 }} />
        </TouchableOpacity>
      </View>
      <FlatList
        data={state}
        keyExtractor={(blogPost) => blogPost.title}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("ShowScreen", { id: item.id });
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  paddingVertical: 15,
                  borderWidth: 1,
                  borderColor: "red",
                  margin: 10,
                  paddingHorizontal: 20,
                }}
              >
                <Text style={{ fontSize: 18 }}>
                  {item.title}-{item.id}
                </Text>
                <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                  <Feather style={{ fontSize: 16 }} name="trash" />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

IndexScreen.navigationOptions = ({ navigation }) => ({
  headerRight: (
    <TouchableOpacity onPress={() => navigation.navigate("storiesList")}>
      <Feather name="plus" size={30} style={{ marginLeft: 10 }} />
    </TouchableOpacity>
  ),
});
export default IndexScreen;
