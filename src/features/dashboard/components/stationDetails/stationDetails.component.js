import React, { useEffect, useState } from 'react';
import {
  StationDetailsContainer,
  StationDetailsContent,
  StationDetailsContentItem,
  StationDetailsContentItemSubtitle,
  StationDetailsContentItemTitle,
  StationDetailsHeading,
  StationDetailsHeadingWrapper,
  StationDetailsMap,
  StationDetailsMapContainer,
} from './stationDetails.styles';
import { Marker } from 'react-native-maps';

const StationDetailsComponent = ({ currentWeather }) => {
  const { device_id, device_name, district, state, project, lat, long } =
    currentWeather?.data?.data[0];

  const [mapRegion, setMapRegion] = useState({
    latitude: Number(lat),
    longitude: Number(long),
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  useEffect(() => {
    setMapRegion({
      latitude: Number(lat),
      longitude: Number(long),
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    });
  }, [currentWeather]);

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

      <StationDetailsMapContainer>
        <StationDetailsMap initialRegion={mapRegion}>
          <Marker
            draggable={false}
            coordinate={mapRegion}
            title="Weather Station Location"
          />
        </StationDetailsMap>
      </StationDetailsMapContainer>
    </StationDetailsContainer>
  );
};

export default StationDetailsComponent;
