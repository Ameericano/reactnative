import { Icon } from '@rneui/themed';
import { Image, Text, View } from 'react-native';
import { FontAwesome } from '@react-native-vector-icons/fontawesome';
import Ionicons from '@react-native-vector-icons/ionicons';

export const Feed = props => {
  const { profile, username, post } = props;
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          margin: 8,
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <Image
            style={{
              width: 40,
              height: 40,
              borderRadius: 100,
            }}
            source={profile}
          />
          <Text
            style={{
              marginLeft: 8,
              fontWeight: 'bold',
            }}
          >
            {username}
          </Text>
        </View>
        <Icon name="ellipsis-v" type="font-awesome" size={26} />
      </View>

      <Image source={post} style={{ width: '100%', height: 300 }} />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <View style={{ flexDirection: 'row' }}>
          <View style={{ margin: 8 }}>
            <FontAwesome name="heart-o" size={26} />
          </View>
          <View style={{ margin: 8 }}>
            <FontAwesome name="comment-o" size={26} />
          </View>
          <View style={{ margin: 8 }}>
            <Ionicons name="paper-plane-outline" size={26} />
          </View>
        </View>
        <View style={{ margin: 8 }}>
          <FontAwesome name="bookmark-o" size={26} />
        </View>
      </View>
    </View>
  );
};
