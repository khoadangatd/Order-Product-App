import { Row, Col, Card, Skeleton } from "antd";
import type { FC } from "react";

const ProductSkeleton: FC = () => {
  const skeletonCards = Array.from({ length: 4 });

  return (
    <Row gutter={[16, 16]}>
      {skeletonCards.map((_, index) => (
        <Col key={index} xs={24} md={12} lg={12}>
          <Card>
            <Skeleton active paragraph={{ rows: 2 }} title={{ width: "60%" }} />
            <Skeleton.Button active block style={{ marginTop: 10 }} />
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default ProductSkeleton;
