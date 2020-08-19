import styled from 'styled-components';

export const CheckoutPageContainer = styled.div`
    width: 60%;
    min-height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 50px auto;

    .title {
        margin-bottom: 50px;
    }
`;

export const CheckoutHeader = styled.div`
    width: 100%;
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid darkgrey;
`;

export const CheckoutHeaderBlock = styled.div`
    text-transform: capitalize;
    width: 23%;

    &:last-child {
        width: 8%;
    }
`;

export const CheckoutTotal = styled.div`
    margin-top: 30px;
    margin-left: auto;
    font-size: 36px;
`;

export const CheckoutTestWarning = styled.div`
    text-align: center;
    margin: 50px auto;
    font-weight: 700;
    color: red;
`;