import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';

import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';

function SettingsModal(props: {
  color: string;
}) {
  return <Link href="/settings" asChild>
      <Pressable>
        {({ pressed }) => (
          <AntDesign
            name="setting"
            size={25}
            color={props.color}
            style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
          />
        )}
      </Pressable>
    </Link>
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'dark'].tint,
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        // TODO Not working on Android dev build in dark mode
        headerShown: useClientOnlyValue(false, true),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Activities',
          tabBarIcon: ({ color }) => <AntDesign name="staro" size={24} color={color} />,
          headerRight: ({ color }) => <SettingsModal color={color} />
        }}
      />
      <Tabs.Screen
        name="streak"
        options={{
          title: 'Streak',
          tabBarIcon: ({ color }) => <AntDesign name="calendar" size={24} color={color} />,
          headerRight: ({ color }) => <SettingsModal color={color} />
        }}
      />
      {/* tabBarIcon: ({ color }) => <AntDesign name="piechart" size={24} color={color} />, */}
      <Tabs.Screen
        name="stats"
        options={{
          title: 'Stats',
          tabBarIcon: ({color}) => <SimpleLineIcons name="pie-chart" size={24} color={color} />,
          headerRight: ({ color }) => <SettingsModal color={color} />
        }}
      />
      <Tabs.Screen
        name="trends"
        options={{
          title: 'Trends',
          tabBarIcon: ({ color }) => <AntDesign name="linechart" size={24} color={color} />,
          headerRight: ({ color }) => <SettingsModal color={color} />
        }}
      />
    </Tabs>
  );
}
