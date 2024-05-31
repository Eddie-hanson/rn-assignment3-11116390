import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  Button,
} from "react-native";
import TaskItem from "./components/Task";

export default function App() {
  const tasks = [
    { id: "1", title: "Go for a run" },
    { id: "2", title: "Complete assignment" },
    { id: "3", title: "Work on project" },
    { id: "4", title: "Cook dinner" },
    { id: "5", title: "Read a book" },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.header1}>Hello, Devs</Text>
      <Text style={styles.tasks}>14 tasks today</Text>
      <StatusBar style="auto" />
      <TextInput style={styles.input} placeholder="Search tasks..." />
      <ScrollView style={styles.container}>
        <Text style={styles.header2}>Ongoing Task</Text>
        {tasks.map((task) => (
          <TaskItem key={task.id} title={task.title} />
        ))}
        <Button title="Add Task" onPress={() => {}} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#696969",
    paddingTop: 50,
  },
  header1: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "left",
    marginVertical: 20,
    marginTop: -10,
    marginHorizontal: 10,
  },
  header2: {
    fontSize: 24,
    fontWeight: "bold",
    marginLeft: 10,
    marginVertical: 20,
  },
  input: {
    height: 40,
    borderColor: "#fff",
    borderWidth: 1,
    borderRadius: 10,
    marginHorizontal: 20,
    marginBottom: 20,
    backgroundColor: "#f9f9f9",
    paddingHorizontal: 10,
    width: 240,
  },
  tasks: {
    marginTop: -17,
    marginBottom: 20,
    marginHorizontal: 10,
  },
});
