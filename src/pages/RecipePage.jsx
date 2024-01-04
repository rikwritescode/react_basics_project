import {
  Box,
  Image,
  Badge,
  Text,
  UnorderedList,
  ListItem,
  Grid,
  GridItem,
  Button,
  Tag,
  TagLabel,
} from "@chakra-ui/react";

export const RecipePage = ({ recipe, goBack }) => {
  if (!recipe || !recipe.recipe) {
    return <p>No recipe selected.</p>;
  }

  const {
    label,
    image,
    mealType,
    dishType,
    totalTime,
    dietLabels,
    healthLabels,
    cautions,
    ingredients,
    yield: servings,
  } = recipe.recipe;

  return (
    <Box p={4}>
      {/* Close button positioned at the top-right corner */}
      <Button
        position="fixed"
        top="2"
        right="2"
        onClick={goBack}
        size="sm"
        colorScheme="teal"
      >
        Close
      </Button>

      <Grid
        templateColumns={{
          base: "1fr", // Stack on smaller screens (max-width: 320px)
          md: "repeat(5, 1fr)", // Use grid on wider screens
        }}
        gap={3}
        alignItems="start"
      >
        {/* Image */}
        <GridItem colSpan={{ base: 1, md: 3 }} rowSpan={{ base: 1, md: 7 }}>
          <Image src={image} alt={label} h="350px" borderRadius="lg" />
        </GridItem>

        {/* Recipe Info */}
        <GridItem colSpan={{ base: 1, md: 2 }} rowSpan={1}>
          <Text fontSize="2xl" fontWeight="bold" mb={2}>
            {label}
          </Text>
        </GridItem>
        <GridItem colSpan={{ base: 1, md: 2 }} rowSpan={1}>
          <Badge colorScheme="teal" mt={2}>
            {mealType}
          </Badge>
        </GridItem>
        <GridItem colSpan={{ base: 1, md: 2 }} rowSpan={1}>
          <Text>
            <strong>Dish Type:</strong> {dishType || "N/A"}
          </Text>
        </GridItem>
        <GridItem colSpan={{ base: 1, md: 2 }} rowSpan={1}>
          <Text>
            <strong>Total Cooking Time:</strong> {totalTime || "N/A"}
          </Text>
        </GridItem>
        <GridItem colSpan={{ base: 1, md: 2 }} rowSpan={1}>
          <Text>
            <strong>Diet Label:</strong>{" "}
            {dietLabels.map((label, index) => (
              <Tag
                key={index}
                size="md"
                variant="subtle"
                colorScheme="green"
                mr={2}
              >
                {label}
              </Tag>
            ))}
          </Text>
        </GridItem>
        <GridItem colSpan={{ base: 1, md: 2 }} rowSpan={1}>
          <Text>
            <strong>Servings:</strong> {servings || "N/A"}
          </Text>
        </GridItem>
        <GridItem colSpan={{ base: 1, md: 2 }} rowSpan={1}>
          <Text>
            <strong>Cautions:</strong>{" "}
            {cautions.map((caution, index) => (
              <Tag
                key={index}
                size="md"
                variant="subtle"
                colorScheme="red"
                mr={2}
              >
                {caution}
              </Tag>
            ))}
          </Text>
        </GridItem>

        {/* Ingredients */}
        <GridItem colSpan={{ base: 1, md: 3 }} rowSpan={1}>
          <Text>
            <strong>Ingredients:</strong>
          </Text>
          <UnorderedList>
            {ingredients.map((ingredient, index) => (
              <ListItem key={index}>{ingredient.text}</ListItem>
            ))}
          </UnorderedList>
        </GridItem>

        {/* Health Labels */}
        <GridItem colSpan={{ base: 1, md: 2 }} rowSpan={3}>
          <Text>
            <strong>Health Labels:</strong>
          </Text>
          <UnorderedList>
            {healthLabels.map((label, index) => (
              <Tag
                key={index}
                size="md"
                variant="subtle"
                colorScheme="purple"
                mt={2}
                mr={2}
              >
                <TagLabel>{label}</TagLabel>
              </Tag>
            ))}
          </UnorderedList>
        </GridItem>
      </Grid>
    </Box>
  );
};
