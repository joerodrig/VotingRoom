var Button           = require('react-native-button');
var React            = require('react-native');
var Firebase         = require('firebase');
var FirebaseRoomsRef = new Firebase("https://voting-room.firebaseio.com/rooms");
var { View, Text, StyleSheet, ListView } = React;

class Rooms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ds: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}),
      updating: false
    }
    this.state.dataSource = this.state.ds.cloneWithRows([]);
  }

  componentDidMount() {
    this._fetchRooms();
  }

  _fetchRooms() {
    var self = this;
    console.log("Fetching data");
    var roomsArray = [];
    this.setState({updating: true})
    FirebaseRoomsRef.once("value", function(rooms) {
      if (rooms.val() === null){
        return;
      } else {
        Object.keys(rooms.val()).forEach(function(key) {
          roomsArray.push(rooms.val()[key]);
        });
        self.setState({dataSource: self.state.ds.cloneWithRows(roomsArray)});
        self.setState({updating: false});
      }
    }, function (errorObject) {
      console.log(" The read failed: " + errorObject);
    });
  }

  render() {
    // Load rooms
    return (
      <View style={styles.container}>
        <ListView style={styles.roomsList}
              dataSource={this.state.dataSource}
              initialListSize={25}
              onEndReached={this._fetchRooms.bind(this)}
              renderRow={(rowData) =>
                <View>
                  <View style={styles.row}>
                    <Text style={styles.text}>{rowData}</Text>
                  </View>
                  <View style={styles.separator} />
                </View>
              }>
        </ListView>
      </View>
    )
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1
  },
  roomsList: {
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#F6F6F6',
  },
  separator: {
    height: 1,
    backgroundColor: '#CCCCCC',
  },
  thumb: {
    width: 64,
    height: 64,
  },
  text: {
    flex: 1,
  },
});

module.exports = Rooms;
