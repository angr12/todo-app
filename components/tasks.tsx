import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, Task } from "react-native";

interface TaskProps {
    name: string;
    index: number;  
    removeTask:(index: number) => void;
}

export default function Tasks({ name, index, removeTask }: TaskProps) {
    return(
        <View style={styles.item}>
            <View style={styles.align}>
                <TouchableOpacity 
                style={styles.button}
                onPress={() => removeTask(index)}
                ></TouchableOpacity>
                <Text style={styles.text}>{name}</Text>
            </View>
            <View>

            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    item:{
        backgroundColor: '#f8f8f8',
        padding: 15,
        borderRadius: 10,
        marginBottom: 15,
        justifyContent: 'space-between',
    },
    button:{
        width: 24,
        height: 24,
        marginRight: 15,
        backgroundColor: '#55bcf6',
        opacity: 0.6,
    },
    align:{
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    text:{
        maxWidth: '80%', 
    }
});