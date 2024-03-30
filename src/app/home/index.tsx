import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { Container,
FeaturedTitle,
Greeting,
Header,
Location,
PropertyCard,
PropertyImage,
PropertyList,
PropertyLocation,
PropertyPrice,
PropertyTitle,
SearchBar

} from '../(tabs)/home/style';


export default function Home() {
  const properties = [
    {
      id: '1',
      title: 'Moonlit Mirage Villa',
      location: 'New York, USA',
      price: '$2,600/month',
      rating: '3.8',
      imageUrl: 'image_url_moonlit_villa', // Substitua pela URL da imagem real
    },
    {
      id: '2',
      title: 'Crystal Cove Villa',
      location: 'New York, USA',
      price: '$1,400/month',
      rating: '4.7',
      imageUrl: 'image_url_crystal_cove', // Substitua pela URL da imagem real
    },
    // ... Adicione mais propriedades conforme necessário
  ];
  const renderItem = ({ item }) => (
    <PropertyCard>
      <PropertyImage source={{ uri: item.imageUrl }} />
      <PropertyTitle>{item.title}</PropertyTitle>
      <PropertyLocation>{item.location}</PropertyLocation>
      <PropertyPrice>{item.price}</PropertyPrice>
      {/* Adicione mais detalhes conforme necessário */}
    </PropertyCard>
  );
  return (
    <Container>
    <Header>
      <Greeting>Hi, Owen Levi</Greeting>
      <Location>New York City, USA</Location>
    </Header>
    <SearchBar placeholder="Search" />
    <FeaturedTitle>Featured</FeaturedTitle>
    <PropertyList horizontal>
      <PropertyCard>
        <PropertyImage source={{ uri: 'image_url_villa' }} />
        <PropertyTitle>Harmony Peaks Villa</PropertyTitle>
        <PropertyLocation>New York, USA</PropertyLocation>
        <PropertyPrice>$2000/month</PropertyPrice>
      </PropertyCard>
      {/* Adicione mais cartões de propriedade aqui */}
    </PropertyList>
    <FlatList
        data={properties}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal
      />
  </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
