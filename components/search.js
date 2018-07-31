import React from 'react'
import { TextInput, Image } from 'react-native'

export default class Home extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            city: 'Lille'
        }
    }

    setCity(city) {
        this.setState({ city })
    }

    static navigationOptions = {
        tabBarIcon: () => {
            return <Image source={require('./icons/home.png')} />
        }
    }

    render() {
        return (
            <TextInput
                underlineColorAndroid='transparent'
                onChangeText={(text) => this.setCity(text)}
                style={{ height: 40, borderColor: 'gray', borderWidth: 2, marginTop: 50 }}
                value={this.state.city}
            />
        )
    }
}