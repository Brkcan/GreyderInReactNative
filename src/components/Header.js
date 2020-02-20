import React from 'react';
import {Text, View, ImageBackground, StyleSheet} from 'react-native';
import Colors from './Colors';

const Header = (props) => {
  return (
    <ImageBackground style={styles.background}>
      <View>
        <Text style={styles.text}>{props.headerText}</Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    paddingBottom: 40,
    paddingTop: 70,
    paddingHorizontal: 32,
    backgroundColor: Colors.orange,
  },
  text: {
    fontSize: 35,
    fontWeight: '600',
    textAlign: 'center',
    shadowOffset: {widht: 0, height: 2},
    shadowOpacity: 0.5,
  },
});

export default Header;
