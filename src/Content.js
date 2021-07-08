import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
class Content extends Component {

    render() {
        return (
            <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center' }}>
                <View style={{ backgroundColor:'white', flexDirection: "row", justifyContent: "space-between", borderRadius: 7, marginTop: 10, height: 200, borderWidth: 1, borderColor: '#e0dbdb', width: '95%' }}>
                    <Image style={{ marginTop:10, width: 140, height: 180}} source={{ uri: 'https://cdn.dsmcdn.com//ty138/product/media/images/20210703/0/106812973/160367626/1/1_org.jpg'}}></Image>
                    <Text style={{ fontWeight: 'bold', position: 'absolute', marginStart: 150, marginTop: 10 }}>Nike</Text>
                    <Image style={{ width: 25, height: 25, resizeMode: 'stretch', marginRight: 15, marginTop: 10 }} source={{ uri:'https://static.thenounproject.com/png/1558712-200.png'}}></Image>
                    <Text style={{ color: '#a0a0a0', position: 'absolute', marginStart: 150, marginTop: 35 }}>Unısex Beyaz Spor Ayakkabı</Text>
                    <Image style={{ position: 'absolute', width: 170, height: 70, resizeMode: 'stretch', marginStart: 107, marginTop: 40 }} source={{ uri:'https://lh3.googleusercontent.com/proxy/9S-KY-9z6JC20UQgLmY0PK5N_jtLsaFRzX_l0WOCvCVnG6pnGedm6K5ogYdoRCLfx718IUtsdyAAappzd8NH2xLNJf_4gjQNPLsX83pQ_pKiSTowYvs9BrhH'}}></Image>
                    <Text style={{ position: 'absolute', marginStart: 150, marginTop: 95 }}>499 TL</Text>
                    <Text style={{ flex: 1, alignItems: 'center', color: '#b7b7b7', borderColor: '#e0dbdb', borderRadius: 5, height: 25, borderWidth: 1, position: 'absolute', marginStart: 150, marginTop: 150 }}>   Beden      ᐯ  </Text>
                    <Text style={{ flex: 1, alignItems: 'center', color: '#ff8411', borderColor: '#ff8411', borderRadius: 5, height: 25, borderWidth: 1, position: 'absolute', marginStart: 250, marginTop: 150 }}>     Sepete Ekle      </Text>
                </View>
                <View style={{ backgroundColor: 'white', flexDirection: "row", justifyContent: "space-between", borderRadius: 7, marginTop: 10, height: 200, borderWidth: 1, borderColor: '#e0dbdb', width: '95%'  }}>
                    <Image style={{ marginTop: 10, width: 140, height: 150 }} source={{ uri: 'https://cdn.dsmcdn.com/mnresize/415/622/ty118/product/media/images/20210524/15/91102635/22200422/1/1_org_zoom.jpg' }}>

                    </Image>
                    <Text style={{ fontWeight: 'bold', position: 'absolute', marginStart: 150, marginTop: 10 }}>Nike</Text>
                    <Image style={{ width: 25, height: 25, resizeMode: 'stretch', marginRight: 15, marginTop: 10 }} source={{ uri: 'https://static.thenounproject.com/png/1558712-200.png' }}></Image>
                    <Text style={{ color: '#a0a0a0', position: 'absolute', marginStart: 150, marginTop: 35 }}>Kadın Sneaker - Star Runner 2</Text>
                    <Image style={{ position: 'absolute', width: 170, height: 70, resizeMode: 'stretch', marginStart: 107, marginTop: 40 }} source={{ uri: 'https://lh3.googleusercontent.com/proxy/9S-KY-9z6JC20UQgLmY0PK5N_jtLsaFRzX_l0WOCvCVnG6pnGedm6K5ogYdoRCLfx718IUtsdyAAappzd8NH2xLNJf_4gjQNPLsX83pQ_pKiSTowYvs9BrhH' }}></Image>
                    <Text style={{ position: 'absolute', marginStart: 150, marginTop: 95 }}>359 TL</Text>
                    <Text style={{ flex: 1, alignItems: 'center', color: '#b7b7b7', borderColor: '#e0dbdb', borderRadius: 5, height: 25, borderWidth: 1, position: 'absolute', marginStart: 150, marginTop: 150 }}>   Beden      ᐯ  </Text>
                    <Text style={{ flex: 1, alignItems: 'center', color: '#ff8411', borderColor: '#ff8411', borderRadius: 5, height: 25, borderWidth: 1, position: 'absolute', marginStart: 250, marginTop: 150 }}>     Sepete Ekle      </Text>
                </View>
                <View style={{ backgroundColor: 'white', flexDirection: "row", justifyContent: "space-between", borderRadius: 7, marginTop: 10, height: 200, borderWidth: 1, borderColor: '#e0dbdb', width: '95%' }}>
                    <Image style={{ marginTop: 10, width: 140, height: 180 }} source={{ uri: 'https://cdn.dsmcdn.com/mnresize/415/622/ty88/product/media/images/20210402/22/8dac3b4a/8390583/1/1_org_zoom.jpg' }}>

                    </Image>
                    <Text style={{ fontWeight: 'bold', position: 'absolute', marginStart: 150, marginTop: 10 }}>Converse</Text>
                    <Image style={{ width: 25, height: 25, resizeMode: 'stretch', marginRight: 15, marginTop: 10 }} source={{ uri: 'https://static.thenounproject.com/png/1558712-200.png' }}></Image>
                    <Text style={{ color: '#a0a0a0', position: 'absolute', marginStart: 150, marginTop: 35 }}>Unisex Siyah Chuck Taylor Allstar</Text>
                    <Image style={{ position: 'absolute', width: 170, height: 70, resizeMode: 'stretch', marginStart: 107, marginTop: 40 }} source={{ uri: 'https://lh3.googleusercontent.com/proxy/9S-KY-9z6JC20UQgLmY0PK5N_jtLsaFRzX_l0WOCvCVnG6pnGedm6K5ogYdoRCLfx718IUtsdyAAappzd8NH2xLNJf_4gjQNPLsX83pQ_pKiSTowYvs9BrhH' }}></Image>
                    <Text style={{ position: 'absolute', marginStart: 150, marginTop: 95 }}>629 TL</Text>
                    <Text style={{ flex: 1, alignItems: 'center', color: '#b7b7b7', borderColor: '#e0dbdb', borderRadius: 5, height: 25, borderWidth: 1, position: 'absolute', marginStart: 150, marginTop: 150 }}>   Beden      ᐯ  </Text>
                    <Text style={{ flex: 1, alignItems: 'center', color: '#ff8411', borderColor: '#ff8411', borderRadius: 5, height: 25, borderWidth: 1, position: 'absolute', marginStart: 250, marginTop: 150 }}>     Sepete Ekle      </Text>
                </View>
                
            </View>


        );
    }
}
export { Content }