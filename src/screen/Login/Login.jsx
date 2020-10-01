import React, {useState} from 'react';
import {Text, View, TouchInput} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import Button from '../../components/Button/Button';
import Icon from 'react-native-vector-icons/FontAwesome';

const Login = ({navigation}) => {
  const [password, setPassword] = useState();
  const [login, setLogin] = useState();
  const [text, setText] = useState();

  const onPressLogin = () => {
    if (login == 'Andre' && password == 'Andre') {
      navigation.navigate('TabNavigator');
    } else {
      alert('Login ou senha errada');
    }
  };
  const handleChangeLogin = (event) => {
    setLogin(event);
  };
  const handleChangePassword = (event) => {
    setPassword(event);
  };
  return (
    <>
      <View style={{marginBottom: 150}}>
        <Text style={{textAlign: 'center'}}>Português(Brasil)</Text>
      </View>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
        }}>
        <View style={{marginBottom: 50}}>
          <Text style={{fontSize: 50}}>Instagram </Text>
        </View>
        <View style={{backgroundColor: 'white', marginBottom: 15}}>
          <TextInput
            style={{
              height: 40,
              width: 350,
              borderColor: 'gray',
              borderWidth: 1,
              backgroundColor: 'lightgray',
              borderRadius: 10,
            }}
            onChangeText={handleChangeLogin}
            mode="outlined"
            label="Email"
            placeholderTextColor="black"
            placeholder="Digite seu e-mail"></TextInput>
        </View>
        <View style={{marginBottom: 15}}>
          <TextInput
            style={{
              height: 40,
              width: 350,
              borderColor: 'gray',
              borderWidth: 1,
              backgroundColor: 'lightgray',
              borderRadius: 10,
            }}
            secureTextEntry={true}
            mode="outlined"
            label="Senha"
            placeholder="Digite sua Senha"
            placeholderTextColor="black"
            onChangeText={handleChangePassword}
          />
        </View>
        <View style={{marginBottom: 10}}>
          <Button
            buttonStyle={{
              width: 350,
              height: 50,
              borderRadius: 10,
              alignItems: 'center',
              backgroundColor: 'blue',
            }}
            onPress={onPressLogin}
            title="Login"
          />
        </View>
        <View>
          <Text>Forgot your login details? Get help signing in.</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View
            style={{
              marginTop: 50,
              marginRight: 10,
              borderWidth: 1,
              height: 1,
              width: 150,
            }}
          />
          <Text
            style={{
              marginTop: 42,
            }}>
            OR
          </Text>
          <View
            style={{
              marginTop: 50,
              marginLeft: 10,
              borderWidth: 1,
              height: 1,
              width: 150,
            }}
          />
        </View>
      </View>
    </>
  );
};
export default Login;
