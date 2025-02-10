import React from "react";
import { View, Text, Image } from "react-native";

const username = "Angelo Raffaele Francavilla";
const followers = 120;
const seguiti = 234;
const posts = 45;
const userImage = "https://media.licdn.com/dms/image/v2/D5635AQETPwGdbiD6sw/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1727708984345?e=1729688400&v=beta&t=N3L3_aCNLUpvhX59rdT4drK9s9hgcrdujrKHzCw1sTw";

function Header() {
  return (
    <View style={{ padding: 20, backgroundColor: '#fff', borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
      <View 
        style={{ 
          flexDirection: 'row', 
          alignItems: 'center', 
          marginBottom: 10 
        }}>
        <Image 
          source={{ uri: userImage }} 
          style={{ 
            width: 80, 
            height: 80, 
            borderRadius: 40, 
            marginRight: 20 
          }} 
        />
        <View style={{ flex: 1 }}>
          <Text style={{ fontSize: 22, fontWeight: 'bold', color: '#333' }}>{username}</Text>
          <View 
            style={{ 
              flexDirection: 'row', 
              justifyContent: 'space-between', 
              marginTop: 5 
            }}>
            <Text style={{ fontSize: 16, color: 'gray' }}>{followers} Followers</Text>
            <Text style={{ fontSize: 16, color: 'gray' }}>{seguiti} Seguiti</Text>
            <Text style={{ fontSize: 16, color: 'gray' }}>{posts} Posts</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

export default Header;
