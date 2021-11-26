import Header from "./components/Header";
import Main from "./components/Main";
import CartProvider from "./store/CartProvider";

function App() {
  return (
    <CartProvider>
      <Header />
      <Main />
    </CartProvider>
  );
}

export default App;
