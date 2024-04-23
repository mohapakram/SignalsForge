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

export default function App() {
  return (
    <GluestackUIProvider config={config}>
      <OnboardingPage />
    </GluestackUIProvider>
  );
}
