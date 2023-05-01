
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';


export default function App() {
  const  [content] = useState('123456789');

  return (
    <View style={styles.container}>
      <View style={styles.display}>
        <Text style={styles.text}>
          {content}
        </Text>
      </View>
      <View style={styles.buttonSection}>
        <View style={styles.buttonRow}>
          <View style={styles.button} >
            <Text style={styles.text2}>AC</Text>
          </View>
          <View style={styles.button} >
            <Text style={styles.text2}>+/-</Text>
          </View>
          <View style={styles.button} >
            <Text style={styles.text2}>%</Text>
          </View>
          <View style={styles.button} >
            <Text style={styles.text3}>/</Text>
          </View>
        </View>
        <View style={styles.buttonRow}>
          <View style={styles.button} >
            <Text style={styles.text}>7</Text>
          </View>
          <View style={styles.button} >
            <Text style={styles.text}>8</Text>
          </View>
          <View style={styles.button} >
            <Text style={styles.text}>9</Text>
          </View>
          <View style={styles.button} >
            <Text style={styles.text3}>X</Text>
          </View>
        </View>
        <View style={styles.buttonRow}>
          <View style={styles.button}>
            <Text style={styles.text}>4</Text>
          </View>
          <View style={styles.button} >
            <Text style={styles.text}>5</Text>
          </View>
          <View style={styles.button} >
            <Text style={styles.text}>6</Text>
          </View>
          <View style={styles.button} >
            <Text style={styles.text3}>-</Text>
          </View>
        </View>
        <View style={styles.buttonRow}>
          <View style={styles.button}>
            <Text style={styles.text}>1</Text>
          </View>
          <View style={styles.button} >
            <Text style={styles.text}>2</Text>
          </View>
          <View style={styles.button} >
            <Text style={styles.text}>3</Text>
          </View>
          <View style={styles.button} >
            <Text style={styles.text3}>+</Text>
          </View>
        </View>
        <View style={styles.buttonRow}>
          <View style={styles.button}>
          <AntDesign name="reload1" size={24} color="white" />
          </View>
          <View style={styles.button} >
            <Text style={styles.text}>0</Text>
          </View>
          <View style={styles.button} >
            <Text style={styles.text}>.</Text>
          </View>
          <View style={styles.button} >
            <Text style={styles.text3}>=</Text>
          </View>
        </View>
      </View>
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#22252e',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    flex:1
  },
  buttonSection: {
    flexDirection: 'column',
     flex: 6,
    width: '100%',
    gap: 10,
    backgroundColor: '#292d36',
    borderTopStartRadius:25
    
  },
  buttonRow: {
    flexDirection: 'row',
    backgroundColor: '#292d36',
    flex: 1,
    borderRadius: 25,
    margin:10,
    gap: 10
  },
  button: {
    flex: 1,
    color: 'white',
    backgroundColor: '#272b34',
    borderRadius: 25,
    alignItems:'center',
    
    justifyContent:'center'
  },
  text: {
    color: 'white',
    fontSize: 20,
    fontWeight: 600
  },
  text2: {
    color: '#49efcb',
    fontSize: 20,
    fontWeight: 600
  },
  text3: {
    color: '#e16477',
    fontSize: 20,
    fontWeight: 600
  },
  display: {
    color: 'white',
    backgroundColor: '#22252e',
    flex: 4,
    width: '100%',
    alignItems:"flex-end",
    justifyContent:"flex-end"
  }

});