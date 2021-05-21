import { useState } from 'react';
import { Button, Container, Row, Col, InputGroup, FormControl} from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

function App() {
  const [age, setAge] = useState(2);
  const [grams, setGrams] = useState(100);

  const gramsToCalculate = grams < 20 ? grams : 20;
  const lifeSpan = parseInt(age) + parseInt(gramsToCalculate);

  return (
    <div className="App">
      <Container>
        <Row className="justify-content-md-center">
          <Col xs lg="6">
            <h5>DEMO</h5>
            <h1>cloomis</h1>
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon1">I am</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                value={age}
                aria-label="age"
                aria-describedby="basic-addon1"
                onChange={e => setAge(e.target.value)}
              />
              <InputGroup.Append>
                <InputGroup.Text id="basic-addon2">years old and </InputGroup.Text>
              </InputGroup.Append>
            </InputGroup>
            <InputGroup className="mb-3">
            <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon1">I eat</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                value={grams}
                aria-label="grams"
                aria-describedby="basic-addon1"
                onChange={e => setGrams(e.target.value)}
              />
              <InputGroup.Append>
                <InputGroup.Text id="basic-addon2">grams of nuts per day.</InputGroup.Text>
              </InputGroup.Append>
            </InputGroup>
            <h4 className="result">My expected lifespan is <span>{lifeSpan}</span> years!</h4>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
