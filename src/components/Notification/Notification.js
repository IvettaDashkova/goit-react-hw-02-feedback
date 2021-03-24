import PropTypes from 'prop-types';

const Notification = ({ message }) => <p>{message}</p>;

Notification.defaultProps = {
  message: 'Unfortunately, there are no reviews at this time',
};

Notification.prototype = {
    message: PropTypes.string
}
export default Notification;