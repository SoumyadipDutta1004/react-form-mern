
const ButtonSpinner = ({ size, color }) => {
  const spinnerStyle = {
    display: 'inline-block',
    width: `${size}px`,
    height: `${size}px`,
    border: `3px solid ${color}`,
    borderRadius: '50%',
    borderTopColor: 'transparent',
    animation: 'spin 0.75s linear infinite',
  };

  return (
    <>
      <style>
        {`
          @keyframes spin {
            to { transform: rotate(360deg); }
          }
        `}
      </style>
      <span style={spinnerStyle} aria-hidden="true" />
    </>
  );
};

export default ButtonSpinner;