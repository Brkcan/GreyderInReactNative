import React from 'react';
import {Text, TouchableOpacity,StyleSheet} from 'react-native';

const Button = ({onPress, children}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.buttonStyle}>
    <Text style={styles.textStyle}> {children} </Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    marginTop: 5,
    borderWidth: 1,
    marginLeft: 5,
    marginRight: 5,
    borderColor: '#007aff'
  },
  textStyle: {
    color: '#007aff',
    alignSelf: 'center',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },
});
