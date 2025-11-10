import { Colors } from '@/constants/Colors';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

export default function RootLayout() {
  const [loaded] = useFonts({
    'Montserrat-Black': require('@/assets/fonts/Montserrat-Black.ttf'),
    'Montserrat-Bold': require('@/assets/fonts/Montserrat-Bold.ttf'),
    'Montserrat-Light': require('@/assets/fonts/Montserrat-Light.ttf'),
    'Montserrat-Medium': require('@/assets/fonts/Montserrat-Medium.ttf'),
    'Montserrat-Regular': require('@/assets/fonts/Montserrat-Regular.ttf'),
    'Montserrat-SemiBold': require('@/assets/fonts/Montserrat-SemiBold.ttf'),
  });

  return (
    <>
      <Stack screenOptions={{
        headerStyle: {
          backgroundColor: Colors.primary
        },
        headerTintColor: Colors.background,
        contentStyle: {
          backgroundColor: Colors.background
        }
      }}>
        <Stack.Screen 
          name="index"
          options={{ 
            headerShown: true,
            title: 'Александра Терентьева'
          }}
        />
        <Stack.Screen 
          name="workout-overview-screen"
          options={{ 
            headerShown: true,
            animation: 'slide_from_bottom'
          }}
        />
        <Stack.Screen 
          name="part-shower-modal"
          options={{ 
            headerShown: true, 
            presentation: 'containedTransparentModal',
            animation: 'none',
            contentStyle: { backgroundColor: 'transparent' },
          }}
        />
      </Stack>
      <StatusBar style="light" />
    </>
  );
}
