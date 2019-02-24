import React, {Component} from "react";

import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity
} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

class AddTodo extends Component {

    render() {
        return (
            <View style={{flexDirection: 'row', marginHorizontal: 20}}>
                <TextInput
                    placeholder={'create champ here'}
                    style={{
                        borderWidth: 1,
                        borderColor: '#f2f2e1',
                        backgroundColor: '#eaeaea',
                        height: 50,
                        flex: 1,
                        padding: 5
                    }}
                />
                <TouchableOpacity onPress={()=>alert('Added Todo')}>
                    <View style={{height:50,backgroundColor:'#eaeaea',alignItems: 'center',justifyContent:'center'}}>
                        <Ionicons name={'md-add'} size={30} style={{color:'#de9595',padding:10}}/>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

export default AddTodo;
