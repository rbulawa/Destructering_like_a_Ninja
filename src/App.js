import React from 'react';
import './styles.css';
console.clear();

const Card = ({ title, children }) => {
  return (
    <div className="card">
      <h1>{title}</h1>
      <p>{children}</p>
    </div>
  );
};

const Paragraph = ({ text, children }) => {
  return (
    <>
      <h3>{text}</h3>
      <p>{children}</p>
    </>
  );
};

class App extends React.Component {
  state = {
    firstName: { value: 'John', required: true },
    lastName: { value: 'Doe', required: true },
    password: { value: '124dfhf785f', required: true },
    email: { value: 'johndoe@gmail.com', required: true }
  };

  handleChange = ({ target: { name, value } }) => {
    // This is the normal way when we pass in the 'e' - event
    // console.log(e.target.name, e.target.value);
    // this.setState({
    //   [e.target.name]: { ...this.state[e.target.name], value: e.target.value }
    // });

    // This is a Ninja Way :)
    this.setState({
      [name]: { ...this.state[name], value }
    });
  };

  render() {
    return (
      <div className="App">
        <Card title="Card 1">Children text</Card>
        <Card title="Card 2">
          <h4>This is also a children element</h4>
        </Card>
        <Card title="Card 3">
          <Paragraph text="Paragraph text" />
          <Paragraph>And thats the Second children element</Paragraph>
        </Card>

        {Object.keys(this.state).map((key) => {
          return (
            <>
              <label>{key}</label>
              <input
                onChange={this.handleChange}
                name={key}
                key={key}
                placeholder={this.state[key].value}
              />
            </>
          );
        })}
      </div>
    );
  }
}

export default App;
