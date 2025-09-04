import { Background } from "@react-navigation/elements";
import { Image, Text, View, StyleSheet } from "react-native";
import { Icon } from 'lucide-react-native'


// export default function App() 
export default function Index() {
  return (
    <View
      style={styles.container}
    >

      <Image source={require('./pomodoro.png')} />
      <View style={styles.actions}></View>
      
    </View>
    
  );
}


// estilos layout 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: '#021123',
    gap: 40,
  },
  actions: {
    paddingVertical: 24,
    paddingHorizontal: 24,
    backgroundColor: '#14448080',
    width: '80%',
    borderRadius: 32,
    borderWidth: 2,
    borderColor: '#144480',
  }

});   