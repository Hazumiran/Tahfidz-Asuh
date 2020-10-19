import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    TouchableOpacity,
    Image
} from 'react-native';
import {
    Item,
    Input,
    Form,
    Label,
    Button,
    Thumnail,
    Text
} from 'native-base';

import BgImage from '../Images/backgroundlogin.jpg';
import Logo from '../Images/Logo.png';

class LoginForm extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.containerStyles}>
                <Image style={styles.bgImageStyle} source={BgImage} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    containerStyles: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        width: '100%',
        height: '100%'
    }
})

export default LoginForm;