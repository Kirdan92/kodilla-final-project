import React from 'react';
import { Container, Row, Col, Pagination, PaginationItem, PaginationLink } from 'reactstrap';



const SidebarContent = (props) => {

	
	return(
        <div className="sidebar-content">
            <div className="search-container">
                <div className="sidebar-title">Szukaj</div>
                <input type="text" value={props.search}  onChange={props.handleSearchProducts}/>
            </div>
            <hr className="sidebar-hr"></hr>
            <div className="sort-container">
                <div className="sidebar-title">Sortuj</div>
                <div>
                    <h5 className="filter-title">Cena</h5>
                    <form className="sort-form">
                        <input type="radio" className="hidden-radio" name="price" value={props.sort} onChange={props.handlePriceSort}/>
                        <ul className="sidebar-list">
                            <li>
                                <input type="radio" name="price" value="lowest" id="price-asc" onChange={props.handlePriceSort}/>
                                <label htmlFor="price-asc">Rosnąco</label>
                            </li>
                            <li>
                                <input type="radio"  name="price"value="highest" id="price-desc" onChange={props.handlePriceSort}/>
                                <label htmlFor="price-desc">Malejąco</label>
                            </li>
                        </ul>

                    </form>                  
                </div>
            </div>
            <hr className="sidebar-hr"></hr>
            <div className="filter-container">
                <div className="sidebar-title">Filtry</div>
                <div className="filter-box">
                    <h5 className="filter-title">Okładka</h5>
                    <form className="filter-form">
                        <ul className="sidebar-list">
                            <li>
                                <input type="radio"  name="cover" value="" id="cover-all" onChange={props.handleCoverFilter} defaultChecked={true}/> 
                                <label htmlFor="cover-all">Wszsytkie</label>
                            </li>    
                            <li>
                                <input type="radio" name="cover" value="hard" id="cover-hard"  onChange={props.handleCoverFilter}/>
                                <label htmlFor="cover-hard">Twarda</label>
                            </li>
                            <li>
                                <input type="radio"  name="cover" value="soft" id="cover-soft"  onChange={props.handleCoverFilter}/>
                                <label htmlFor="cover-soft">Miękka</label>
                            </li>
                        </ul>

                    </form>
                </div>
                <div className="filter-box">
                    <h5 className="filter-title">Typ produktu:</h5>
                    <form className="filter-form">
                        <ul className="sidebar-list">
                            <li>
                                <input type="radio"  name="type" value="" id="type-all" onChange={props.handleTypeFilter} defaultChecked={true} /> 
                                <label htmlFor="type-all" >Wszsytkie</label>
                            </li>    
                            <li>
                                <input type="radio" name="type" value="book" id="type-book" onChange={props.handleTypeFilter}/>
                                <label htmlFor="type-book">Ksiażka</label>
                            </li>
                            <li>
                                <input type="radio"  name="type" value="comic" id="type-comic" onChange={props.handleTypeFilter}/>
                                <label htmlFor="type-comic">Komiks</label>
                            </li>
                        </ul>

                    </form>
                </div>
            </div>
            <hr className="sidebar-hr"></hr>
        </div>
	)
};

export default SidebarContent;