import Products from './Products';
import Title from './Title';

import { useState } from 'react';

import data from './data';

const App = () => {
  const [menuItems, setMenuItems] = useState(data);
  return (
    <main className="app">
      <Title text="Our Menu" />
      <Products data={data} />
    </main>
  );
};
export default App;
