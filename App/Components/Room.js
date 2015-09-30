var Button   = require('react-native-button');
var React    = require('react-native');

var {
  View,
  Text,
  StyleSheet
} = React;

class Room extends React.Component {
  constructor(props){
    super(props);

    this._addPlayer = this._addPlayer.bind(this);
  }

  _addPlayer() {
    fetch('http://localhost:3000/groups/new?group=group_name=ResistanceRoom321')
      .then((response) => response.text())
      .then((responseText) => {
        console.log("Successfully Added Player");
      });
  }
  render() {
    return (
      <View style={styles.container}>
        <Text> Room Name</Text>
        <Text>-- Members --</Text>
        <Text> Joe </Text>
        <Text> Ricky </Text>
        <Text> Shyama</Text>
        <Text> Cassie</Text>
        <Text> Mike</Text>
        <Text> Ines</Text>
        <Button> Start Game</Button>
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


module.exports = Room;
