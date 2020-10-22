import React, {useState} from 'react';
import { Button, Modal, InputGroup, ButtonGroup, FormGroup, Nav} from 'react-bootstrap';

import './Filter.css';

function Filter() {
    const [show, setShow] = useState(false);
    const [firstsub, setFirstsub] = useState("");

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    console.log(firstsub);

    return (
        <div>
          <Button variant="primary" onClick={handleShow}>
            Customize Your Sub
          </Button>
    
          <Modal show={show} onHide={handleClose} centered scrollable dialogClassName="modal-width" className="Modal">
            <Modal.Header closeButton>
              <FormGroup vertical>
                <Modal.Title>Food Option</Modal.Title>
                
                <Nav>
                    <Nav.Item className="choice-links">
                        <Nav.Link href="#one" >Choice of 1st Sub •</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="choice-links">
                        <Nav.Link href="#two" >Choice of 2nd Sub •</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="choice-links">
                        <Nav.Link href="#three" >Choice of Bread •</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="choice-links">
                        <Nav.Link href="#four" >Choice of Preparation •</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="choice-links">
                        <Nav.Link href="#five" >Choice of Sauce Any (3) •</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#six" className="choice-links">Choice of Vegetables</Nav.Link>
                    </Nav.Item>
                </Nav>
                </FormGroup>
            </Modal.Header>
            <Modal.Body>
                
                <div className="choice-headings" id="one" >Choice of 1st Sub</div>
                <InputGroup vertical>
                    <ButtonGroup vertical id="one.one">
                        
                        <td>
                            <input type="radio" value="Tandoori Chicken Tikka" onSelect={()=>setFirstsub("Tandoori Chicken Tikka")} aria-label="Radio button for following text input" name="Choice of 1st Sub"/>
                            Tandoori Chicken Tikka</td>                        
                        <td>
                            <input type="radio" value="" aria-label="Radio button for following text input" name="Choice of 1st Sub"/>
                            Peri Peri Chicken</td>
                        
                        
                        <td>
                            <input type="radio" aria-label="Radio button for following text input" name="Choice of 1st Sub"/>
                            Chicken Slice</td>
                        
                        <td>
                            <input type="radio" aria-label="Radio button for following text input" name="Choice of 1st Sub"/>
                            Roasted Chicken Strips</td>
                        
                    </ButtonGroup>
                </InputGroup>
                
                <br/>

                <div className="choice-headings" id="two">Choice of 2nd Sub</div>
                <InputGroup>
                    <ButtonGroup vertical>
                        <td>
                            <input type="radio" value="Tandoori Chicken Tikka" aria-label="Radio button for following text input" name="Choice of 2nd Sub"/>
                            Tandoori Chicken Tikka
                            </td>
                            <td>
                            <input type="radio" aria-label="Radio button for following text input" name="Choice of 2nd Sub"/>
                            Peri Peri Chicken
                            </td>
                            <td>
                            <input type="radio" aria-label="Radio button for following text input" name="Choice of 2nd Sub"/>
                            Chicken Slice
                            </td>
                            <td>
                            <input type="radio" aria-label="Radio button for following text input" name="Choice of 2nd Sub"/>
                            Roasted Chicken Strips
                            </td>
                    </ButtonGroup>
                </InputGroup>

                <br/>

                <div className="choice-headings" id="three">Choice of bread</div>
                <InputGroup>
                    <ButtonGroup vertical>
                        <td>
                            <input type="radio" aria-label="Radio button for following text input" name="Choice of bread"/>
                            Multigrain Bread
                            </td>
                            <td>
                            <input type="radio" aria-label="Radio button for following text input" name="Choice of bread"/>
                            Multigrain Honey Oats Bread
                            </td>
                            <td>
                            <input type="radio" aria-label="Radio button for following text input" name="Choice of bread"/>
                            White Italian Bread
                            </td>
                            <td>
                            <input type="radio" aria-label="Radio button for following text input" name="Choice of bread"/>
                            Roasted Garlic Bread
                            </td>
                            <td>
                            <input type="radio" aria-label="Radio button for following text input" name="Choice of bread"/>
                            Parmesan Oregano Bread
                            </td>
                            <td>
                            <input type="radio" aria-label="Radio button for following text input" name="Choice of bread"/>
                            Flat Bread
                        </td>
                    </ButtonGroup>
                </InputGroup>

                <br/>

                <div className="choice-headings" id="four">Choice of Preparation</div>
                <InputGroup>
                    <ButtonGroup vertical>
                    <td>
                            <input type="radio" aria-label="Radio button for following text input" name="Choice of Preparation"/>
                            Plain Bread
                            </td>
                        <td>
                            <input type="radio" aria-label="Radio button for following text input" name="Choice of Preparation"/>    
                            Plain Bread With Cheese Slice
                        </td>
                        <td>
                            <input type="radio" aria-label="Radio button for following text input" name="Choice of Preparation"/>
                            Toasted Bread
                            </td>
                        <td>
                            <input type="radio" aria-label="Radio button for following text input" name="Choice of Preparation"/>
                            Toasted Bread With Cheese Slice
                            </td>
                        <td>
                            <input type="radio" aria-label="Radio button for following text input" name="Choice of Preparation"/>
                            Toasted With Mozzarella Cheese
                        </td>
                    </ButtonGroup>
                </InputGroup>

                <br/>
                
                <div className="choice-headings" id="five">Choice of Sauce Any (3)(optional)</div>
                <InputGroup >
                    <ButtonGroup vertical>
                        <td>
                            <input type="checkbox" aria-label="Checkbox for following text input" />
                            Mayonnaise
                            </td>
                        <td>
                            <input type="checkbox" aria-label="Checkbox for following text input" />
                            Mint Mayonnaise
                        </td>
                        <td>
                            <input type="checkbox" aria-label="Checkbox for following text input" />
                            Chipotle South West
                        </td>
                        <td>
                            <input type="checkbox" aria-label="Checkbox for following text input" />
                            Red Chilli
                        </td>
                        <td>
                            <input type="checkbox" aria-label="Checkbox for following text input" />
                            Marinara
                        </td>
                        <td>
                            <input type="checkbox" aria-label="Checkbox for following text input" />
                            Barbeque
                        </td>
                        <td>
                            <input type="checkbox" aria-label="Checkbox for following text input" />
                            Tandoori Mayo
                        </td>
                        <td>
                            <input type="checkbox" aria-label="Checkbox for following text input" />
                            Sweet Onion
                        </td>
                        <td>
                            <input type="checkbox" aria-label="Checkbox for following text input" />
                            Honey Mustard
                        </td>
                    </ButtonGroup>
                </InputGroup>

                <br/>

                <div className="choice-headings" id="six">Choice of Vegetables (optional)</div>
                <InputGroup >
                    <ButtonGroup vertical>
                        <td>
                            <input type="checkbox" aria-label="Checkbox for following text input" />
                            Lettuce
                        </td>
                        <td>
                            <input type="checkbox" aria-label="Checkbox for following text input" />
                            Tomato
                        </td>
                        <td>
                            <input type="checkbox" aria-label="Checkbox for following text input" />
                            Cucumber
                        </td>
                        <td>
                            <input type="checkbox" aria-label="Checkbox for following text input" />
                            Pickle
                        </td>
                        <td>
                            <input type="checkbox" aria-label="Checkbox for following text input" />
                            Capsicum
                        </td>
                        <td>
                            <input type="checkbox" aria-label="Checkbox for following text input" />
                            Olives
                        </td>
                        <td>
                            <input type="checkbox" aria-label="Checkbox for following text input" />
                            Onions
                        </td>
                        <td>
                            <input type="checkbox" aria-label="Checkbox for following text input" />
                            Jalapenos
                        </td>
                        <td>
                            <input type="checkbox" aria-label="Checkbox for following text input" />
                            Salt And Pepper
                        </td>
                    </ButtonGroup>
                </InputGroup>

            </Modal.Body>
            <Modal.Footer>
            
              <Button variant="secondary" onClick={handleClose} hidden>
                Close
              </Button>
              <Button variant="success" onClick={handleClose} style={{width: "100%"}}>
                ADD ITEM
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      );
}

export default Filter;