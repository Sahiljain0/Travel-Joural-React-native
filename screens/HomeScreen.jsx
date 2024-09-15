import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity,FlatList,ScrollView, TextInput } from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import ProfileScreen from './ProfileScreen';
import ChhoseVacationScreen from './ChooseVacationScreen';
import SeePostScreen from './SeePostScreen';
import TourismDetailScreen from './TourismDetailScreen';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();



const frequentlyVisitedData = [
  {
    id: '1',
    image: require('../assets/beach.jpeg'),
    name: 'Beach Resort',
    location: 'Paradise Island',
    price: '$150',
    rating: 4.5,
  },
  {
    id: '2',
    image: require('../assets/beach.jpeg'),
    name: 'Mountain Retreat',
    location: 'Snowy Peaks',
    price: '$120',
    rating: 4.2,
  },
  
  // Add more places as needed
];
const tourGuideData = [
  {
    id: '1',
    image: require('../assets/tover.jpg'),
    name: 'Jane Doe',
    fees: '$50/hour',
    location: 'City, Country',
  },
  {
    id: '2',
    image: require('../assets/tover.jpg'),
    name: 'John Smith',
    fees: '$60/hour',
    location: 'Mountain Region',
  },
  
  // Add more guides as needed
];

const onBudgetTourData = [
  {
    id: '1',
    image: require('../assets/paris.jpeg'),
    name: 'City Explorer',
    duration: '3 days',
    price: '$200/person',
  },
  {
    id: '2',
    image: require('../assets/paris.jpeg'),
    name: 'Nature Adventure',
    duration: '5 days',
    price: '$300/person',
  },
  
  // Add more tours as needed
];


const Home = ({navigation})=>{
  return (
    <ScrollView>
    <View style={styles.container}>
    {/* Header */}
    <View style={styles.header}>
      <Image source={require('../assets/paris.jpeg')} style={styles.userImage} />
      <View style={styles.userInfo}>
        <Text style={styles.userName}>John Doe</Text>
        <Text style={styles.location}>City, Country</Text>
      </View>
      <View style={styles.iconsContainer}>
        <TouchableOpacity style={styles.icon}>
          <Ionicons name="ios-notifications" size={24} color="#333" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.icon}>
          <Ionicons name="ios-mail" size={24} color="#333" />
        </TouchableOpacity>
      </View>
    </View>

    {/* Search Bar */}
    <View style={styles.searchBar}>
      {/* <Ionicons name="ios-search" size={24} color="#888" /> */}
      <TextInput
        style={styles.searchInput}
        placeholder="Search"
        placeholderTextColor="#888"
      />
    </View>

    {/* Categories */}
    <View style={styles.categories}>
      <TouchableOpacity style={styles.category}>
        <Ionicons name="ios-airplane" size={32} color="#3498db" />
        <Text style={styles.categoryLabel}>Airport</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.category}>
        <Ionicons name="ios-car" size={32} color="#3498db" />
        <Text style={styles.categoryLabel}>Taxi</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.category}>
        <Ionicons name="ios-bed" size={32} color="#3498db" />
        <Text style={styles.categoryLabel}>Hotel</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.category}>
        <FontAwesome name="ellipsis-h" size={32} color="#3498db" />
        <Text style={styles.categoryLabel}>More</Text>
      </TouchableOpacity>
    </View>

     {/* Frequently Visited Section */}
     <View style={styles.frequentlyVisited}>
      <Text style={styles.sectionHeading}>Frequently Visited</Text>
      <FlatList
        data={frequentlyVisitedData}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <FrequentlyVisitedCard {...item} />}
      />
    </View>

    {/* Tour Guides Section */}
    <View style={styles.tourGuides}>
      <Text style={styles.sectionHeading}>Tour Guides</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {tourGuideData.map((guide) => (
          <TourGuideCard key={guide.id} {...guide} />
        ))}
      </ScrollView>
    </View>


{/* On Budget Tours Section */}
<View style={styles.onBudgetTours}>
        <Text style={styles.sectionHeading}>On Budget Tours</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {onBudgetTourData.map((tour) => (
            <OnBudgetTourCard key={tour.id} {...tour} />
          ))}
        </ScrollView>
      </View>

  </View>
  </ScrollView>
  )
}


const HomeRoute = ({navigation})=>{
  return(
    <Stack.Navigator screenOptions={{
      headerShown: false
    }} >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="tourismdetail" component={SeePostScreen} />
      {/* <Stack.Screen name="Welcome1" component={WelcomeScreen} /> */}
     
    </Stack.Navigator>

  )
}


const HomeScreen = ({navigation}) => {
  return (
    <Tab.Navigator screenOptions={{
    headerShown: false
  }} >
        <Tab.Screen name="Homeroute" component={HomeRoute} />
        <Tab.Screen name="Post" component={SeePostScreen} />
        <Tab.Screen name="Wishlist" component={ChhoseVacationScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
        {/* <Tab.Screen name="Settings" component={SettingsScreen} /> */}
      </Tab.Navigator>
    
  );
};




const FrequentlyVisitedCard = ({ image, name, location, price, rating }) => {
  return (
    <View>
    <TouchableOpacity style={styles.frequentlyVisitedCard} onPress={()=>navigation.navigate('tourismdetail')}>
      <Image source={image} style={styles.frequentlyVisitedImage} />
      <Text style={styles.placeName}>{name}</Text>
      <Text style={styles.placeLocation}>{location}</Text>
      <View style={styles.priceRatingContainer}>
        <Text style={styles.placePrice}>{price}</Text>
        <Ionicons name="ios-star" size={16} color="#f39c12" />
        <Text style={styles.placeRating}>{rating}</Text>
      </View>
    </TouchableOpacity>
    </View>
  );
};

const TourGuideCard = ({ image, name, fees, location }) => {
  return (
    <View style={styles.tourGuideCard}>
      <Image source={image} style={styles.tourGuideImage} />
      <Text style={styles.guideName}>{name}</Text>
      <Text style={styles.guideFees}>{fees}</Text>
      <Text style={styles.guideLocation}>{location}</Text>
    </View>
  );
};

const OnBudgetTourCard = ({ image, name, duration, price }) => {
  return (
    <View style={styles.onBudgetTourCard}>
      <Image source={image} style={styles.onBudgetTourImage} />
      <Text style={styles.tourName}>{name}</Text>
      <Text style={styles.tourDuration}>{duration}</Text>
      <Text style={styles.tourPrice}>{price}</Text>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  userInfo: {
    marginLeft: 15,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  location: {
    color: '#555',
  },
  iconsContainer: {
    marginLeft: 'auto',
    flexDirection: 'row',
  },
  icon: {
    marginLeft: 20,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    // padding: 10,
  },
  searchInput: {
    flex: 1,
    padding:10,
    fontSize: 16,
  },
  categories: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  category: {
    alignItems: 'center',
  },
  categoryLabel: {
    marginTop: 5,
    fontSize: 14,
    color: '#333',
  },
  frequentlyVisited: {
    marginTop: 20,
  },
  sectionHeading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  frequentlyVisitedCard: {
    marginRight: 15,
    width: 150,
  },
  frequentlyVisitedImage: {
    width: '100%',
    height: 100,
    borderRadius: 10,
  },
  placeName: {
    marginTop: 5,
    fontSize: 16,
    fontWeight: 'bold',
  },
  placeLocation: {
    fontSize: 14,
    color: '#555',
  },
  priceRatingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  placePrice: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 5,
  },
  placeRating: {
    fontSize: 14,
    color: '#f39c12',
  },
  tourGuides: {
    marginTop: 20,
  },
  tourGuideCard: {
    marginRight: 15,
    width: 150,
  },
  tourGuideImage: {
    width: '100%',
    height: 100,
    borderRadius: 10,
  },
  guideName: {
    marginTop: 5,
    fontSize: 16,
    fontWeight: 'bold',
  },
  guideFees: {
    fontSize: 14,
    color: '#555',
  },
  guideLocation: {
    fontSize: 14,
    color: '#555',
  },
  onBudgetTours: {
    marginTop: 20,
  },
  onBudgetTourCard: {
    marginRight: 15,
    width: 150,
  },
  onBudgetTourImage: {
    width: '100%',
    height: 100,
    borderRadius: 10,
  },
  tourName: {
    marginTop: 5,
    fontSize: 16,
    fontWeight: 'bold',
  },
  tourDuration: {
    fontSize: 14,
    color: '#555',
  },
  tourPrice: {
    fontSize: 14,
    color: '#555',
  },
});

export default HomeScreen;
