import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  FlatList,
  Image,
} from "react-native";
import TaskItem from "./components/Task";
import CustomButton from "./components/Button";
import CategoryItem from "./components/Category";
import Exercise from "./assets/Exercise.jpg";
import Study from "./assets/Study.jpg";
import Code from "./assets/Code.png";
import Cook from "./assets/Cook.png";
import Read from "./assets/Read.png";
import Meditate from "./assets/Meditate.png";
import Work from "./assets/Work.png";
import Shop from "./assets/Shop.png";

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
    {
      id: "1",
      title: "Exercise",
      taskCount: "12 Tasks",
      image: Exercise,
    },
    {
      id: "2",
      title: "Study",
      taskCount: "15 Tasks",
      image: Study,
    },
    {
      id: "3",
      title: "Code",
      taskCount: "22 Tasks",
      image: Code,
    },
    {
      id: "4",
      title: "Cook",
      taskCount: "8 Tasks",
      image: Cook,
    },
    {
      id: "5",
      title: "Read",
      taskCount: "4 Tasks",
      image: Read,
    },
    {
      id: "6",
      title: "Meditate",
      taskCount: "11 Tasks",
      image: Meditate,
    },
    {
      id: "7",
      title: "Work",
      taskCount: "25 Tasks",
      image: Work,
    },
    {
      id: "8",
      title: "Shop",
      taskCount: "50 Tasks",
      image: Shop,
    },
  ];

  return (
    <View style={styles.container}>
      <ScrollView style={styles.container}>
        <StatusBar style="auto" />

        <View>
          <View style={styles.headerContainer}>
            <Text style={styles.header1}>Hello, Devs</Text>

            <Image
              source={require("./assets/Profile.jpg")}
              color="#f0ffff"
              style={styles.profileIcon}
            />
          </View>

          <View>
            <Text style={styles.tasks}>14 tasks today</Text>
          </View>
        </View>

        <View style={styles.searchContainer}>
          <Image
            source={require("./assets/Icon.jpg")}
            color="#000"
            style={styles.icon}
          />
          <TextInput style={styles.search} placeholder="Search " />

          <View style={styles.filterIconContainer}>
            <Image
              source={require("./assets/Shuffle.png")}
              color="#FFFFFF"
              style={styles.filterIcon}
            />
          </View>
        </View>

        <Text style={styles.header2}>Categories</Text>
        <FlatList
          data={categories}
          renderItem={({ item }) => (
            <CategoryItem
              title={item.title}
              taskCount={item.taskCount}
              image={item.image}
            />
          )}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
        <Text style={styles.header2}>Ongoing Task</Text>
        {tasks.map((task) => (
          <TaskItem key={task.id} title={task.title} />
        ))}
        <CustomButton title="Add Task" onPress={() => {}} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E3D1BA",
    paddingTop: 50,
  },

  headerContainer: {
    maxHeight: 52,
    maxWidth: 354,
    left: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
  },
  header1: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "left",
    marginVertical: 20,
    marginTop: -12,
  },
  tasks: {
    marginTop: -48,
    marginBottom: 20,
    marginHorizontal: 30,
  },
  profileIcon: {
    marginRight: 10,
    position: "right",
    width: 50,
    height: 48,
    marginTop: -7,
    marginBottom: 15,
    borderRadius: 12,
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
  filterIconContainer: {
    backgroundColor: "#F0522F",
    height: 48,
    width: 50,
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
    marginRight: -75,
  },
  filterIcon: {
    backgroundColor: "#F0522F",
  },
  icon: {
    marginRight: 10,
  },
});
