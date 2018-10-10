import React from 'react';
import { Modal, View, Image, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

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
                    <TouchableOpacity style={styles.deleteButton}>
                        <Icon size={30} name='md-trash' color='red'/>
                    </TouchableOpacity>
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
    },
    deleteButton: {
        alignItems: 'center'
    }
});