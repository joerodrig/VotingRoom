var Button          = require('react-native-button');
var React           = require('react-native');
var Room            = require('./Room');
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
    }
    this._generateRoom = this._generateRoom.bind(this);
  }

  _generateRoom() {
    FirebaseRoomsRef = new Firebase("https://voting-room.firebaseio.com/rooms");
    FirebaseRoomsRef.push({
      roomName: this.state.roomName,
      creator: "Bob Dylan"
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.room_name}
          placeholder="Enter a room name"
          value={this.state.roomName}
          onChangeText={(text) => this.setState({roomName: text})}
        />
        <Button onPress={this._generateRoom}>Create</Button>
      </View>
    )
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  room_name: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    borderColor: 'gray',
    borderWidth: 1
  }

});


module.exports = Create;
