import React, { Component } from 'react';
import { View, Text } from 'react-native';
class Header2 extends Component {

    render() {
        return (
            <View style={{ justifyContent: "space-between", marginTop: 10, height: 50, flexDirection: "row"}}>

                <View style={{ justifyContent: "space-between", borderBottomWidth: 3, borderColor: '#ff8411'}}>
                    <Text style={{ fontWeight:'bold', color: '#ff8411', marginTop:7, fontSize: 15, marginStart: 60 }}>Favorilerim                 </Text>
                </View>
                <View style={{ justifyContent: "space-between" }}>
                    <Text style={{ fontWeight: 'bold', marginTop:7, fontSize: 15, marginEnd: 60, color:'#bfbfbf' }}>Koleksiyonlarım</Text>
                </View>
            </View>
            

        );
    }
}
export { Header2 }