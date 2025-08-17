import { categories } from "../../constants";
import CategoryItem from "./CategoryItem";

const Category = () => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-8">
      {categories.map((category) => (
        <CategoryItem key={category.name} category={category}/>
      ))}
    </div>
  );
};

export default Category;
