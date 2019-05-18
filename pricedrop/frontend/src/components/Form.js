import React, { Component } from "react";
import PropTypes from "prop-types";

class Form extends Component {
    static PropTypes = {
        endpoint: PropTypes.string.isRequired
    };

    state = {
        name: "",
        url: "",
        original_price: "",
        current_price: "",
        date_added: "",
        price_div: ""
    };

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = e => {
        e.preventDefault();
        const { name, url, original_price, current_price, date_added, price_div } = this.state;
        const item = { name, url, original_price, current_price, date_added, price_div };
        const conf = {
            method: "post",
            body: JSON.stringify(item),
            headers: new Headers({ "Content-Type": "application/json" })
        };
        fetch(this.props.endpoint, conf).then(response => {
            console.log(response);
        })
    };

    render() {
        const { name, url, original_price, current_price, date_added, price_div } = this.state;
        return (
            <div className="column">
                <form onSubmit={this.handleSubmit}>
                    <div className="field">
                        <label className="label">Name</label>
                        <div className="control">
                            <input
                                className="input"
                                type="text"
                                name="name"
                                onChange={this.handleChange}
                                value={name}
                                required
                            />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Url</label>
                        <div className="control">
                            <input
                                className="input"
                                type="text"
                                name="url"
                                onChange={this.handleChange}
                                value={url}
                                required
                            />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Original Price</label>
                        <div className="control">
                            <textarea
                                className="input"
                                type="number"
                                name="original_price"
                                onChange={this.handleChange}
                                value={original_price}
                                required
                            />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Current Price</label>
                        <div className="control">
                            <textarea
                                className="input"
                                type="number"
                                name="current_price"
                                onChange={this.handleChange}
                                value={current_price}
                                required
                            />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Date added</label>
                        <div className="control">
                            <textarea
                                className="input"
                                type="number"
                                name="date_added"
                                onChange={this.handleChange}
                                value={date_added}
                                required
                            />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Price Div</label>
                        <div className="control">
                            <input
                                className="input"
                                type="text"
                                name="price_div"
                                onChange={this.handleChange}
                                value={price_div}
                                required
                            />
                        </div>
                    </div>
                    <div className="control">
                        <button type="submit" className="button is-info">
                            Send message
                  </button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Form;
