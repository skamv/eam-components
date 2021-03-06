import React, {Component} from 'react';
import Dropzone from 'react-dropzone'
import Tune from 'mdi-material-ui/Tune'
import ContentSaveOutline from 'mdi-material-ui/ContentSaveOutline'
import IconButton from '@material-ui/core/IconButton';
import FilePlus from 'mdi-material-ui/FilePlus'
import DotsVertial from 'mdi-material-ui/DotsVertical'
import NCRCreationProperties from "./NCRCreationProperties";
import FileList from "../../FileList";
import WSEDMS from "../../../../../tools/WSEDMS";
import EAMInput from "../../../inputs/EAMInput";
import EAMSelect from "../../../inputs/EAMSelect";

class NCRCreation extends Component {

    state = {
        files: [],
        title: "",
        type: "",
        description: "",
        NCRProperties: [],
        showNCRProperties: false,
        currentProperties: {},
        equipmentWorkOrders: {},
        currentEquipmentWorkOrder: null
    }

    componentDidMount() {
       this.getNCRProperties()
       this.getEquipmentWorkOrders()
    }

    //
    // STYLES
    //
    mainDivStyle = {
        borderBottom: "3px solid rgb(238, 238, 238)",
        borderTop: "2px solid rgb(238, 238, 238)",
        margin: 5
    }

    newDocStyle = {
        display: "flex",
        alignItems: "center"
    }

    idStyle = {
        margin: 5,
        marginLeft: 10,
        width: 100,
        flex: "0 0 auto",
        fontWeight: 500
    }

    titleStyle = {
        flexGrow: 1,
        display: "flex"
    }

    dropZoneStyle = {
        border: "1px solid white"
    }

    dropZoneActiveStyle = {
        border: "1px dashed #a7a7a7"
    }

    inputStyle = {
        flex: "1 1 auto",
        border: "1px solid #ced4da",
        padding: "5px 10px",
        fontSize: 16,
        transition: "border-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
        borderRadius: 4,
        backgroundColor: "#fff",
    }

    computeNCRPropertiesButtonStyle = () => ({
        color: this.state.showNCRProperties ? 'rgb(0, 170, 255)' : 'rgba(0, 0, 0, 0.54)'
    });

    //
    // HANDLERS
    //
    createDocumentHandler = (event) => {
        let document = {
            title: this.state.title,
            type: 'Report',
            description: this.state.description,
            typeAtt1: 'Non Conformity',
            typeAttributes: 'Non Conformity',
            properties: {
                edms_property: this.flattenProperties()
            }
        }

        // For Assets include the WO number
        if (this.props.objectType === 'A' && this.state.currentEquipmentWorkOrder) {
            let documentLink = {
                objectId: this.state.equipmentWorkOrders[this.state.currentEquipmentWorkOrder].woNumber,
                objectType: 'J'
            }
            this.props.createDocument(document, this.state.files, documentLink)
        } else {
            this.props.createDocument(document, this.state.files)
        }
    }

    onFileDrop = (acceptedFiles, rejectedFiles) => {
        this.setState({files: acceptedFiles})
    }

    setStateProperty = (key, value) => {
        this.setState({
            [key] : value
        })
    }

    getNCRProperties = () => {
        WSEDMS.getNCRProperties().then(response => {
            this.setStateProperty('NCRProperties', response.body.data)})
    }

    getEquipmentWorkOrders = () => {
        let {objectType, objectID} = this.props;
        WSEDMS.getEquipmentWorkOrders(objectType, objectID).then(response => {
            if (objectType === 'J' && Object.keys(response.body.data) && Object.keys(response.body.data).length > 0 ) {
                let equipmentWorkOrder = Object.keys(response.body.data).map(key => response.body.data[key])[0]
                this.setStateProperty('title', 'LHC-QN-' + equipmentWorkOrder.parentEqpCode + '-' + equipmentWorkOrder.stepDesc)
            }
            this.setStateProperty('equipmentWorkOrders', response.body.data)
        })
    }

    setNCRPropertyValue = (key, value) => {
        this.setState((prevstate) => {
            return {
                currentProperties: {
                    ...prevstate.currentProperties,
                    [key]: {
                        name: key,
                        value: value
                    }
                }
            }
        } );
    }

    flattenProperties = () => {
        let props = this.state.currentProperties
        return Object.keys(props).map((key) => props[key])
    }

    equipmentWorkOrderValues = () => {
        var values =  Object.keys(this.state.equipmentWorkOrders).map(key => (
            {
                code: this.state.equipmentWorkOrders[key].stepNumber,
                desc: this.state.equipmentWorkOrders[key].stepNumber + ' - ' + this.state.equipmentWorkOrders[key].woDesc}
            ))
        return values;
    }

    equipmentWorkOrdersHandler = (key, value) => {
        this.setStateProperty('currentEquipmentWorkOrder', value)
        if (value) {
            this.setStateProperty('title', 'LHC-QN-' + this.state.equipmentWorkOrders[value].parentEqpCode + '-' + this.state.equipmentWorkOrders[value].stepDesc)
        }
    }

    //
    // RENDER
    //
    render() {
        return (
            <div style={this.mainDivStyle}>
                <Dropzone style={this.dropZoneStyle}
                          activeStyle={this.dropZoneActiveStyle}
                          disableClick
                          onDrop={this.onFileDrop}
                          ref={dropzone => this.dropzone = dropzone}>
                    <div style={this.newDocStyle}>
                        <div style={this.titleStyle}>
                            <EAMInput label="NCR Title:"
                                      value={this.state.title}
                                      valueKey="title"
                                      updateProperty={(key, value) => this.setStateProperty(key, value)}/>
                        </div>
                        <div>
                            <IconButton onClick={() => this.dropzone.open()}>
                            <FilePlus/>
                        </IconButton>
                        </div>
                        <div>
                            <IconButton onClick={this.createDocumentHandler}>
                                <ContentSaveOutline/>
                            </IconButton>
                        </div>
                        <div>
                            <IconButton style={this.computeNCRPropertiesButtonStyle()}
                                        onClick={() => this.setState({showNCRProperties: !this.state.showNCRProperties})}>
                                <DotsVertial/>
                            </IconButton>
                        </div>

                    </div>

                    {(this.state.files.length > 0) && <FileList files={this.state.files}/>}

                    <EAMInput label="Description"
                              valueKey="description"
                              value={this.state.description}
                              updateProperty={this.setStateProperty}
                    />


                    {this.props.objectType === 'A' &&
                     <EAMSelect label = "Work Orders"
                        value = {this.state.currentEquipmentWorkOrder}
                        values = {this.equipmentWorkOrderValues()}
                        updateProperty = {this.equipmentWorkOrdersHandler}/>
                    }

                    <NCRCreationProperties onNCRPropertyChange={this.setNCRPropertyValue}
                                           onPropertyChange={this.setStateProperty}
                                           type={this.state.type}
                                           NCRProperties={this.state.NCRProperties}
                                           currentProperties={this.state.currentProperties}
                                           showNCRProperties={this.state.showNCRProperties}/>
                </Dropzone>
            </div>
        )
    }
}

export default NCRCreation