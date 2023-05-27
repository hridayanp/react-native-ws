import * as React from 'react';
import { View } from 'react-native';
import { Avatar, Button, Card, Text } from 'react-native-paper';

const CustomCard = ({ children, style }) => (
  <Card style={style}>{children}</Card>
);

export default CustomCard;
