import './Button.scss';
import PropTypes from 'prop-types';

const Button = ({ text, handler, type='default', color = 'green' }) => {
    return (
        <button onClick={handler} className={`btn btn--${type} btn--${color}`}>
            { text }
        </button>
    );
}

export default Button;

Button.propTypes = {
    text: PropTypes.string.isRequired,
    handler: PropTypes.func.isRequired,
    type: PropTypes.string,
    color: PropTypes.string,
};