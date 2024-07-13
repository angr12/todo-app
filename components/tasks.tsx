import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function Tasks({ name }: { name: string }) {
    return(
        <View>
            <Text>{name}</Text>
        </View>
    );
};