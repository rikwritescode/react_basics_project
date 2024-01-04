import { Box, Text } from "@chakra-ui/react";

export const SelectedItem = ({ label, ...props }) => {
  return (
    <Box p={2} borderWidth="1px" borderRadius="md" {...props}>
      <Text>{label}</Text>
    </Box>
  );
};
