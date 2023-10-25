import styled from 'styled-components';

export const Highlights = styled.ul`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 1rem;
    width: 100%;
    padding: 1.5rem 0;
    & li {
        backdrop-filter: blur(10px);
        font-size: 2rem;
        font-weight: 700;
        aspect-ratio: 3 / 2;
        list-style: none;
        background-color: #80808020;
        padding: 5px;
        border-radius: 20px;
        display: grid;
        place-content: center;
        position: relative;
        text-align: center;
    }
    & li>span {
        opacity: 0.3;
        position: absolute;
        top: 10%;
        left: 50%;
        transform: translateX(-50%);
        font-size: 40%;
        align-self: center;
    }
`
