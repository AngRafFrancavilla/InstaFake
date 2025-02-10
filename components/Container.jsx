import { View } from "react-native";

function Container({ children }) {
  return (
    <View style={{
      backgroundColor: '#f9f9f9',
      minHeight: 400,   
      margin: 20,
      padding: 20, 
      borderRadius: 10,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 8,
      elevation: 5,
    }}>
      {children}
    </View>
  );
}

export default Container;
