import { useEffect } from 'react';

// Shows a message in a box over a dimmed background.
// props: message (empty string = show nothing), onClose
function SuccessPopup(props) {
  // close by itself after 3 seconds
  // (hooks must come before the early return below)
  useEffect(() => {
    if (!props.message) {
      return;
    }
    const timer = setTimeout(props.onClose, 3000);
    return () => clearTimeout(timer);
  }, [props.message]);

  // nothing to show, so render nothing
  if (!props.message) {
    return null;
  }

  return (
    <div className="modal-backdrop" onClick={props.onClose}>
      <div
        className="modal success-modal"
        role="status"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="success-icon">✓</div>
        <h3>Success</h3>
        <p>{props.message}</p>
        <button type="button" className="btn btn-primary" onClick={props.onClose}>
          OK
        </button>
      </div>
    </div>
  );
}

export default SuccessPopup;