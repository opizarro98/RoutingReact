import { Link } from 'react-router-dom';

import styled from 'styled-components';

const Nav = styled.nav`
    background: #333;
    color: #fff;
    padding: 1rem;
    text-align: center;
`;

const Ul = styled.ul`
    list-style: none;
    display: flex;
    justify-content: center;
    padding: 0;
`;

const Li = styled.li`
    margin: 0 1rem;
    a {
        color: #fff;
        text-decoration: none;
        &:hover {
            text-decoration: underline;
        }
    }
`;

const Title = styled.h1`
    margin: 0;
    padding: 0.5rem;
`;

const Header = () => {
    return (
        <header>
            <Nav>
                <Title>Mi Página UNIR</Title>
                <Ul>
                    <Li><Link to="/">Home</Link></Li>
                    <Li><Link to="/nosotros">Nosotros</Link></Li>
                    <Li><Link to="/servicios">Servicios</Link></Li>
                    <Li><Link to="/apimercadolibre">Api Mercado Libre EC</Link></Li>
                </Ul>
            </Nav>
        </header>
    );
};

export default Header;
