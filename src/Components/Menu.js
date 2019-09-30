import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";

const Menu = ({ cards, loadMore, toggleModal }) => (
  <section className="menu container">
    <div className="menu__top">
      <h2 className="menu__title">Meat Dishes</h2>
      <button type="button" className="menu__btn" onClick={toggleModal}>
        Add a new dish +
      </button>
    </div>
    {cards.length ? (
      <InfiniteScroll
        dataLength={cards.length}
        next={loadMore}
        hasMore={true}
        loader={<h4>Loading...</h4>}
        className="dishes"
      >
        {cards.map(card => (
          <div key={Date.now() * Math.random() * 10} className="card">
            <div className="card__img">Image</div>
            <p className="card__weigth">{card.weight} Kcl</p>
            <h3 className="card__name">{card.name} </h3>
            <p className="card__text">{card.description}</p>
          </div>
        ))}
      </InfiniteScroll>
    ) : (
      <span className="warning">Sorry!Nothing found</span>
    )}
  </section>
);

export default Menu;
