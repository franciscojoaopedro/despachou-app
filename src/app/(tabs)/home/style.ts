import { Link, LinkProps } from 'expo-router';
import styled from 'styled-components/native';


export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
`;

export const Header = styled.View`
  padding: 20px;
  align-items: center;
  justify-content: center;
`;

export const Greeting = styled.Text`
  font-size: 24px;
  font-weight: bold;
`;

export const Location = styled.Text`
  font-size: 18px;
  color: #6e6e6e;
`;

export const SearchBar = styled.TextInput`
  height: 40px;
  margin: 10px;
  padding: 10px;
  border: 1px solid #e2e2e2;
  border-radius: 20px;
`;

export const FeaturedTitle = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin: 10px;
`;

export const PropertyList = styled.FlatList`
  margin: 10px;
`;

export const PropertyCard = styled.View`
  background-color: #f8f8f8;
  border-radius: 15px;
  padding: 15px;
  margin-right: 10px;
  width: 300px;
  height: 400px;
`;

export const PropertyImage = styled.Image`
  width: 100%;
  height: 200px;
  border-radius: 15px;
`;

export const PropertyTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-top: 10px;
`;

export const PropertyLocation = styled.Text`
  font-size: 16px;
  color: #6e6e6e;
`;

export const PropertyPrice = styled.Text`
  font-size: 16px;
  color: #000;
  font-weight: bold;
`;

export const StyledFlatList = styled.FlatList`
  width: 100%;
  background-color: #f2f2f2;
  padding: 10px;
`;
