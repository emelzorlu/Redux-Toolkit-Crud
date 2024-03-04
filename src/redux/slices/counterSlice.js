import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
    name: 'counter',
    initialState: { count: 0, isDarkTheme: true },

    // state'in nasıl değişeceğine karar veren fonksiyonları tanımlarız

reducers: {
    increase: (state) => {
        state.count++;
    },
    decrease: (state) => {
        state.count--;
    },
    setCount: (state, action) => {
        state.count = action.payload;
    },
    toggleTheme: (state) => {
        state.isDarkTheme = !state.isDarkTheme;
    },
  },
});

//counter slice'in oluşturduğu reducer'ı store'da kullanmak için export ederiz

export default counterSlice.reducer;

//counter slide'ın oluşturduğu aksiyon fonksiyonlarını bileşenlerde kullanmak için export ederiz

export const { decrease, increase, setCount, toggleTheme } = counterSlice.actions;
