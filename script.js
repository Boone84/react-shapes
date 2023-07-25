function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
  }
  
  const Circle = () => {
    const style = {
      backgroundColor: getRandomColor(),
      borderRadius: '50%',
      width: '100px',
      height: '100px',
      margin: '10px'
    };
    
    return <div style={style}></div>;
  };
  
  const Square = () => {
    const style = {
      backgroundColor: getRandomColor(),
      width: '100px',
      height: '100px',
      margin: '10px'
    };
    
    return <div style={style}></div>;
  };
  
  const App = () => {
    return (
      <div>
        <Circle />
        <Circle />
        <Circle />
        <Square />
        <Square />
        <Square />
      </div>
    );
  };
  
  ReactDOM.render(<App />, document.getElementById('root'));
  