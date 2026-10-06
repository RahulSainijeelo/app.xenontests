import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Package, Gift, User, LogIn } from 'lucide-react-native';

// Placeholder screens
import { DashboardScreen } from '../screens/dashboard/DashboardScreen';
import { StoreScreen } from '../screens/store/StoreScreen';
import { ReferralScreen } from '../screens/referral/ReferralScreen';
import { ProfileScreen } from '../screens/profile/ProfileScreen';
import { TestScreen } from '../screens/test/TestScreen';
import { LoginScreen } from '../screens/auth/LoginScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#6366f1',
        tabBarInactiveTintColor: '#9ca3af',
        tabBarStyle: {
          backgroundColor: '#1f2937',
          borderTopColor: '#374151',
        },
      }}
    >
      <Tab.Screen 
        name="Dashboard" 
        component={DashboardScreen} 
        options={{
          tabBarLabel: 'My Access',
          tabBarIcon: ({ color, size }) => <Home color={color} size={size} />,
        }}
      />
      <Tab.Screen 
        name="Store" 
        component={StoreScreen} 
        options={{
          tabBarLabel: 'Store',
          tabBarIcon: ({ color, size }) => <Package color={color} size={size} />,
        }}
      />
      <Tab.Screen 
        name="Referral" 
        component={ReferralScreen} 
        options={{
          tabBarLabel: 'Referral',
          tabBarIcon: ({ color, size }) => <Gift color={color} size={size} />,
        }}
      />
    </Tab.Navigator>
  );
}

export function RootNavigator() {
  // In a real app, you would check auth state here
  const isAuthenticated = true;

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {!isAuthenticated ? (
        <Stack.Screen name="Login" component={LoginScreen} />
      ) : (
        <>
          <Stack.Screen name="MainTabs" component={MainTabs} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
          <Stack.Screen name="Test" component={TestScreen} />
        </>
      )}
    </Stack.Navigator>
  );
}
