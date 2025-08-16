function App() {
  const [time, setTime] = React.useState(new Date().toLocaleTimeString());
  React.useEffect(() => {
    setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
  }, []);
  return React.createElement("h1", null, `Hello React!🚀 ${time}`);
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(React.createElement(App));
