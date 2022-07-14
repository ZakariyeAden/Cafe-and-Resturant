
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"
const notify = () => {
  Toastify({
    text: "Check Your Email!",
    className: "success",
    gravity: "bottom", // `top` or `bottom`
    position: "center", 
    style: {
      background: "#40c057",
    }
  }).showToast();
};

export default notify;