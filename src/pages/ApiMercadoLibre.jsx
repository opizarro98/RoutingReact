import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Container = styled.div`
    text-align: center;
    padding: 2rem;
`;

const SearchInput = styled.input`
    width: 80%;
    padding: 0.5rem;
    margin-bottom: 1rem;
    font-size: 1rem;
`;

const SearchButton = styled.button`
    padding: 0.5rem 1rem;
    font-size: 1rem;
    cursor: pointer;
    margin-bottom: 2rem;
`;

const BackButton = styled.button`
    padding: 0.5rem 1rem;
    font-size: 1rem;
    cursor: pointer;
    margin-bottom: 2rem;
    background-color: #f0f0f0;
`;

const ProductList = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 2rem;
`;

const ProductCard = styled.div`
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 1rem;
    text-align: left;
`;

const ProductImage = styled.img`
    width: 100%;
    height: auto;
`;

const ProductTitle = styled.h3`
    font-size: 1.2rem;
    margin: 0.5rem 0;
`;

const ProductPrice = styled.p`
    font-size: 1rem;
    color: #333;
`;

const ApiMercadoLibre = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [products, setProducts] = useState([]);
    const [showResults, setShowResults] = useState(false);

    const handleSearch = async () => {
        try {
            const response = await axios.get(`https://api.mercadolibre.com/sites/MEC/search?q=${searchTerm}`);
            setProducts(response.data.results);
            setShowResults(true);
        } catch (error) {
            console.error('Error fetching data from API', error);
        }
    };

    return (
        <Container>
            {!showResults ? (
                <>
                    <h1>Mercado Libre Ecuador</h1>
                    <SearchInput
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="Enter product name"
                    />
                    <SearchButton onClick={handleSearch}>Buscar Producto</SearchButton>
                </>
            ) : (
                <>
                    <BackButton onClick={() => setShowResults(false)}>Regresar</BackButton>
                    <ProductList>
                        {products.map((product) => (
                            <ProductCard key={product.id}>
                                <ProductImage src={product.thumbnail} alt={product.title} />
                                <ProductTitle>{product.title}</ProductTitle>
                                <ProductPrice>Price: ${product.price}</ProductPrice>
                            </ProductCard>
                        ))}
                    </ProductList>
                </>
            )}
        </Container>
    );
};

export default ApiMercadoLibre;
