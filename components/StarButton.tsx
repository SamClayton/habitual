import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { toggleStar } from '../redux/slices/starSlice';

interface StarProps {
  size?: number;
  color?: string;
}

const Star: React.FC<StarProps> = ({ size = 50, color = 'black' }) => {
  const dispatch = useDispatch();
  // TODO: Adjust `state.star` to match Redux store activity structure
  const starState = useSelector((state: any) => state.star); 

  const handlePressIn = () => {
    if (!starState.isOn) {
      // Toggle to "on" state.
      dispatch(toggleStar(true));
    }
  };

  const handleLongPress = () => {
    if (starState.isOn) {
      // Toggle back to "off" state.
      dispatch(toggleStar(false));
    }
  };

  return (
    <TouchableOpacity
      onPressIn={handlePressIn}
      onLongPress={handleLongPress}
      delayLongPress={300}
    >
      <AntDesign
        name={starState.isOn ? 'star' : 'staro'}
        size={size}
        color={color}
        style={styles.star}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  star: {
    alignSelf: 'center',
  },
});

export default Star;
