import React, {useState} from 'react';
import {Text, View, TouchInput, Image} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import Button from '../../components/Button/Button';
import Icon from 'react-native-vector-icons/FontAwesome';

const Login = ({navigation}) => {
  const [password, setPassword] = useState();
  const [login, setLogin] = useState();
  const [text, setText] = useState();

  const onPressLogin = () => {
    if (login == 'Romulo' && password == 'Noah') {
      navigation.navigate('TabNavigator');
    } else {
      alert('Nome de Usuário e/ou Senha Incorretos');
    }
  };
  const handleChangeLogin = (event) => {
    setLogin(event);
  };
  const handleChangePassword = (event) => {
    setPassword(event);
  };
  const inputStyle = {
    height: 40,
    width: 350,
    borderRadius: 3,
    borderColor: 'rgb(219,219,219)',
    borderWidth: 1,
    backgroundColor: '#fafafa',
    color: 'rgb(38,38,38)',
    paddingTop: 9,
    paddingBottom: 7,
    paddingLeft: 8,
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
          <View style={{width: 300, height: 100}}>
            <Image
              source={require('../../assets/img/instagram-logo-1.png')}
              style={{
                width: null,
                height: null,
                resizeMode: 'contain',
                flex: 1,
              }}
            />
          </View>
        </View>
        <View style={{backgroundColor: 'white', marginBottom: 15}}>
          <TextInput
            style={inputStyle}
            onChangeText={handleChangeLogin}
            mode="outlined"
            label="Email"
            placeholderTextColor="black"
            placeholder="Digite seu e-mail"></TextInput>
        </View>
        <View style={{marginBottom: 15}}>
          <TextInput
            style={inputStyle}
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
          <Text>Esqueceu seu e-mail ou senha? Resete sua senha.</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View
            style={{
              marginTop: 50,
              marginRight: 10,
              borderWidth: 1,
              height: 1,
              width: '85%',
            }}
          />
        </View>
      </View>
    </>
  );
};
export default Login;
