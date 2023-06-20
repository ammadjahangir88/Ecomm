import "./Header.scss";
import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { TbSearch } from 'react-icons/tb'
import { CgShoppingCart } from 'react-icons/cg'
import { AiOutlineHeart } from 'react-icons/ai'
import Cart from "../Cart/Cart";
import Search from './Search/Search'
import { Context } from "../../utils/context";
const Header = () => {
    const [scrolled, setScroll] = useState(false)
    const [showcart,setShowcart]=useState(false)
    const [showSearch,setShowSearch]=useState(false)
    const {cartCount} =useContext(Context)
    const navigate=useNavigate()
    const handleScroll = () => {
        const offset = window.scrollY
        if (offset > 200) {
            setScroll(true)

        }
        else {
            setScroll(false)

        }
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll)
    })
   // http://localhost:1337/admin/content-manager/collectionType/api::category.category?page=1&pageSize=20&sort=title:ASC
    return (

        <>
            <header className={`main-header ${scrolled ? "sticky-header" : " "}`}>
                <div className="header-content">
                    <ul className="left">

                        <li onClick={()=>{ navigate("/")}}>HOME</li>
                        <li>About</li>
                        <li>Categories</li>
                    
                    
                    </ul>
                    <div className="center">JSDEVSTORE.</div>
                    <div className="right">

                        <TbSearch onClick={()=>{setShowSearch(true)}}/>
                        <AiOutlineHeart />
                        <span className="cart-icon" onClick={()=>{setShowcart(true)}}>
                            <CgShoppingCart />
                            {!!cartCount && <span>{cartCount}</span>}
                        </span>
                    </div>
                </div>
            </header>
            {showcart && <Cart setShowcart={setShowcart} />}
            {showSearch && <Search  setShowSearch={setShowSearch}/>}

        </>
    );
};

export default Header;
