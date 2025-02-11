// screens/Profilo.jsx
import React from "react";
import {
  View,
  ScrollView,
  Text,
  Image,
  Dimensions,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import Header from "../components/Header";

const postsData = [
  {
    imageSource: require("../img/foto3.jpeg"),
    description: "Io in Montagna.",
    likes: 45,
    comments: 12,
  },
  {
    imageSource: require("../img/post1.jpeg"),
    description: "Calcio<3.",
    likes: 78,
    comments: 24,
  },
  {
    imageSource: require("../img/post2.jpeg"),
    description: "Al mare.",
    likes: 67,
    comments: 14,
  },
  {
    imageSource: require("../img/foto8.jpeg"),
    description: "In città.",
    likes: 34,
    comments: 9,
  },
  {
    imageSource: require("../img/foto6.jpeg"),
    description: "Cibo.",
    likes: 89,
    comments: 32,
  },
  {
    imageSource: require("../img/foto4.jpeg"),
    description: "Con gli amici.",
    likes: 52,
    comments: 18,
  },
];

const screenWidth = Dimensions.get("window").width;

function Profilo() {
  const postWidth = (screenWidth - 40) / 3; // Calcolo dinamico per tre colonne

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <Header />
          <Text style={styles.title}>I miei Post</Text>
          <View style={styles.postsContainer}>
            {postsData.map((post, index) => (
              <View
                key={index}
                style={[styles.postWrapper, { width: postWidth }]}
              >
                <Image
                  source={post.imageSource}
                  style={[styles.postImage, { height: postWidth }]}
                />
                <Text style={styles.postDescription}>{post.description}</Text>
                <View style={styles.likesComments}>
                  <Text style={styles.postStats}>{post.likes} likes</Text>
                  <Text style={styles.postStats}>{post.comments} comments</Text>
                </View>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#f0f4f8",
  },
  container: {
    flex: 1,
    backgroundColor: "#f0f4f8",
  },
  scrollContainer: {
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 20,
  },
  postsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  postWrapper: {
    marginBottom: 20,
    paddingHorizontal: 5,
  },
  postImage: {
    width: "100%",
    borderRadius: 10,
    marginBottom: 5,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  postDescription: {
    textAlign: "center",
    fontSize: 12,
    color: "#333",
    marginBottom: 5,
  },
  likesComments: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 5,
  },
  postStats: {
    fontSize: 12,
  },
});

export default Profilo;
