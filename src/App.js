import './App.css';
import Header from './components/Header';


import men from "./assets/category-card/men.jpeg"
import women from "./assets/category-card/women.jpeg"
import accessory from "./assets/category-card/accessories.jpeg"
import kids from "./assets/category-card/kids.jpeg"

import product from "./assets/product/example-product.jpeg"


import CategoryCard from './components/CategoryCard';
import ProductCard from './components/ProductCard';

function App() {
  return (
    <div className="App font-fnt-mont">
        <Header />

        <section >
            <div className='w-[80%] flex gap-x-[2rem] aspect-[2/1]'>
            <div className='grow-[2] basis-0'>
                <CategoryCard className="w-full h-full" urlImg={men} textBtn={"MEN"}/>
            </div>
            <div className='grow-[1] basis-0'>
                <CategoryCard className="w-full h-full" urlImg={women} textBtn={"WOMEN"}/>
            </div>
            <div className='grow-[1] basis-0 flex flex-col gap-y-[1rem]'>
                <CategoryCard className="grow basis-0" urlImg={accessory} textBtn={"WOMEN"}/>
                <CategoryCard className="grow basis-0" urlImg={kids} textBtn={"KIDS"}/>
            </div>
            </div>
        </section>

        <section className='flex flex-wrap gap-[2rem]'>

            {
                [1,2,3,4,5,6,7].map((item, idx) => {
                    return <ProductCard className="basis-[300px] " urlImg={product}/>
                })
            }

        </section>

    </div>
  );
}

export default App;
