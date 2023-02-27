import Login from "../components/Login";
import Main from "../components/Main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "../components/Welcome";
import AllRecipes from "../components/AllRecipes";
import { useState } from "react";


const NomNomContainer = () => {

    const [allRecipes, setAllRecipes] = useState(recipes)

    const recipes = [
        {"name": "Fruit skewers with yogurt dip",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/9/97/Party_-_fruit_skewers_%283863174408%29.jpg",
        "prep time": "20 mins",
        "ingredients": {
            "banana" : 1,
            "strawberries": "1 cup",
            "blueberries": "1/2 cup",
            "natural yoghurt": "1/2 cup",
            "cinnamon": "1/4 tea spoon",
            "maple syrup": "1 tea spoon"
            }
        },
        {"name": "Rice paper rolls",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/9/90/G%E1%BB%8Fi_cu%E1%BB%91n.jpg",
        "prep time": "25 mins",
        "ingredients": {
            "rice paper wraps" : 8,
            "king prawns, peeled and cooked": 8,
            "carrot": 1,
            "cucumber": 1,
            "avocado": 1,
            "sweet chilli sauce": "1 table spoon"
            }
        },
        {"name": "Nutella Fairy Bread",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/e/ee/Fairy_Bread.jpg",
        "prep time": "10 mins",
        "ingredients": {
            "bread, sliced" : 6,
            "nutella": "1/2 cup",
            "hundreds of thousands": "2 table spoons"
            }
        }
    ]


    return (
        <>
        <Router>
            <Routes>
                <Route path= "/" element={<Welcome />}/>
                <Route path= "/login" element={<Login />}/>
                <Route path= "/main" element={<Main />}/>
                <Route path = "/allrecipes" element={<AllRecipes />}/>
            </Routes>
        </Router>
        </>
        )
}

export default NomNomContainer;