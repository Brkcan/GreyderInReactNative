import React, {Component} from 'react';
import {Text, View, StyleSheet, Button, ScrollView} from 'react-native';
import axios from 'axios';
import Card from './Card';


class LflBugun extends Component{
  state = {
    data: [],
    confirm: false,
  }
  componentWillMount() {
    axios.get('http://localhost:8080/api/entumsatisanlik/all')
      .then(res => this.setState({data: res.data}))
  }
  _incele = () => {
    this.setState({
      confirm: true
    })
  }
  _kapat = () => {

  }
//  <Button title="kapat" onPress={this._kapat} />
  render() {
    let comfirmedOutPut
    if(this.state.confirm){
      confirmedOutput = (

          this.state.data.map((res,Id) =>
          <Card key={Id} style={{padding: 0, margin: 3}}>
          <Text style={styles.titleStyle}>Tutar : {res.tutar}</Text>
          </Card>
        )
      )
    }
    return (
      <ScrollView style={styles.listeView}>
        <Button title="Dün Satışlar Sıralaması" onPress={this._onPress}/>

          {
            this.state.data.map((res,Id) =>
            <Card key={Id} style={{padding: 0, margin: 3}}>
            <Text style={styles.titleStyle}>Tutar : {res.tutar}</Text>
            <Text style={styles.titleStyle}>Unvan :{res.magaza}</Text>

            </Card>
          )
          }

      </ScrollView>
    )
  }
}
const styles = StyleSheet.create({
  listeView: {
    marginTop: 5,
  },
  scrollView: {
   backgroundColor: 'pink',
   marginHorizontal: 20,
 },
  titleStyle: {
    shadowColor: '#000000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    backgroundColor: '#f7f7f7',
    padding: 0,
    margin: 0,
    borderRadius: 3,
    elevation: 3,
    color: '#111111'
  //  width: Dimensions.get('window').width / 2 - 10,
  },
});
  export default LflBugun;
