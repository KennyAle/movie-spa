import styled from "styled-components";

// Define a styled component called 'Cast' with CSS properties
export const Cast = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;

    & li {
        display: flex;
        flex-direction: column;
        gap: 10px;
        list-style: none;
        padding: 10px;
        text-align: center;
    }

    & li img {
        margin: auto;
        width: 100px;
        height: 100px;
        border-radius: 50%;
        object-fit: cover;
    }
`