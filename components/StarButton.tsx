import React, { useRef, useEffect } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { toggleStar, addStar } from '../redux/slices/starSlice';

interface StarProps {
  id: string;
  size?: number;
  color?: string;
}

const Star: React.FC<StarProps> = ({ id, size = 50, color = 'black' }) => {
  const dispatch = useDispatch();
  const isOn = useSelector((state: RootState) => state.stars.stars[id]?.isOn);
  const shortPressDetected = useRef(false);

  useEffect(() => {
    dispatch(addStar({ id }));
  }, [dispatch, id]);

  const handlePressIn = () => {
    if (!isOn) {
      shortPressDetected.current = true;

      // Toggle star "on"
      dispatch(toggleStar({ id, isOn: true }));
    } else {
      // Reset short press detection for "on" stars
      shortPressDetected.current = false;
    }  };

  const handleLongPress = () => {
    if (!shortPressDetected.current && isOn) {
      // Only process long press if no short press and the star is "on"
      dispatch(toggleStar({ id, isOn: false }));
    }
  };

  const handlePressOut = () => {
    // Reset shortPressDetected after press is complete
    shortPressDetected.current = false;
  };

  return (
    <TouchableOpacity
      onPressIn={handlePressIn}
      onLongPress={handleLongPress}
      delayLongPress={300}
    >
      <AntDesign
        name={isOn ? 'star' : 'staro'}
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
