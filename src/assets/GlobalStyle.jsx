import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: Arial, sans-serif;
        background-color: #f4f4f4;
        color: #333;
        line-height: 1.6;
        margin-bottom: 6rem; /* Aumenta el margen inferior para el footer */
        overflow-x: hidden; /* Evita el scroll horizontal */
    }

    header {
        background: #333;
        color: #fff;
        padding: 1rem 0;
        text-align: center;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 1000;
    }

    footer {
        background: #333;
        color: #fff;
        text-align: center;
        padding: 1rem;
        position: fixed;
        bottom: 0;
        width: 100%;
        z-index: 1000;
    }

    main {
        padding: 2rem;
        margin-top: 60px; /* Ajusta según la altura de tu header */
        margin-bottom: 2rem; /* Ajusta según la altura de tu footer */
    }
`;

export default GlobalStyle;
