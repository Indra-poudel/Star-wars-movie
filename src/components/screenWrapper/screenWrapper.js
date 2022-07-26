import React from 'react';
import {View} from 'react-native';
import {useHeaderHeight} from '@react-navigation/elements';

const ScreenWrapper = props => {
  const headerHeight = useHeaderHeight();

  return (
    <View
      style={[
        {marginTop: headerHeight, paddingHorizontal: 10, flexGrow: 1},
        props.style,
      ]}>
      {props.children}
    </View>
  );
};

export default ScreenWrapper;
