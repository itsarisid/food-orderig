import React, { Component } from "react";
export default class Sorting extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        content: ""
      };
    }
    render() {
        return (
        <>
        <header class="border-bottom mb-4 pb-3">
                  <div class="form-inline">
                      <span class="mr-md-auto">32 Items found </span>
                      <select class="mr-2 form-control">
                          <option>Latest items</option>
                          <option>Trending</option>
                          <option>Most Popular</option>
                          <option>Cheapest</option>
                      </select>
                      <div class="btn-group">
                          <a href="#" class="btn btn-outline-secondary" data-toggle="tooltip" title="List view"> 
                              <i class="fa fa-bars"></i></a>
                          <a href="#" class="btn  btn-outline-secondary active" data-toggle="tooltip" title="Grid view"> 
                              <i class="fa fa-th"></i></a>
                      </div>
                  </div>
          </header>
        </>
        )
    }
}