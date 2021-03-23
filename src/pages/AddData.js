import React, { Component } from "react";
import { View, Text, TextInput, StyleSheet, Button, Keyboard } from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addTask, updateTask } from '../redux/action/Actions'
import { getRandomId } from "../Utils";

class AddData extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      tasks: [],
      text: '',
      isEdit: false
    }
  }

  componentDidMount() {
    if (this.props.route.params) {
      const { isEdit, lastData } = this.props.route.params;
      if (isEdit) {
        this.setState({ name: lastData.name, tasks: lastData.tasks, id: lastData.id, isEdit: true });
      }
    }

  }

  addToTask = () => {
    this.setState({ text: '' })
    Keyboard.dismiss();
    this.setState((state) => {
      return state.tasks.push(this.state.task)
    });
  }

  addToList = () => {
    const { isEdit, id, tasks, name } = this.state;
    if (isEdit) {
      this.props.updateTask({ name: name, tasks: tasks, id: id });
    }
    else {
      this.props.addTask({ name: name, tasks: tasks, id: getRandomId() });
    }
    this.props.navigation.goBack();
  }

  checkButtonDisablity=()=>{
    const {name, tasks} = this.state;
    if(name&&tasks.length>0){
       return false;
    }
    else{
      return true;
    }
  }

  render() {
    const { isEdit, name } = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Enter Name</Text>
        <TextInput
          style={[styles.textInput, { width: '100%' }]}
          value={name}
          onChangeText={(text) => {
            this.setState({ name: text })
          }}
        />
        <Text style={styles.text}>Add Task</Text>
        <View style={styles.buttonContainer}>
          <TextInput
            value={this.state.text}
            style={styles.textInput}
            onChangeText={(value) => { this.setState({ text: value, task: value }) }}
          />
          <TouchableOpacity onPress={() => { this.addToTask() }} style={styles.addButton}>
            <Text style={styles.tochableText}>+</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.mainListContainer}>
          {
            this.state.tasks.map((item, i) => {
              return (
                <View style={styles.listContainer} key={i}>
                  <Text>{(i + 1) + "] "}</Text>
                  <Text>{item}</Text>
                </View>
              )
            })
          }
        </View>
        <View style={styles.buttonWrapper}>
          <Button disabled={this.checkButtonDisablity()} title={isEdit ? 'Update Task' : 'Add Task'} onPress={() => { this.addToList() }} style={{}} />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 12,
  },
  textInput: {
    height: 40,
    width: "85%",
    borderColor: 'gray',
    borderWidth: 1,
    padding: 4,
    backgroundColor: '#fff',
    borderRadius: 4,

  },
  text: {
    marginVertical: 8,
  },
  buttonContainer: {

    marginTop: 4,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  button: {
    borderRadius: 10,
    width: '20%',
  },
  listContainer: {
    marginTop: 4,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  mainListContainer: {
    flex: 1,
    marginTop: 4,
  },
  addButton: {
    backgroundColor: '#2196F3',
    width: 40,
    height: 40,

    borderRadius: 4,
    justifyContent: 'center',
  },
  tochableText: {
    marginTop: -4,
    textAlign: 'center',
    fontSize: 40,
    color: '#fff'
  },
  buttonWrapper:{
     flex: 1, 
    justifyContent: 'flex-end' }
})

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ addTask, updateTask }, dispatch);
};

export default connect(null, mapDispatchToProps)(AddData);