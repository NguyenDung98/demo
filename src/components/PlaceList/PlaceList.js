import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import ListItem from "../ListItem/ListItem"

export default PlaceList = (props) => {
    return (
        <FlatList
            data={props.places}
            renderItem={(info) => (
                <ListItem
                    onItemPressed={() => props.onItemSelected(info.item.key)}
                    placeName={info.item.place}
                    placeImg={info.item.image}
                />
            )}
            style={styles.listContainer}
        />
    )
}

const styles = StyleSheet.create({
    listContainer: {
        width: '100%'
    }
});