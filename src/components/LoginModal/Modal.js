import React from 'react'
//import {connect } from 'react-redux';
import { Modal, Form } from 'react-bootstrap';
import { makeStyles } from '@material-ui/core/styles';
import { Divider, CircularProgress, Backdrop} from '@material-ui/core';
//import { Button, Image } from '../../../../../../../component';
//import { avtar } from '../../../../../../../images'
const Modall = () => {
    return (
        <Modal
            size="md"
            // backdrop="static"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className={`actionModalViewLead showmanager p-0 m-0`}
            style={{zIndex:'2000',height:'auto !important'}}
        >
            <Modal.Header>
                <span >Select max three organistions</span>
            </Modal.Header>
            <Modal.Body closeButton style={{height:'auto !important'}}>
                <Backdrop  >
                    <CircularProgress color="inherit" />
                </Backdrop>
                
                <div className={``}>
                  
                        <> 
                            <Divider  className={`mb-2 mt-2`}/>
                                            
                            <Divider className={`mt-2 mb-2`}/>
                                <Form.Control type="number" placeholder="Enter commision" />
                            <Divider className={`mt-2 mb-2`}/>
                        </>
                </div>  
            </Modal.Body>
            <Modal.Footer>
                <div className={`d-flex justify-content-end pt-3`}>
                    <button label={`CANCEL`} />
                    <button label={`SUBMIT`} />
                </div>
            </Modal.Footer>
        </Modal>
    )
                }

export default  Modall;