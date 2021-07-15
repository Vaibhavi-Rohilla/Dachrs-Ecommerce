import React from 'react'
import "./filter.css"

function filter() {

    return (
        <div className="filterContainer">
          <p>Filters</p> 
            <section className="filterSection">
              <p>Gender</p>
                <section>
                  <div>
                    <input type="radio"  name="male" value="male"/>
                    <label for="gender">Male</label><br></br>
                    <input type="radio" name="male" value="female"/>
                    <label for="gender">Female</label><br></br>
                  </div>
                </section>
            </section>
            <section className="filterSection">
                <p>Rating</p>
                  <div className="rating">
                    <input type="checkbox"  name="male" value="male"/>
                    <i class="fa fa-star yellow-color " aria-hidden="true" ></i>
                    <i class="fa fa-star yellow-color" aria-hidden="true"></i>
                    <i class="fa fa-star yellow-color" aria-hidden="true"></i>
                    <i class="fa fa-star yellow-color" aria-hidden="true"></i>
                    <i class="fa fa-star yellow-color" aria-hidden="true"></i>
                  </div>
                  <div className="rating">
                    <input type="checkbox"  name="male" value="male"/>
                    <i class="fa fa-star yellow-color" aria-hidden="true" ></i>
                    <i class="fa fa-star yellow-color" aria-hidden="true"></i>
                    <i class="fa fa-star yellow-color" aria-hidden="true"></i>
                    <i class="fa fa-star yellow-color" aria-hidden="true"></i>
                    <i class="fa fa-star grey-color" aria-hidden="true"></i>
                  </div>
                  <div className="rating">
                    <input type="checkbox"  name="male" value="male"/>
                    <i class="fa fa-star yellow-color" aria-hidden="true" ></i>
                    <i class="fa fa-star yellow-color" aria-hidden="true"></i>
                    <i class="fa fa-star yellow-color" aria-hidden="true"></i>
                    <i class="fa fa-star grey-color" aria-hidden="true"></i>
                    <i class="fa fa-star grey-color" aria-hidden="true"></i>
                  </div>
                  <div className="rating">
                    <input type="checkbox"  name="male" value="male"/>
                    <i class="fa fa-star yellow-color" aria-hidden="true" ></i>
                    <i class="fa fa-star yellow-color" aria-hidden="true"></i>
                    <i class="fa fa-star grey-color" aria-hidden="true"></i>
                    <i class="fa fa-star grey-color" aria-hidden="true"></i>
                    <i class="fa fa-star grey-color" aria-hidden="true"></i>
                  </div>
                  <div className="rating">
                    <input type="checkbox"  name="male" value="male"/>
                    <i class="fa fa-star yellow-color" aria-hidden="true" ></i>
                    <i class="fa fa-star grey-color" aria-hidden="true"></i>
                    <i class="fa fa-star grey-color" aria-hidden="true"></i>
                    <i class="fa fa-star grey-color" aria-hidden="true"></i>
                    <i class="fa fa-star grey-color" aria-hidden="true"></i>
                  </div>
          </section>
          <section className="filterSection">
              <p>Brands</p>
                <section>
                  <div>
                    <input type="checkbox"  name="brand" value="nike"/>
                    <label for="brand">Nike</label><br></br>
                    <input type="checkbox" name="brand" value="rebook"/>
                    <label for="brand">Rebook</label><br></br>
                    <input type="checkbox" name="brand" value="puma"/>
                    <label for="brand">Puma</label><br></br>
                    <input type="checkbox" name="brand" value="wrogn"/>
                    <label for="brand">Wrogn</label><br></br>
                    <input type="checkbox" name="brand" value="flying-machine"/>
                    <label for="brand">Flying Machine</label><br></br>
                  </div>
                </section>
            </section>
            <section className="filterSection">
              <p>Colors</p>
                <section>
                  <div>
                    <input type="checkbox"  name="color" value="white"/>
                    <label for="brand">White</label><br></br>
                    <input type="checkbox" name="color" value="black"/>
                    <label for="brand">Black</label><br></br>
                    <input type="checkbox" name="color" value="red"/>
                    <label for="brand">Red</label><br></br>
                    <input type="checkbox" name="color" value="blue"/>
                    <label for="brand">Blue</label><br></br>
                    <input type="checkbox" name="color" value="green"/>
                    <label for="brand">Green</label><br></br>
                  </div>
                </section>
            </section>
        

         
          
          
         
         
        </div>
    )
}

export default filter
