import React, { useState } from "react";
import Menucard from "./menucard";
import Menu from "./menuiteams";
import './hotelmenu.css';


const Resturant = () => {


    const [menuData, setMenuData] = useState(Menu);
    console.log(menuData)

    const filterIteam = (category) => {
        const updatedList = Menu.filter((curElmnt) => {
            return curElmnt.category === category
            
        });
      
        setMenuData(updatedList);
    }

    return (
        <>
            <nav className='navbar'>
                <div className='btn-group'>

                    <button className='btn-group__item' onClick={() => filterIteam("breakfast")}>Breakfast</button>

                    <button className='btn-group__item' onClick={() => filterIteam("lunch")}>Lunch</button>
                    <button className='btn-group__item' onClick={() => filterIteam("dinner")} >Dinner</button>
                    <button className='btn-group__item' onClick={() => filterIteam("evening")} >Evening</button>
                    <button className='btn-group__item' onClick={() => filterIteam("healthy")} >Healthy</button>
                    <button className='btn-group__item' onClick={() => setMenuData(Menu)} >All</button>

                </div>
            </nav>


            <Menucard menuDatavalue={menuData} />
        </>
    )
}
export default Resturant;


