import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TaskList from '../pages/TaskList.js';
import AddData from '../pages/AddData.js';
const Stack = createStackNavigator();

export const MainRouting = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Task List" component={TaskList} />
        <Stack.Screen name="Add Task" component={AddData} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

