import { View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { HomeHeaderStyles } from '../Styles/HomeCSS/HomeHeaderStyles';

export const HamburgerMenu = ({ navigation }) => {
    return (
      <View style={HomeHeaderStyles.group}>
        <TouchableOpacity onPress={() => navigation.navigate('Option1')}>
          <Icon name={'ios-menu-circle'} size={24} color='white' />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Option2')}>
          <Icon name={'ios-list'} size={24} color='white' />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Option3')}>
          <Icon name={'ios-search'} size={24} color='white' />
        </TouchableOpacity>
      </View>
    );
  };