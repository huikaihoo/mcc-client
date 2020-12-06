import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import MonthScreen from '../screens/MonthScreen';
import WeekScreen from '../screens/WeekScreen';
import DayScreen from '../screens/DayScreen';
import SettingsScreen from '../screens/SettingsScreen';
import { BottomTabParamList, TabMonthParamList, TabWeekParamList, TabDayParamList, TabSettingsParamList } from '../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {

  return (
    <BottomTab.Navigator initialRouteName="TabMonth">
      <BottomTab.Screen
        name="TabMonth"
        component={TabMonthNavigator}
        options={{
          tabBarLabel: "Month",
          tabBarIcon: ({ color }) => <TabBarIcon name="md-calendar" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="TabWeek"
        component={TabWeekNavigator}
        options={{
          tabBarLabel: "Week",
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-list-box" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="TabDay"
        component={TabDayNavigator}
        options={{
          tabBarLabel: "Day",
          tabBarIcon: ({ color }) => <TabBarIcon name="md-today" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="TabSettings"
        component={TabSettingsNavigator}
        options={{
          tabBarLabel: "Settings",
          tabBarIcon: ({ color }) => <TabBarIcon name="md-settings" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: string; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabMonthStack = createStackNavigator<TabMonthParamList>();

function TabMonthNavigator() {
  return (
    <TabMonthStack.Navigator>
      <TabMonthStack.Screen
        name="TabMonthScreen"
        component={MonthScreen}
        options={{ headerTitle: 'Month View' }}
      />
    </TabMonthStack.Navigator>
  );
}

const TabWeekParamStack = createStackNavigator<TabWeekParamList>();

function TabWeekNavigator() {
  return (
    <TabWeekParamStack.Navigator>
      <TabWeekParamStack.Screen
        name="TabWeekScreen"
        component={WeekScreen}
        options={{ headerTitle: 'Week View' }}
      />
    </TabWeekParamStack.Navigator>
  );
}

const TabDayStack = createStackNavigator<TabDayParamList>();

function TabDayNavigator() {
  return (
    <TabDayStack.Navigator>
      <TabDayStack.Screen
        name="TabDayScreen"
        component={DayScreen}
        options={{ headerTitle: 'Day View' }}
      />
    </TabDayStack.Navigator>
  );
}

const TabSettingsStack = createStackNavigator<TabSettingsParamList>();

function TabSettingsNavigator() {
  return (
    <TabSettingsStack.Navigator>
      <TabSettingsStack.Screen
        name="TabSettingsScreen"
        component={SettingsScreen}
        options={{ headerTitle: 'Settings' }}
      />
    </TabSettingsStack.Navigator>
  );
}
