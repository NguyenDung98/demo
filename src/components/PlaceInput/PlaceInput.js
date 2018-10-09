import React, {Component} from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

export default class PlaceInput extends Component{
    state = {
        placeName: ''
    };

    placeNameChangedHandler = val => {
        this.setState(() => ({
            placeName: val
        }))
    };

    render() {
        return (
            <View style={styles.inputContainer}>
                <TextInput
                    onChangeText={this.placeNameChangedHandler}
                    placeholder="Add some places..."
                    style={styles.placeInput}
                    value={this.state.placeName}
                />
                <Button
                    onPress={() => this.props.placeSubmitHandler(this.state.placeName)}
                    style={styles.placeButton}
                    title="Add"
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    inputContainer: {
        // flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%'
    },
    placeInput: {
        width: "70%"
    },
    placeButton: {
        padding: '0',
        width: "30%"
    },
});