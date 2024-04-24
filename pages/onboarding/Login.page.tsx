import {
  Text,
  Box,
  Button,
  ButtonText,
  Center,
  Heading,
} from "@gluestack-ui/themed";
import { useState } from "react";

export default function LoginPage() {
  return (
    <Box
      height="100%"
      justifyContent="flex-end"
      padding={25}
      backgroundColor="black"
    >
      <Center>
        <Heading>Login page</Heading>
      </Center>
    </Box>
  );
}
