import dummy from '../dummy.json';
import styled from 'styled-components';
import SubRestaurant from './SubRestaurant';

const CategoryMap = () => {
  const categoryFoods = dummy.foods.filter(food => food.id !== 5);
  const Grid = styled.div`
    display: grid;
    /* width: 1200px; */
    grid-template-columns: repeat(4, 1fr);
    column-gap: 50px;
  `;

  return (
    <Grid>
      {categoryFoods.map(food => (
        <div key={food.id}>
          <SubRestaurant
            name={food.name}
            img={food.img}
            location={food.location}
            rating={food.rating}
          />
        </div>
      ))}
    </Grid>
  );
};

export default CategoryMap;
