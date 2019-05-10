import React from 'react';
import Product from './Product';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Pagination, PaginationItem, PaginationLink } from 'reactstrap';



class BooksList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          products: props.products,
          currentPage: 0,
          productPerPage: 12
        };
        
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event, index) {
        event.preventDefault();
        this.setState({
          currentPage: index
        });
    
    }
    render () {
        
        const { products, currentPage, productPerPage } = this.state;
        
        const rowSize = 4;
        const rowUnit = 12 / rowSize;
        const currentProducts = products.slice( currentPage * productPerPage,(currentPage + 1) * productPerPage);

        const productsLayout = currentProducts
          .map((product, i) => (
              <Col sm={rowUnit} key={product.id}>
                <Product
                    product={product} 
                    addToCart={this.props.addToCart}
                    removeFromCart={this.props.removeFromCart}
                    cartItem={this.props.cart.filter(cartItem => cartItem.id === product.id)[0]}
                />
              </Col>
            )
          )
          .reduce((rows, col, index) => {
            let currentRow
            if (index % rowSize === 0) {
              currentRow = [];
              rows.push(currentRow)
            } else {
              currentRow = rows[rows.length - 1]
            }
            currentRow.push(col)
            return rows;
            }, []
          )
          .map((cols, i) => <Row className="product-row" key={`row-${i}`}>{cols}</Row>)
    
          
    
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(products.length / productPerPage); i++) {
            pageNumbers.push(i);
        }
        
        const pagesCount = pageNumbers.length;
        return (       
          
            <Container>
                {productsLayout}                 
                <Pagination aria-label="Page navigation example" className="product-pagination">               
                    <PaginationItem disabled={currentPage <= 0}>
                        <PaginationLink
                            onClick={e => this.handleClick(e, currentPage - 1)}
                            previous
                            href="#"
                        />
                    </PaginationItem>

                    {[...Array(pagesCount)].map((page, i) => 
                    <PaginationItem active={i === currentPage} key={i}>
                        <PaginationLink onClick={e => this.handleClick(e, i)} href="#">
                        {i + 1}
                        </PaginationLink>
                    </PaginationItem>
                    )}

                    <PaginationItem disabled={currentPage >= pagesCount - 1}>
                        <PaginationLink
                            onClick={e => this.handleClick(e, currentPage + 1)}
                            next
                            href="#"
                        />  
                    </PaginationItem>
                </Pagination>
            </Container>
          
        )
    }

  }

  export default BooksList;