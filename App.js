import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';
import ResultsShowScreen from './src/screens/resultShow';


const navigator = createStackNavigator(
  {
    Home: HomeScreen ,
    ResultsShow : ResultsShowScreen
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'Business Search'
    }
  }
);

export default createAppContainer(navigator);
