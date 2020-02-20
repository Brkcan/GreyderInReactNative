import React from 'react';
import {View,StyleSheet,Text} from 'react-native';

const Card = (props) => {
  return (
    <View style={styles.containerStyle}>
        <Text style={styles.ortaText}>{props.children} </Text>
    </View>
  )
}
const styles = StyleSheet.create({
  containerStyle: {
    marginTop: 10,
    borderBottomWidth: 1,

    marginLeft:20,
    marginRight:5,
    elevation: 1,
    shadowRadius:2,
    shadowOpacity: 0.1,
    borderColor:'#ddd',
    shadowColor:'#000',
    backgroundColor: 'white',
    width: 175,
    height: 75,
    
  },
  ortaText:{
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Card;

//  <View>
//  <PieChart
//                 style={styles.pie}
//                 data={ pieData }
//             />
//  </View>
