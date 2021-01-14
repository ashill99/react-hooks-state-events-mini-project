import React, {useState} from "react";
function CategoryFilter({onSelectCategory, selectedCategory, categories}) {

  // const [isSelected, setIsSelected] = useState(false)
 
  // function handleClassClick() {
  //   setIsSelected(!isSelected);
  //   return isSelected
  // }
const categoryButtons = categories.map((category) => {
  const className = category === selectedCategory ? "selected" : null;
  return (
    <button 
    key={category}
    className={className}
    onClick={() => onSelectCategory(category)}
    >{category}</button>
  )
})

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {categoryButtons}
    </div>
  );
}

export default CategoryFilter;
