var Button           = require('react-native-button');
var React            = require('react-native');
var Room             = require('./Room');
var MonthlyHistory   = require('./MonthlyHistory');
var Firebase         = require('firebase');
var FirebaseRoomsRef = new Firebase("https://voting-room.firebaseio.com/rooms");

// tcomb-form
var t = require('tcomb-form-native');
var Form = t.form.Form;

var { View, Text, StyleSheet, TextInput, ScrollView } = React;

// Domain model
var Unit = t.struct({
  unit_name: t.String,
  monthly_rent: t.Number,
  tenant_count: t.Number
})

var options = {
  fields: {
    monthly_rent: {
      keyboardType: 'numeric'
    },
    tenant_count: {
      keyboardType: 'numeric'
    },
  }
}

class Create extends React.Component {
  constructor(props){
    super(props);
    this._generateRoom = this._generateRoom.bind(this);
  }

  _generateRoom() {
    let self = this;

    // Hacky way to calculate a year time period starting with current month
    var monthNames = ["January", "February", "March", "April", "May", "June",
                      "July", "August", "September", "October", "November", "December"
    ];
    var d = new Date();
    var months = [];
    for (i = 0; i <= 12; i++) {
      if (i !== 0){
        let newDate = new Date(d.setMonth(d.getMonth() + 1));
        months.push({month: i, name: monthNames[newDate.getMonth()], rent_paid: false});
      } else {
        months.push({month: i, name: monthNames[d.getMonth()], rent_paid: false});
      }
    }

    var inputs = this.refs.form.getValue();
    if (inputs) {
      var newUnit =
        FirebaseRoomsRef.push(
          {
            name: inputs.unit_name,
            monthly_rent: inputs.monthly_rent,
            tenant_count: inputs.tenant_count,
            published: false,
            months: months

          },
          function(error) {
            if (error) {
              console.log("Data could not be saved:", error);
            } else {
              console.log("Data saved successfully");
              //Joining room
              self.props.navigator.push({
                title: "Monthly History",
                component: MonthlyHistory,
                passProps: { unit: newUnit.key() }
              });
            }
        });
    }
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.nav}>
          <Button
            style={styles.createButton}
            onPress={this._generateRoom}>
            Create
          </Button>
        </View>
        <View style={styles.inputContainer}>
          <Form
            ref="form"
            type={Unit}
            options={options}
          />
        </View>
      </ScrollView>
    )
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  inputContainer: {
    flex: 1,
    padding: 25
  },
  roomName: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
  },

  nav: {
    height: 32,
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderColor: 'gray',
    borderBottomWidth: 1,
  },
  createButton: {
    fontSize: 12,
    color: 'black',
    padding: 7,
  },
});


module.exports = Create;
