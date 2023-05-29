import styled from 'styled-components/native';
import CustomCard from '../../../../components/common/custom-card/custom-card.component';
import MapView from 'react-native-maps';

export const StationDetailsContainer = styled(CustomCard)`
  margin: 16px;
  elevation: 4;
  border-radius: 4px;
  height: auto;
`;

export const StationDetailsHeadingWrapper = styled.View`
  height: 54px;
  align-items: flex-start;
  justify-content: center;
  border-bottom-width: 1px;
  border-bottom-color: #e0e0e0;
`;

export const StationDetailsHeading = styled.Text`
  color: #01426b;
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  margin-top: 8px;
  margin-bottom: 8px;
  padding-left: 16px;
`;

export const StationDetailsContent = styled.View`
  padding-left: 6px;
  margin: 10px;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

export const StationDetailsContentItem = styled.View`
  flex-direction: column;
  margin-bottom: 15px;
  width: 50%;
`;

export const StationDetailsContentItemTitle = styled.Text`
  color: #313131;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
`;

export const StationDetailsContentItemSubtitle = styled.Text`
  width: 80%;
  color: #01426b;
  font-size: 16px;
  font-weight: 700;
  line-height: 21px;
  margin-top: 5px;
`;

export const StationDetailsMapContainer = styled.View`
  margin: 16px;
  elevation: 4;
  border-radius: 4px;
  flex: 1;
`;

export const StationDetailsMap = styled(MapView)`
  width: 100%;
  height: 100%;
`;
