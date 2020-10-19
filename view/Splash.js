import React, { Component } from 'react';
import { StyleSheet, View, ImageBackground, Image } from 'react-native';

var bg = require('../Images/backgroundlogin.jpg');
var logo = require('../Images/logo.png');

export default class Splash extends Component {

    constructor(props) {
        super(props);
        setTimeout(() => {
            this.props.navigation.navigate("Login");
        }, 2000);
    }
    render() {
        return (
            <ImageBackground
                source={bg}
                style={{ height: '100%', width: '100%' }}>
                <View
                    style={{ flex: 1, justifyContent: 'center', alignItem: 'center' }}>
                    <Image source={logo}
                        style={{ width: 135, height: 120 }}></Image>
                </View>
            </ImageBackground>
        )
    }

}
