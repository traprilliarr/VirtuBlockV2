
  const Breakline = ({ className = '', ...others }) => {
    return (
      <div
        className={`border-t border-neutral-700  ${className}`}
        {...others}
      ></div>
    );
  };
  
  export default Breakline;
  