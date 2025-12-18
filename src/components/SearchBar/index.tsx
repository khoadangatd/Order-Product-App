import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { type FC } from "react";
import type { SearchProps } from "antd/es/input";
import './style.less'

const SearchBar: FC<SearchProps> = ({ ...props }) => {
  return (
    <div className="search-bar-wrapper">
      <Input.Search
        className="search-bar--input"
        placeholder="Search..."
        allowClear
        size="large"
        prefix={<SearchOutlined style={{ color: "#bfbfbf" }} />}
        {...props}
      />
    </div>
  );
};

export default SearchBar;
