import {
  Text,
  Box,
  Button,
  ButtonText,
  Center,
  Heading,
} from "@gluestack-ui/themed";
import { useState } from "react";
import { Image } from "react-native";

type Step = 0 | 1 | 2;

export default function OnboardingPage({ navigation }) {
  const [step, setStep] = useState<Step>(0);

  const getStepText = (step: Step) => {
    switch (step) {
      case 0:
        return {
          headline: "Welcome to Signals Forge app",
          text: "Discover the world of cryptocurrencies and manage your trades and latest news conveniently in one place",
          buttonText: "Next",
          imageSrc: require("../../assets/onboarding.png"),
        };
      case 1:
        return {
          headline: "Top-notch Security and Safety!",
          text: "With advanced encryption technology, your information and assets are protected with utmost security. ",
          buttonText: "Next",
          imageSrc: require("../../assets/onboarding2.png"),
        };
      case 2:
        return {
          headline: "A Fantastic Experience with Signals Forge!",
          text: "Explore the diverse features of Signals Forge. Follow signal providers, connect your wallets, track your portfolio, and much more.",
          buttonText: "Get Started",
          imageSrc: require("../../assets/onboarding2.png"),
        };
      default:
        return null;
    }
  };
  return (
    <Box
      height="100%"
      justifyContent="flex-end"
      padding={25}
      backgroundColor="black"
    >
      <Center>
        <Image
          source={getStepText(step).imageSrc}
          style={{ width: 358, height: 400 }}
        />
      </Center>
      <Center>
        <Heading textAlign="center" size="2xl" marginBottom={15} color="white">
          {getStepText(step).headline}
        </Heading>
        <Text marginBottom={15}>{getStepText(step).text}</Text>
        <Button
          size="lg"
          variant="solid"
          action="primary"
          isDisabled={false}
          isFocusVisible={false}
          onPress={() =>
            step == 2 ? navigation.navigate("Login") : setStep(step + 1)
          }
          backgroundColor="#6E4AFC"
          width="100%"
        >
          <ButtonText>{getStepText(step).buttonText}</ButtonText>
        </Button>
        <Text textAlign="center" marginTop={10}>
          By creating an account, you’re agree to out{" "}
          <Text color="white">Privacy policy</Text> and{" "}
          <Text color="white">Term of use</Text>
        </Text>
      </Center>
    </Box>
  );
}
