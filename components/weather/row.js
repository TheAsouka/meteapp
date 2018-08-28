import React from 'react'
import PropTypes from 'prop-types';
import { View, Text, StyleSheet, Image } from 'react-native'
import moment from 'moment' //date parser
import FadeInView from '../animation/fadeinview'

import 'moment/locale/fr'
moment.locale('fr')

export default class Row extends React.Component {

    static propTypes = { // check les types de variables utilisés en paramètre de <WheaterRow/> dans list.js
        day: PropTypes.object,
        index: PropTypes.number
    }

    day() {
        let day = moment(this.props.day.dt * 1000).format('ddd') //moment attend des milliseconds donc x1000
        return (
            <Text style={[style.white, style.bold]}>{day.toUpperCase()}</Text>
        )
    }

    date() {
        let date = this.props.day.dt_txt.substring(11, 16)
        return (date)
    }

    icon(size = 70) {
        const type = this.props.day.weather[0].main.toLowerCase()
        let image
        switch (type) {
            case 'clouds':
                image = require('./icons/clouds.png')
                break;

            case 'rain':
                image = require('./icons/rain.png')
                break;

            default:
                image = require('./icons/sun.png')
        }
        return (
            <Image source={image} style={{ width: size, height: size, marginHorizontal: 25 }} />
        )
    }

    iconhumid(){
        let imagex
        imagex = require('./icons/humid.png')
        return (
            <Image source={imagex} style={style.iconhumid}/>
        )
    }

    iconhumideuh(){
        let imagex
        imagex = require('./icons/humid.png')
        return (
            <Image source={imagex} style={style.iconhumideuh}/>
        )
    }



    render() {
        let date_array = ["09:00", "12:00", "18:00", "21:00", "00:00"];
        
        if (this.props.index === 0) {
            return (
                <View style={[style.flex, style.view, style.firstView]}>
                    <View>
                        <Text style={{ color: '#FFF', fontSize: 22 }}>{this.day()} {this.date()}</Text>
                        {this.icon(100)}
                    </View>
                    <View style={{flexDirection: 'column', flex: 1}}>
                        <Text style={[style.temp, { fontSize: 50, marginTop: 30, marginLeft: 30 }]}>{Math.round(this.props.day.main.temp)} °C</Text>
                        <View style={{flex: 1, flexDirection: 'row', marginTop: 15, marginLeft: 30}}>
                            {this.iconhumid()}
                            <Text style={style.humid}>{this.props.day.main.humidity}%</Text>
                        </View>
                    </View>
                </View>
            )
        }
        if (date_array.includes(this.date())) { //display only temp for defined hours
            return (
                <FadeInView delay={this.props.index * 100}>
                    <View style={[style.flex, style.view]}>
                        <View style={style.flex}>
                            <Text style={style.temprow}>{this.day()}</Text>
                            <Text style={[style.temprow, { color: '#e5f441' }]}> {this.date()}</Text>
                            {this.icon()}
                        </View>
                        <View style={{ flexDirection: 'column', flex: 1, marginLeft: 170, marginTop: 30 }}>
                            <Text style={style.temp}>{Math.round(this.props.day.main.temp)} °C </Text>
                            <View style={{flex: 1, flexDirection: 'row', marginTop: 10, marginLeft: 30}}>
                                {this.iconhumideuh()}
                                <Text style={style.humideuh}>{this.props.day.main.humidity}%</Text>
                            </View>
                        </View>
                    </View>
                </FadeInView>
            )
        } else {
            return (null)
        }

    }
}


const style = StyleSheet.create({
    white: {
        color: '#FFF'
    },
    firstView: {
        backgroundColor: '#42d4f4'
    },
    bold: {
        fontWeight: 'bold'
    },
    flex: {
        flex: 1, // disposition !
        flexDirection: 'row', // important pour disposition, tout les enfants seront bien placés
        alignItems: 'center'
    },
    view: {
        backgroundColor: '#394163',
        borderWidth: 0,
        borderBottomWidth: 2,
        borderBottomColor: '#42d4f4',
        paddingHorizontal: 20,
        paddingVertical: 10,
        justifyContent: 'space-between'
    },
    temp: {
        color: "#FFF",
        fontWeight: 'bold',
        fontSize: 30
    },
    temprow: {
        marginLeft: 10,
        fontSize: 22
    },
    humid: {
        color: '#394163',
        fontSize: 18,
        fontWeight: 'bold'
    },
    iconhumid:{
        marginLeft: 50, 
        marginTop: 1,
        width: 20, 
        height: 20,
        justifyContent: 'center'
    },
    humideuh: {
        marginTop: 5,
        color: '#42d4f4',
        fontSize: 12,
        fontWeight: 'bold'
    },
    iconhumideuh:{
        marginLeft: 1, 
        marginTop: 1,
        width: 20, 
        height: 20,
        justifyContent: 'center'
    }
})