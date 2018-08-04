import React from 'react'
import { Text, ActivityIndicator, ListView } from 'react-native'
import mystyle from "../style"
import axios from 'axios'

export default class List extends React.Component {

    static navigationOptions = ({navigation}) => {
        return {
            //title: `Météo de ${navigation.state.params.city}` //ES6 notation
    }
}

    constructor (props) {
        super(props)
        console.log('state',this.props.navigation.state)
        this.state = {
            city: 'Lille',//this.props.navigation.state.params.city,
            report: null,
        }
        this.fecthWeather()
    }

    fecthWeather(){ //Make API call
        axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&mode=json&metric&cnt=10&APPID=270ee2245561e676dbeef4b266476a02`)
          .then((response) => {
                this.setState({report: response.data}) // Get JSON
            })
    } 


    render() {
        if (this.state.report === null) {
            return (
                <ActivityIndicator color={mystyle.color} size="large" />
            )
        } else {
            const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 }); // https://facebook.github.io/react-native/docs/listview
            return (
                <ListView
                    dataSource={ds.cloneWithRows(this.state.report.list)} //check doc, on peut passer une list
                    renderRow={(rowData) => <Text>{rowData.temp.day}</Text>} //Basé sur la structure de l'API (.temp.day), mais on doit préparer la dataSource
                /> //Pobleme arrive pas a afficher les data
            )
        }
    }
}