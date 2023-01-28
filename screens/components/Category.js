import React, {Component} from "react"
import{
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Alert
} from "react-native";

class Category extends Component{

  render(){

    return(
        <TouchableOpacity>
        <View style={styles.container}>
            <View style={{flex:4}}>
                <Image source={this.props.imageUri}
                style={styles.image}
                />
            </View>
            <View style={styles.name}>
                <Text style={{color: 'white'}}>{this.props.name}</Text>
            </View>
        </View>
        </TouchableOpacity>

    );
  }
}

const styles=StyleSheet.create({
    container:{
        height:130, 
        width: 120, 
        marginHorizontal: 10, 
        borderWidth: 0.5, 
        borderColor: '#4B0082', 
        backgroundColor:'#4B0082', 
        borderRadius: 25,     
    },
    image: {
        flex:1, 
        width: null, 
        height: null, 
        resizeMode: 'cover', 
        borderRadius:20
    },
    name: {
        flex: 1, 
        padding: 10,
        alignItems: 'center',
    }
})

export default Category;