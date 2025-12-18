import { Avatar, Badge, Button, Card, Typography } from "antd";
import { useContext, type FC } from "react";
import { CartContext } from "../../stores/cart/context";
import type { Product } from "../../types";
import classNames from "classnames";
import { CartActionType } from "../../stores/cart/actionType";
import "./style.less";

const { Text } = Typography;

interface IProductCardProps {
  product: Product;
}

const ProductCard: FC<IProductCardProps> = ({ product }) => {
  const cartContext = useContext(CartContext);
  const { dispatch } = cartContext || {};

  const addProductToCart = () => {
    dispatch?.({
      type: CartActionType.ADD_TO_CART,
      payload: product,
    });
  };

  return (
    <Badge.Ribbon
      color="red"
      className={classNames("product-badge-wrapper", {
        hideBadge: !product.isPrescription,
      })}
      text="RX"
    >
      <Card className="product-card-wrapper">
        <Avatar shape="square" size={180} />
        <Card.Meta title={product?.name} />
        <Text type="secondary">{product?.price.toLocaleString()} đ</Text>
        <div className="product-card-actions">
          <Button type="primary" onClick={addProductToCart}>
            <strong>Add to cart</strong>
          </Button>
        </div>
      </Card>
    </Badge.Ribbon>
  );
};

export default ProductCard;
