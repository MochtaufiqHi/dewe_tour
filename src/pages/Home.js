import Head from "../components/Head/Head";
// import Search from "../components/Search/Search";
import Card from "../components/Card/Card";
import Item from "../components/Item/Item";
import logo from "../assets/img/hero.png";
import "../App.css";
import { useState } from "react";

function Home() {
  const [search, setSearch] = useState("")

  return (
    <>
      <div id="bgHero" className="">
        <img id="bgHero-img" src={logo} alt="" />
      </div>
      <div className="container">
        <Head />
        <div className="container search">
          <div className="flex justify-content-end w-full label-form">
            <label>Find great places to holiday</label>
            <div className="d-flex justify-content-center mt-2">
              <input className="form-control" onChange={e => setSearch(e.target.value)}/>
              <button className="btn btn-warning text-white px-4">
                Search
              </button>
            </div>
          </div>
        </div>
        <Card />
        <h1 className="text-center m-4">Group Tour</h1>
        <div className="d-flex">
        <Item search={search} />
        </div>
      </div>
    </>
  );
}

export default Home;
