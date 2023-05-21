import { ButtonGroup, Button } from "react-bootstrap";

const Filter = ({ categories, onCategorySelect, selectedCategory }) => {
  return (
    <ButtonGroup aria-label="Projects Filter">
      {categories.map((category, id) => (
        <Button
          key={id}
          className={category === selectedCategory ? "active" : null}
          variant="success"
          onClick={() => onCategorySelect(category)}
        >
          {category.toUpperCase()}
        </Button>
      ))}
    </ButtonGroup>
  );
};

export default Filter;
