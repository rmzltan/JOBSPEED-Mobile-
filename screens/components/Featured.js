import React, {Component} from "react"
import{
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity
} from "react-native";

class Featured extends Component{
  render(){
    return(
        <TouchableOpacity>
        <View style={styles.container}>
            <View style={{flex:1}}>
                <Image source={this.props.imageUri}
                style={styles.image}
                />
            </View>
            <View style={{flexDirection: 'column', flex:1, paddingVertical: 10,}}>
            <View style={styles.name}>
                <Text style={{color: 'white'}}>{this.props.name}</Text>
            </View>
            <View style={styles.name}>
                <Text numberOfLines={3} style={{color: 'white'}}>{this.props.desc}</Text>
            </View>
            </View>
        </View>
        </TouchableOpacity>

    );
  }
}

const styles=StyleSheet.create({
    container:{
        height: 120,
        width: '90%', 
        marginLeft: 20, 
        borderWidth: 0.5, 
        borderColor: '#4B0082', 
        backgroundColor:'#4B0082', 
        borderRadius: 25,
        flexDirection: 'row',  
        marginVertical: 10,
    },
    image: {
        width: '80%', 
        height: '80%', 
        flex:1, 
        resizeMode: 'cover', 
        borderRadius:20
    },
    name: { 
        margin: 5,
        paddingHorizontal: 10,
    }
})

export default Featured;