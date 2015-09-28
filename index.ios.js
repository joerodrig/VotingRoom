'use strict';
var Button = require('react-native-button');
var React = require('react-native');
var Main = require('./App/Components/Main');
var {
  AppRegistry,
  StyleSheet,
  Text,
  NavigatorIOS,
  View,
} = React;

class VotingRoom extends React.Component {
  constructor(props) {
    super(props)
    this.state = {};
    this.state.navigationBarHidden = false;
  }
  toggleNavBar() {
    this.setState({
      navigationBarHidden: !this.state.navigationBarHidden
    });
  }
  render() {
    return (
      <NavigatorIOS
        navigationBarHidden={this.state.navigationBarHidden}
        style={styles.container}
        initialRoute={{
          title: 'Choose One',
          component: Main,
          passProps: {
            toggleNavBar: this.toggleNavBar,
          }
        }} />
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111'
  }
})

AppRegistry.registerComponent('VotingRoom', () => VotingRoom);
