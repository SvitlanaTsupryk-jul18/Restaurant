import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";

const Menu = ({ cards, loadMore, toggleModal }) => (
  <section>
    <h1>Meat menu</h1>
    <button type="button" className="add-btn" onClick={toggleModal}>
      Add a new dish +
    </button>

    {cards.length ? (
      <InfiniteScroll
        dataLength={cards.length}
        next={loadMore}
        hasMore={true}
        loader={<h4>Loading...</h4>}
      >
        {cards.map(card => (
          <div key={Date.now() * Math.random() * 10} className="card">
            <h3>{card.name} </h3>
            <p className="card__text">{card.description}</p>
            <p className="card__weigth">{card.weight} Kcl</p>
          </div>
        ))}
      </InfiniteScroll>
    ) : (
      <span className="warning">Sorry!Nothing found</span>
    )}
  </section>
);

export default Menu;
