import Products from './Products';
import Title from './Title';
import Filters from './Filters';

import { useState } from 'react';

import data from './data';
const allCategories = data.map((item) => {
  return item.category;
});
const myCategories = ['all', ...new Set(allCategories)];

const App = () => {
  const [menuItems, setMenuItems] = useState(data);
  const [categories, setCategories] = useState(myCategories);

  const filterMenu = (categoryId) => {
    if (categoryId === 'all') {
      setMenuItems(data);
      return;
    }
    const newData = data.filter((item) => {
      return item.category === categoryId;
    });
    setMenuItems(newData);
  };

  return (
    <main className="app">
      <Title text="Our Menu" />
      <Filters categories={categories} filterMenu={filterMenu} />
      <Products menuItems={menuItems} />
    </main>
  );
};
export default App;
