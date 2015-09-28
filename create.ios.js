'use strict';
var Button = require('react-native-button');
var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;

class CreateRoom extends React.Component {
  //Direct To "Create Room View"
  _createRoom() {
    console.log("Creating a Room");

  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Create A Room
        </Text>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});

module.exports(CreateRoom)
