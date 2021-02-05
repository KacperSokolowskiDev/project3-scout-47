import styled from 'styled-components';
// import colors from '../utils/colors';
const colors = {
    menu: '#43425D',
    menuSelect: '#00000024',
    menuSelectBorder: '#6C63FF',
    buttons: '#6C63FF',
    videospaceBackground: 'rgb(240, 240, 240)',
    freeSlot: '#6C63FF',
    pendingSlot: '#6c63ff42',
    pendingStatusBackground: 'rgb(253, 245, 232)',
    approvedStatusBackground: 'rgb(230, 249, 238)',
    profileShadows: '#6c63ff42',
    chatMe: '#6c63ff42',
    chatOther: 'rgb(230, 230, 230)',
    chatDisabled: 'rgb(200, 200, 200)',
    lessonSlot: '#43425D',
    pageTitleText: 'rgb(90, 90, 110)',
    subTitleText: 'rgb(90, 90, 110)',
    dashboardBorder: 'rgb(230, 230, 230)',
    contactsBorder: 'rgb(230, 230, 230)',
    contactHover: 'rgb(245, 245, 245)',
    contactSelected: 'rgb(230, 230, 230)',
    modalBorder: 'rgb(230, 230, 230)',
    widgetBackground: 'rgb(240, 240, 240)',
    widgetFont: 'rgb(215, 88, 70)',
    tableHeader: '#43425D',
    tableRows: '#6c63ff42',
};
const ButtonPlain = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px 10px;
    color: #ffffff;
    border: solid 1px ${colors.buttons};
    cursor: pointer;
    background-color: ${colors.buttons};
    border-radius: 5px;

    &:focus {
        outline: none;
    }
`

export default ButtonPlain;