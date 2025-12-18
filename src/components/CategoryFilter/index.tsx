import { type FC } from "react";
import { Select } from "antd";
import categoriesData from "../../mocks/category.json";
import "./style.less";

interface CategoryFilterProps {
  onFilterCategory: (category: string) => void;
}

const CategoryFilter: FC<CategoryFilterProps> = ({ onFilterCategory }) => {
  return (
    <div className="category-filter-wrapper">
      <p>Category</p>

      <Select
        style={{ width: 200 }}
        onChange={onFilterCategory}
        optionFilterProp="label"
        defaultValue=""
      >
        <Select.Option value="" label="All">
          All
        </Select.Option>

        {categoriesData.map((category) => (
          <Select.Option key={category} value={category} label={category}>
            {category}
          </Select.Option>
        ))}
      </Select>
    </div>
  );
};

export default CategoryFilter;
