import { useDispatch, useSelector } from "react-redux";
import BasketProduct from "./components/BasketProduct";
import Navbar from "./components/Navbar";
import store from "./redux/store";
import { useEffect } from "react";
import { updateTotal } from "./features/basketSlice";

function App() {
  const {products} = useSelector((store)=>store.basket);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(updateTotal())
  },[products,dispatch])
  return (
    <>
    <Navbar />
      <h1 class="text-center text-5xl font-bold mt-2 py-4 text-yellow-600">
        Redux Store
      </h1>
      <BasketProduct />

    </>
  );
}

export default App;
