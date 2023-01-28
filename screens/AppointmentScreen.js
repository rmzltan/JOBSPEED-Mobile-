import React from 'react';
import { View, Text, StyleSheet, TextInput} from 'react-native';

const AppointmentScreen=()=>{

    return(
        <View style={styles.container}>
             <Text>Appointment</Text>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flex: 1
    },
})

export default AppointmentScreen;