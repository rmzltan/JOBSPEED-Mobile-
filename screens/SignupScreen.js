import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, KeyboardAvoidingView, ScrollView } from 'react-native';

const SignupScreen=({ navigation })=>{
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
                <View style={{flex: 1, height: 1, marginTop: 20, backgroundColor: 'gray'}} />
                <View>
                    <Text style={{width: 40, textAlign: 'center', marginTop: 20}}>OR</Text>
                </View>
                <View style={{flex: 1, height: 1, marginTop: 20, backgroundColor: 'gray'}} />
            </View>

            <View>
                <Text style={styles.inputTag}>Username</Text>
                <TextInput style={styles.input}/>

                <Text style={styles.inputTag}>E-mail</Text>
                <TextInput style={styles.input} keyboardType='email-address'/>

                <Text style={styles.inputTag}>Password</Text>
                <TextInput style={styles.input} secureTextEntry/>

                <TouchableOpacity style={styles.POSTbuttonContainer}>
                    <Text style={styles.POSTbutton}>Sign Up</Text>
                </TouchableOpacity>
                <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: 4, paddingHorizontal: 10,}}>
                    <Text style={styles.text1}>By joining, you agree to JOBSPEED's </Text>
                    <TouchableOpacity>
                        <Text style={styles.text2}>Terms of Service</Text>
                    </TouchableOpacity>
                </View>
             </View>

             <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 30}}>
                <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
                    <Text style={{color: 'black'}}>Sign in</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>navigation.navigate('Feed')}>
                    <Text style={{color: 'black'}}>Skip</Text>
                </TouchableOpacity>
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
        padding: 30,
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
    APItext: {
        color: 'gray'
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
    },
    POSTbuttonContainer: {
        alignItems: 'center',
        marginTop: 15,
        backgroundColor: '#9f68e8',
        borderRadius: 5,
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
        color: 'black'
    },
    text2: {
        fontSize: 11,
        textAlign: 'center',
        color: '#9f68e8',
    }
})

export default SignupScreen;