import Menu from './Menu';
import Title from './Title'
import data from './data'
import Categories from './Categories';
import { useState } from 'react';

const allCategories = ['all',...new Set(data.map((item)=> item.category))];

const App = () => {
  const [menuItems, setMenuItems] = useState(data)
  const [categories, setCategories] = useState(allCategories)
  // const tempCategories = data.map((item)=> item.category);
  // const tempSet = new Set(tempCategories);
  // const tempItems = ['all', ...tempSet];

  const filterItems = (category) =>{
    if(category === 'all'){
      setMenuItems(data);
      return;
    }
    const newItems = data.filter((item)=> item.category === category);
    setMenuItems(newItems);
  }
  return(
    <main>
      <section className="menu">
        <Title text={'Our Menu'}></Title>
        <Categories categories={categories} filterItems={filterItems}></Categories>
        <Menu items={menuItems} ></Menu>
      </section>
    </main>
  );
};
export default App;
