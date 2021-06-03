import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

import { ContainerButton, TextContainer } from './style.js';

const SecondaryButton = (props) => {
  const { text } = props;
  return (
    <ContainerButton {...props}>
      <TextContainer>{text}</TextContainer>
    </ContainerButton>
  );
};

export default SecondaryButton;
