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
    // fetch('http://localhost:3000/groups/new?group=group_name=ResistanceRoom321')
    //   .then((response) => response.text())
    //   .then((responseText) => {
    //     console.log("Successfully Added Player");
    //   });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.main}>
          <Text>Send Invitations</Text>
        </View>
        <Button style={styles.inviteButton}> Send Invites</Button>
      </View>
    )
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center'
  },
  main: {
    flex: 1,
    marginTop: 75,
  },
  parameters: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  inviteButton: {
    height: 50,
    padding: 12,
    fontSize: 24,
    backgroundColor: "#11D811",
    color: 'white',
    flex: 1,
  }

});


module.exports = Room;
