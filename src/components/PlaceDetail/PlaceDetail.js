import React from 'react';
import { Modal, View, Image, Text, Button, StyleSheet } from 'react-native';

export default PlaceDetail = props => {
    let modalContent = null;
    if (props.selectedPlace) {
        modalContent = (
            <View>
                <Image
                    style={styles.placeImage}
                    source={props.selectedPlace.image}
                />
                <Text style={styles.placeName}>{props.selectedPlace.place}</Text>
            </View>
        );
    }
    return (
        <Modal
            animationType='slide'
            onRequestClose={props.onModalClosed}
            visible={props.selectedPlace !== null}
        >
            <View style={styles.modalContainer}>
                {modalContent}
                <View>
                    <Button title="Delete" color='red' onPress={props.onItemDeleted}/>
                    <Button title="Close" onPress={props.onModalClosed}/>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    modalContainer: {
        margin: 22
    },
    placeImage: {
        width: '100%',
        height: 300
    },
    placeName: {
        fontWeight: 'bold',
        fontSize: 28,
        textAlign: 'center'
    }
});