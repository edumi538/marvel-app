import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import * as firebase from 'firebase';

export class LoginComp extends React.Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
  }

  state = {
    email: '',
    password: '',
    isAuthenticated: false,
  };

  login = async () => {
    const {email, password} = this.state;

    try {
      await firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(this.setState({isAuthenticated: true}))
        .catch(err => {
          this.setState({isAuthenticated: false});
          alert(err.message);
        });
    } catch (err) {
      alert(err);
    }

    if (this.state.isAuthenticated === true) {
      this.props.navigation.navigate('routes');
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Digite seu e-mail"
          value={this.state.email}
          onChangeText={email => this.setState({email})}
        />
        <TextInput
          style={styles.input}
          placeholder="Digite sua Senha"
          value={this.state.password}
          onChangeText={password => this.setState({password})}
        />

        <TouchableOpacity style={styles.button} onPress={this.login}>
          <Text style={styles.buttonText}>Logar</Text>
        </TouchableOpacity>

        {this.state.isAuthenticated ? <Text>Logado com Sucesso</Text> : null}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#333',
    padding: 20,
  },
  input: {
    height: 45,
    backgroundColor: '#FFF',
    alignSelf: 'stretch',
    borderColor: '#EEE',
    borderWidth: 1,
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  button: {
    height: 45,
    backgroundColor: '#069',
    alignSelf: 'stretch',
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
});
