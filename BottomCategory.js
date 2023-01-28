import React, {Component} from "react"
import{
  View,
  Text,
  Image
} from "react-native";

class BotCategory extends Component{
  render(){
    return(
        <View style={{height:130, width: 120, marginLeft: 20, borderWidth: 0.5, borderColor: '#4B0082', backgroundColor:'#4B0082', borderRadius: 25}}>
      <View style={{flex:4}}>
      <Image source={this.props.imageUri}
      style={{flex:1, width: null, height: null, resizeMode: 'cover', borderRadius:20}}
      />

      </View>
      <View style={{flex: 1, paddingLeft: 10, paddingTop: 10}}>
      <Text style={{color: 'white'}}>{this.props.name}</Text>

      </View>
      </View>


    );
  }
}

export default BotCategory;