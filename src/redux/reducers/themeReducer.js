const initialState = {
    isDarkMode: localStorage.getItem('bg_color') === 'dark',
};

const themeReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'TOGGLE_THEME':
            const newTheme = !state.isDarkMode ? 'dark' : 'light';
            localStorage.setItem('bg_color', newTheme);
            return {
                ...state,
                isDarkMode: !state.isDarkMode,
            };
        default:
            return state;
    }
};

export default themeReducer;