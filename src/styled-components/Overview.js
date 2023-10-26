import styled from "styled-components";

// Define a styled component called 'Overview' with CSS properties
export const Overview = styled.section`
    padding: 2rem;
    display: grid;
    grid-template-columns: 300px 1fr;
    gap: 2rem;

    & img {
        width: 100%;
    }

    & section {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
`