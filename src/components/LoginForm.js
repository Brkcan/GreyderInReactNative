import React, {Component} from 'react';
import {View, TextInput, StyleSheet, Text} from 'react-native';
import firebase from '@firebase/app';
import '@firebase/auth';
import {connect} from 'react-redux';
import Button from './Button';
import Colors from './Colors';
import Card from './Card';
import CardSection from './CardSection';
import {emailChanged, passwordChanged, loginUser} from '../actions';


class LoginForm extends Component {
  state= {
    email: '',
    password: '',
    loading: false,
  };
  clickLogin() {
    this.setState({loading: true});
    const {email, password} = this.props;
    this.props.loginUser({email, password})
  }

  loginSucces() {
    this.setState({loading: false})
    console.log('Basarılı....');
  }
  renderButton() {
    if (!this.props.loading) {
      return <Button onPress={this.clickLogin.bind(this)}>Giris</Button>;
    } else {
      return
      <Spinner size="large" />;
    };
  }

  render() {
    console.log('email: ' + this.props.email);
    return (
      <View style= {styles.view}>
          <TextInput
            placeholder="E-mail"
            style={styles.inputStyles}
              value={this.props.email}
            onChangeText={email => this.props.emailChanged(email)}
            />

          <TextInput
            secureTextEntry
            placeholder="Password"
            style={styles.inputStyles}
            value={this.props.password}
            onChangeText={password => this.props.passwordChanged(password)}
          />
      <View style={styles.container}>

      {this.renderButton()}
        </View>

      </View>
    )
  }
}
const styles = StyleSheet.create({
  inputStyles: {
    color: '#000',
    padding: 0,
    marginTop:50,
    marginLeft:50,
    paddingRight: 50,
    paddingLeft: 10,
    fontSize: 18,
    borderBottomWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#fff',
    lineHeight: 23,
    position: 'relative',
    justifyContent: 'flex-start',
    flexDirection: 'column'
  },
  view:{
    marginTop:150,
  },
  container: {
    marginTop: 10,
    marginBottom: 20,
    paddingVertical: 5,
    alignItems: 'center',
    justifyContent:'center',
    borderWidth: 1,
    borderRadius: 5,
    width: 200,
    height:50,
    marginLeft:50,
  }
});

const mapStateToProps = ({kimlikdogrulamaResponse}) => {
  const {email, password, loading} = kimlikdogrulamaResponse;
  return {
    email,
    password,
    loading
  }
}

export default connect(
  mapStateToProps,
  {emailChanged, passwordChanged, loginUser},
)(LoginForm);
