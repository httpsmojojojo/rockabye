import React from 'react';
import {Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Medium} from '../Stylings/Font.Family';
import {secondary} from '../Stylings/Colors';
import MaskedView from '@react-native-masked-view/masked-view';
const GradientText = ({text, fontSize, fontFamily}) => {
  return (
    <MaskedView
      maskElement={<Text style={{fontSize, fontFamily: Medium}}>{text}</Text>}>
      <LinearGradient
        colors={['#204D65', '#79C7BA']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}>
        <Text
          style={{
            opacity: 0,
            fontSize,
            fontFamily: Medium,
          }}>
          {text}
        </Text>
      </LinearGradient>
    </MaskedView>
  );
};

export default GradientText;
