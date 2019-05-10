import React, { Component } from "react";




export default class Filter extends Component {
    render() {
        return (
            <div>
                <label>
                    Sortuj
                    <select value={this.props.sort}
                    onChange={this.props.handlePriceSort}>
                        <option value="">Wybierz</option>
                        <option value="lowest">Lowest to Highest</option>
                        <option value="highest">Highest to Lowest</option>
                    </select>
                </label>
                <div>
                    <label>
                    Typ okładki:
                        <select value={this.props.cover}
                        onChange={this.props.handleCoverFilter}>
                            <option value="">Wybierz</option>
                            <option value="twarda">twarda</option>
                            <option value="miekka">miekka</option>
                        </select>
                    </label>
                </div>
            </div>
        );
    }
}

