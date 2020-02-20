import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Card} from 'react-native-shadow-cards';

class HistoryScreen extends Component{
  render() {
    const {data} = this.props;
    return (
      <View>

      <View style={styles.container}>

        <View>
            <Card style={{padding: 0, margin: 3}}>
              <Text style={styles.titleStyle}>                  Tutar</Text>
              <Text style={styles.titleStyle}>       {data.tutar}</Text>
            </Card>

          </View>
          <View>
          <Card style={{padding: 0, margin: 0}}>
            <Text style={styles.titleStyle}>                  Tutar</Text>
            <Text style={styles.titleStyle}>       {data.tutar}</Text>
          </Card>
          </View>
      </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  titleStyle: {
    shadowColor: '#000000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    //backgroundColor: '#ffffff',
    padding: 5,
    margin: 5,
    borderRadius: 3,
    elevation: 3,
    color: '#ffffff'
  //  width: Dimensions.get('window').width / 2 - 10,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#F5FCFF',
    paddingTop: 25,
    paddingRight: 1,
  },
  viewOne: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    padding: 5,
    margin: 5,
    borderRadius: 3,
    elevation: 3,
  }
});
export default HistoryScreen;
