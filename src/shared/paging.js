import React, { Component } from "react";
export default class Paging extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        content: ""
      };
    }
    render() {
        return (
        <>
            <nav class="mt-4" aria-label="Page navigation sample">
                <ul class="pagination">
                    <li class="page-item disabled"><a class="page-link" href="#">Previous</a></li>
                    <li class="page-item active"><a class="page-link" href="#">1</a></li>
                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                    <li class="page-item"><a class="page-link" href="#">Next</a></li>
                </ul>
            </nav>
            </>
        )
    }
}