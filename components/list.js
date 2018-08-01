import React from 'react'
import { Text, ActivityIndicator } from 'react-native'
import mystyle from "../style"

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
    }

    render() {
        if (this.state.report === null){
            return (
                <ActivityIndicator color={mystyle.color} size="large"/>
            )
        }
        return (
            <Text>Salut ! </Text>
        )
    }
}