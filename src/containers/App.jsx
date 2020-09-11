import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Search from "../components/Search";
import Categories from "../components/Categories";
import Carrousel from "../components/Carrousel";
import CarrouselItem from "../components/CarrouselItem";
import Footer from "../components/Footer";
import useInitialState from "../hooks/useInitialState";

const API = "http://localhost:3000/initialState";

const App = () => {
  const initialState = useInitialState(API);
  return (
    <div className="App">
      <Header />
      <Search />
      {initialState.mylist.lenght > 0 && (
        <Categories title="Mi Lista">
          <Carrousel>
            {initialState.mylist.map((item) => (
              <CarrouselItem key={item.id} {...item} />
            ))}
          </Carrousel>
        </Categories>
      )}

      <Categories title="Tendencias">
        <Carrousel>
          {initialState.trend.map((item) => (
            <CarrouselItem key={item.id} {...item} />
          ))}
        </Carrousel>
      </Categories>

      <Categories title="Originales de Platzi Video">
        <Carrousel>
          {initialState.originals.map((item) => (
            <CarrouselItem key={item.id} {...item} />
          ))}
        </Carrousel>
      </Categories>
      <Footer />
    </div>
  );
};
export default App;
