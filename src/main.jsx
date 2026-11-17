import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ButtonCard from './components/ButtonCard';
import Header from './components/Header';
import { UserIcon, EmployeeIcon } from './components/ui/Icons';

export default function App() {
  return (
    <View style={styles.container}>
      <ButtonCard 
      title="Usuario" 
      href="/Usuario" 
      icon={<UserIcon/>} />
      <ButtonCard 
      title="Empleado" 
      href="/Empleado" 
      icon={<EmployeeIcon/>} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  }
});
