import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider, createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import GlobalStyle from './globalStyles';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import store from './client/store';

// Create your own application color palette here
// See the documentation:
// https://material-ui.com/customization/color/#playground
let theme = createMuiTheme({
  palette: {
    primary: {
      light: '#F8F8F8',
      main: '#3E51B5',
      dark: '#11999E',
      contrastText: '#FFFFFF',
    },
    secondary: {
      light: '#F8F8F8',
      main: '#DDDDDD',
      dark: '#757575',
      contrastText: '#000000',
    },
  },
});
theme = responsiveFontSizes(theme);

const AppWithProvider = (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </Provider>
);

ReactDOM.render(
  AppWithProvider,
  // eslint-disable-next-line no-undef
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
