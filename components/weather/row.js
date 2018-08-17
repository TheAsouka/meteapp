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



    render() {
        let date_array = ["09:00", "12:00", "18:00", "21:00"];

        if (this.props.index === 0) {
            return (
                <View style={[style.flex, style.view, style.firstView]}>
                    <View>
                        <Text style={{ color: '#FFF', fontSize: 22 }}>{this.day()} {this.date()}</Text>
                        {this.icon(100)}
                    </View>
                    <Text style={[style.temp, { fontSize: 50 }]}>{Math.round(this.props.day.main.temp)} °C</Text>
                </View>
            )
        }
        if (date_array.includes(this.date())) { //display only temp for defined hours
            return (
                <FadeInView delay={this.props.index * 100}>
                    <View style={[style.flex, style.view]}>
                        <View style={style.flex}>
                            <Text style={style.temprow}>{this.day()}</Text><Text style={[style.temprow, { color: '#e5f441' }]}> {this.date()}</Text>
                            {this.icon()}
                        </View>
                        <Text style={style.temp}>{Math.round(this.props.day.main.temp)} °C </Text>
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
        flexDirection: 'row', // important pour disposition, tout les enfants seront bien palcés
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
    }
})