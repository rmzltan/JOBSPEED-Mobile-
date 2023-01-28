import React from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView} from 'react-native';

import Category from './components/Category';
import Featured from './components/Featured';


const FeedScreen=()=>{

    return(
        <View style={styles.container}>
            <View style={styles.headingContainer}>
                <Text style={styles.heading}>Categories</Text>
            </View>
            <View style={{height: '20%'}}> 
                <ScrollView horizontal={true}>
                    <Category imageUri={require('../images/carpen.png')} name='Carpenter' />
                    <Category imageUri={require('../images/carpen.png')} name='Carpenter' />
                    <Category imageUri={require('../images/carpen.png')} name='Carpenter' />
                    <Category imageUri={require('../images/carpen.png')} name='Carpenter' />
                    <Category imageUri={require('../images/carpen.png')} name='Carpenter' />
                </ScrollView>
            </View>

            <View style={styles.headingContainer}>
                <Text style={styles.heading}>Top Service</Text>
            </View>

            <View style={{flex: 1,}}> 
                <ScrollView>
                    <Featured imageUri={require('../images/carpen.png')} name='Carpen' desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' />
                    <Featured imageUri={require('../images/elec.png')} name='Electrician' desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' />
                    <Featured imageUri={require('../images/elec.png')} name='Electrician' desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' />
                    <Featured imageUri={require('../images/elec.png')} name='Electrician' desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' />
                    <Featured imageUri={require('../images/elec.png')} name='Electrician' desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' />
                </ScrollView>
            </View>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flex: 1
    },
    headingContainer: {
        marginVertical: 10,
        paddingVertical: 5,
    },
    heading: {
        textAlign: 'center',
        color: 'black'
    }
})

export default FeedScreen;