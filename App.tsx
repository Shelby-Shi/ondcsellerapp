/*
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
*/

//if country and state is not in please contact Ramash
//no need validation
//json server

import React, {Component, useState } from 'react' ;
import { Text ,View, StyleSheet , ImageBackground, 
  TextInput, TouchableOpacity, Button } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Checkbox from 'expo-checkbox';
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';

export default class Register extends React.Component {

  state={
  firstName:'',
  email:'',
  phoneNumber:'',
  lastName:'',
  country:'',
  region: '',
  password:'',
  confirmPassword:'',
  setChecked:false,
  isChecked:false,
  };


  selectCountry (val) {
    this.setState({ country: val });
  }

  selectRegion (val) {
    this.setState({ region: val });
  }

  setCheck (val) {
    this.setState({ isChecked: val });
  }


  submit=()=>{
  const {firstName, email , phoneNumber, lastName,  
    country, region, password, confirmPassword} = this.state
    if(firstName=='' || email=='' || phoneNumber=='' || lastName=='' 
      || country=='' || region=='' || password=='' || confirmPassword==''){
      alert("all fields are required")
    }
    else if(confirmPassword != password){
      alert("password don't match")
    }
    else{
      alert("you are welcome!");
    }
  };

  render() {
    const { country, region, isChecked } = this.state;
    //const [isChecked] = useState(false);

    return (

      
      <View style={styles.container}>


        <Text style={{ fontSize: 48, fontFamily: 'Poppins' }}>Sign Up</Text>
        <Text style={{ fontSize: 16, fontFamily: 'Poppins', margin: 10, color: '#FFB7D5' }}>Sign up with Seller App</Text>

        <Text style={styles.textbartitle}>First Name</Text>
        <TextInput
        onChangeText ={firstName=>this.setState({firstName})}
          placeholder="First Name"
          style={styles.textbar}
        />

        <Text style={styles.textbartitle}>Last Name</Text>
        <TextInput
        onChangeText ={lastName=>this.setState({lastName})}
          placeholder="Last Name"
          style={styles.textbar}
        
        />
        <Text style={styles.textbartitle}>Email</Text>
        <TextInput
        onChangeText ={email=>this.setState({email})}
          placeholder="Email"
          style={styles.textbar}
        />

        <Text style={styles.textbartitle}>Country</Text>
        <CountryDropdown
          value={country}
          onChange={(val) => this.selectCountry(val)} 
          style={styles.textbar}  
        />

        <Text style={styles.textbartitle}>Region</Text>
        <RegionDropdown
          country={country}
          value={region}
          onChange={(val) => this.selectRegion(val)} 
          style={styles.textbar}  
        />

        <Text style={styles.textbartitle}>Create Password</Text>
        <TextInput
        onChangeText={password=>this.setState({password})}
          placeholder="Create Password"
          secureTextEntry={true}
          style={styles.textbar}
        />
        <Text style={styles.textbartitle}>Confirm Password</Text>
        <TextInput
        onChangeText={confirmPassword=>this.setState({confirmPassword})}
          placeholder="Confirm Password"
          secureTextEntry={true}
          style={styles.textbar}
        />

        <View style={styles.section}>
          <Checkbox style={styles.checkbox} value={isChecked} onValueChange={(val)=>this.setCheck({val})} 
                    color={isChecked ? '#4630EB' : undefined}/>
          <Text style={styles.paragraph}>I've read and agreed to the terms of use, privacy notice and offer details:</Text>
        </View>
        <View style={styles.section}>
          <TouchableOpacity> 
              <Text style={{color:'#FFB7D5', fontSize: 16, textDecorationLine:'underline'}}>Terms of use
              </Text>
            </TouchableOpacity>
            <Text style={styles.paragraph}>, </Text>
          <TouchableOpacity> 
              <Text style={{color:'#FFB7D5', fontSize: 16, textDecorationLine:'underline'}}>privacy notice
              </Text>
            </TouchableOpacity>
            <Text style={styles.paragraph}> and </Text>
          <TouchableOpacity> 
              <Text style={{color:'#FFB7D5', fontSize: 16, textDecorationLine:'underline'}}>offer details
              </Text>
            </TouchableOpacity>
        </View>

        <TouchableOpacity
          activeOpacity={0.5}
          onPress={this.submit}
          style={{ width: '100%' }}>
          <View
            style={{
              backgroundColor: '#9340FF',
              padding: 14,
              marginTop: 10,
              width: '50%',
              //marginLeft: '5%',
            alignSelf:'center'
            }}>
            <Text style={{ textAlign: 'center', color: '#fff', fontSize: 18 }}>
              REGISTER
            </Text>
          </View>
        </TouchableOpacity>
          <Text style={{ textAlign: 'center', fontSize: 16 }}>
            Already have an account?  
          </Text>
          <TouchableOpacity> 
            <Text style={{color:'#FFB7D5', fontSize: 16}}>Sign in
            </Text>
          </TouchableOpacity>
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F0F0F0'
  },
  textbartitle: {
    fontFamily: 'Poppins',
    fontSize: 14,
    fontWeight: "400",
  },
  textbar: {
    backgroundColor: '#FAFDFF',
    padding: 10,
    width: '70%',
    marginTop: 10,
    marginBottom: 10,
    fontSize: 14,
    borderRadius: 10,
    borderColor: "black",
    borderWidth: 1
  },
  textInput: {
    borderColor: 'gray',
    borderWidth: 1,
  },
  resultContainer: {
    flexDirection: 'row',
    padding: 10,
  },
  checkboxWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
  },
  checkbox: {
    margin: 8,
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  paragraph: {
    fontSize: 15,
  },
});
