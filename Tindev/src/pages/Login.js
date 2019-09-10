import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet, Image, TextInput, TouchableOpacity, Text } from 'react-native';

import api from '../services/api'

import logo from '../assets/logo.png'

export default function Login({ navigation }){
    const [user, setUser] = useState('');

    async function handleLogin(){
        const response = await api.post('/devs', {username: user});
        const { _id } = response.data;
        console.log( _id );
        
        navigation.navigate('Main', { _id });
    }

    return(
        <KeyboardAvoidingView 
            behavior="padding"
            enabled={Platform.OS === "ios"}
            style={styles.container}
        >
            <Image source = {logo} />
            <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="Digite seu usuário no GitHub"
                placeholderTextColor='#777'
                style={styles.input}
                value= {user}
                onChangeText={setUser}
            />
            <TouchableOpacity
                onPress={handleLogin}
                style={styles.button}
                activeOpacity={0.8}
            >
                <Text style={styles.buttonText}>ENTRAR</Text>
            </TouchableOpacity>
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
    button:{
        height: 46,
        alignSelf: 'stretch',
        backgroundColor: '#DF4723',
        borderRadius: 4,
        marginTop: 20,
        paddingHorizontal: 15,
        alignItems: "center",
        justifyContent: "center"
    },
    buttonText:{
        fontWeight: "bold",
        color: "white",
        fontSize: 16,
    }
});
