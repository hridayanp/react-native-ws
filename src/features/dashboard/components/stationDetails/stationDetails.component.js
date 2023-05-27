import { View, Text } from 'react-native';
import React from 'react';
import {
  StationDetailsContainer,
  StationDetailsContent,
  StationDetailsContentItem,
  StationDetailsContentItemSubtitle,
  StationDetailsContentItemTitle,
  StationDetailsHeading,
  StationDetailsHeadingWrapper,
} from './stationDetails.styles';
import { useSelector } from 'react-redux';
import {
  selectAvailableWeatherStations,
  selectWeatherStation,
} from '../../../../redux/dashboard/dashboardSlice';

const StationDetailsComponent = () => {
  const availableWeatherStations = useSelector(selectAvailableWeatherStations);

  const { id: station_id, name: station_name } =
    useSelector(selectWeatherStation);

  console.log('availableWeatherStations', availableWeatherStations);
  console.log('station_id', station_id);

  const dummydata = [
    {
      title: 'Title',
      subtitle: 'Subtitle',
    },
    {
      title: 'Title',
      subtitle: 'Subtitle',
    },
    {
      title: 'Title',
      subtitle: 'Subtitle',
    },
  ];
  return (
    <StationDetailsContainer>
      <StationDetailsHeadingWrapper>
        <StationDetailsHeading>Station Details</StationDetailsHeading>
      </StationDetailsHeadingWrapper>

      <StationDetailsContent>
        {dummydata.map((item, index) => (
          <StationDetailsContentItem key={index}>
            <StationDetailsContentItemTitle>
              {item.title}
            </StationDetailsContentItemTitle>
            <StationDetailsContentItemSubtitle>
              {item.subtitle}
            </StationDetailsContentItemSubtitle>
          </StationDetailsContentItem>
        ))}
      </StationDetailsContent>
    </StationDetailsContainer>
  );
};

export default StationDetailsComponent;
