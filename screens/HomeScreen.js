import {
  Image,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <Image style={styles.image} source={require('../assets/home-image.jpg')} />
      <Text style={styles.title}>Welcome to Locapic</Text>

      <TextInput style={styles.input} placeholder="Nickname" />
      <TouchableOpacity onPress={() => navigation.navigate('TabNavigator')} style={styles.button} activeOpacity={0.8}>
        <Text style={styles.textButton}>Go to map</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '50%',
  },
  title: {
    width: '80%',
    fontSize: 38,
    fontWeight: '600',
  },
  input: {
    width: '80%',
    marginTop: 25,
    borderBottomColor: '#ec6e5b',
    borderBottomWidth: 1,
    fontSize: 18,
  },
  button: {
    alignItems: 'center',
    paddingTop: 8,
    width: '80%',
    marginTop: 30,
    backgroundColor: '#ec6e5b',
    borderRadius: 10,
    marginBottom: 80,
  },
  textButton: {
    color: '#ffffff',
    height: 30,
    fontWeight: '600',
    fontSize: 16,
  },
});
