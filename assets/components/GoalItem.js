import { View, TextInput, Button, StyleSheet } from "react-native"


function GoalInput({itemData,onDeleteItem, id}){


    function handleInputGoal(){
        console.log(id)
        setEnteredGoalText(enteredText)
        console.log('addGoalHandler')
    }


    return(
        <Pressamble onPress={deleteGoalHandler}>
            <View style={StyleSheet.goalsItem} >
                <Text style={StyleSheet.goalText}>{itemData.item.text}</Text>
            </View>
        </Pressamble>
    )
}
export default GoalInput


const styles = StyleSheet.create({
    goalsItem: {
    margin:8,
    padding:8,
    borderRadius:6,
    backgroundColor:'#8576FF',
    color:'white'
    },
    goalText: {
        color:'white'
    }
})
