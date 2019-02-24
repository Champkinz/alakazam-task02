import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    lol: {}
})

const TodoList = ({todos, toggleTodo, deleteTodo}) => (
    <View style={{padding: 20}}>
        {todos.map(todo => {
                if (todo.del === false) {
                    return (<View key={todo.id}>
                        <View>
                            <Text style={{
                                fontSize: 24,
                                textDecorationLine: todo.completed ? 'line-through' : 'none',
                                color: todo.completed ? '#ea104f' : '#000'
                            }}>{todo.text}</Text>
                        </View>
                        <TouchableOpacity style={{backgroundColor: 'green'}} onPress={() => deleteTodo(todo.id)}>
                            <Text style={{
                                fontSize: 18,
                                backgroundColor: 'blue',
                                textDecorationLine: todo.del ? 'line-through' : 'none'
                            }}>Delete Todo</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{backgroundColor: 'red'}} onPress={() => toggleTodo(todo.id)}>
                            <Text style={{
                                fontSize: 18,
                            }}>Mark As {todo.completed?'Undone':'Done'}</Text>
                        </TouchableOpacity>
                    </View>)
                }
            }
        )}
    </View>
)

export default TodoList;