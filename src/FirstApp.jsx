import PropTypes from 'prop-types';

export const FirstApp = ({ title, subTitle, name }) => {

    return (
        <>
            {/* <code> { JSON.stringify(newMessage)} </code> */}
            <h1 data-testid="test-title"> {title} </h1>
            <p> {subTitle} </p>
            <p> {subTitle} </p>
            <p> {name} </p>
        </>
    )
}

FirstApp.propTypes = {
    subTitle: PropTypes.string,
    title: PropTypes.string.isRequired,
}

FirstApp.defaultProps = {
    name: 'Laura Mamián',
    subTitle: 'No hay subtítulo',
    // title: 'No hay título',
}