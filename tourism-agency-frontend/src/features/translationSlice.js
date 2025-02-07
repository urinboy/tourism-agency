import { createSlice } from "@reduxjs/toolkit";

const translationSlice = createSlice({
    name: "translations",
    initialState: { translations: {} },
    reducers: {
        setTranslations: (state, action) => {
            state.translations = action.payload;
        }
    }
});

export const { setTranslations } = translationSlice.actions;
export default translationSlice.reducer;
