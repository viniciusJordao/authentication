import React, { Component } from 'react';
import {View} from 'react-native';

const Card = (props) => {
    return(
        <View style={Styles.containerStyles}>
            {props.children}
        </View>
    );
};

const Styles = {
    containerStyles: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        marginLeft:5,
        marginRight:5,
        marginTop:10
    }
};

export { Card };