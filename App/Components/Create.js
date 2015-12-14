var Button          = require('react-native-button');
var React           = require('react-native');
var Room            = require('./Room');
var Rooms            = require('./Rooms');
var Firebase        = require('firebase');
var FirebaseBaseRef = new Firebase("https://voting-room.firebaseio.com/");
var {
  View,
  Text,
  StyleSheet,
  TextInput
} = React;

class Create extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      roomName: ""
    };
    this._generateRoom = this._generateRoom.bind(this);
  }

  _generateRoom() {
    let self = this;
    FirebaseRoomsRef = new Firebase("https://voting-room.firebaseio.com/rooms");
    FirebaseRoomsRef.push(
      {
        roomName: this.state.roomName,
        published: false
      },
      function(error) {
        if (error) {
          console.log("Data could not be saved:", error);
        } else {
          console.log("Data saved successfully");
          //Joining room
          self.props.navigator.push({
            title: "Rooms",
            component: Rooms
          });
        }
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.roomName}
            autofocus={true}
            maxLength={25}
            textAlign='center'
            placeholder="Enter a room name"
            value={this.state.roomName}
            onChangeText={(text) => this.setState({roomName: text})}
          />
        </View>
        <Button
          onPress={this._generateRoom}
          style={styles.createButton}>
            Create
        </Button>
      </View>
    )
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  inputContainer: {
    flex: 1,
    marginTop: 125,
  },
  roomName: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
  },
  createButton: {
    height: 50,
    padding: 12,
    fontSize: 24,
    backgroundColor: "#11D811",
    color: 'white',
    flex: 1,
  },
});


module.exports = Create;
