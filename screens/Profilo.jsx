import React from "react";
import { View, ScrollView, Text, Image, Dimensions, TouchableOpacity } from "react-native";
import Header from "../components/Header";

const postsData = [
  {
    imageSource: require('../img/foto3.jpeg'),
    description: "Io in Montagna.",
    likes: 45,
    comments: 12,
  },
  {
    imageSource: require('../img/post1.jpeg'),
    description: "Calcio<3.",
    likes: 78,
    comments: 24,
  },
  {
    imageSource: require('../img/post2.jpeg'),
    description: "Al mare.",
    likes: 67,
    comments: 14,
  },
  {
    imageSource: require('../img/foto8.jpeg'),
    description: "In città.",
    likes: 34,
    comments: 9,
  },
  {
    imageSource: require('../img/foto6.jpeg'),
    description: "Cibo.",
    likes: 89,
    comments: 32,
  },
  {
    imageSource: require('../img/foto4.jpeg'),
    description: "Con gli amici.",
    likes: 52,
    comments: 18,
  }
];

const screenWidth = Dimensions.get('window').width;

function Profilo() {
  const postWidth = (screenWidth - 40) / 3; 

  return (
    <View style={{ flex: 1, backgroundColor: '#f0f4f8' }}>
      <ScrollView contentContainerStyle={{ padding: 10 }}>
        <Header />
        <Text style={{
          fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginVertical: 20
        }}>
          I miei Post
        </Text>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
          {postsData.map((post, index) => (
            <View 
              key={index} 
              style={{ 
                width: postWidth, 
                marginBottom: 20, 
                paddingHorizontal: 5 
              }}>
              <Image 
                source={post.imageSource} 
                style={{
                  width: '100%', 
                  height: postWidth, 
                  borderRadius: 10, 
                  marginBottom: 5,
                  borderWidth: 1,
                  borderColor: '#ddd',
                }}
              />
              <Text style={{
                textAlign: 'center', 
                fontSize: 12, 
                color: '#333',
                marginBottom: 5,
              }}>
                {post.description}
              </Text>
              <View style={{
                flexDirection: 'row', 
                justifyContent: 'space-between', 
                paddingHorizontal: 5
              }}>
                <Text style={{ fontSize: 12 }}>{post.likes} likes</Text>
                <Text style={{ fontSize: 12 }}>{post.comments} comments</Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

export default Profilo;
