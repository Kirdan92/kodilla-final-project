import React, { Component } from "react";


require('./Sidebar.css');


export default class Filter extends Component {
    render() {
        return (
            <div className="sidebar-container">
                <div className="search-container">
                    <input type="text" value={this.props.search}  onChange={this.props.handleSearchProducts}/>
                </div>
                <div className="sort-container">
                    <div className="sidebar-title">Sortuj</div>
                    <div>
                        Cena:
                        <form>
                            <input type="radio" className="hidden-radio" name="price" value={this.props.sort} onChange={this.props.handlePriceSort}/>
                            <label>
                                <input type="radio" name="price" value="lowest" onChange={this.props.handlePriceSort}/>
                                Rosnąco
                            </label>
                            <label>
                                <input type="radio"  name="price"value="highest" onChange={this.props.handlePriceSort}/>
                                Malejąco
                            </label>
                        </form>

                        
     
                    </div>
                </div>
                <div className="filter-container">
                    <div className="sidebar-title">Filtry</div>
                    <div>
                    Typ okładki:

                    <form>
                        <label>
                            <input type="radio"  name="cover" value={this.props.cover} onChange={this.props.handleCoverFilter} /> 
                            Wszsytkie
                        </label>    
                        <label>
                            <input type="radio" name="cover" value="twarda" onChange={this.props.handleCoverFilter}/>
                            Twarda
                        </label>
                        <label>
                            <input type="radio"  name="cover"value="miekka" onChange={this.props.handleCoverFilter}/>
                            Miękka
                        </label>
                    </form>
                    </div>
                </div>
                <div>

                </div>
            </div>
        );
    }
}

