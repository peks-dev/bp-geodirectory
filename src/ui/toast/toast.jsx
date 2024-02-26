import "./toast.css";

const Toast = ({ message, type }) => {
  return (
    <div className="notification" data-variant={type}>
      <p className="notification__message">{message}</p>
    </div>
  );
};
export default Toast;
