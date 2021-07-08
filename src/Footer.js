import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
class Footer extends Component {

    render() {
        return (
            <View style={{ backgroundColor:'white' }}>
                <View style={{ alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', height: 60, backgroundColor: 'white', position: 'absolute', left: 0, right: 0, bottom: 0 }}>
                
                    <Image style={{ marginLeft:20, marginRight: 20,opacity: 0.3, width: 40, height: 25, resizeMode: 'stretch' }} source={{ uri: 'https://img.flaticon.com/icons/png/512/25/25694.png?size=1200x630f&pad=10,10,10,10&ext=png&bg=FFFFFFFF' }} ></Image>
                    <Image style={{ marginRight: 20, opacity: 0.3, width: 30, height: 25, resizeMode: 'stretch' }} source={{ uri: 'https://static.thenounproject.com/png/2247020-200.png' }} ></Image>
                    <Image style={{ marginRight: 20, width: 30, height: 25, resizeMode: 'stretch' }} source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSacPwOYUJSWh4kNlAeZT-YOmxaGBj8mTSiGVm05OccWUd-YPND6TauNSnHUPbo3du0Hrk&usqp=CAU' }} ></Image>
                    <Image style={{ marginRight: 20, opacity: 0.3, width: 30, height: 30, resizeMode: 'stretch' }} source={{ uri: 'https://cdn.iconscout.com/icon/free/png-256/shopping-cart-452-1163339.png' }} ></Image>
                    <Image style={{ marginRight: 20, opacity: 0.3, width: 30, height: 25, resizeMode: 'stretch' }} source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/OOjs_UI_icon_userAvatar.svg/1200px-OOjs_UI_icon_userAvatar.svg.png' }} ></Image>
                </View>
                <View style={{ justifyContent: 'space-between', flexDirection: 'row',backgroundColor: 'white', position: 'absolute', left: 0, right: 0, bottom: 0 }}>
                    <Text style={{ marginLeft:20, opacity: 0.3,top: 1, fontSize: 10 }}>Anasayfa</Text>
                    <Text style={{ marginRight: -7,opacity: 0.3,top: 1, fontSize: 10 }}>    Hemen Gelsin</Text>
                    <Text style={{ color: '#ff8411', marginRight: 15,top: 1, fontSize: 10 }}>     Favorilerim</Text>
                    <Text style={{ marginRight: 23,opacity: 0.3,top: 1, fontSize: 10 }}>Sepetim</Text>
                    <Text style={{ marginRight: 15,opacity: 0.3,top: 1, fontSize: 10 }}>Hesabım</Text>
                </View>
            </View>

        );
    }
}
export { Footer }