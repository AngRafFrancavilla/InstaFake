import React, { useState } from "react";
import { Text, View, Image, TouchableOpacity, TextInput } from "react-native";
import { Ionicons } from '@expo/vector-icons'; // Assicurati di avere questo pacchetto installato

function HomePost({ username, profileImage, postImage, description }) {
  const [like, setLike] = useState(false);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState(""); 

  function toggleLike() {
    setLike(!like);
  }

  function addComment() {
    if (newComment.trim() !== "") {
      setComments([...comments, newComment]);
      setNewComment(""); // Reset del commento dopo l'aggiunta
    }
  }

  return (
    <View style={{
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
    }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
        <Image
          source={{ uri: profileImage }}
          style={{ width: 50, height: 50, borderRadius: 25, marginRight: 10 }}
        />
        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#333' }}>{username}</Text>
      </View>

      <Image
        source={{ uri: postImage }}
        style={{
          width: '100%',
          aspectRatio: 1,
          borderRadius: 10,
          marginBottom: 10,
        }}
      />

      <Text style={{ fontSize: 14, color: '#666', marginBottom: 10 }}>{description}</Text>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }} onPress={toggleLike}>
          <Ionicons name={like ? 'heart' : 'heart-outline'} size={24} color={like ? 'red' : '#333'} />
          <Text style={{ marginLeft: 8, color: '#333' }}>{like ? "Mi Piace" : "Mi Piace"}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }} onPress={addComment}>
          <Ionicons name="chatbubble-outline" size={24} color="#333" />
          <Text style={{ marginLeft: 8, color: '#333' }}>Commenta</Text>
        </TouchableOpacity>
      </View>

      <TextInput
        style={{
          borderWidth: 1,
          borderColor: '#ccc',
          borderRadius: 5,
          padding: 10,
          marginTop: 10,
          fontSize: 14,
        }}
        value={newComment}
        onChangeText={setNewComment}
        placeholder="Aggiungi un commento..."
      />
      <TouchableOpacity style={{
        backgroundColor: '#007BFF',
        borderRadius: 5,
        paddingVertical: 8,
        alignItems: 'center',
        marginTop: 10,
      }} onPress={addComment}>
        <Text style={{ color: '#fff', fontSize: 16 }}>Aggiungi</Text>
      </TouchableOpacity>

      {comments.length > 0 && (
        <View style={{ marginTop: 10 }}>
          {comments.map((comment, index) => (
            <Text key={index} style={{
              fontSize: 14,
              color: '#333',
              paddingVertical: 5,
              borderBottomWidth: 1,
              borderBottomColor: '#ccc',
            }}>
              {comment}
            </Text>
          ))}
        </View>
      )}
    </View>
  );
}

export default HomePost;