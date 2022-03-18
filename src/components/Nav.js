import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCategories } from "../utils/api";

const Nav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((categoriesFromApi) => {
      setCategories(categoriesFromApi);
    });
  }, []);

  return (
    <nav className="Nav">
      <Link to="/">Home&emsp; </Link>
      {categories.map((category) => {
        return (
          <Link key={category.slug} to={`/category/${category.slug}`}>
            {category.slug}&emsp;
          </Link>
        );
      })}
      <Link to="/Login">Login&emsp;</Link>
    </nav>
  );
};

export default Nav;
