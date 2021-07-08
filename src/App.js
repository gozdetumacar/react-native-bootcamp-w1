import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import { Header } from './Header';
import { Header2 } from './Header2';
import { Content } from './Content';
import { Footer } from './Footer';

class App extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {

    }
    componentDidUpdate(prevPops, PrevState) {
    }
    componentWillUnmount() {
    }
    render() {
        return (
            <ScrollView>
                <Header>

                </Header>
                <Header2>

                </Header2>
                <Content>

                </Content>
                <Footer>
                    
                </Footer>
            </ScrollView>
        );
    }
}
export { App }