import React from 'react';
import { View, Text } from 'react-native';

export default props => (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: props.corFundo || "#e59353"
      }}>
        <Text style={{
          fontSize: 50,
          color: props.corTexto || "#fff"
          }}>
          {props.children}
        </Text>
    </View>
)