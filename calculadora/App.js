import { StatusBar } from 'expo-status-bar';
import { StrictMode, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [Display, setDisplay] = useState('0');
  const [previousValue, setPreviousValue] = useState(null);
  const [operator, setOperator] = useState(null);
  const [watingForNewValue, setWatingForNewValue] = useState(false);

 const handleNumberPass = (num) => {
   if (watingForNewValue) {
     setDisplay(String(num));
     setWatingForNewValue(false);
   } else {
    setDisplay(Display === '0' ? String(num) : Display + num);
   }
 }

  const handleClear = () => {
    setDisplay('0');
    setPreviousValue(null);
    setOperator(null);
    setWatingForNewValue(false);
  }

  const handleOperatorPress = (op) => {
    const inputValue = parseFloat(Display);

    if (previousValue === null) {
      setPreviousValue(inputValue);
    } else {
      const result = calculate(previousValue, inputValue, operator);
      setDisplay(String(result));
      setPreviousValue(result);
    }

    setWatingForNewValue(true);
    setOperator(result);
  }

  const calculate = (firstValue, secondValue, operator) => {
    switch(operator) {
      case '+' : return firstValue + secondValue
      case '-' : return firstValue - secondValue
      case 'x' : return firstValue * secondValue
      case '÷' : return firstValue / secondValue
      default: return secondValue;
    }
  }

  const handleEquals = () => {
    const inputValue = parseFloat(Display);

    if (previousValue != null && operator) {
      const result = calculate(previousValue,inputValue, operator);
      setDisplay(String(result));
      setPreviousValue(null);
      setOperator(null);
      setWatingForNewValue(true);
    }
  }

  const handlePercentage = () => {
    setDisplay(String(parseFloat(Display) / 100));
  }

  const handleToggleSign = () => {
    setDisplay(String(parseFloat(Display) * -1));
  }

  const handleDecimal = () => {
    if (watingForNewValue) {
      setDisplay('0.');
      setWatingForNewValue(false);
    } else if (Display.indexOf('.') === -1){
      setDisplay(Display + '.');
    }
  }

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <View style={styles.displayContainer}>
          <Text style={styles.displayText} numberOfLines={1}>
              {Display}
          </Text>
      </View>

      {/* Linha 1 */}
      <View style={styles.row}>
        <TouchableOpacity style={styles.functionButton} onPress={handleClear}>
          <Text style={styles.functionText}>C</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.functionButton} onPress={handleToggleSign}>
          <Text style={styles.functionText}>+/-</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.functionButton} onPress={handlePercentage}>
          <Text style={styles.functionText}>%</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.operatorButton} onPress={() => handleOperatorPress('÷')}>
          <Text style={styles.operatorText}>÷</Text>
        </TouchableOpacity>
      </View>

      {/* Linha 2 */}
      <View style={styles.row}>
        <TouchableOpacity style={styles.buttonNumber} onPress={() => handleNumberPass(7)}>
          <Text style={styles.buttonText}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonNumber} onPress={() => handleNumberPass(8)}>
          <Text style={styles.buttonText}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonNumber} onPress={() => handleNumberPass(9)}>
          <Text style={styles.buttonText}>9</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.operatorButton} onPress={() => handleOperatorPress('x')} >
          <Text style={styles.operatorText}>x</Text>
        </TouchableOpacity>
      </View>

      {/* Linha 3 */}
      <View style={styles.row}>
        <TouchableOpacity style={styles.buttonNumber} onPress={() => handleNumberPass(4)}>
          <Text style={styles.buttonText}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonNumber} onPress={() => handleNumberPass(5)}>
          <Text style={styles.buttonText}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonNumber} onPress={() => handleNumberPass(6)}>
          <Text style={styles.buttonText}>6</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.operatorButton} onPress={() => handleOperatorPress('-')}>
          <Text style={styles.operatorText}>-</Text>
        </TouchableOpacity>
      </View>

      {/* Linha 4 */}
      <View style={styles.row}>
        <TouchableOpacity style={styles.buttonNumber} onPress={() => handleNumberPass(1)}>
          <Text style={styles.buttonText}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonNumber} onPress={() => handleNumberPass(2)}>
          <Text style={styles.buttonText}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonNumber} onPress={() => handleNumberPass(3)}>
          <Text style={styles.buttonText}>3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.operatorButton} onPress={() => handleOperatorPress('+')}>
          <Text style={styles.operatorText}>+</Text>
        </TouchableOpacity>
      </View>

      {/* Linha 5 */}
      <View style={styles.row}>
        <TouchableOpacity style={[styles.buttonNumber, styles.doubleWidthButton]} onPress={() => handleNumberPass(0)}>
          <Text style={styles.buttonText}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonNumber}>
          <Text style={styles.buttonText}>.</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.operatorButton}>
          <Text style={styles.operatorText}>=</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  displayContainer: {
    flex: 2.5,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 20
  },
  displayText: {
    color: '#FFFFFF',
    fontSize: 72,
    fontWeight: '300',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10
  },
  functionButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
    borderRadius: 50,
    height: '75%',
    backgroundColor: '#A5A5A5',
  },
  functionText: {
    color: '#000',
    fontSize: 28
  },
  operatorButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
    borderRadius: 50,
    height: '75%',
    backgroundColor: '#FF9500',
  },
  operatorText: {
    color: '#fff',
    fontSize: 36
  },
  buttonNumber: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
    borderRadius: 50,
    height: '75%',
    backgroundColor: '#333333',
  },
  buttonText: {
    color: '#fff',
    fontSize: 32
  },
  doubleWidthButton : {
    flex: 2,
    alignItems: 'flex-start',
    paddingLeft: 32,
  }
});