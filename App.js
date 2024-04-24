import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  GluestackUIProvider,
  Text,
  Box,
  Button,
  ButtonText,
  ButtonIcon,
} from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";
import OnboardingPage from "./pages/onboarding/onboarding.page";
import LoginPage from "./pages/onboarding/Login.page";

const Stack = createStackNavigator();

export default function App() {
  return (
    <GluestackUIProvider config={config}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="onboarding">
          <Stack.Screen
            name="Home"
            options={{ headerShown: false }}
            component={OnboardingPage}
          />
          <Stack.Screen
            name="Login"
            options={{ headerShown: false }}
            component={LoginPage}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </GluestackUIProvider>
  );
}
