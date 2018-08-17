import React from 'react'
import { TextInput, Image, Button, View, Keyboard } from 'react-native'
import mystyle from "../style"
import StackNavigator from '../node_modules/react-navigation/src/navigators/createContainedStackNavigator';
import List from './list'

export class Search extends React.Component {

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
        title: "Rechercher une ville",
        tabBarIcon: () => {
            return <Image source={require('./icons/home.png')} />
        }
    }

    submit(){
        Keyboard.dismiss()
        this.props.navigation.navigate('Result',{city: this.state.city})
    }

    render() {
        return (
            <View style={mystyle.container}>
                <TextInput
                    underlineColorAndroid='transparent'
                    onChangeText={(text) => this.setCity(text)}
                    onSubmitEditing={() => this.submit()}
                    style={mystyle.input}
                    value={this.state.city}
                />

                <Button color={mystyle.color} onPress={() => this.submit()} title="Rechercher" />
            </View>
        )
    }
}

const navigationOptions = {
    headerStyle: mystyle.header,
    headerTitleStyle: mystyle.headerTitle
}

export default StackNavigator ({
    Search: {
        screen: Search,
        navigationOptions
    },
    Result: {
        screen: List,
        navigationOptions
    }
})
