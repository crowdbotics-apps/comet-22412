import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile169563Navigator from '../features/UserProfile169563/navigator';
import Settings169562Navigator from '../features/Settings169562/navigator';
import Settings169560Navigator from '../features/Settings169560/navigator';
import SignIn2169558Navigator from '../features/SignIn2169558/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile169563: { screen: UserProfile169563Navigator },
Settings169562: { screen: Settings169562Navigator },
Settings169560: { screen: Settings169560Navigator },
SignIn2169558: { screen: SignIn2169558Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
