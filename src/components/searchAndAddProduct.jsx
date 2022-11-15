import { useRef } from "react";
import { useDispatch } from "react-redux";
import { useProducts } from "../hooks/useProducts";
import { addAction, filterAction } from "../store/actions";

export function SearchAndAddProduct() {
  const inputNameRef = useRef();
  const inputPriceRef = useRef();
  const { toggle } = useProducts();
  const dispatch = useDispatch();

  const addProductHandler = () => {
    const payload= {
      name: inputNameRef.current.value,
      price: inputPriceRef.current.value
    }
    dispatch(addAction(payload))
    inputNameRef.current.value = ''
  }

  return (
    <>
      <input
        type="text"
        ref={inputNameRef}
        placeholder="Search for products"
        onChange={(event) => dispatch(filterAction(event.target.value))}
      />
      {toggle && (
        <>
          <input
            type="number"
            ref={inputPriceRef}
            placeholder="enter price"
            defaultValue={2}
          />
          <button
            onClick={addProductHandler}
          >
            Add
          </button>
        </>
      )}
    </>
  );
}
