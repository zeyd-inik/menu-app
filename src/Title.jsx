const Title = ({ text }) => {
  return (
    <header className="title-comp">
      <h1>{text || 'Default Title'}</h1>
      <div className="underline"></div>
    </header>
  );
};
export default Title;
