import BasketProduct from "./components/BasketProduct";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
    <Navbar />
      <h1 class="text-center text-3xl font-bold mt-2 py-4 text-yellow-500">
        Redux Store
      </h1>
      <BasketProduct />

    </>
  );
}

export default App;
