import { ScrollView } from 'react-native';
import React from 'react';
import StationDetailsComponent from '../components/stationDetails/stationDetails.component';
import { useSelector } from 'react-redux';
import { selectWeatherStation } from '../../../redux/dashboard/dashboardSlice';
import { useQuery } from '@tanstack/react-query';
import { getCurrentWeatherData } from '../../../api/ApiService';
import { MD2Colors } from 'react-native-paper';
import { Loading, LoadingContainer } from '../components/dashboard.styles';

const DashboardScreen = () => {
  const { id: station_id, name: station_name } =
    useSelector(selectWeatherStation);

  const {
    isLoading,
    error,
    data: currentWeather,
  } = useQuery(
    ['currentWeatherData', station_id],
    () =>
      getCurrentWeatherData({
        station_id,
      }),
    {
      enabled: Boolean(station_id),
      refetchOnDependencyChange: true,
      refetchIntervalInBackground: true,
    }
  );
  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
      }}
    >
      {isLoading ? (
        <LoadingContainer>
          <Loading size={50} animating={true} color={MD2Colors.red800} />
        </LoadingContainer>
      ) : (
        <>
          <StationDetailsComponent currentWeather={currentWeather} />
        </>
      )}
    </ScrollView>
  );
};

export default DashboardScreen;
