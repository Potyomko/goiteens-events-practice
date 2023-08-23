import styled from 'styled-components';

export const RecipeTitle = styled.h2`
    line-height: 1.5;
    padding: 10px 20px;
    color: ${({ theme }) => { return theme.colors.textColor }};
    display: flex;
    justify-content: center;
    background-color: ${({ theme }) => { return theme.colors.bgColorH2 }};
`
export const EventCard = styled.div`
    border: 3px solid blueviolet;
    display: flex;
    flex-wrap: wrap;
    border: 3px solid blueviolet;
    display: flex;
    flex-wrap: wrap;
`
export const EventsList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    background-color: ${({ theme }) => { return theme.colors.bgColorCard }};
`
export const EventItem = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: calc((100% - 15px * 8) / 4);
    border: 2px solid #f7f772;
    height: 230px;
    background-color: ${({ theme }) => { return theme.colors.bgColorItem }};
`
export const EventName = styled.h3`
    padding: 15px;
`
export const EventParagraph = styled.p`
    padding: 10px;
`
export const EventText = styled.span`
    padding: 10px;
`