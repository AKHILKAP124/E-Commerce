import { Link } from "react-router-dom"
import Product_card from "../components/Product_card.jsx"
import PanelCategory from "../components/PanelCategory.jsx"
import { useState } from "react"


const Home = (props) => {
  
  return (
    
    <div >
        <Link to="register"> Akhil</Link>
        {
       <div>
<Product_card   />
<Product_card   />

      
       </div>
} 
    <PanelCategory textcolor='text-[white]' selected="bg-[#DB4444]"/>
    </div>
  )
}

export default Home