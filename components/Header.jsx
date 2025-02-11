// components/Header.jsx
import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const username = "Angelo Raffaele Francavilla";
const followers = 120;
const seguiti = 234;
const posts = 45;
const userImage = "https://media.licdn.com/dms/image/v2/D5635AQETPwGdbiD6sw/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1727708984345?e=1729688400&v=beta&t=N3L3_aCNLUpvhX59rdT4drK9s9hgcrdujrKHzCw1sTw";

function Header() {
  return (
    <View style={styles.header}>
      <View style={styles.row}>
        <Image source={{ uri: userImage }} style={styles.userImage} />
        <View style={styles.infoContainer}>
          <Text style={styles.username}>{username}</Text>
          <View style={styles.stats}>
            <Text style={styles.statText}>{followers} Followers</Text>
            <Text style={styles.statText}>{seguiti} Seguiti</Text>
            <Text style={styles.statText}>{posts} Posts</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    padding: 20,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  userImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 20,
  },
  infoContainer: { 
    flex: 1 
  },
  username: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
  stats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  statText: {
    fontSize: 16,
    color: 'gray',
  },
});

export default Header;
