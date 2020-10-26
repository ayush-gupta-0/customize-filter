import React, {useState} from 'react';
import { Button, Modal, InputGroup, ButtonGroup, FormGroup, Nav} from 'react-bootstrap';

import './Filter.css';

import nveg from '../icons/icon-nveg.png';
import veg from '../icons/icon-veg.png';

function Filter() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [firstsub, setFirstsub] = useState("Tandoori Chicken Tikka");
    const [secondsub, setSecondsub] = useState("Tandoori Chicken Tikka");
    const [bread, setBread] = useState("Multigrain Bread");
    const [preparation, setPreparation] = useState("Plain Bread");
    // const [sauce, setSauce] = useState([]);
    // const [veggies, setVeggies] = useState([]);

    const [limit, setLimit] = useState(0);
    const [addon, setAddon] = useState(2);



    const handleChange1 = (event) => setFirstsub(event.target.value);
    const handleChange2 = (event) => setSecondsub(event.target.value);
    const handleChange3 = (event) => setBread(event.target.value);
    const handleChange4 = (event) => setPreparation(event.target.value);

    function handleLimit() {
        var a = document.getElementsByName("check1");
        var newvar = 0;
        var count;
        for(count=0; count<a.length; count++){
            if(a[count].checked===true){
                newvar = newvar + 1;
            }
        }
        if (newvar>=3){
            var checkboxes1 = document.querySelectorAll('.sauceCheckbox input[type="checkbox"]');
            console.log(checkboxes1);
            for (const checkbox of checkboxes1) {
                if(checkbox.checked===false){
                    // checkbox.disabled=true;
                    
                }
            }
        }
        if (newvar<3){
            var checkboxes2 = document.querySelectorAll('.sauceCheckbox input[type="checkbox"]');
            for (const checkbox of checkboxes2) {
                if(checkbox.disabled===true){
                    checkbox.disabled=false;
                }
            }
        }
        setLimit(newvar);   
        return newvar;
    }

    function handleAddon() {
        var a = document.getElementsByName("check2");
        var vegetables = 0;
        var count;
        for(count=0; count<a.length; count++){
            if(a[count].checked===true){
                vegetables = vegetables + 1;
            }
        }

        const b = document.querySelectorAll('input[name="bread"]');
        var bread = 0;
        for (const i of b) {
            if (i.checked) {
                  bread = bread + 1;
                }
        }

        const c = document.querySelectorAll('input[name="preparation"]');
        var preparation = 0;
        for (const i of c) {
            if (i.checked) {
                  preparation = preparation + 1;
                }
        }

        setAddon(vegetables+bread+preparation+handleLimit());
    }

    function showItems() {

    }

    return (
        <div>
          <Button variant="primary" onClick={handleShow}>
            Customize Your Sub
          </Button>
    
          <Modal show={show} onHide={handleClose} centered scrollable className="Modal">
            <Modal.Header closeButton>
              <FormGroup vertical>
                <Modal.Title><img src={nveg} alt="nonveg" width="15" height="15" className="icon"/>Food Option Food OptionFood OptionFood OptionFood OptionFood Option </Modal.Title>
                </FormGroup>
            </Modal.Header>
            <Nav id="nav"   >
                    <Nav.Item className="navlink">
                        <Nav.Link href="#one">Choice of 1st Sub •</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="navlink">
                        <Nav.Link href="#two" >Choice of 2nd Sub •</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="navlink">
                        <Nav.Link href="#three">Choice of Bread •</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="navlink">
                        <Nav.Link href="#four">Choice of Preparation •</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="navlink">
                        <Nav.Link href="#five">Choice of Sauce Any (3) •</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="navlink">
                        <Nav.Link href="#six">Choice of Vegetables</Nav.Link>
                    </Nav.Item>
                </Nav>
            
            <Modal.Body id="modal-body">

                
                <InputGroup vertical>
                    <ButtonGroup vertical onChange={handleChange1}>
                    <th className="choice-headings" id="one">Choice of 1st Sub</th>
                    <label><tr>
                        
                            <img src={nveg} alt="nonveg" width="15" height="15" className="icon"/>
                            <input type="radio" value="Tandoori Chicken Tikka" defaultChecked aria-label="Radio button for following text input" name="Choice of 1st Sub"/>
                            Tandoori Chicken Tikka</tr> </label>
                    <label><tr>
                            <img src={nveg} alt="nonveg" width="15" height="15" className="icon"/>
                            <input type="radio" value="Peri Peri Chicken" aria-label="Radio button for following text input" name="Choice of 1st Sub"/>
                            Peri Peri Chicken</tr></label>           
                    <label><tr>
                            <img src={nveg} alt="nonveg" width="15" height="15" className="icon"/>
                            <input type="radio" value="Chicken Slice" aria-label="Radio button for following text input" name="Choice of 1st Sub"/>
                            Chicken Slice</tr></label>
                        
                    <label><tr>
                        <img src={nveg} alt="nonveg" width="15" height="15" className="icon"/>
                            <input type="radio" value="Roasted Chicken Strips" aria-label="Radio button for following text input" name="Choice of 1st Sub"/>
                            Roasted Chicken Strips</tr></label>
                        
                    </ButtonGroup>
                </InputGroup>
                
                <br/>

                <InputGroup>
                    <ButtonGroup vertical onChange={handleChange2}>
                    <th className="choice-headings" id="two" >Choice of 2nd Sub</th>
                        <label><tr>
                        <img src={nveg} alt="nonveg" width="15" height="15" className="icon"/>
                            <input type="radio" value="Tandoori Chicken Tikka" defaultChecked aria-label="Radio button for following text input" name="Choice of 2nd Sub"/>
                            Tandoori Chicken Tikka
                            </tr></label>
                            <label><tr>
                            <img src={nveg} alt="nonveg" width="15" height="15" className="icon"/>
                            <input type="radio" value="Peri Peri Chicken" aria-label="Radio button for following text input" name="Choice of 2nd Sub"/>
                            Peri Peri Chicken
                            </tr></label>
                            <label><tr>
                            <img src={nveg} alt="nonveg" width="15" height="15" className="icon"/>
                            <input type="radio" value="Chicken Slice" aria-label="Radio button for following text input" name="Choice of 2nd Sub"/>
                            Chicken Slice
                            </tr></label>
                            <label><tr>
                            <img src={nveg} alt="nonveg" width="15" height="15" className="icon"/>
                            <input type="radio" value="Roasted Chicken Strips" aria-label="Radio button for following text input" name="Choice of 2nd Sub"/>
                            Roasted Chicken Strips
                            </tr></label>
                    </ButtonGroup>
                </InputGroup>

                <br/>

                <InputGroup>
                    <ButtonGroup vertical onChange={handleAddon}>
                    <th className="choice-headings" id="three" >Choice of bread</th>
                        <label><tr>
                            <img src={veg} alt="veg" width="12" height="12" className="icon"/>
                            <input type="radio" defaultChecked aria-label="Radio button for following text input" name="bread"/>
                            Multigrain Bread
                        </tr></label>
                        <label><tr>
                            <img src={veg} alt="veg" width="12" height="12" className="icon"/>
                            <input type="radio" aria-label="Radio button for following text input" name="bread"/>
                            Multigrain Honey Oats Bread
                        </tr></label>
                        <label><tr>
                            <img src={veg} alt="veg" width="12" height="12" className="icon"/>
                            <input type="radio" aria-label="Radio button for following text input" name="bread"/>
                            White Italian Bread
                        </tr></label>
                        <label><tr>
                            <img src={veg} alt="veg" width="12" height="12" className="icon"/>
                            <input type="radio" aria-label="Radio button for following text input" name="bread"/>
                            Roasted Garlic Bread
                        </tr></label>
                        <label><tr>
                            <img src={veg} alt="veg" width="12" height="12" className="icon"/>
                            <input type="radio" aria-label="Radio button for following text input" name="bread"/>
                            Parmesan Oregano Bread
                        </tr></label>
                        <label><tr>
                            <img src={veg} alt="veg" width="12" height="12" className="icon"/>
                            <input type="radio" aria-label="Radio button for following text input" name="bread"/>
                            Flat Bread
                        </tr></label>
                    </ButtonGroup>
                </InputGroup>

                <br/>

                <InputGroup>
                    <ButtonGroup vertical onChange={handleAddon}>
                    <th className="choice-headings" id="four" >Choice of Preparation</th>
                    <label><tr>
                            <img src={veg} alt="veg" width="12" height="12" className="icon"/>
                            <input type="radio" defaultChecked aria-label="Radio button for following text input" name="preparation"/>
                            Plain Bread
                        </tr></label>
                        <label><tr>
                            <img src={veg} alt="veg" width="12" height="12" className="icon"/>
                            <input type="radio" aria-label="Radio button for following text input" name="preparation"/>    
                            Plain Bread With Cheese Slice
                        </tr></label>
                        <label><tr>
                            <img src={veg} alt="veg" width="12" height="12" className="icon"/>
                            <input type="radio" aria-label="Radio button for following text input" name="preparation"/>
                            Toasted Bread
                            </tr></label>
                            <label><tr>
                            <img src={veg} alt="veg" width="12" height="12" className="icon"/>
                            <input type="radio" aria-label="Radio button for following text input" name="preparation"/>
                            Toasted Bread With Cheese Slice
                            </tr></label>
                            <label><tr>
                            <img src={veg} alt="veg" width="12" height="12" className="icon"/>
                            <input type="radio" aria-label="Radio button for following text input" name="preparation"/>
                            Toasted With Mozzarella Cheese
                        </tr></label>
                    </ButtonGroup>
                </InputGroup>

                <br/>
                
                <InputGroup >
                    <ButtonGroup vertical onChange={handleAddon} className="sauceCheckbox">
                    <th className="choice-headings" id="five" >Choice of Sauce Any (3)(optional)</th>
                    <label><tr>
                            <img src={veg} alt="veg" width="12" height="12" className="icon"/>
                            <input type="checkbox" name="check1" onClick={handleLimit} aria-label="Checkbox for following text input" />
                            Mayonnaise
                            </tr></label>
                            <label><tr>
                            <img src={veg} alt="veg" width="12" height="12" className="icon"/>
                            <input type="checkbox" name="check1" onClick={handleLimit} aria-label="Checkbox for following text input" />
                            Mint Mayonnaise
                        </tr></label>
                        <label><tr>
                            <img src={veg} alt="veg" width="12" height="12" className="icon"/>
                            <input type="checkbox" name="check1" onClick={handleLimit} aria-label="Checkbox for following text input" />
                            Chipotle South West
                        </tr></label>
                        <label><tr>
                            <img src={veg} alt="veg" width="12" height="12" className="icon"/>
                            <input type="checkbox" name="check1" onClick={handleLimit} aria-label="Checkbox for following text input" />
                            Red Chill
                        </tr></label>
                        <label><tr>
                            <img src={veg} alt="veg" width="12" height="12" className="icon"/>
                            <input type="checkbox" name="check1" onClick={handleLimit} aria-label="Checkbox for following text input" />
                            Marinara
                        </tr></label>
                        <label><tr>
                            <img src={veg} alt="veg" width="12" height="12" className="icon"/>
                            <input type="checkbox" name="check1" onClick={handleLimit} aria-label="Checkbox for following text input" />
                            Barbeque
                        </tr></label>
                        <label><tr>
                            <img src={veg} alt="veg" width="12" height="12" className="icon"/>
                            <input type="checkbox" name="check1" onClick={handleLimit} aria-label="Checkbox for following text input" />
                            Tandoori Mayo
                        </tr></label>
                        <label><tr>
                            <img src={veg} alt="veg" width="12" height="12" className="icon"/>
                            <input type="checkbox" name="check1" onClick={handleLimit} aria-label="Checkbox for following text input" />
                            Sweet Onion
                        </tr></label>
                        <label><tr>
                            <img src={veg} alt="veg" width="12" height="12" className="icon"/>
                            <input type="checkbox" name="check1" onClick={handleLimit} aria-label="Checkbox for following text input" />
                            Honey Mustard
                        </tr></label>
                    </ButtonGroup>
                </InputGroup>

                <br/>

                <InputGroup >
                    <ButtonGroup vertical>
                    <th className="choice-headings" id="six" >Choice of Vegetables (optional)</th>
                        <label><tr>
                            <img src={veg} alt="veg" width="12" height="12" className="icon"/>
                            <input type="checkbox" name="check2" onClick={handleAddon} aria-label="Checkbox for following text input" />
                            Lettuce
                        </tr></label>
                        <label><tr>
                            <img src={veg} alt="veg" width="12" height="12" className="icon"/>
                            <input type="checkbox" name="check2" onClick={handleAddon} aria-label="Checkbox for following text input" />
                            Tomato
                        </tr></label>
                        <label><tr>
                            <img src={veg} alt="veg" width="12" height="12" className="icon"/>
                            <input type="checkbox" name="check2" onClick={handleAddon} aria-label="Checkbox for following text input" />
                            Cucumber
                        </tr></label>
                        <label><tr>
                            <img src={veg} alt="veg" width="12" height="12" className="icon"/>
                            <input type="checkbox" name="check2" onClick={handleAddon} aria-label="Checkbox for following text input" />
                            Pickle
                        </tr></label>
                        <label><tr>
                            <img src={veg} alt="veg" width="12" height="12" className="icon"/>
                            <input type="checkbox" name="check2" onClick={handleAddon} aria-label="Checkbox for following text input" />
                            Capsicum
                        </tr></label>
                        <label><tr>
                            <img src={veg} alt="veg" width="12" height="12" className="icon"/>
                            <input type="checkbox" name="check2" onClick={handleAddon} aria-label="Checkbox for following text input" />
                            Olives
                        </tr></label>
                        <label><tr>
                            <img src={veg} alt="veg" width="12" height="12" className="icon"/>
                            <input type="checkbox" name="check2" onClick={handleAddon} aria-label="Checkbox for following text input" />
                            Onions
                        </tr></label>
                        <label><tr>
                            <img src={veg} alt="veg" width="12" height="12" className="icon"/>
                            <input type="checkbox" name="check2" onClick={handleAddon} aria-label="Checkbox for following text input" />
                            Jalapenos
                        </tr></label>
                        <label><tr>
                            <img src={veg} alt="veg" width="12" height="12" className="icon"/>
                            <input type="checkbox" name="check2" onClick={handleAddon} aria-label="Checkbox for following text input" />
                            Salt And Pepper
                        </tr></label>
                    </ButtonGroup>
                </InputGroup>

            </Modal.Body>
            
            {limit>3 ? <div id="notvalid">You can select a maximum of 3 Choice of Sauce Any (3).</div>:<div id="valid"> </div>}
            
            <Modal.Footer>
            
                <div id="Chosen"><div id="Subs">{firstsub}, {secondsub}</div> <div id="Addon" onClick={showItems}>+{addon} Add On</div></div>
                {/*<div>{firstsub}, {secondsub}, {bread}, {preparation}</div>*/}
                <Button variant="secondary" onClick={handleClose} hidden>
                    Close
                </Button>
                <Button variant="success" onClick={handleClose} id="AddItem" >
                    ADD ITEM
                </Button>
            </Modal.Footer>
          </Modal>
        </div>
      );
}

export default Filter;