import React, { Component } from "react";
import Filter from "../shared/filter";
import Sorting from "../shared/sorting";
import UserService from "../services/user.service";
import Paging from "../shared/paging";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ""
    };
  }

  componentDidMount() {
    UserService.getPublicContent().then(
      response => {
        this.setState({
          content: response.data
        });
      },
      error => {
        this.setState({
          content:
            (error.response && error.response.data) ||
            error.message ||
            error.toString()
        });
      }
    );
  }

  render() {
    return (
      <div> 
          <section class="section-content padding-y">
          <div class="container">
          <div class="row">
              <aside class="col-md-3">
                <Filter />
              </aside> 
              <main class="col-md-9">
                <Sorting/>
          <div class="row">
              <div class="col-md-4">
                  <figure class="card card-product-grid">
                      <div class="img-wrap"> 
                          <span class="badge badge-danger"> NEW </span>
                          <img src="assets/images/items/1.jpg" />
                          <a class="btn-overlay" href="#"><i class="fa fa-search-plus"></i> Quick view</a>
                      </div> 
                      <figcaption class="info-wrap">
                          <div class="fix-height">
                              <a href="#" class="title">Great item name goes here</a>
                              <div class="price-wrap mt-2">
                                  <span class="price">$1280</span>
                                  <del class="price-old">$1980</del>
                              </div>
                          </div>
                          <a href="#" class="btn btn-block btn-primary">Add to cart </a>
                      </figcaption>
                  </figure>
              </div> 
              <div class="col-md-4">
                  <figure class="card card-product-grid">
                      <div class="img-wrap"> 
                          <img src="assets/images/items/2.jpg" />
                          <a class="btn-overlay" href="#"><i class="fa fa-search-plus"></i> Quick view</a>
                      </div>
                      <figcaption class="info-wrap">
                          <div class="fix-height">
                              <a href="#" class="title">Product name goes here just for demo item</a>
                              <div class="price-wrap mt-2">
                                  <span class="price">$1280</span>
                              </div> 
                          </div>
                          <a href="#" class="btn btn-block btn-primary">Add to cart </a>  
                      </figcaption>
                  </figure>
              </div> 
              <div class="col-md-4">
                  <figure class="card card-product-grid">
                      <div class="img-wrap"> 
                          <img src="assets/images/items/3.jpg" />
                          <a class="btn-overlay" href="#"><i class="fa fa-search-plus"></i> Quick view</a>
                      </div> 
                      <figcaption class="info-wrap">
                          <div class="fix-height">
                              <a href="#" class="title">Product name goes here just for demo item</a>
                              <div class="price-wrap mt-2">
                                  <span class="price">$1280</span>
                              </div>
                          </div>
                          <a href="#" class="btn btn-block btn-primary">Add to cart </a>  
                      </figcaption>
                  </figure>
              </div> 
              <div class="col-md-4">
                  <figure class="card card-product-grid">
                      <div class="img-wrap"> 
                          <img src="assets/images/items/4.jpg" />
                          <a class="btn-overlay" href="#"><i class="fa fa-search-plus"></i> Quick view</a>
                      </div> 
                      <figcaption class="info-wrap">
                          <div class="fix-height">
                              <a href="#" class="title">Product name goes here just for demo item</a>
                              <div class="price-wrap mt-2">
                                  <span class="price">$1280</span>
                              </div>
                          </div>
                          <a href="#" class="btn btn-block btn-primary">Add to cart </a>  
                      </figcaption>
                  </figure>
              </div> 
              <div class="col-md-4">
                  <figure class="card card-product-grid">
                      <div class="img-wrap"> 
                          <img src="assets/images/items/5.jpg" />
                          <a class="btn-overlay" href="#"><i class="fa fa-search-plus"></i> Quick view</a>
                      </div> 
                      <figcaption class="info-wrap">
                          <div class="fix-height">
                              <a href="#" class="title">Product name goes here just for demo item</a>
                              <div class="price-wrap mt-2">
                                  <span class="price">$1280</span>
                              </div> 
                          </div>
                          <a href="#" class="btn btn-block btn-primary">Add to cart </a>  
                      </figcaption>
                  </figure>
              </div> 
              <div class="col-md-4">
                  <figure class="card card-product-grid">
                      <div class="img-wrap"> 
                          <img src="assets/images/items/6.jpg" />
                          <a class="btn-overlay" href="#"><i class="fa fa-search-plus"></i> Quick view</a>
                      </div> 
                      <figcaption class="info-wrap">
                          <div class="fix-height">
                              <a href="#" class="title">Product name goes here just for demo item</a>
                              <div class="price-wrap mt-2">
                                  <span class="price">$1280</span>
                              </div> 
                          </div>
                          <a href="#" class="btn btn-block btn-primary">Add to cart </a>  
                      </figcaption>
                  </figure>
              </div> 
              <div class="col-md-4">
                  <figure class="card card-product-grid">
                      <div class="img-wrap"> 
                          <img src="assets/images/items/7.jpg" />
                          <a class="btn-overlay" href="#"><i class="fa fa-search-plus"></i> Quick view</a>
                      </div> 
                      <figcaption class="info-wrap">
                          <div class="fix-height">
                              <a href="#" class="title">Product name goes here just for demo item</a>
                              <div class="price-wrap mt-2">
                                  <span class="price">$1280</span>
                              </div> 
                          </div>
                          <a href="#" class="btn btn-block btn-primary">Add to cart </a>  
                      </figcaption>
                  </figure>
              </div> 
              <div class="col-md-4">
                  <figure class="card card-product-grid">
                      <div class="img-wrap"> 
                          <img src="assets/images/items/1.jpg" />
                          <a class="btn-overlay" href="#"><i class="fa fa-search-plus"></i> Quick view</a>
                      </div> 
                      <figcaption class="info-wrap">
                          <div class="fix-height">
                              <a href="#" class="title">Product name goes here just for demo item</a>
                              <div class="price-wrap mt-2">
                                  <span class="price">$1280</span>
                              </div> 
                          </div>
                          <a href="#" class="btn btn-block btn-primary">Add to cart </a>  
                      </figcaption>
                  </figure>
              </div> 
          </div> 
          <Paging />
          </main>
          </div>
          </div> 
          </section>
       
      </div>
    );
  }
}
