import { useState } from "react";
import {
  Box,
  Grid,
  GridItem,
  HStack,
  Text,
  Image,
  Badge,
  VStack,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
import { SearchField } from "../components/ui/SearchField";
import { data } from "../utils/data";

export const RecipeListPage = ({ setSelectedRecipe }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredRecipes =
    data && data.hits
      ? data.hits.filter((recipe) => {
          const lowerCasedSearchTerm = searchTerm.toLowerCase();
          const lowerCasedRecipeLabel = recipe.recipe.label.toLowerCase();
          const lowerCasedDietLabels = recipe.recipe.dietLabels.map((label) =>
            label.toLowerCase()
          );
          const lowerCasedIngredients = recipe.recipe.ingredients
            .map((ingredient) => ingredient.text.toLowerCase())
            .join(" ");

          return (
            lowerCasedRecipeLabel.includes(lowerCasedSearchTerm) ||
            lowerCasedDietLabels.some((label) =>
              label.includes(lowerCasedSearchTerm)
            ) ||
            lowerCasedIngredients.includes(lowerCasedSearchTerm)
          );
        })
      : [];

  const handleRecipeClick = (recipe) => {
    setSelectedRecipe(recipe);
  };

  return (
    <Box p={4}>
      <SearchField
        placeholder="Search recipes..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        mb={4}
      />

      <Grid templateColumns={{ base: "1fr", md: "repeat(5, 1fr)" }} gap={4}>
        {filteredRecipes.map((recipe) => (
          <GridItem
            key={recipe.recipe.label}
            display="flex"
            justifyContent="center"
          >
            <Box
              h={{ base: "500px", md: "420px" }}
              w={{ base: "300px", md: "350px" }}
              p={4}
              borderWidth="1px"
              borderRadius="lg"
              cursor="pointer"
              _hover={{ boxShadow: "lg" }}
              onClick={() => handleRecipeClick(recipe)}
              bg="teal.200" // Set a light background color
              color="black" // Set text color
            >
              <Image
                src={recipe.recipe.image}
                alt={recipe.recipe.label}
                boxSize={{ base: "150px", md: "175px" }}
                borderRadius="150"
                mb={2}
                style={{ margin: "0 auto", display: "block" }} // Center the image with CSS
              />
              <VStack align="center" spacing={2}>
                <Badge colorScheme="teal">{recipe.recipe.mealType}</Badge>
                <Text fontSize="md" fontWeight="bold">
                  {recipe.recipe.label}
                </Text>
                {(recipe.recipe.healthLabels.includes("Vegan") ||
                  recipe.recipe.healthLabels.includes("Vegetarian")) && (
                  <HStack spacing={2}>
                    {recipe.recipe.healthLabels.includes("Vegan") && (
                      <Text bg="green.400">Vegan</Text>
                    )}
                    {recipe.recipe.healthLabels.includes("Vegetarian") && (
                      <Text bg="blue.400">Vegetarian</Text>
                    )}
                  </HStack>
                )}
                <UnorderedList styleType="none">
                  {recipe.recipe.dietLabels.length > 0 && (
                    <ListItem>
                      Diet Label:{" "}
                      {recipe.recipe.dietLabels.map((label, index) => (
                        <Badge
                          key={index}
                          colorScheme="green"
                          borderRadius="md"
                          px={2}
                          py={1}
                          mr={2}
                        >
                          {label}
                        </Badge>
                      ))}
                    </ListItem>
                  )}
                  {recipe.recipe.mealType && (
                    <ListItem>
                      Meal Type:{" "}
                      <Badge
                        colorScheme="teal"
                        borderRadius="md"
                        px={2}
                        py={1}
                        mr={2}
                      >
                        {recipe.recipe.mealType}
                      </Badge>
                    </ListItem>
                  )}
                  {recipe.recipe.dishType && (
                    <ListItem>Dish Type: {recipe.recipe.dishType}</ListItem>
                  )}
                  {recipe.recipe.cautions.length > 0 && (
                    <ListItem>
                      Cautions:{" "}
                      {recipe.recipe.cautions.map((caution, index) => (
                        <Badge
                          key={index}
                          colorScheme="orange"
                          borderRadius="md"
                          px={2}
                          py={1}
                          mr={2}
                        >
                          {caution}
                        </Badge>
                      ))}
                    </ListItem>
                  )}
                  {/* Add more details as needed */}
                </UnorderedList>
              </VStack>
            </Box>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};
