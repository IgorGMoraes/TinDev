import React from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet, Image, TextInput } from 'react-native';

import logo from '../assets/logo.png'
export default function Login(){
    return(
        <KeyboardAvoidingView 
            behavior="padding"
            enabled={Platform.OS === "ios"}
            style={styles.container}
        >
            <Image source = {logo} />
            <TextInput
                placeholder="Digite seu usuário no GitHub"
                placeholderTextColor='#777'
                style={styles.input}
            />
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 30,
    },

    input: {
        height: 46,
        alignSelf: 'stretch',
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderColor: '#DDD',
        borderRadius: 4,
        marginTop: 20,
        paddingHorizontal: 15,
    },
});
