import React, { useContext } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { Context } from "../context/BlogContext";
import { Feather } from "@expo/vector-icons";

const ShowScreen = (props) => {
  // console.log(props.route.params.id)
  const { state } = useContext(Context);
  // we define state in creeateDataContext so we use only state here
  const blogPost = state.find((item) => item.id === props.route.params.id);

  return (
    <View>
      <View style={{ alignSelf: "flex-end" }}>
        <TouchableOpacity onPress={()=>props.navigation.navigate("EditScreen", { id: blogPost.id})}>
          <Feather name="edit" size={28} color="red" />
        </TouchableOpacity>
      </View>
      <Text>{blogPost.title}</Text>
      <Text>{blogPost.content}</Text>
    </View>
  );
};

ShowScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate("Edit")}>
        <EvilIcons name="pencil" size={35} />
      </TouchableOpacity>
    ),
  };
};

export default ShowScreen;
