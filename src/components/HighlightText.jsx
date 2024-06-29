const HighlightedText = ({ text, pattern }) => {
  const regex = new RegExp(`(${pattern})`, 'gi');
  const parts = text.split(regex);

  return (
    <span>
      {parts.map((part, index) =>
        regex.test(part) ? <span key={index} className="highlight">{part}</span> : part
      )}
    </span>
  );
};

export default HighlightedText;
