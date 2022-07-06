import { Avatar, Box, Flex, Text } from '@chakra-ui/react';

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Thiago Sousa</Text>
        <Text color="gray.300" fontSize="small">
          thiagoex@gmail.com
        </Text>
      </Box>

      <Avatar
        size="md"
        name="Thiago Sousa"
        src="https://avatars0.githubusercontent.com/u/37148553?v=4"
      />
    </Flex>
  );
}
