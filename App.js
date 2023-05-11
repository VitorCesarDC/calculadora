
import { useState } from 'react';
import { StyleSheet, Text, View, touchableOpacity} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

export default function App() {
  
  const [currentNumber, setCurrentNumber ] = useState("")
  const [ lastNumber, setLastNumber ] = useState("")

  function calculator(){
    const splitNumbers = currentNumber.split(" ")
    const operator = splitNumbers[1]
    console.log(splitNumbers)
    if(operator === "×"){    
      setCurrentNumber((parseFloat(splitNumbers[0]) * parseFloat(splitNumbers[2])).toString())
      return
    }
    if(operator === "÷"){
      setCurrentNumber((parseFloat(splitNumbers[0]) / parseFloat(splitNumbers[2])).toString())
      return
    }
    if(operator === "+"){

      setCurrentNumber((parseFloat(splitNumbers[0]) + parseFloat(splitNumbers[2])).toString())
      return
    }
    if(operator === "-"){
      setCurrentNumber((parseFloat(splitNumbers[0]) - parseFloat(splitNumbers[2])).toString())
      return
    }
  }


  function handleInput(keyboardPressed){

    if(keyboardPressed === "="){
      setLastNumber(currentNumber + " = ")
      calculator()
      return
    }
    if(keyboardPressed === "×" | keyboardPressed === "÷" | keyboardPressed === "+" | keyboardPressed === "-"){    
      setCurrentNumber(currentNumber + " " + keyboardPressed + " ")      
      return
    }
    if(keyboardPressed === "back"){
      console.log(currentNumber)
      setCurrentNumber(currentNumber.substring(0,(currentNumber.length - 1)))
      return
    }
    if(keyboardPressed === "."){
      setCurrentNumber(currentNumber + keyboardPressed) 
      return
    }
    if(keyboardPressed === "+/-"){

      return
    }
    if(keyboardPressed === "AC"){
      setLastNumber("")
      setCurrentNumber("")
      return
    }

    setCurrentNumber(currentNumber + keyboardPressed)

  }





  return (
    <View style={styles.container}>
      <View style={styles.display}>
      <Text style={styles.text}>
          {lastNumber}
        </Text>
        <Text style={styles.text4}>
          {currentNumber}
        </Text>
      </View>
      <View style={styles.buttonSection}>
        <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.button} onPress={()=> handleInput("AC")}>
          <View style={styles.button} >
          <Text style={styles.text2}>AC</Text>
          </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={()=> handleInput("+/-")}>
          <View style={styles.button} >
          <MaterialCommunityIcons name="plus-minus-variant" size={24} color="#49efcb" />
          </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={()=> handleInput("%")}>
          <View style={styles.button} >
          <Text style={styles.text2}>%</Text>
          </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={()=> handleInput("÷")}>
          <View style={styles.button} >
          <Text style={styles.text3}>÷</Text>
          </View>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.button} onPress={()=> handleInput("7")}>
          <View style={styles.button} >
          <Text style={styles.text}>7</Text>
          </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={()=> handleInput("8")}>
          <View style={styles.button} >
          <Text style={styles.text}>8</Text>
          </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={()=> handleInput("9")}>
          <View style={styles.button} >
          <Text style={styles.text}>9</Text>
          </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={()=> handleInput("×")}>
          <View style={styles.button} >
          <Text style={styles.text3}>×</Text>
          </View>
          </TouchableOpacity>
        </View>


        <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.button} onPress={()=> handleInput("4")}>
          <View style={styles.button}>
          <Text style={styles.text}>4</Text>
          </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={()=> handleInput("5")}>
          <View style={styles.button} >
          <Text style={styles.text}>5</Text>
          </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={()=> handleInput("6")}>
          <View style={styles.button} >
          <Text style={styles.text}>6</Text>
          </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={()=> handleInput("-")}>
          <View style={styles.button} >
          <Text style={styles.text3}>-</Text>
          </View>
          </TouchableOpacity>
        </View>
      


        <View style={styles.buttonRow}>

        <TouchableOpacity style={styles.button} onPress={()=> handleInput("1")}>
          <View style={styles.button}>
          <Text style={styles.text}>1</Text>
          </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={()=> handleInput("2")}>
            <View style={styles.button}>
            <Text style={styles.text}>2</Text>
            </View>
            </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={()=> handleInput("3")}>
          <View style={styles.button} >
            <Text style={styles.text}>3</Text>
          </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={()=> handleInput("+")}>
          <View style={styles.button} >
           <Text style={styles.text3}>+</Text>
          </View>
          </TouchableOpacity>
        </View>


        <View style={styles.buttonRow}>
          
        <TouchableOpacity style={styles.button} onPress={()=> handleInput("back")}>
          <View style={styles.button}>
          <AntDesign name="reload1" size={24} color="white" style={{ transform: [{ scaleX: -1 }]}}/>
          </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={()=> handleInput("0")}>
          <View style={styles.button} >
          <Text style={styles.text}>0</Text>
          </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={()=> handleInput(".")}>
          <View style={styles.button} >
          <Text style={styles.text}>.</Text>
          </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={()=> handleInput("=")}>
          <View style={styles.button} >
          <Text style={styles.text3}>=</Text>
          </View>
          </TouchableOpacity>
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
  text4: {
    color: 'white',
    fontSize: 50,
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