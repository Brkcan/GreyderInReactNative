 import React, {Component} from 'react';
import {Text, View, StyleSheet,Button} from 'react-native';
import {connect} from 'react-redux';
import Colors from './Colors';
import axios from 'axios';
import Detay from './Detay';
import HistoryScreen from '../screen/HistoryScreen';
import Card from './Card';
import {veri_changed} from '../actions';


class Liste extends Component {
state = {
    data: [],
    data2:[],
};
async componentWillMount() {
    Promise.all([
      axios.get('http://localhost:8080/api/entumsatisikiyil/all'),
      axios.get('http://localhost:8080/api/lflbugun/all')
    ]).then(([userResponse, reposResponse]) => {
      console.log(userResponse.data[0]);
      this.setState({data: userResponse.data[0], data2: reposResponse.data});
    });
  }

  componentDidMount() {}

  _onPress = () => {
    return this.state.data2.map((response, Id) =>
      <Detay key={Id} data={response}></Detay>
    );
}


  render() {
    //  console.log('gelen data' + this.state);
    return (
      <View style={styles.listeView}>

        <Button title="İki Yıllık " onPress={this._onPress} />
        <Card style={{padding: 0, margin: 3}}>
          <Text style={styles.titleStyle}>{this.state.data.tutar}</Text>
          </Card>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  listeView: {
    marginTop: 5,
  },
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
});

export default Liste;
