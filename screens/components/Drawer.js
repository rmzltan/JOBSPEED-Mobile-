import React from 'react';
import {View, StyleSheet} from 'react-native';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';
import {
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch,
} from 'react-native-paper';

import {Image, TouchableOpacity} from 'react-native';
import { color } from 'react-native-reanimated';

export function DrawerContent(props) {
    return(
        <View style={{flex: 1}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={[styles.userInfoSection, {flexDirection: 'row'}]}>
                        <Image style={{width: '100%', height: 160 }} source={require('../../images/drawerstyle.png')} />
                        <View style={{marginTop: 15, position: 'absolute', flex: 1,}}>
                            <Avatar.Image style={{marginVertical: 10, marginLeft: 15}} source={require('../../images/defaulticon.jpg')} />
                        </View>
                        <View style={{position: 'absolute', width: '100%', alignItems: 'center', marginTop: 15, marginHorizontal: 20, padding: 10, flex: 1,}}>
                            <Title style={styles.title} numberOfLines={2}>Guest</Title>
                            <Caption style={styles.caption} numberOfLines={2}>Guest123</Caption>
                        </View>
                    </View>
                    <View style={[styles.row, styles.userInfoSection]}>
                        <View style={styles.section}>
                        </View>
                    </View>
                    <Drawer.Section style={{flex: 1, marginTop: 15}}>
                        
                        <DrawerItem 
                            label="Home" 
                            icon={({ size }) => (
                                <Image
                                    source= {require('../../images/home.png')}
                                    style={{ height: size, width: size }}
                                    resizeMode="contain"
                                />
                            )} 
                            onPress={() => {props.navigation.navigate('Js.')}} />

                        <DrawerItem 
                            label="Search" 
                            icon={({ size }) => (
                                <Image
                                    source= {require('../../images/search.png')}
                                    style={{ height: size, width: size }}
                                    resizeMode="contain"
                                />
                            )} 
                            onPress={() => {props.navigation.navigate('Search')}} />

                        <DrawerItem 
                            label="Appointments" 
                            icon={({ size }) => (
                                <Image
                                    source= {require('../../images/appointment.png')}
                                    style={{ height: size, width: size }}
                                    resizeMode="contain"
                                />
                            )} 
                            onPress={() => {props.navigation.navigate('Appointments')}} />

                    </Drawer.Section>
                    <View style={{alignItems: 'center', marginTop: 20,}}>
                        <TouchableOpacity style={{alignItems: 'center', width: '60%', paddingHorizontal: 20, paddingVertical: 10, borderColor: '#9f68e8', borderWidth: 1, borderRadius: 8}}>
                            <Text>Have a service?</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{alignItems: 'center', marginTop: 20,}}>
                        <TouchableOpacity style={{alignItems: 'center', width: '60%', paddingHorizontal: 20, paddingVertical: 10, borderColor: '#9f68e8', borderWidth: 1, borderRadius: 8, backgroundColor: '#9f68e8'}} onPress={() => {props.navigation.navigate('Signup')}}>
                            <Text style={{color: 'white'}}>Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </DrawerContentScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 0
    },
    paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
    },
    drawerSection: {
        marginTop: 15
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1,
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16
    },
    title: {
        flex:1,
        color: 'white'
    },
    caption: {
        flex: 1,
        color : 'white'
    }
});