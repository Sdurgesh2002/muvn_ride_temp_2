import React, { useRef, useEffect } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Animated } from 'react-native';
import HomeIcon from '../assets/icons/home.svg';
import HistoryIcon from '../assets/icons/history.svg';
import ProfileIcon from '../assets/icons/person.svg';
import Colors from '../constants/Colors';

const TABS = [
  { label: 'Home', Icon: HomeIcon, route: 'Home' },
  { label: 'History', Icon: HistoryIcon, route: 'History' },
  { label: 'Profile', Icon: ProfileIcon, route: 'Profile' },
];

const ELEVATION = -12;

const BottomNavigation = ({ state, descriptors, navigation, activeTab, setActiveTab }) => {
  const animations = useRef(TABS.map(() => new Animated.Value(0))).current;

  useEffect(() => {
    TABS.forEach((_, idx) => {
      Animated.spring(animations[idx], {
        toValue: activeTab === idx ? ELEVATION : 0,
        useNativeDriver: true,
        friction: 6,
        tension: 60,
      }).start();
    });
  }, [activeTab]);

  return (
    <View style={styles.container}>
      {TABS.map((tab, idx) => {
        const isActive = activeTab === idx;
        const Icon = tab.Icon;
        
        return (
          <Animated.View
            key={tab.label}
            style={[
              styles.animatedTab,
              { transform: [{ translateY: animations[idx] }] },
              isActive && styles.elevated,
            ]}
          >
            <TouchableOpacity
              style={[styles.tab, isActive && styles.activeTab]}
              onPress={() => {
                setActiveTab(idx);
                navigation.navigate(tab.route);
              }}
              activeOpacity={0.85}
            >
              <Icon
                width={28}
                height={28}
                fill={isActive ? Colors.black : Colors.inactiveIcon}
              />
              <Text style={[styles.label, isActive && styles.activeLabel]}>
                {tab.label}
              </Text>
            </TouchableOpacity>
          </Animated.View>
        );
      })}
    </View>
  );
};

// ... your existing styles
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: Colors.white,
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingBottom: 10,
    borderBottomLeftRadius: 22,
    borderBottomRightRadius: 22,
  },
  animatedTab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  elevated: {
    zIndex: 2,
  },
  tab: {
    width: 72,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 18,
    paddingVertical: 18,
    backgroundColor: 'transparent',
  },
  activeTab: {
    backgroundColor: Colors.highlights,
    shadowColor: Colors.highlights,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.11,
    elevation: 6,
  },
  label: {
    fontSize: 13,
    color: Colors.inactiveText,
    marginTop: 4,
    fontWeight: '500',
  },
  activeLabel: {
    color: Colors.black,
    fontWeight: 'bold',
  },
});

export default BottomNavigation;
