import React, {  useState } from 'react';
import useProducts from '../../hooks/use-products';

export default function Products() {
  
  const [count, setCount] = useState(0);
  
  const [checked,setChecked] = useState(false);
  const [loading,error,products] = useProducts({useOnly:checked});

  const handleChange = ()=> setChecked((prev)=>!prev);

  if(loading) return <div>로딩중~~</div>;
  if(error) return <div>{error}</div>
  return (
    <>
      <input if="checkbox" type='checkbox' value={checked} onChange={handleChange}/>
      <label htmlFor='checkbox'>show only HOT sale</label>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <article>
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </article>
          </li>
        ))}
      </ul>
      <button onClick={() => setCount((prev) => prev + 1)}>{count}</button>
    </>
  );
}
