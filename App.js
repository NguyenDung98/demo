import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Button} from 'react-native';
import { connect } from 'react-redux';

import PlaceInput from './src/components/PlaceInput/PlaceInput';
import PlaceList from './src/components/PlaceList/PlaceList';
import PlaceDetail from './src/components/PlaceDetail/PlaceDetail';
import { addPlace, deletePlace, selectPlace, deselectPlace } from './src/store/actions';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

class App extends Component {
    placeSelectedHandler = key => {
        this.props.onSelectPlace(key);
    };

    itemDeletedHandler = () => {
        this.props.onDeletePlace();
    };

    modalClosedHandler = () => {
        this.props.onDeselectPlace();
    };

    placeSubmitHandler = placeName => {
        this.props.onAddPlace(placeName);
        console.log("Added new place!")
    };

    render() {
        return (
            <View style={styles.container}>
                <PlaceInput
                    placeSubmitHandler={this.placeSubmitHandler}
                />
                <PlaceList
                    onItemSelected={this.placeSelectedHandler}
                    places={this.props.places}
                />
                <PlaceDetail
                    onItemDeleted={this.itemDeletedHandler}
                    onModalClosed={this.modalClosedHandler}
                    selectedPlace={this.props.selectedPlace}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        flex: 1,
        justifyContent: 'flex-start'
    }
});

const mapStateToProps = state => ({
    places: state.places.places,
    selectedPlace: state.places.selectedPlace
});

const mapDispatchToProps = dispatch => ({
    onAddPlace: (name) => dispatch(addPlace(name)),
    onDeletePlace: () => dispatch(deletePlace()),
    onSelectPlace: (key) => dispatch(selectPlace(key)),
    onDeselectPlace: () => dispatch(deselectPlace())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);