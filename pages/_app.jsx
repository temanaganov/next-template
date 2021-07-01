import React from 'react';
import PropTypes from 'prop-types';
import '@styles/main.scss';

function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />;
}

MyApp.propTypes = {
    Component: PropTypes.elementType.isRequired,
    pageProps: PropTypes.object.isRequired,
};

export default MyApp;
