var Button = require('react-native-button');
var React = require('react-native');
var CreateRoom = require('./Create');
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
      component: Main
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Voting Room
        </Text>
        <Text style={styles.instructions}>
          I didn't make this so we could play resistance remotely
        </Text>
        <Button style={styles.createRoomButton} onPress={this._createRoom.bind(this)}>
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
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  createRoomButton: {
    flex:.3,
    color: 'green'
  },
  joinRoomButton: {
    flex:.3,
    color: 'blue'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

module.exports = Main;
