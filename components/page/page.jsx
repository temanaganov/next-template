import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Head from 'next/head';
import s from './page.module.scss';

const Page = ({ title, ogTitle, keywords, description, ogDescription, url, className, children }) => {
    return (
        <>
            <Head>
                <meta name="keywords" content={keywords} />
                <meta name="description" content={description} />
                <meta property="og:title" content={ogTitle ?? title} />
                <meta property="og:description" content={ogDescription ?? description} />
                <meta property="og:image" content="" />
                <meta property="og:url" content={url} />
                <meta property="og:type" content="website" />
                <title>{title}</title>
            </Head>
            <main className={cx(s.page, className)}>{children}</main>
        </>
    );
};

Page.defaultProps = {
    ogTitle: '',
    ogDescription: '',
};

Page.propTypes = {
    title: PropTypes.string.isRequired,
    ogTitle: PropTypes.string,
    keywords: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    ogDescription: PropTypes.string,
    url: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default Page;
