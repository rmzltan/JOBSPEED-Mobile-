import React, { useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, KeyboardAvoidingView, TextInput, ScrollView } from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";

const LoginScreen=({navigation})=>{

    return(
        <View style={styles.container}>
            <ScrollView>
            <KeyboardAvoidingView style={{left: 0, right: 0, bottom: 0}} behavior="position">
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require('../images/logostart.png')}/>
            </View>

            <View style={styles.APIbuttonsContainer}> 
                <TouchableOpacity style={styles.APIbuttons}>
                    <Image style={styles.APIlogo} source={require('../images/googlelogo.png')}/>
                    <Text style={styles.APItext}>Sign up with Google</Text>
                </TouchableOpacity>
            </View>

            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style={{flex: 1, height: 1, marginTop: 20, backgroundColor: 'gray', marginHorizontal: 13}} />
                <View>
                    <Text style={{width: 40, textAlign: 'center', marginTop: 20}}>OR</Text>
                </View>
                <View style={{flex: 1, height: 1, marginTop: 20, backgroundColor: 'gray', marginHorizontal: 13}} />
            </View>

            <View>
                <Text style={styles.inputTag}>E-mail</Text>
                <TextInput style={styles.input} keyboardType='email-address'/>

                <Text style={styles.inputTag}>Password</Text>
                <TextInput style={styles.input} secureTextEntry/>

                <View style={styles.rememberMeContainer}>
                    <BouncyCheckbox style={styles.checkBox} size={20} disableText='true' fillColor="#9f68e8" onPress={() => {}} />
                    <Text style={{marginLeft: 8}}>Remember Me</Text>
                </View>

                <TouchableOpacity style={styles.POSTbuttonContainer}>
                    <Text style={styles.POSTbutton}>Sign In</Text>
                </TouchableOpacity>

                <View style={{justifyContent: 'center', marginTop: 10}}>
                    <TouchableOpacity style={{alignSelf: 'center'}}>
                        <Text style={styles.text1}>Forgot Your Password?</Text>
                    </TouchableOpacity>
                </View>
             </View>

            </KeyboardAvoidingView>
            </ScrollView>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white',
        padding: 25,
    },
    logoContainer:{
        alignItems: 'center',
        marginTop: 20,
    },
    logo: {
        width: 200,
        height: 200,
    },
    APIbuttonsContainer: {
        alignItems: 'center',
        marginTop: 20,
    },
    APIbuttons: {
        flexDirection: 'row',
        borderColor: '#9f68e8',
        borderWidth: 1,
        borderRadius: 5,
        paddingVertical: 8,
        paddingHorizontal: 60,
    },
    APIlogo: {
        marginRight: 10,
        width: 20,
        height: 20,
    },
    inputTag: {
        marginTop: 5,
        paddingBottom: 5,
    },
    input: {
        borderWidth: 1,
        borderRadius: 5,
        paddingVertical: 3,
        paddingHorizontal: 10,
        borderColor: 'gray',
        marginBottom: 13,
        marginHorizontal: 11,
    },
    rememberMeContainer: {
        flexDirection: 'row',
        marginTop: 5,
    },
    checkBox: {
        marginLeft: 13,
    },
    POSTbuttonContainer: {
        alignItems: 'center',
        marginTop: 30,
        backgroundColor: '#9f68e8',
        borderRadius: 5,
        marginHorizontal: 11,
    },
    POSTbutton: {
        fontSize: 13,
        color: 'white',
        paddingVertical: 7,
        paddingHorizontal: 80,
    },
    text1: {
        fontSize: 11,
        textAlign: 'center',
        color: '#9f68e8',
    }
})

export default LoginScreen;