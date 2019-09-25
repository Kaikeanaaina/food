import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
//createStackNativator is what will help us get to other screens
import SearchScreen from './src/screens/SearchScreen';

const navigator = createStackNavigator({
  Search: SearchScreen
}, {
  initialRouteName: 'Search',
  defaultNavigationOptions: {
    title: 'Business Search'
  }
});

export default createAppContainer(navigator);