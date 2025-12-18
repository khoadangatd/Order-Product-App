import { RouterProvider } from "react-router-dom";
import "./App.less";
import MainLayout from "./layouts/MainLayout";
import { router } from "./router";
import { CartProvider } from "./stores/cart/provider";

function App() {
  return (
    <MainLayout>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </MainLayout>
  );
}

export default App;
