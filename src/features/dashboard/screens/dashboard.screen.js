import { View, Text, FlatList, ScrollView } from 'react-native';
import React from 'react';
import CustomCard from '../../../components/common/custom-card/custom-card.component';
import StationDetailsComponent from '../components/stationDetails/stationDetails.component';

const DashboardScreen = () => {
  return (
    <ScrollView>
      <StationDetailsComponent />
    </ScrollView>
  );
};

export default DashboardScreen;
