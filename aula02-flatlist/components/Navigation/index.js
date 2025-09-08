import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStaticNavigation } from '@react-navigation/native';
import Home from '../../pages/Home';
import Contact from '../../pages/Contact';

const Drawer = createDrawerNavigator({
  screens: {
    Home: Home,
    Contact: Contact,
  },
});

const Navigation = createStaticNavigation(Drawer);

export default Navigation;