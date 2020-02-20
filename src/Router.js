import {createAppContainer} from 'react-navigation';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import Liste from './components/Liste';
import LflBugun from './components/LflBugun';
import HomeScreen from './screen/HomeScreen';
import Detay from './components/Detay'
import TumSatisAnlik from './components/TumSatisAnlik';
import Home from './components/Home';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Colors from './components/Colors';
import {createDrawerNavigator} from 'react-navigation-drawer';
import InternetDetay from './components/InternetDetay';
import FranchiseDetay from './components/FranchiseDetay';
import YurtdisiDetay from './components/YurtdisiDetay';
import MerkezFranchiseDetay from './components/MerkezFranchiseDetay';

const tabNavigator = createBottomTabNavigator(
  {
  Home: {
    screen: Home,
  },
  EnYuksekSatışlar: {
    screen: LflBugun,
  },
  AnlıkSatışListesi: {
    screen: TumSatisAnlik,
  },
  },
    {
  //  initialRouteName: 'Home',
    activeColor: '#f0edf6',
    inactiveColor: '#3e2465',
    barStyle: {backgroundColor: '#ff9800'},
    }
  );

 const MealsNavigator = createStackNavigator({
    Greyder: tabNavigator,
    Magaza: Detay,
    Internet:InternetDetay,
    Franchise:FranchiseDetay,
    Yurtdisi:YurtdisiDetay,
    MerkezFranchise:MerkezFranchiseDetay,
  },{
    defaultNavigationOptions: {
      headerStyle: {
          backgroundColor: Colors.orange
        },
        headerTintColor: Platform.OS === 'ios' ? 'white' : Colors.primary
  }
   }
)

const MainNavigator = createDrawerNavigator({
  MealsFavs: MealsNavigator,
  Magaza: Detay,
  Internet:InternetDetay,
  Franchise:FranchiseDetay,
  Yurtdisi:YurtdisiDetay,
  MerkezFranchise:MerkezFranchiseDetay,
});


export default createAppContainer(MainNavigator);
