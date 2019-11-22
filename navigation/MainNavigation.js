import { createStackNavigator, createAppContainer } from "react-navigation";
import TabNavigation from "./TabNavigation";
import PhotoNavigation from "./PhotoNavigation";
import MessageNavigation from "./MessageNavigation";
import { stackStyle } from "./config";

const MainNavigation = createStackNavigator(
  {
    TabNavigation,
    PhotoNavigation,
    MessageNavigation
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        ...stackStyle
      }
    },
    headerMode: "none",
    mode: "modal"
  }
);

export default createAppContainer(MainNavigation);
