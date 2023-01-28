import React from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity, Alert} from 'react-native';


const SearchScreen=()=>{

    return(
        <View style={styles.container}>
            <Text>Search Screen</Text>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flex: 1
    },
 
})

export default SearchScreen;