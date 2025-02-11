// components/Post.jsx
import React, { useState } from "react";
import { View, Image, Text, TouchableOpacity, StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';

function Post({ imageSource, description }) {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };

  return (
    <View style={styles.container}>
      <Image source={imageSource} style={styles.image} />
      <Text style={styles.description}>{description}</Text>
      <View style={styles.actions}>
        <TouchableOpacity style={styles.actionButton} onPress={toggleLike}>
          <Icon name={liked ? "heart" : "heart-outline"} size={24} color={liked ? "red" : "#333"} />
          <Text style={styles.actionText}>{liked ? "Mi Piace" : "Like"}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Icon name="chatbubble-outline" size={24} color="#333" />
          <Text style={styles.actionText}>Commenta</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
    shadowOffset: { width: 0, height: 2 },
  },
  image: {
    width: '100%',
    height: 300,
    borderRadius: 10,
  },
  description: {
    marginTop: 10,
    fontSize: 16,
    color: '#333',
    textAlign: 'left',
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionText: {
    marginLeft: 8,
    color: '#333',
  },
});

export default Post;
