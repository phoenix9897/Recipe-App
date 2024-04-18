import { StyleSheet, Platform} from "react-native";
import React, { useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Settings from "../Screens/SettingsScreen/SettingsScreen.tsx";
import Explore from "../Screens/ExploreScreen/ExploreScreen.tsx";
import Profile from "../Screens/ProfileScreen/ProfileScreen.tsx";
import Reports from "../Screens/ReportsScreen/ReportsScreen.tsx";
import Category from "../Screens/CategoryPage/CategoryPage.tsx";
import { Icon } from "react-native-paper";
import DarkMode from "../utils/darkmode.context.ts";
import { useTranslation } from "react-i18next";

const BottomTabNavigator = createBottomTabNavigator();

export default function BottomTab() {
  const { isDarkMode, setIsDarkMode } =
    useContext(DarkMode);

  const iconColor = isDarkMode ? "white" : "black";

  const { t } = useTranslation();

  return (
    <BottomTabNavigator.Navigator
      screenOptions={{
        tabBarLabelStyle: styles.label,
        headerTitleStyle: styles.header,
        tabBarStyle: [
          styles.tabContainer,
          Platform.OS === "ios" && {
            shadowOffset: { height: -2, width: 2 },
            shadowOpacity: 0.1,
            shadowRadius: 15
          }
        ],
        tabBarItemStyle: {
          marginBottom: 7
        },
        tabBarInactiveTintColor: "gray",
        tabBarActiveTintColor: "#02b875",


      }}
      safeAreaInsets={{
        bottom: 0
      }}
    >
      <BottomTabNavigator.Screen
        name={t("explore")}
        component={Explore}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon source={"card-search-outline"} size={23} color={iconColor} />
          )
        }}
      />
      <BottomTabNavigator.Screen
        name={t("reports")}
        component={Reports}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon source={"clipboard-file-outline"} size={23} color={iconColor} />
          )
        }}
      />
      <BottomTabNavigator.Screen
        name={t("transection")}
        component={Category}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon source={"clipboard-list-outline"} size={23} color={iconColor} />
          )
        }}
      />
      <BottomTabNavigator.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon source={"shield-account-outline"} size={23} color={iconColor} />
          )
        }}
        name={t("profile")}
        component={Profile}
      />
      <BottomTabNavigator.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon source={"card-bulleted-settings"} size={23} color={iconColor} />
          )
        }}
        name={t("settings")}
        component={Settings}
      />
    </BottomTabNavigator.Navigator>
  );
}

const styles = StyleSheet.create({
  header: {
    textTransform: "capitalize"
  },
  tabContainer: {
    position: "absolute",
    height: 65,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20
  },
  label: {
    textTransform: "capitalize",
    fontSize: 12
  }
});
