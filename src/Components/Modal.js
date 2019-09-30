import React from "react";

class Modal extends React.Component {
  state = {
    name: "",
    ingredients: [],
    desription: "",
    weigth: null,
    ingredientName: "",
    ingredientWeigth: ""
  };

  setDishInfo = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  addIngredient = () => {
    this.setState(prevState => ({
      ingredients: [
        ...prevState.ingredients,
        {
          id: Date.now(),
          name: prevState.ingredientName,
          weigth: +prevState.ingredientWeigth
        }
      ],
      ingredientName: "",
      ingredientWeigth: ""
    }));
  };

  addDish = () => {
    const { toggleModal, addNewDish } = this.props;
    let sumWeigth = [...this.state.ingredients].reduce(
      (sum, item) => sum + item.weigth,
      0
    );
    this.setState({ ...this.state, weigth: sumWeigth });

    let newDish = {
      name: this.state.name,
      desription: this.state.desription,
      weigth: this.state.desription
    };
    addNewDish(newDish);
    console.log(newDish);
    // alert("Dish is added");
    toggleModal();
  };

  render() {
    const { toggleModal } = this.props;
    const { name, desription, ingredientName, ingredientWeigth } = this.state;
    console.log(this.state);
    return (
      <div>
        <div className="overlay" onClick={toggleModal}></div>
        <div className="modal">
          <div className="modal__header">
            <h2>Add a new dish</h2>
            <p>Please enter all informations about your new dish</p>
          </div>
          <div className="modal__container">
            <div>
              <input
                name="name"
                type="text"
                value={name}
                placeholder="Dish name"
                onChange={e => this.setDishInfo(e)}
                className="modal__input"
              />
            </div>
            <div>
              <textarea
                name="desription"
                value={desription}
                placeholder="Dish desription"
                onChange={e => this.setDishInfo(e)}
                className="modal__input"
              />
            </div>
            <div className="ingred">
              <div>
                <h1>Ingredients</h1>
                <button
                  type="button"
                  className="ingred__btn"
                  onClick={this.addIngredient}
                >
                  Add this ingredient +
                </button>

                <input
                  name="ingredientName"
                  type="text"
                  value={ingredientName}
                  placeholder="Ingredient name"
                  onChange={e => this.setDishInfo(e)}
                  className="modal__input left"
                />
                <input
                  name="ingredientWeigth"
                  type="number"
                  value={ingredientWeigth}
                  placeholder="Weight (Kcl)"
                  onChange={e => this.setDishInfo(e)}
                  className="modal__input right"
                />
              </div>
            </div>
            <div className="modal__buttons">
              <button
                type="button"
                className="modal__button"
                onClick={toggleModal}
              >
                Cancel
              </button>
              <button
                type="button"
                className="modal__button"
                onClick={this.addDish}
              >
                Add dish
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// const Modal = ({ toggleModal }) => (
//   <>
//     <div className="overlay" onClick={toggleModal}></div>
//     <div className="modal">
//       <div className="modal__header">
//         <h1>Add a new dish</h1>
//         <p>Please enter all informations about your new dish</p>
//       </div>
//       <div>
//         <input
//           name="name"
//           type="text"
//           value={value}
//           placeholder="Dish name"
//           onChange={event => setDishName(event)}
//           className="modal__input"
//         />
//       </div>
//     </div>
//   </>
// );

export default Modal;
