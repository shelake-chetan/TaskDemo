import React, { Component } from "react";
import { View, FlatList, Button, StyleSheet, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { deleteTask } from '../redux/action/Actions'

class TaskList extends Component {

  handleDeleteClick = (id) => {
    this.props.deleteTask(id);
  }

  render() {
    const { tasks } = this.props.tasks;
    return (
      <View style={styles.mainContainer}>
        <FlatList
          data={tasks}
          renderItem={({ item, index }) => {
            return (
              <>
                <View style={styles.flatListConatiner}>
                  <View style={styles.headerConatiner}>
                    <Text style={styles.textName}>{item.name}</Text>
                        <TouchableOpacity onPress={() => { this.handleDeleteClick(item.id) }}>
                        <Text style={styles.formatText}>Delete</Text>
                      </TouchableOpacity>
                  </View>
                  <View style={styles.headerConatiner}>
                      <Text >Task List:</Text>
                      <TouchableOpacity onPress={() => { 
                          this.props.navigation.navigate('Add Task',{lastData:item,isEdit:true});
                      }}>
                      <Text style={styles.formatText}>Edit</Text>
                      </TouchableOpacity>
                  </View>
                  {
                  item.tasks.map((item, index) => {
                     return (
                        <Text key={index + 1} style={styles.listText}>{(index + 1) + "] "}{item}</Text>)
                    })
                  }
                </View>
              </>)
            }}
         keyExtractor={(item) => { item.id}}
        />
        <View style={styles.bottomButton}>
          <Button
            onPress={() => {
              this.props.navigation.navigate('Add Task');
            }}
            style={styles.button}
            title="add" />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 4,
  },
  headerConatiner: {
    padding: 2,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bottomButton: {
    flex: 1,
    justifyContent: 'flex-end',
    bottom: 4,
    padding: 4,
  },
  button: {
    width: '100%'
  },
  flatListConatiner: {
    padding: 6,
    borderRadius: 1,
    borderColor: 'gray',
    borderWidth: 1,
    backgroundColor: '#fff',
    elevation: 3,
    borderRadius: 4,
    marginTop: 6,
  },
  textName: {
    fontSize: 18,
    fontWeight: '700',
  },
  listText: {
    marginLeft: 12,
  },
  formatText:{
     color: '#808080' 
  }
});

const mapStatetoProps = (state, ownProps) => {
  return { tasks: state.tasks };
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ deleteTask }, dispatch);
}

export default connect(mapStatetoProps, mapDispatchToProps)(TaskList);
