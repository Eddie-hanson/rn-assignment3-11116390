import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  FlatList,
  Button,
} from "react-native";
import TaskItem from "./components/Task";
import CategoryItem from "./components/Category";
import Icon from "react-native-vector-icons/FontAwesome";

export default function App() {
  const tasks = [
    { id: "1", title: "Go for a run" },
    { id: "2", title: "Complete assignment" },
    { id: "3", title: "Work on project" },
    { id: "4", title: "Cook dinner" },
    { id: "5", title: "Read a book" },
    { id: "6", title: "Visit the military museum" },
    { id: "7", title: "Work on a DIY project" },
    { id: "8", title: "Attend a fitness bootcamp" },
    { id: "9", title: "Hit the gym" },
    { id: "10", title: "Attend a workshop" },
    { id: "11", title: "Learn a backend framework" },
    { id: "12", title: "Plan my next travel destination" },
    { id: "13", title: "Weightlifting session at the gym" },
    { id: "14", title: "Take a road trip to visit friends" },
    { id: "15", title: "Debug and fix issues in my code" },
  ];

  const categories = [
    { id: "1", title: "Exercise", taskCount: "12 Tasks" },
    { id: "2", title: "Study", taskCount: "12 Tasks" },
    { id: "3", title: "Code", taskCount: "12 Tasks" },
    { id: "4", title: "Cook", taskCount: "12 Tasks" },
    { id: "5", title: "Read", taskCount: "12 Tasks" },
    { id: "6", title: "Meditate", taskCount: "12 Tasks" },
    { id: "7", title: "Work", taskCount: "12 Tasks" },
    { id: "8", title: "Shop", taskCount: "12 Tasks" },
  ];

  return (
    <View style={styles.container}>
      <ScrollView style={styles.container}>
        <StatusBar style="auto" />
        <View style={styles.header1_Views}>
          <Text style={styles.header1}>Hello, Devs</Text>
          <Text style={styles.tasks}>14 tasks today</Text>
        </View>

        <View style={styles.searchContainer}>
          <Icon name="search" size={20} color="#000" style={styles.icon} />
          <TextInput style={styles.search} placeholder="Search " />
        </View>

        <Text style={styles.header2}>Categories</Text>
        <FlatList
          data={categories}
          renderItem={({ item }) => (
            <CategoryItem title={item.title} taskCount={item.taskCount} />
          )}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
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
  header1_Views: {
    maxHeight: 52,
    maxWidth: 354,
    left: 20,
    top: -25,
  },
  header1: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "left",
    marginVertical: 20,
    marginTop: -10,
  },
  header2: {
    fontSize: 24,
    fontWeight: "bold",
    marginLeft: 10,
    marginVertical: 20,
    marginBottom: 7,
  },
  search: {
    flex: 1,
    fontSize: 20,
    fontWeight: "bold",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#FBF9F7",
    backgroundColor: "#f9f9f9",
    borderWidth: 1,
    borderRadius: 14,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    marginBottom: 20,
    height: 48,
    width: 280,
  },
  tasks: {
    marginTop: -17,
    marginBottom: 20,
    marginHorizontal: 10,
  },
  icon: {
    marginRight: 10,
  },
});
