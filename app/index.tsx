import { Text, View, StyleSheet } from "react-native";
import Tasks from "@/components/tasks";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tasks:</Text>
      <View style={styles.items}>
        {/* Task list */}
        <Tasks name="Task 1"/>
        <Tasks name='Task 2'/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  items: {
    marginTop: 30,
  },
  });