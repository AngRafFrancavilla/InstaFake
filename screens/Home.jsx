// screens/Home.jsx
import React from "react";
import {
  Text,
  View,
  Image,
  ScrollView,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import HomePost from "../components/HomePost";
import { useSessionContext } from "../context";

function Home() {
  const { posts } = useSessionContext();

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Image
            source={{ uri: "https://link-al-logo.com/logo.png" }}
            style={styles.logo}
          />
          <Text style={styles.headerTitle}>Home Page InstaTrans</Text>
        </View>
        {posts.map((post, index) => (
          <HomePost
            key={index}
            username={post.name}
            profileImage="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Matteo_Renzi_2015.jpeg/640px-Matteo_Renzi_2015.jpeg"
            postImage={post.image}
            description={post.description}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#f0f4f8",
  },
  container: {
    backgroundColor: "#f0f4f8",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#ffffff",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  logo: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
});

export default Home;
