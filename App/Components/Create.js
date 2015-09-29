var Button   = require('react-native-button');
var Firebase = require('firebase');
var React    = require('react-native');

var {
  View,
  Text,
  StyleSheet
} = React;

class Create extends React.Component {
  constructor(props){
    super(props);

    this._generateRoom = this._generateRoom.bind(this);
  }

  _generateRoom() {
    fetch('http://localhost:3000/groups/new?group=group_name=ResistanceRoom321')
      .then((response) => response.text())
      .then((responseText) => {
        console.log("Successfully Generated Room");
      });
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.parameters}>Room Name: Resistance321</Text>
        <Button onPress={this._generateRoom}>Create</Button>
      </View>
    )
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center'
  },
  parameters: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },

});


module.exports = Create;
