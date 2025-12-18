import type { FC } from "react";
import { useContext } from "react";
import {
  List,
  Avatar,
  Button,
  Typography,
  Space,
  Empty,
  Card,
  InputNumber,
} from "antd";
import { DeleteOutlined, MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { CartContext } from "../../stores/cart/context";
import { CartActionType } from "../../stores/cart/actionType";
import "./style.less";

const { Text, Title } = Typography;

const QUANTITY_MAX = 99;
const QUANTITY_MIN = 1;

const ProductCart: FC = () => {
  const cartContext = useContext(CartContext);

  if (!cartContext) return null;

  const { cart, dispatch } = cartContext;

  const handleUpdateQuantity = (id: number, quantity: number) => {
    if (quantity > QUANTITY_MAX) return;

    if (quantity < QUANTITY_MIN) {
      dispatch({ type: CartActionType.DELETE_CART, payload: { id } });
    }
    dispatch({ type: CartActionType.UPDATE_CART, payload: { id, quantity } });
  };

  const handleRemove = (id: number) => {
    dispatch({ type: CartActionType.DELETE_CART, payload: { id } });
  };

  return (
    <Card
      className="product-cart-wrapper"
      title={
        <Title level={4}>
          Cart ({cart.items.length}{" "}
          {cart.items.length === 1 ? "product" : "products"})
        </Title>
      }
    >
      <List
        itemLayout="horizontal"
        dataSource={cart.items}
        locale={{ emptyText: <Empty description="Empty Cart" /> }}
        renderItem={(item) => (
          <List.Item
            className="product-cart-actions"
            actions={[
              <Button
                type="text"
                danger
                icon={<DeleteOutlined />}
                onClick={() => handleRemove(item.id)}
              />,
            ]}
          >
            <List.Item.Meta
              avatar={<Avatar shape="square" size={64} />}
              title={<Text strong>{item.name}</Text>}
              description={
                <Space direction="vertical" size={0}>
                  <Text type="secondary">{item.price.toLocaleString()} đ</Text>
                  <Space style={{ marginTop: 8 }}>
                    <Button
                      size="small"
                      icon={<MinusOutlined />}
                      onClick={() =>
                        handleUpdateQuantity(item.id, item.quantity - 1)
                      }
                      disabled={item.quantity <= 1}
                    />
                    <InputNumber
                      min={QUANTITY_MIN}
                      max={QUANTITY_MAX}
                      size="small"
                      value={item.quantity}
                      className="product-cart-quantity-input"
                      controls={false}
                      onChange={(value) => {
                        if (value) handleUpdateQuantity(item.id, value);
                      }}
                    />
                    <Button
                      size="small"
                      icon={<PlusOutlined />}
                      onClick={() =>
                        handleUpdateQuantity(item.id, item.quantity + 1)
                      }
                      disabled={item.quantity >= 99}
                    />
                  </Space>
                </Space>
              }
            />
            <div className="product-cart-price">
              <Text strong style={{ color: "#f5222d" }}>
                {(item.price * item.quantity).toLocaleString()} đ
              </Text>
            </div>
          </List.Item>
        )}
      />

      {cart.items.length > 0 && (
        <div className="product-cart-footer">
          <div className="product-cart-footer__total">
            <Title level={4}>Total payment:</Title>
            <Title level={3} className="product-cart-footer__total--text">
              {cart.items
                .reduce((acc, item) => acc + item.price * item.quantity, 0)
                .toLocaleString()}
              đ
            </Title>
          </div>
          <Button type="primary" size="large" block>
            <strong>Pay now</strong>
          </Button>
        </div>
      )}
    </Card>
  );
};

export default ProductCart;
