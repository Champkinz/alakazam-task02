import React, {Component} from "react";

import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import AddTodo from './containers/AddTodo'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40
    },
});

class ToDo extends Component {

    render() {
        return (
            <View style={styles.container}>
                <AddTodo/>

                <View>

                </View>
            </View>
        )
    }
}

export default ToDo;
