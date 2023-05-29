import { ActivityIndicator } from 'react-native-paper';
import styled from 'styled-components/native';
import { View } from 'react-native';

export const Loading = styled(ActivityIndicator)`
  margin: 10px;
`;
export const LoadingContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
