import { Suspense, useEffect, useMemo, useState, type FC } from "react";
import ProductList from "../../components/ProductList";
import SearchBar from "../../components/SearchBar";
import CategoryFilter from "../../components/CategoryFilter";
import { debounce } from "../../helpers";
import ProductSkeleton from "../../components/ProductSkeleton";
import { ProductService } from "../../services/productService";
import type { Product } from "../../types";
import ProductCart from "../../components/ProductCart";
import { Col, Row } from "antd";
import "./style.less";

const SEARCH_DEBOUNCE_TIME_OUT = 500;

const Home: FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [productsPromise, setProductsPromise] = useState<Promise<Product[]>>(
    ProductService.getProducts()
  );

  const debouncedSearch = useMemo(
    () =>
      debounce((value: string) => {
        setSearchTerm(value);
      }, SEARCH_DEBOUNCE_TIME_OUT),
    []
  );

  const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    debouncedSearch(e.target.value);
  };

  const onFilterCategory = (category: string) => {
    setCategoryFilter(category);
  };

  useEffect(() => {
    const promise =
      !searchTerm && !categoryFilter
        ? ProductService.getProducts()
        : ProductService.searchProducts({
            searchTerm,
            categoryFilter,
          });

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setProductsPromise(promise);
  }, [searchTerm, categoryFilter]);

  return (
    <div className="home-wrapper">
      <h1>APP</h1>
      <CategoryFilter
        onFilterCategory={onFilterCategory}
      />
      <SearchBar onChange={onSearchChange} />
      <Row gutter={16} className="product-list">
        <Col xs={24} xl={16}>
          <Suspense fallback={<ProductSkeleton />}>
            <ProductList productsPromise={productsPromise} />
          </Suspense>
        </Col>
        <Col xs={24} xl={8}>
          <ProductCart />
        </Col>
      </Row>
    </div>
  );
};

export default Home;
