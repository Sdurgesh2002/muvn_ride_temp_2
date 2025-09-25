// import React from 'react';
// import { StatusBar, useColorScheme } from 'react-native';
// import { SafeAreaProvider } from 'react-native-safe-area-context';
// import AppNavigator from './src/navigation/AppNavigator'

// function App() {
//   const isDarkMode = useColorScheme() === 'dark';

//   return (
//     <SafeAreaProvider>
//       <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
//       <AppNavigator />
//     </SafeAreaProvider>
//   );
// }
// export default App;



    import React from 'react';
    import { Text, View, StyleSheet } from 'react-native';

    const App = () => {
      return (
        <View style={styles.container}>
          <Text style={styles.text}>Hello World!</Text>
        </View>
      );
    };

    const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5fcff',
      },
      text: {
        fontSize: 20,
        color: '#333',
      },
    });

    export default App;
