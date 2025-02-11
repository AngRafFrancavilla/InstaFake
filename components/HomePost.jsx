// components/HomePost.jsx
import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, TextInput, StyleSheet } from "react-native";
import { Ionicons } from '@expo/vector-icons';

function HomePost({ username, profileImage, postImage, description }) {
  const [liked, setLiked] = useState(false);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState(""); 

  const toggleLike = () => {
    setLiked(!liked);
  };

  const addComment = () => {
    if (newComment.trim() !== "") {
      setComments([...comments, newComment]);
      setNewComment("");
    }
  };

  return (
    <View style={styles.postContainer}>
      <View style={styles.header}>
        <Image source={{ uri: profileImage }} style={styles.profileImage} />
        <Text style={styles.username}>{username}</Text>
      </View>
      <Image source={{ uri: postImage }} style={styles.postImage} />
      <Text style={styles.description}>{description}</Text>
      <View style={styles.actions}>
        <TouchableOpacity style={styles.actionButton} onPress={toggleLike}>
          <Ionicons name={liked ? 'heart' : 'heart-outline'} size={24} color={liked ? 'red' : '#333'} />
          <Text style={styles.actionText}>Mi Piace</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton} onPress={addComment}>
          <Ionicons name="chatbubble-outline" size={24} color="#333" />
          <Text style={styles.actionText}>Commenta</Text>
        </TouchableOpacity>
      </View>
      <TextInput 
        style={styles.commentInput}
        value={newComment}
        onChangeText={setNewComment}
        placeholder="Aggiungi un commento..."
      />
      <TouchableOpacity style={styles.addCommentButton} onPress={addComment}>
        <Text style={styles.addCommentText}>Aggiungi</Text>
      </TouchableOpacity>
      {comments.length > 0 && (
        <View style={styles.commentsContainer}>
          {comments.map((comment, index) => (
            <Text key={index} style={styles.commentText}>{comment}</Text>
          ))}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  postContainer: {
    width: '100%',
    marginBottom: 20,
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  header: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    marginBottom: 10 
  },
  profileImage: { 
    width: 50, 
    height: 50, 
    borderRadius: 25, 
    marginRight: 10 
  },
  username: { 
    fontSize: 16, 
    fontWeight: 'bold', 
    color: '#333' 
  },
  postImage: { 
    width: '100%', 
    aspectRatio: 1, 
    borderRadius: 10, 
    marginBottom: 10 
  },
  description: { 
    fontSize: 14, 
    color: '#666', 
    marginBottom: 10 
  },
  actions: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    marginTop: 10 
  },
  actionButton: { 
    flexDirection: 'row', 
    alignItems: 'center' 
  },
  actionText: { 
    marginLeft: 8, 
    color: '#333' 
  },
  commentInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
    fontSize: 14,
  },
  addCommentButton: {
    backgroundColor: '#007BFF',
    borderRadius: 5,
    paddingVertical: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  addCommentText: { 
    color: '#fff', 
    fontSize: 16 
  },
  commentsContainer: { 
    marginTop: 10 
  },
  commentText: {
    fontSize: 14,
    color: '#333',
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default HomePost;
