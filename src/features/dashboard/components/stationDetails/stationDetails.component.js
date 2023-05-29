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

const StationDetailsComponent = ({ currentWeather }) => {
  const { device_id, device_name, district, state, project, lat, long } =
    currentWeather?.data?.data[0];

  const currentWeatherData = [
    {
      title: 'Device ID',
      subtitle: device_id,
    },
    {
      title: 'Project Name',
      subtitle: project,
    },

    {
      title: 'Device Name',
      subtitle: device_name,
    },
    {
      title: 'District',
      subtitle: district,
    },
    {
      title: 'State',
      subtitle: state,
    },
    {
      title: 'Coordinates',
      subtitle: lat + ', ' + long,
    },
  ];
  return (
    <StationDetailsContainer>
      <StationDetailsHeadingWrapper>
        <StationDetailsHeading>Station Details</StationDetailsHeading>
      </StationDetailsHeadingWrapper>

      <StationDetailsContent>
        {currentWeatherData.map((item, index) => (
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
