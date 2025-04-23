import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet, Pressable } from 'react-native';

export default function TodoScreen({ navigation }) {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim()) {
      setTasks([...tasks, { id: Date.now().toString(), text: task, completed: false }]);
      setTask('');
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const removeTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>My Todo List</Text>
      
      <TextInput
        style={styles.input}
        value={task}
        onChangeText={setTask}
        placeholder="Add a new task"
        placeholderTextColor="#aaa"
      />
      <Pressable style={styles.addButton} onPress={addTask}>
        <Text style={styles.addButtonText}>+ Add Task</Text>
      </Pressable>

      <FlatList
        data={tasks}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.taskItem}>
            <TouchableOpacity onPress={() => toggleTask(item.id)}>
              <Text style={[styles.taskText, item.completed && styles.completed]}>
                {item.completed ? '✔️' : '⬜'} {item.text}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => removeTask(item.id)}>
              <Text style={styles.removeButton}>❌</Text>
            </TouchableOpacity>
          </View>
        )}
      />

      <Pressable style={styles.profileButton} onPress={() => navigation.navigate('Profile')}>
        <Text style={styles.profileButtonText}>Go to Profile</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f9f9f9' },
  heading: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, color: '#333' },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    borderRadius: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
  addButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
  },
  addButtonText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
  taskItem: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
  },
  taskText: { fontSize: 16, color: '#333' },
  completed: { textDecorationLine: 'line-through', color: '#888' },
  removeButton: { color: '#e53935', fontSize: 20 },
  profileButton: {
    marginTop: 20,
    paddingVertical: 12,
    backgroundColor: '#3f51b5',
    borderRadius: 10,
    alignItems: 'center',
  },
  profileButtonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
});
