import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const NotificationScreen = () => {
  // Dummy data for notifications
  const notifications = [
    { id: '1', icon: 'ios-checkmark-circle', content: 'Your reservation is confirmed for today.' },
    { id: '2', icon: 'ios-alarm', content: 'Reminder: Check-out is tomorrow at 11:00 AM.' },
    { id: '3', icon: 'ios-information-circle', content: 'Explore our special offers for your next stay.' },
    // Add more dummy notifications as needed
  ];

  // Categorize notifications by date
  const todayNotifications = notifications.filter(notification => notification.id === '1');
  const tomorrowNotifications = notifications.filter(notification => notification.id === '2');
  const upcomingNotifications = notifications.filter(notification => notification.id === '3');

  return (
    <View style={styles.container}>
      {/* Today's Notifications */}
      {renderNotificationCategory('Today', todayNotifications)}

      {/* Tomorrow's Notifications */}
      {renderNotificationCategory('Tomorrow', tomorrowNotifications)}

      {/* Upcoming Notifications */}
      {renderNotificationCategory('Upcoming', upcomingNotifications)}
    </View>
  );
};

const renderNotificationCategory = (category, notifications) => {
  if (notifications.length === 0) {
    return null;
  }

  return (
    <View style={styles.categoryContainer}>
      <Text style={styles.categoryHeading}>{category}</Text>
      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <NotificationCard icon={item.icon} content={item.content} />
        )}
      />
    </View>
  );
};

const NotificationCard = ({ icon, content }) => {
  return (
    <View style={styles.notificationCard}>
      <Ionicons name={icon} size={24} color="#3498db" />
      <Text style={styles.notificationContent}>{content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  categoryContainer: {
    marginBottom: 20,
  },
  categoryHeading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  notificationCard: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  notificationContent: {
    marginLeft: 10,
    fontSize: 16,
  },
});

export default NotificationScreen;
