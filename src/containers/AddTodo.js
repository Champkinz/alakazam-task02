import React, {Component} from "react";

import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity
} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import {connect} from 'react-redux';
import {addTodo} from "../actions";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

class AddTodo extends Component {

    constructor() {
        super();
        this.state = {
            text: ''
        };
    }


    addTodo = (text) => {
        this.props.dispatch(addTodo(text));
        this.setState({text: ''});
    };


    render() {
        return (
            <View style={{flexDirection: 'row', marginHorizontal: 20}}>
                <TextInput
                    onChangeText={(text) => this.setState({text})}
                    value={this.state.text}
                    placeholder='Enter here'
                    style={{
                        borderWidth: 1,
                        borderColor:'#fff',
                        backgroundColor: '#c1c8c9',
                        height: 50,
                        flex: 1,
                        padding: 5,
                        borderRadius:10
                    }}
                />
                <TouchableOpacity onPress={() => this.addTodo(this.state.text)}>
                    <View style={{
                        height: 50,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <Ionicons name={'md-add-circle'} size={30} style={{color: '#000000', padding: 10}}/>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

export default connect()(AddTodo);
