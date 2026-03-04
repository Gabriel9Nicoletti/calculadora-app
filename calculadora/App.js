import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <View style={styles.displayContainer}>
          <Text style={styles.displayText} numberOfLines={1}>
              1000
          </Text>
      </View>
      <View/>

      {/*Linha 1*/}
      <View style={styles.row}>
        <TouchableOpacity style={styles.functionButton}>
          <Text style={styles.functionText}>C</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.functionButton}>
          <Text style={styles.functionText}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.functionButton}>
          <Text style={styles.functionText}>%</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.operatorButton}>
          <Text style={styles.functionText}>÷</Text>
        </TouchableOpacity>
      </View>
    
    {/*Linha 2*/}
      <View style={styles.row}>
        <TouchableOpacity style={styles.buttomNumber}>
          <Text style={styles.functionText}>7</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttomNumber}>
          <Text style={styles.functionText}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttomNumber}>
          <Text style={styles.functionText}>9</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.operatorButton}>
          <Text style={styles.functionText}>X</Text>
        </TouchableOpacity>
      </View>
    
    {/*Linha 3*/}
      <View style={styles.row}>
        <TouchableOpacity style={styles.buttomNumber}>
          <Text style={styles.functionText}>4</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttomNumber}>
          <Text style={styles.functionText}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttomNumber}>
          <Text style={styles.functionText}>9</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.operatorButton}>
          <Text style={styles.functionText}>X</Text>
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
    backgroundColor: '#333333',
  },
  operatorButton: {
  color: '#fff',
  fontSize: 32,
  },
  buttomNumber: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
    borderRadius: 50,
    height: '75%',
    backgroundColor: '#333333',
  },
  buttomText: {
  color: '#fff',
  fontSize: 32,
  },
  doubleWidthButton : {
    flex: 2,
    alignItems: 'flex-start',
    paddingLeft: 32,
  }
});