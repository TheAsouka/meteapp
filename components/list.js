import React from 'react'
import { Image, Text, ActivityIndicator, ListView } from 'react-native'
import mystyle from "../style"
import axios from 'axios'
import WeatherRow from './weather/row'

export default class List extends React.Component {

    static navigationOptions = ({ navigation }) => {
        return {
            title: `Météo de ${navigation.state.params.city}`, //ES6 notation
            tabBarIcon: () => {
                return (
                    <Image source={require('./icons/home.png')} />
                )
            }
        }
    }

    constructor(props) {
        super(props)
        //console.log('state',this.props.navigation.state)
        this.state = {
            city: this.props.navigation.state.params.city,
            report: null
        }
        setTimeout(() => {
            this.fecthWeather()
        }, 1000)
    }

    fecthWeather() { //Make API call
        axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${this.state.city}&mode=json&units=metric&cnt=100&APPID=c611a58aebb4721207725d4e97965667`)
            //API du tuto plus dispo en free, donc utilise une autre, va demander quelques arrangements.
            .then((response) => {
                //console.log(response.data)
                this.setState({ report: response.data }) // Get JSON
            })
    }


    render() {
        if (this.state.report === null) {
            return (
                <ActivityIndicator color={mystyle.color} size="large" />
            )
        } else {
            const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 }); // https://facebook.github.io/react-native/docs/listview
            //console.log(this.state.report); // All JSON from API
            return (
                <ListView
                    dataSource={ds.cloneWithRows(this.state.report.list)} //check doc, on peut passer une list, plusieurs rows
                    renderRow={(rowData, j, k) => <WeatherRow day={rowData} index={parseInt(k, 10)} />} // ParseInt convertir string en int (base10), on doit préparer la dataSource
                /> //Pobleme arrive pas a afficher les data
            )
        }
    }
}