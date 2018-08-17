import React from 'react'
import { View, Text, StyleSheet, Image, ActivityIndicator, Button } from 'react-native'
import mystyle from "../style"

export default class About extends React.Component {

    static navigationOptions = {
        tabBarIcon: () => {
            return <Image source={require('./icons/icon.png')} />
        }
    }

    search() {
        this.props.navigation.navigate("Search")
    }

    render() {

        return (
            <View style={mystyle.container}>

                <Text style={mystyle.title}> A propos de l'application </Text>
                <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse euismod orci at bibendum eleifend. Sed egestas tortor non augue elementum, ultricies placerat eros dignissim. Nulla ornare lacus id nunc porttitor, accumsan auctor ex pretium. Integer tempor vitae nunc vitae dictum. In porttitor dapibus gravida. Nullam condimentum felis vitae purus tincidunt faucibus. Phasellus magna neque, molestie nec sollicitudin non, lacinia et nisl. Nulla bibendum tristique bibendum. Integer luctus neque ac orci tincidunt, vitae dictum velit vulputate.</Text>

                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <ActivityIndicator style={style.view1} color="#42f4e8" size="small" animating={true} />
                    <ActivityIndicator style={style.view1} color="#f49241" size="small" animating={true} />
                </View>

                <Button color={mystyle.color} onPress={() => this.search()} title="Rechercher une ville" />
            </View>
        )
    }

}

const style = StyleSheet.create({

    view1: {
        margin: 20,
        marginTop: 50
    },

    title: {
        fontSize: 22,
        marginBottom: 20
    }
})