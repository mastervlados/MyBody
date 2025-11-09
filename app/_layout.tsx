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
      <Stack>
        <Stack.Screen 
          name="index" 
          options={{ headerShown: false }}
        />
      </Stack>
      <StatusBar style="dark" />
    </>
  );
}
