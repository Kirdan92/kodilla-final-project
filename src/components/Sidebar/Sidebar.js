import React, { Component } from "react";
import MediaQuery from 'react-responsive';
import SidebarContent from "./SidebarContent";
import { Container, Row, Col, Pagination, PaginationItem, PaginationLink } from 'reactstrap';

require('./Sidebar.css');


export default class Filter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            sidebarShow: false
        }
        this.handleToggle = this.handleToggle.bind(this);
    }

    handleToggle() {
        this.setState ({
            sidebarShow: !this.state.sidebarShow
        });
    }

    render() {

        return (   
              <div  className="sidebar-wrapper">


                <MediaQuery query="(min-device-width: 769px)">   
                    <button className="hamburger" onClick={this.handleToggle}></button>
                      
                        
                        <div className={this.state.sidebarShow ?  "sidebar-container sidebar-container-visible"   : "sidebar-container"}>
                            <SidebarContent 
                                cover={this.props.cover} 
                                type={this.props.type} 
                                sort={this.props.sort} 
                                search={this.props.search} 
                                handlePriceSort={this.props.handlePriceSort} 
                                handleCoverFilter={this.props.handleCoverFilter} 
                                handleTypeFilter={this.props.handleTypeFilter} 
                                handleSearchProducts={this.props.handleSearchProducts}
                            />
                        </div>
                      
                </MediaQuery>

                <MediaQuery query="(max-device-width: 768px)">                
                    <button className="hamburger" onClick={this.handleToggle}></button>
                        
                            
                        <div className={this.state.sidebarShow ?  "sidebar-container" : "sidebar-container sidebar-container-visible" }>
                            <SidebarContent 
                                cover={this.props.cover} 
                                type={this.props.type} 
                                sort={this.props.sort} 
                                search={this.props.search} 
                                handlePriceSort={this.props.handlePriceSort} 
                                handleCoverFilter={this.props.handleCoverFilter} 
                                handleTypeFilter={this.props.handleTypeFilter} 
                                handleSearchProducts={this.props.handleSearchProducts}
                            />
                      </div>
                </MediaQuery>
            
            </div>
        );
    }
}

