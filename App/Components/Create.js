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
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.parameters}>Room Name: Resistance </Text>
        <Button>Create</Button>
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
