import React from 'react';
import {View, Text, Alert, Dimensions, ActivityIndicator} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import useAuth from '../hooks/useAuth';
import BeeView from '../components/BeeView';
import SignUpContainer from '../components/SignUpPages/SignUpContainer';
import LottieView from 'lottie-react-native';
import {LoadingProvider} from '../components/Loading/LoadingProvider';

export function SignUpPage(props) {
  const [loading, setLoading] = React.useState(false);

  const navigation = useNavigation();
  const {error, sign} = useAuth();

  async function handleSubmit(values) {
    await sign(values);
    navigation.navigate('Login');
  }
  if (error) {
    Alert.alert('ChatBee', error.message);
  }

  React.useEffect(() => {
    setTimeout(() => {}, 5000);
  }, []);

  // if (!loading) {
  //   // <LoadingProvider />;
  //   <ActivityIndicator size="large" color="#333" />;
  // }

  return (
    <BeeView>
      <LottieView
        source={require('../assets/gif/bee1.json')}
        autoPlay
        loop
        style={{
          height: Dimensions.get('window').height / 4,
        }}
      />

      <SignUpContainer
        loading={loading}
        onSubmit={handleSubmit}
        onLogin={() => navigation.navigate('Login')}
      />
    </BeeView>
  );
}
