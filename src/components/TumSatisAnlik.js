import React, {Component} from 'react';
import {Text, View, StyleSheet, Button,ScrollView} from 'react-native';
import axios from 'axios';
import Card from './Card';
import PureChart from 'react-native-pure-chart';

class TumSatisAnlik extends Component{
  state = {
    data: [],
  }
  componentWillMount() {
    axios.get('http://localhost:8080/api/entumsatislarson/all')
      .then(res => this.setState({data: res.data}))
  }
  render() {
    let sampleData = [
    {
      seriesName: 'series1',
      data: [
        {x: '2018-02-01', y: 30},
        {x: '2018-02-02', y: 200},
        {x: '2018-02-03', y: 170},
        {x: '2018-02-04', y: 250},
        {x: '2018-02-05', y: 10}
      ],
      color: '#297AB1'
    },
    {
      seriesName: 'series2',
      data: [
        {x: '2018-02-01', y: 20},
        {x: '2018-02-02', y: 100},
        {x: '2018-02-03', y: 140},
        {x: '2018-02-04', y: 550},
        {x: '2018-02-05', y: 40}
      ],
      color: 'yellow'
    }
  ]
    return (
      <View style={styles.container}>
      <View stle={styles.space}>
        <Button title="Anlık Satışlar Sıralaması" onPress={this._onPress}/>

        <ScrollView>
        <View>
          <PureChart data={sampleData} type="bar" />
        </View>
          {
            this.state.data.map((res,Id) =>

              <View style={styles.space}>
            <Text style={styles.titleStyle}>{res.magaza}</Text>
            <Text style={styles.titleStyle}>{res.tutar}TL</Text>
              </View>

          )
          }
          </ScrollView>

      </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  space: {
    justifyContent: 'space-between',
      flexDirection: 'row',
  },
  container:{
    backgroundColor:'#FFFFFF',
  },
  scrollView: {
   backgroundColor: '#FFFFFF',
   marginHorizontal: 20,
 },
 oneContainer:{
   paddingTop:200,
   width:600,
   marginLeft:30,
   height:4000,
   flexDirection: 'row',

 },
  titleStyle: {
    shadowColor: '#000000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    backgroundColor: '#FFFFFF',
    padding: 0,
    margin: 0,
    borderRadius: 3,
    elevation: 3,
    color: 'black',
    justifyContent: 'space-between',
  //  width: Dimensions.get('window').width / 2 - 10,
  },
});
export default TumSatisAnlik;
