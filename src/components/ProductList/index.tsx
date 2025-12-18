import { Col, Empty, Row } from "antd";
import ProductCard from "../ProductCard";
import { use, type FC } from "react";
import type { Product } from "../../types";
import { Card } from "antd";

const ProductList: FC<{ productsPromise: Promise<Product[]> }> = ({
  productsPromise,
}) => {
  const products = use(productsPromise);

  if (!products.length) {
    return (
      <Card>
        <Empty description="Không tìm thấy sản phẩm" />
      </Card>
    );
  }

  return (
    <Row gutter={[16, 16]}>
      {products.map((product, id) => (
        <Col key={product.id} xs={24} md={12} lg={12}>
          <ProductCard key={id} product={product} />
        </Col>
      ))}
    </Row>
  );
};

export default ProductList;
