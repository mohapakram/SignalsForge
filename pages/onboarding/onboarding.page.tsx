import {
  Text,
  Box,
  Button,
  ButtonText,
  Center,
  Heading,
} from "@gluestack-ui/themed";
import { Image } from "react-native";

export default function OnboardingPage() {
  return (
    <Box
      height="100%"
      justifyContent="flex-end"
      padding={25}
      backgroundColor="black"
    >
      <Center>
        <Image
          source={require("../../assets/onboarding.png")}
          style={{ width: 358, height: 400 }}
        />
      </Center>
      <Center>
        <Heading textAlign="center" size="2xl" marginBottom={15} color="white">
          Welcome to Signals Forge app
        </Heading>
        <Text marginBottom={15}>
          Discover the world of cryptocurrencies and manage your trades and
          latest news conveniently in one place
        </Text>
        <Button
          size="lg"
          variant="solid"
          action="primary"
          isDisabled={false}
          isFocusVisible={false}
          backgroundColor="#6E4AFC"
          width="100%"
        >
          <ButtonText>Next</ButtonText>
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
