
import './categories.styles.scss'
import CategoryItem from './components/category-item/category-item.component';

const App = () => {

  const categories = [
    {
      "id": 1,
      "title": "DIY Módulos",
      "imageUrl": "https://i.ibb.co/cvpntL1/hats.png"
    },
    {
      "id": 2,
      "title": "Componentes",
      "imageUrl": "https://i.ibb.co/px2tCc3/jackets.png"
    },
    {
      "id": 3,
      "title": "Módulos comerciales",
      "imageUrl": "https://i.ibb.co/0jqHpnp/sneakers.png"
    },
    {
      "id": 4,
      "title": "Proyectos",
      "imageUrl": "https://i.ibb.co/GCCdy8t/womens.png"
    },
    {
      "id": 5,
      "title": "Otros",
      "imageUrl": "https://i.ibb.co/R70vBrQ/men.png"
    }
  ];
  return (
    <div className='categories-container'>
      {categories.map((category)=>(
      <CategoryItem key={category.id} category={category}/>
      ))} 
    </div>
  );
}

export default App;
