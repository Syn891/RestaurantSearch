import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from './src/screens/ScreenSearch';


const navigator = createStackNavigator({

  Screen: SearchScreen

} , {

initialRouteName: 'Screen',
defaultNavigationOptions: {
  title:"Restaurant Search"
}

})

export default createAppContainer(navigator);
