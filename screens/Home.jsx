import React from "react";
import { Text, View, Image, ScrollView } from "react-native";
import HomePost from "../components/HomePost";
import { useSessionContext } from '../context'; 

function Home() {

  const { posts } = useSessionContext();

  return (
    <ScrollView style={{ backgroundColor: '#f0f4f8' }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          padding: 20,
          backgroundColor: '#ffffff',
          borderBottomWidth: 1,
          borderBottomColor: '#ddd',
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.1,
          shadowRadius: 4,
          elevation: 5,
        }}
      >
        <Image
          source={{ uri: 'https://link-al-logo.com/logo.png' }}
          style={{ width: 30, height: 30, marginRight: 10 }}
        />
        <Text
          style={{
            fontSize: 24,
            fontWeight: 'bold',
            color: '#333',
          }}
        >
          Home Page InstaTrans
        </Text>
      </View>

 
      {posts.map((post, index) => (
        <HomePost
          key={index} 
          username={post.name}
          profileImage="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Matteo_Renzi_2015.jpeg/640px-Matteo_Renzi_2015.jpeg" // Replace with actual profile images if available
          postImage={post.image}
          description={post.description}
        />
      ))}
    </ScrollView>
  );
}

export default Home;
