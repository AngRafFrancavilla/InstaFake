import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';

const Container = {
  marginBottom: 20, 
  backgroundColor: 'white', 
  borderRadius: 10, 
  padding: 15, 
  shadowColor: '#000', 
  shadowOpacity: 0.1, 
  shadowRadius: 8, 
  elevation: 3, 
  shadowOffset: { width: 0, height: 2 }
};

const StyleDescription = { 
  marginTop: 10, 
  fontSize: 16, 
  color: '#333', 
  textAlign: 'left' 
};

function Post({ imageSource, description }) {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };

  return (
    <View style={Container}>
      <Image 
        source={imageSource} 
        style={{ 
          width: '100%', 
          height: 300, 
          borderRadius: 10 
        }} 
      />
      <Text style={StyleDescription}>
        {description}
      </Text>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
        <TouchableOpacity 
          style={{ flexDirection: 'row', alignItems: 'center' }} 
          onPress={toggleLike} 
        >
          <Icon 
            name={liked ? "heart" : "heart-outline"} 
            size={24} 
            color={liked ? "red" : "#333"} 
          />
          <Text style={{ marginLeft: 8, color: '#333' }}>
            {liked ? "Mi Piace" : "Like"}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Icon name="chatbubble-outline" size={24} color="#333" />
          <Text style={{ marginLeft: 8, color: '#333' }}>Commenta</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Post;
