import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import ResultsShowScreen from './src/screens/ResultsShowScreen';
import SearchScreen from './src/screens/ScreenSearch';


const navigator = createStackNavigator({

  Screen: SearchScreen,
  Results: ResultsShowScreen 

} , {

initialRouteName: 'Screen',
defaultNavigationOptions: {
  title:"Restaurant Search"
}

})

export default createAppContainer(navigator);
