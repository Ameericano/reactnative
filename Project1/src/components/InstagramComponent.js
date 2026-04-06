import { Icon } from '@rneui/themed';
import { Image, Text, View } from 'react-native';

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
      
      {/* part 2 */}
      {/* part 3 */}
    </View>
  );
};
