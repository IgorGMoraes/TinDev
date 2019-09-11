import React, { Component } from 'react'
import { Text, Image, SafeAreaView, StyleSheet, View } from 'react-native'

import logo from '../assets/logo.png'
import like from '../assets/like.png'
import dislike from '../assets/dislike.png'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function Main() {
    return (
        <SafeAreaView style={styles.container}>
            <Image style={styles.logo} source={logo}/>
            <View style={styles.cardsContainer}>
                <View style={[styles.card]}>
                    <Image style={styles.avatar}/>
                    <View style={styles.footer}>
                        <Text style={styles.name}>Igor Moraes</Text>
                        <Text style={styles.bio} numberOfLines={3 } >Bio do desenvolvedor</Text>
                    </View>
                </View>
            </View>
            <View style={styles.buttomContainer}>
                <TouchableOpacity style={styles.buttom}>
                    <Image source={dislike}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttom}>
                    <Image source={like}/>
                </TouchableOpacity>
            </View>
            
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#F5F5F5',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    logo:{
        marginTop: 30,
    },

    cardsContainer:{
        flex: 1,
        alignSelf: 'stretch',
        justifyContent: 'center',
        maxHeight: 500,
    },
    
    card:{
        borderWidth: 1,
        borderColor: '#DDD',
        borderRadius: 8,
        margin: 30,
        overflow: 'hidden',
        position: 'absolute',
        top: 0,
        bottom:0,
        right: 0,
        left: 0,
    },

    avatar:{
        flex: 1,
        height:300,
    },

    footer:{
        backgroundColor: '#FFF',
        paddingHorizontal: 20,
        paddingVertical: 15,
    },

    name:{
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },

    bio:{
        fontSize: 14,
        color: '#999',
        marginTop: 5,
        lineHeight: 18,
    },

    buttomContainer:{
        flexDirection: 'row',
        marginBottom: 30,
    },

    buttom:{
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#FFF',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 20,
        elevation: 2,
        shadowColor: '#000',
        shadowRadius: 2,
        shadowOffset:{
            width: 0,
            height: 2,
        },
    }

})