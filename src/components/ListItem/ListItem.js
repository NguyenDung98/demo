import React from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback, Image } from 'react-native';

export default ListItem = props => (
    <TouchableWithoutFeedback onPress={props.onItemPressed}>
        <View style={styles.listItem}>
            <Image
                source={props.placeImg}
                style={styles.placeImg}
            />
            <Text>{props.placeName}</Text>
        </View>
    </TouchableWithoutFeedback>
)

const styles = StyleSheet.create({
   listItem: {
       alignItems: 'center',
       backgroundColor: "#eee",
       flexDirection: 'row',
       marginBottom: 5,
       padding: 10,
       width: '100%'
   },
   placeImg: {
       marginRight: 8,
       height: 30,
       width: 30
   }
});