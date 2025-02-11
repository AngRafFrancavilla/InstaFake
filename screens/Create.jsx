// screens/Create.jsx
import React, { useState } from "react";
import {
  View,
  Image,
  Alert,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import MyButton from "../components/Button";
import { useSessionContext } from "../context";
import Input from "../components/Input";

function Create() {
  const [img, setImg] = useState(null);
  const [description, setDescription] = useState("");
  const { addPosts } = useSessionContext();

  const openCamera = async () => {
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();
    if (!permissionResult.granted) {
      alert("Dammi i permessi");
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImg(result.assets[0].uri);
    }
  };

  const deleteImage = () => {
    setImg(null);
  };

  const publishPost = () => {
    if (!img || !description) {
      Alert.alert(
        "Errore",
        "Assicurati di avere un'immagine e una descrizione!"
      );
      return;
    }

    const post = {
      name: "Raffaele Francavilla",
      image: img,
      description: description,
      profileImage:
        "https://media.licdn.com/dms/image/v2/D5635AQETPwGdbiD6sw/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1727708984345?e=1729688400&v=beta&t=N3L3_aCNLUpvhX59rdT4drK9s9hgcrdujrKHzCw1sTw",
    };

    addPosts(post);
    setImg(null);
    Alert.alert("Post Creato", "Post creato correttamente!");
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {!img ? (
          <MyButton title="APRI FOTOCAMERA" onPress={openCamera} />
        ) : (
          <View style={styles.content}>
            <View style={styles.imageContainer}>
              <Image source={{ uri: img }} style={styles.image} />
            </View>
            <MyButton title="Elimina" onPress={deleteImage} />
            <Input placeholder="Descrizione" onChange={setDescription} />
            <MyButton title="Pubblica" onPress={publishPost} />
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  content: {
    width: "100%",
    alignItems: "center",
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 10,
    overflow: "hidden",
    marginBottom: 15,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default Create;
