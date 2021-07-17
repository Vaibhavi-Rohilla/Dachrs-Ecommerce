import React, { Component } from "react";
import { products } from "./products";
import Checkbox from "../../atoms/Checkbox";
import "./filter.css";

const Brands = ["Nike", "Rebook", "Puma", "Wrogn", "Flying Machine"];
const Color = ["White", "Green", "Blue", "Pink", "Black"];
const Gender = ["Female", "Male"];

class filter extends Component {
  state = {
    checkboxes: Brands.reduce(
      (options, option) => ({
        ...options,
        [option]: false,
      }),
      {}
    ),
    checkboxes: Color.reduce(
      (options, option) => ({
        ...options,
        [option]: false,
      }),
      {}
    ),
    checkboxes: Gender.reduce(
      (options, option) => ({
        ...options,
        [option]: false,
      }),
      {}
    ),
  };
  selectAllCheckboxes = (isSelected) => {
    Object.keys(this.state.checkboxes).forEach((checkbox) => {
      // BONUS: Can you explain why we pass updater function to setState instead of an object?
      this.setState((prevState) => ({
        checkboxes: {
          ...prevState.checkboxes,
          [checkbox]: isSelected,
        },
      }));
    });
  };

  deselectAll = () => this.selectAllCheckboxes(false);
  handleCheckboxChange = (changeEvent) => {
    const { name } = changeEvent.target;

    this.setState((prevState) => ({
      checkboxes: {
        ...prevState.checkboxes,
        [name]: !prevState.checkboxes[name],
      },
    }));
  };
  createCheckbox = (option) => (
    <Checkbox
      label={option}
      isSelected={this.state.checkboxes[option]}
      onCheckboxChange={this.handleCheckboxChange}
      key={option}
    />
  );
  createCheckboxes = (props) => props.map(this.createCheckbox);

  render() {
    return (
      <div className="content">
        <div>
          {/* {products.map((data,key) => {
        
          return (
          <div key={key}>
          {data.title}
          </div>)
           })}   */}
          <div className="filterContainer">
            <p>Filters</p>
            <section className="filterSection">
              <p>Gender</p>
              <section>
                <div>
                  <button
                    type="button"
                    className="clearButton"
                    onClick={this.deselectAll}
                  >
                    clear
                  </button>

                  <form onSubmit={this.handleFormSubmit}>
                    {this.createCheckboxes(Gender)}
                  </form>
                </div>
              </section>
            </section>
            <section className="filterSection">
              <p>Rating</p>
              <div className="rating">
                <input type="checkbox" name="male" value="male" />
                <i className="fa fa-star yellow-color " aria-hidden="true"></i>
                <i className="fa fa-star yellow-color" aria-hidden="true"></i>
                <i className="fa fa-star yellow-color" aria-hidden="true"></i>
                <i className="fa fa-star yellow-color" aria-hidden="true"></i>
                <i className="fa fa-star yellow-color" aria-hidden="true"></i>
              </div>
              <div className="rating">
                <input type="checkbox" name="male" value="male" />
                <i className="fa fa-star yellow-color" aria-hidden="true"></i>
                <i className="fa fa-star yellow-color" aria-hidden="true"></i>
                <i className="fa fa-star yellow-color" aria-hidden="true"></i>
                <i className="fa fa-star yellow-color" aria-hidden="true"></i>
                <i className="fa fa-star grey-color" aria-hidden="true"></i>
              </div>
              <div className="rating">
                <input type="checkbox" name="male" value="male" />
                <i className="fa fa-star yellow-color" aria-hidden="true"></i>
                <i className="fa fa-star yellow-color" aria-hidden="true"></i>
                <i className="fa fa-star yellow-color" aria-hidden="true"></i>
                <i className="fa fa-star grey-color" aria-hidden="true"></i>
                <i className="fa fa-star grey-color" aria-hidden="true"></i>
              </div>
              <div className="rating">
                <input type="checkbox" name="male" value="male" />
                <i className="fa fa-star yellow-color" aria-hidden="true"></i>
                <i className="fa fa-star yellow-color" aria-hidden="true"></i>
                <i className="fa fa-star grey-color" aria-hidden="true"></i>
                <i className="fa fa-star grey-color" aria-hidden="true"></i>
                <i className="fa fa-star grey-color" aria-hidden="true"></i>
              </div>
              <div className="rating">
                <input type="checkbox" name="male" value="male" />
                <i className="fa fa-star yellow-color" aria-hidden="true"></i>
                <i className="fa fa-star grey-color" aria-hidden="true"></i>
                <i className="fa fa-star grey-color" aria-hidden="true"></i>
                <i className="fa fa-star grey-color" aria-hidden="true"></i>
                <i className="fa fa-star grey-color" aria-hidden="true"></i>
              </div>
            </section>
            <section className="filterSection">
              <p>Brands</p>
              <section>
                <div>
                  <button
                    type="button"
                    className="clearButton"
                    onClick={this.deselectAll}
                  >
                    clear
                  </button>
                  <form onSubmit={this.handleFormSubmit}>
                    {this.createCheckboxes(Brands)}
                  </form>
                </div>
              </section>
            </section>
            <section className="filterSection">
              <p>Colors</p>
              <section>
                <div>
                  <button
                    type="button"
                    className="clearButton"
                    onClick={this.deselectAll}
                  >
                    clear
                  </button>
                  <form onSubmit={this.handleFormSubmit}>
                    {this.createCheckboxes(Color)}
                  </form>
                </div>
              </section>
            </section>
          </div>
        </div>
      </div>
    );
  }
}

export default filter;
