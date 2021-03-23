import styled from 'styled-components/native';

import MapView from 'react-native-maps';

export const Map = styled(MapView)`
  flex: 1;
  width: 100%;
  height: 100%;
  opacity: ${(props) => (props.disabled ? 0.2 : 1)};
`;
