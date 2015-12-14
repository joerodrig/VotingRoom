var Button     = require('react-native-button');
var React      = require('react-native');
var CreateRoom = require('./Create');
var Rooms      = require('./Rooms');
var {
  View,
  Text,
  StyleSheet
} = React;

class Main extends React.Component {
  constructor(props){
    super(props);

    this._createRoom = this._createRoom.bind(this);
    this._joinRoom = this._joinRoom.bind(this);
  }
  //Direct To "Create Room View"
  _createRoom() {
    console.log("Creating a Room");
    this.props.navigator.push({
      title: "Create a Room",
      component: CreateRoom
    });
  }
  //Direct To "Join Room View"
  _joinRoom() {
    console.log("Joining a Room");
    this.props.navigator.push({
      title: "Join a Room",
      component: Rooms
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.main}>
          <Text style={styles.welcome}>
            Voting Room
          </Text>
        </View>

        <Button style={styles.createRoomButton} onPress={this._createRoom}>
          Create Room
        </Button>
        <Button style={styles.joinRoomButton} onPress={this._joinRoom}>
          Join Room
        </Button>
      </View>
    )
  }
}
var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  main: {
    flex: 1,
    justifyContent: 'center',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
  },
  createRoomButton: {
    height: 50,
    padding: 12,
    fontSize: 24,
    backgroundColor: "#11D811",
    color: 'white',
    flex: 1,
  },
  joinRoomButton: {
    height: 50,
    padding: 12,
    fontSize: 24,
    backgroundColor: "#F87000",
    color: 'white',
    flex: 1,
  },
});

module.exports = Main;
