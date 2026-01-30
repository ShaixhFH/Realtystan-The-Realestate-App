// import { Image, StyleSheet, Platform } from 'react-native';

// import { HelloWave } from '@/components/HelloWave';
// import ParallaxScrollView from '@/components/ParallaxScrollView';
// import { ThemedText } from '@/components/ThemedText';
// import { ThemedView } from '@/components/ThemedView';
// import Signup from '@/components/signup';

// export default function HomeScreen() {
//   return (
//     <ParallaxScrollView

//       headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
//       headerImage={
//         <Image
//           source={require('@/assets/images/partial-react-logo.png')}
//           style={styles.reactLogo}
//         />
//       }>
//         {/* <Signup /> */}
//     {/* //   <ThemedView style={styles.titleContainer}>
//     //     <ThemedText type="title">Welcome!</ThemedText>
//     //     <HelloWave />
//     //   </ThemedView>
//     //   <ThemedView style={styles.stepContainer}>
//     //     <ThemedText type="subtitle">Step 1: Try it</ThemedText>
//     //     <ThemedText>
//     //       Edit <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> to see changes.
//     //       Press{' '}
//     //       <ThemedText type="defaultSemiBold">
//     //         {Platform.select({ ios: 'cmd + d', android: 'cmd + m' })}
//     //       </ThemedText>{' '}
//     //       to open developer tools.
//     //     </ThemedText>
//     //   </ThemedView>
//     //   <ThemedView style={styles.stepContainer}>
//     //     <ThemedText type="subtitle">Step 2: Explore</ThemedText>
//     //     <ThemedText>
//     //       Tap the Explore tab to learn more about what's included in this starter app.
//     //     </ThemedText>
//     //   </ThemedView>
//     //   <ThemedView style={styles.stepContainer}>
//     //     <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
//     //     <ThemedText>
//     //       When you're ready, run{' '}
//     //       <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText> to get a fresh{' '}
//     //       <ThemedText type="defaultSemiBold">app</ThemedText> directory. This will move the current{' '}
//     //       <ThemedText type="defaultSemiBold">app</ThemedText> to{' '}
//     //       <ThemedText type="defaultSemiBold">app-example</ThemedText>.
//     //     </ThemedText>
//     //   </ThemedView> */}
//      </ParallaxScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   titleContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: 8,
//   },
//   stepContainer: {
//     gap: 8,
//     marginBottom: 8,
//   },
//   reactLogo: {
//     height: 178,
//     width: 290,
//     bottom: 0,
//     left: 0,
//     position: 'absolute',
//   },
// });

import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
import Rent from '@/components/Com/Properties/Rent';
import Agents from '@/components/Com/Properties/Agent';
import Sale from '@/components/Com/Properties/Sale';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Home from '@/components/Com//Home/index'
import Settings from '@/components/Com/Settings';
import Contact from '@/components/Com/Contact';
import Ionicons from '@expo/vector-icons/Ionicons';

// import * as FaIcons from 'react-icons/fa';
// import * as AiIcons from 'react-icons/ai'
// import * as IoIcons from 'react-icons/io'
// import * as RiIcons from 'react-icons/ri'
// import * as GiIcons from 'react-icons/gi'
// import * as BsIcons from 'react-icons/bs'
// import * as GoIcons from 'react-icons/go'
// import * as VscIcons from 'react-icons/vsc'

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer independent={true} >
          <Drawer.Navigator initialRouteName="ReatltyPass">
            <Drawer.Screen name="Home" component={Home} options={{ headerShown: true }} />
            <Drawer.Screen name="For Rent" component={Rent} />
            <Drawer.Screen name="For Sale" component={Sale} />
            <Drawer.Screen name="Agent" component={Agents} />
            <Drawer.Screen  name="Contact" component={Contact} />
            <Drawer.Screen name="Reports" component={Settings} />    
          </Drawer.Navigator>
            <Image 
                  style={styles.logo}
                  source={require('@/assets/images/logo2.png')} 
              />
      </NavigationContainer>
      <StatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  logo: {
    flex: 0,
    height: 40,
    width: 130,
    alignSelf: 'center',
    position: 'relative',
    bottom: 0,
    margin: 10,
    // padding: 20,
    // position: fixed,
    // fontSize: 30,
  },
});




// {/* style={{flexDirection: 'row'}}> */}
//    {/* style={styles.navbar} > */}



// import Map from './Component/Home/index';
// import RenderHTML from './RenderHTML';
// import RenderHtml from 'react-native-render-html';
// import Slidebar from './Components/Header/Slidebar';
// import Sidebar from '../../project-app/src/components/Slidebar';
// import { BrowserRouter as Router} from 'react-router-dom';
// import Slidebar from './Component/Header/Slidebar'
// import bar from './Component/Header/Menubar/bar';
// import Map from './Component/Header/Map'
    //   {/* html: `
    // <p style='text-align:center;'>
    //   Hello World!
    // </p>` */}
    // {/* <Router>
    //   <Slidebar />
    // </Router> */}
    
// import * as FaIcons from 'react-icons/fa'
// import * as AiIcons from 'react-icons/ai'
// import * as IoIcons from 'react-icons/io'
// import * as RiIcons from 'react-icons/ri'
// import * as GiIcons from 'react-icons/gi'
// import * as BsIcons from 'react-icons/bs'
// import * as GoIcons from 'react-icons/go'
// import * as VscIcons from 'react-icons/vsc'

  // navi: {
  //   width: 300,//'50%',
  //   fontSize: 30,
  // },
  // text: {
  //   fontSize: 50,
  //   padding:20,
  // },
  // name: {
  //   fontSize: 50,
  //   padding:20,
  // },
  // NavigationContainer:{
  //   width: '50%'
  // }

    // backgroundColor: 'black'
    // marginTop: 300,
    // fontSize: 30,
    // width: '50%',
  
      // {/* style={styles.navbar}> */}
      // {/* <View style={styles.navbar}> */}
      // {/* <View  style={styles.navbar} > */}
      //     {/* <Text>Contact us</Text> */}
      //     {/* style={styles.text} */}
    //   {/* <Rent /> */}
      // // {/* <View> */}
      //     {/* <BsIcons.BsHouseFill /> */}
      //       {/* // iconClosed: <RiIcons.RiArrowDownSFill />,
      //       // iconOpened: <RiIcons.RiArrowUpSFill />,
    //   {/* <Home /> */}
    // {/* <bar /> */}
    
    // {/* <Sale /> */}
    // {/* <Agent /> */}
    // {/* <Router>
    //   <Switch>
    //     <Route path={'/'} />
    //   </Switch>
    // </Router> */}
    // {/* <StatusBar style="auto" /> */}
    // {/* </View> */}
    // {/* </> */}
    // <View style={styles.container}>
    //   <index />
    //   {/* <div>        
    //     <Text>
    //       <h1>ello</h1>
    //       Open up App.js to start working on your app!
    //     </Text>
    //   </div> */}
    //   {/* <React.Fragment>
    //     <td>Hello</td>
    //     <td>World</td>
    //   </React.Fragment> */}
    //   <StatusBar style="auto" />
    // </View>
  // Container: {
  //   flex: 1,
  //   // backgroundColor: '#fff',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   fontSize: 30,
  //   flexDirection: 'row',
  //   backgroundColor: 'black'
  // },