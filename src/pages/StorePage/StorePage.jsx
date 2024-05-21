import React from "react";

import "./StorePage.css";
import CardsList from "../../components/cards/CardsList";


const StorePage = () => {

  return (
    <div className="StoreMain">
      <div
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.5)",
          padding: "2% 10px",
          width: "80%",
          margin: "0 auto",
          borderRadius: "20px",
        }}
      >
        <div
          className="searchAndFilter"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <div style={{ marginBottom: "10px" }}>
            <p
              style={{
                textAlign: "center",
                marginBottom: "10px",
                fontWeight: "700",
              }}
            >
              Фильтрация
            </p>
            {/* <CardsFilter /> */}
          </div>
          <div style={{ marginBottom: "10px" }}>
            <p
              style={{
                textAlign: "center",
                marginBottom: "10px",
                fontWeight: "700",
              }}
            >
              Поиск по цене
            </p>
            {/* <CardsPriceRangeFilter /> */}
          </div>
          <div style={{ marginBottom: "10px" }}>
            <p
              style={{
                textAlign: "center",
                marginBottom: "10px",
                fontWeight: "700",
              }}
            >
              Сортировка по рейтингу
            </p>
            {/* <CardsSortRating /> */}
          </div>
          <div style={{ marginBottom: "10px" }}>
            <p
              style={{
                textAlign: "center",
                marginBottom: "10px",
                fontWeight: "700",
              }}
            >
              Живой поиск
            </p>
            {/* <CardSearch /> */}
          </div>
          <div style={{ marginBottom: "10px" }}>
            <p
              style={{
                textAlign: "center",
                marginBottom: "10px",
                fontWeight: "700",
              }}
            >
              Сброс фильтров
            </p>
            <button
              // onClick={() => {
              //   dispatch(clearAllFilters());
              //   dispatch(setSearchVal({ search: "" }));
              //   dispatch(getCards());
              // }}
              style={{ alignItems: "center" }}
              className="ThrowButton"
            >
              Сбросить
            </button>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "end",
            paddingRight: "4.3%",
            paddingTop: "0.5%",
          }}
        ></div>
      </div>
      <CardsList />
    </div>
  );
};

export default StorePage;
