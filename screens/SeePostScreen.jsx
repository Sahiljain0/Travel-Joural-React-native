// import React from 'react';
// import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
// import { Ionicons, FontAwesome } from '@expo/vector-icons';

// const SeePostScreen = () => {
//   // Dummy data for posts
//   const postsData = [
//     {
//       id: '1',
//       customerName: 'John Doe',
//       postTime: '2 hours ago',
//       location: 'Mountain Region',
//       postContent: 'Exploring the breathtaking views of the mountains. #NatureLove',
//       postImage: require('../assets/beach.jpeg'),
//       likes: 15,
//       comments: 7,
//     },
//     {
//       id: '2',
//       customerName: 'Jane Smith',
//       postTime: '1 day ago',
//       location: 'Beach Paradise',
//       postContent: 'Relaxing by the beach with a stunning sunset. #BeachLife',
//       postImage: require('../assets/beach.jpeg'),
//       likes: 23,
//       comments: 12,
//     },
//     // Add more posts as needed
//   ];

//   return (
//     <View style={styles.container}>
//       {/* Header */}
//       <Text style={styles.screenHeading}>See Posts</Text>

//       {/* Posts Section */}
//       <FlatList
//         data={postsData}
//         keyExtractor={(item) => item.id}
//         renderItem={({ item }) => <PostCard {...item} />}
//       />
//     </View>
//   );
// };

// const PostCard = ({ customerName, postTime, location, postContent, postImage, likes, comments }) => {
//   return (
//     <View style={styles.postCard}>
//       {/* Customer Info */}
//       <View style={styles.customerInfo}>
//         <Text style={styles.customerName}>{customerName}</Text>
//         <Text style={styles.postTime}>{postTime}</Text>
//       </View>

//       {/* Location and Content */}
//       <View>
//         <Text style={styles.location}>{location}</Text>
//         <Text style={styles.postContent}>{postContent}</Text>
//       </View>

//       {/* Post Image */}
//       <Image source={postImage} style={styles.postImage} />

//       {/* Like and Comment Options */}
//       <View style={styles.likeCommentOptions}>
//         <TouchableOpacity style={styles.iconContainer}>
//           <Ionicons name="ios-heart-outline" size={24} color="#333" />
//           <Text style={styles.optionText}>{likes}</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.iconContainer}>
//           <Ionicons name="ios-chatbubble-outline" size={24} color="#333" />
//           <Text style={styles.optionText}>{comments}</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     // padding: 20,
//   },
//   screenHeading: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   postCard: {
//     marginBottom: 20,
//     borderWidth: 1,
//     borderColor: '#ddd',
//     borderRadius: 10,
//     padding: 15,
//     marginHorizontal:20,
//   },
//   customerInfo: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 10,
//   },
//   customerName: {
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   postTime: {
//     color: '#888',
//   },
//   location: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginBottom: 5,
//   },
//   postContent: {
//     fontSize: 14,
//     color: '#555',
//     marginBottom: 10,
//   },
//   postImage: {
//     width: '100%',
//     height: 200,
//     borderRadius: 10,
//     marginBottom: 10,
//   },
//   likeCommentOptions: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   iconContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   optionText: {
//     marginLeft: 5,
//     color: '#555',
//   },
// });

// export default SeePostScreen;

import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity, Modal, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const SeePostScreen = () => {
  const [postsData, setPostsData] = useState([
    {
      id: '1',
      customerName: 'John Doe',
      postTime: '2 hours ago',
      location: 'Mountain Region',
      postContent: 'Exploring the breathtaking views of the mountains. #NatureLove',
      postImage: require('../assets/tover.jpg'),
      likes: 15,
      comments: 7,
      liked: false,
    },
    {
      id: '2',
      customerName: 'Jane Smith',
      postTime: '1 day ago',
      location: 'Beach Paradise',
      postContent: 'Relaxing by the beach with a stunning sunset. #BeachLife',
      postImage: require('../assets/tover.jpg'),
      likes: 23,
      comments: 12,
      liked: false,
    },
    // Add more posts as needed
  ]);

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);
  const [commentText, setCommentText] = useState('');

  const handleLike = (postId) => {
    setPostsData((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId ? { ...post, liked: !post.liked, likes: post.liked ? post.likes - 1 : post.likes + 1 } : post
      )
    );
  };

  const handleComment = (postId) => {
    setSelectedPost(postId);
    setModalVisible(true);
  };

  const handleAddComment = () => {
    setPostsData((prevPosts) =>
      prevPosts.map((post) =>
        post.id === selectedPost
          ? { ...post, comments: post.comments + 1, commentsData: [...post.commentsData, { text: commentText }] }
          : post
      )
    );
    setCommentText('');
    setModalVisible(false);
    setSelectedPost(null);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <Text style={styles.screenHeading}>See Posts</Text>

      {/* Posts Section */}
      <FlatList
        data={postsData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <PostCard {...item} onLike={() => handleLike(item.id)} onComment={() => handleComment(item.id)} />}
      />

      {/* Comment Modal */}
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.modalContainer}>
          <TextInput
            style={styles.commentInput}
            placeholder="Add a comment..."
            value={commentText}
            onChangeText={(text) => setCommentText(text)}
          />
          <TouchableOpacity style={styles.addButton} onPress={handleAddComment}>
            <Text style={styles.addButtonText}>Add</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const PostCard = ({ customerName, postTime, location, postContent, postImage, likes, comments, liked, onLike, onComment }) => {
  return (
    <View style={styles.postCard}>
      {/* Customer Info */}
      <View style={styles.customerInfo}>
        <Text style={styles.customerName}>{customerName}</Text>
        <Text style={styles.postTime}>{postTime}</Text>
      </View>

      {/* Location and Content */}
      <View>
        <Text style={styles.location}>{location}</Text>
        <Text style={styles.postContent}>{postContent}</Text>
      </View>

      {/* Post Image */}
      <Image source={postImage} style={styles.postImage} />

      {/* Like and Comment Options */}
      <View style={styles.likeCommentOptions}>
        <TouchableOpacity style={styles.iconContainer} onPress={onLike}>
          <Ionicons name={liked ? 'ios-heart' : 'ios-heart-outline'} size={24} color={liked ? 'red' : '#333'} />
          <Text style={styles.optionText}>{likes}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconContainer} onPress={onComment}>
          <Ionicons name="ios-chatbubble-outline" size={24} color="#333" />
          <Text style={styles.optionText}>{comments}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  // ... (unchanged styles)



  container: {
        flex: 1,
        backgroundColor: '#fff',
        // padding: 20,
      },
      screenHeading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
      },
      postCard: {
        marginBottom: 20,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 10,
        padding: 15,
        marginHorizontal:20,
      },
      customerInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
      },
      customerName: {
        fontSize: 16,
        fontWeight: 'bold',
      },
      postTime: {
        color: '#888',
      },
      location: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
      },
      postContent: {
        fontSize: 14,
        color: '#555',
        marginBottom: 10,
      },
      postImage: {
        width: '100%',
        height: 200,
        borderRadius: 10,
        marginBottom: 10,
      },
      likeCommentOptions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
      iconContainer: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      optionText: {
        marginLeft: 5,
        color: '#555',
      },


  likeCommentOptions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  commentInput: {
    height: 50,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  addButton: {
    height: 50,
    backgroundColor: '#3498db',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default SeePostScreen;

