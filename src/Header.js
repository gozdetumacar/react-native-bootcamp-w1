import React, { Component } from 'react';
import { View, Text, Image} from 'react-native';
class Header extends Component {
    
    render() {
        return (
            <View style={{ borderBottomWidth: 1, borderColor: '#bfbfbf', marginTop:20, height: 50, flexDirection: "row", justifyContent: "space-between"}}>
                <Text style={{ fontSize: 20, marginStart: 20 }}>Favorilerim</Text>
                <Image style={{ marginEnd: 20, width: '10%', marginBottom:15}} source={{ uri: 'https://cdn.icon-icons.com/icons2/2566/PNG/512/search_icon_153438.png'}}></Image>
            </View>

        );
    }
}
export { Header }