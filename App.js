import { StatusBar } from 'react';
import {Button, StyleSheet, Text,TextInput, View,ScrollView,FlatList } from 'react-native';

export default function App() {
  const [enteredGoalText,setEnteredGoalText]=useState('')
  conts [goals,setGoals]=useState([])

  function handleInputGoal(enteredText) {
    console.log(enteredText)
    setEnteredGoalText(enteredText)
  }
   
  function handleAddGoal() {
    console.log (enteredGoalText)
    setGoals(() => [...goals, {Text: enteredGoalText,key: Mat. random().toString()}])
  }
  //Como quiero que se vea el componente
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
        style={styles.textInput}
        placeholder='Your Goal!'
        onChangeText={handleAddGoal}
    />
    <Button
    title='Add Goal'
    color={"#A3FFD6"}
    onPress={handleAddGoal}
    />
    </View>
    <View style ={styles.goalsContainer}>
    <FlatList
    data={goals}
    renderItem= { (itemData) => {
      <View style ={styles.goalsItem}>
      <Text style ={styles.goalText}>
        {itemData.item.text}
        </Text>
        </View>
    }}
    >
      </FlatList>
    </View>
    </View>
  );
}
//Se comporta como Css
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:50,
    paddingHorizontal:20
  },
  inputContainer:{
    flex: 1,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    marginBotton: 20,
    borderBottonWidth: 1,
    borderBottonColor: '#7BC9FF'
  },
  btnGoal:{
    borderRadius:20,
    backgroundColor:"#cccccc"
  },
  textInput:{
    borderWidth:1,
    borderColor:'#cccccc',
    width:'80%',
    marginRight:3,
    padding:8,
    borderRadius:5,
  },
  goalsContainer:{
    flex:5
  },
  goalsItem:{
    margin: 8,
    padding:8,
    borderRadius:6,
    backgroundColor:'#8576FF',
    color: 'white'
  },
  goalText:{
    color: 'white'
  },
});
