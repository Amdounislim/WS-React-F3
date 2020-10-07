import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div>
                <div class="card" style={{width: "18rem;"}}>
                    <img src="..." class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
                <div class="btn-group btn-group-toggle" data-toggle="buttons">
                    <label class="btn btn-secondary active">
                        <input type="radio" name="options" id="option1" checked /> Active
                    </label>
                    <label class="btn btn-secondary">
                        <input type="radio" name="options" id="option2"/> Radio
                    </label>
                    <label class="btn btn-secondary">
                        <input type="radio" name="options" id="option3"/> Radio
                    </label>
                </div>
            </div>
        )
    }
}
