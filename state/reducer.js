const reducer = (state, action) => {
    switch (action.type) {
        case "Imgchange":
            return {
                ...state,
                smImg600: action.payload.lrgImg,
                smImg: action.payload.mdImg
            }
        case 'SET_DATA':
            return { ...state, ...action.payload };
        default:
            return state;
    }
};

export { reducer };
