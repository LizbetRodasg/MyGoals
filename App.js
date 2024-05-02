import { useState } from 'react'
import {StyleSheet, View, FlatList } from 'react-native';
import GoalInput from './assets/components/GoalInput';
import GoalItem from './assets/components/GoalItem';

export default function App() {
  conts [goals,setGoals]=useState([])
   
  function handleAddGoal(enteredGoalText) {

    setGoals(() => [...goals, {Text: enteredGoalText}])
  }
function handleDeleteGoal(){
  console.log('DELETE')
}
  return (
    <View style={styles.container}>
      <GoalInput
        onAddGoal={handleAddGoal}
    />
    <View style ={styles.goalsContainer}>
    <FlatList
    data={goals}
    renderItem= { (itemData) => {
      <GoalItem
      itemData={itemData}
      onDeleteItem={handleDeleteGoal}
      />
    }}
        keyExtractor={(item) => {
          return item.id
        }}
        />
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
  goalsContainer:{
    flex: 1,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    marginBotton: 20,
    borderBottonWidth: 1,
    borderBottonColor: '#7BC9FF'
  
  },
});
