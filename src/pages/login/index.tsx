import Column from 'antd/es/table/Column';
import React, { Children } from 'react';
import {
    Text,
    View,
    TextInput,
    Image,
    TouchableOpacity,
    StyleSheet,
    Switch,
} from 'react-native';

const LoginPage = () =>
    {
        return (
            <View style={[styles.screen]}>
                <View style={[styles.language]}>
                    <Image style={styles.flag} source={require('../../assets/VNFlag.png')}></Image>
                    <Image style={styles.flag} source={require('../../assets/Back.png')}></Image>
                </View>
                <View>
                    <Image style={styles.logo} source={require('../../assets/logo.png')}></Image>
                </View>
                <View style={styles.input}>
                    <TextInput style={styles.inputbox} value='Username' >
                    </TextInput>
                    <TextInput style={styles.inputbox} value='Password' >
                    </TextInput>
                    <Text style={{textDecorationLine: 'underline', margin: 10}}>Quên mật khẩu?</Text>
                    <View style={{flex:0, flexDirection:'row',alignItems:'center',marginBottom: 40}}>
                        <Switch></Switch>
                        <Text>Đăng nhập qua LDAP</Text>
                    </View>
                    <View>
                    <TouchableOpacity style={styles.button} 
                    //style={styles.button}
                    onPress={()=>{}}>
                        <Text style={{color:'white',alignSelf:'center',}}>LOGIN</Text>
                    </TouchableOpacity>
                </View>
                
                </View>
                
                <View style={[styles.footer]}>
                    <Text style={{textDecorationLine: 'underline', margin: 10}}>
                        Phiên bản 1.0
                    </Text>
                </View>
            </View>
        );
    }
export default LoginPage;

const styles = StyleSheet.create({
    screen: {
        flex: 0,
        flexDirection: 'column',
        justifyContent :'flex-start',
        width: '100%',
        height: '100%'

      },

    language: {
      flex: 0,
      flexDirection: 'row',
      height: 32,
      width: 64,
      borderWidth:1,
      borderRadius:16,
      verticalAlign: 'middle',
      alignItems: 'center',
      justifyContent: 'space-around',
      margin: 20,
      left:295,
    },
    flag: {
      width: 24,
      height: 24,
      borderRadius:30,
    },
    logo: {
        alignSelf:'center',
        margin: 20
    },
    input: {
        marginTop: 30,
        marginBottom: 30,
        borderRadius: 4,
        alignSelf: 'center',
        
    },
    inputbox: {
        height: 45,
        width: 283,
        backgroundColor: 'lightgray',
        margin: 10,
        borderRadius: 10,
        alignSelf: 'center',
        color: 'gray',
        textAlign:'center'
        
    },
    
    button: {
      flex:0,
      flexDirection: 'column',
      backgroundColor: 'navy',
      width: 283,
      height: 50,
      color: 'white',
      alignSelf:'center',
      justifyContent:'center',
      borderRadius: 10,
    },

    footer: {
      margin: 20,
      color: 'gray',
      alignSelf: 'center',
      textDecorationLine: 'underline',
      position: 'absolute',
      bottom: 10,
    },
    
    }
  );