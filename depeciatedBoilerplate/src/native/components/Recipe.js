import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-native';
import { Container, Content, Card, CardItem, Body, H3, List, ListItem, Text } from 'native-base';
import ErrorMessages from '../../constants/errors';
import Error from './Error';
import Spacer from './Spacer';

const RecipeView = ({
  error,
  recipes,
  recipeId,
}) => {
  // Error
  if (error) return <Error content={error} />;

  // Get this Recipe from all recipes
  let recipe = null;
  console.log("idem id" +item.id);
  if (recipeId && recipes) {
    //console.log(recipes)
    for (var key =0; key< recipes.length; key++){
      console.log(key)
      console.log(recipes[key])
      curItem = recipes[key]
      if (item.id == curItem.id){
        console.log("true");
        recipe = recipes[key];
      }
    }
    //recipe = recipes.find(item.id);
  }

  // Recipe not found
  if (!recipe) return <Error content={ErrorMessages.recipe404} />;





  return (
    <Container>
      <Content padder>
        <Image source={{ uri: recipe.image }} style={{ height: 100, width: null, flex: 1 }} />

        <Spacer size={25} />
        <H3>{recipe.title}</H3>
        <Text>by {recipe.author}</Text>
        <Spacer size={15} />

        <Card>
          <CardItem header bordered>
            <Text>About this will item</Text>
          </CardItem>
          <CardItem>
            <Body>
              <Text>{recipe.body}</Text>
            </Body>
          </CardItem>
        </Card>
        <Spacer size={20} />
      </Content>
    </Container>
  );
};

RecipeView.propTypes = {
  error: PropTypes.string,
  recipeId: PropTypes.string.isRequired,
  recipes: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

RecipeView.defaultProps = {
  error: null,
};

export default RecipeView;
