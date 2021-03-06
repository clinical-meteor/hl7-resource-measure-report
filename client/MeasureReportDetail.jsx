import { 
  CssBaseline,
  Grid, 
  Container,
  Divider,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Button,
  Tab, 
  Tabs,
  Typography,
  TextField,
  DatePicker,
  Box
} from '@material-ui/core';

import { Row, Col } from 'react-bootstrap';

import React from 'react';
import { ReactMeteorData } from 'meteor/react-meteor-data';
import ReactMixin from 'react-mixin';
import PropTypes from 'prop-types';

import { Meteor } from 'meteor/meteor';

import { get, set } from 'lodash';
// import { setFlagsFromString } from 'v8';

import { ThemeProvider, makeStyles } from '@material-ui/styles';
const useStyles = makeStyles(theme => ({
  button: {
    background: theme.background,
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: theme.buttonText,
    height: 48,
    padding: '0 30px',
  }
}));

// export class MeasureReportDetail extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       measureReportId: false,
//       measureReport: {
//         resourceType: 'MeasureReport',
//         status: 'preliminary',
//         category: {
//           text: ''
//         },
//         effectiveDateTime: '',
//         subject: {
//           display: '',
//           reference: ''
//         },
//         performer: [],
//         device: {
//           display: '',
//           reference: ''
//         },
//         valueQuantity: {
//           value: '',
//           unit: '',
//           system: 'http://unitsofmeasure.org'
//         },
//         valueString: ''
//       },
//       form: {
//         category: '',
//         code: '',
//         value: '',
//         quantity: '',
//         unit: '',
//         deviceDisplay: '',
//         subjectDisplay: '',
//         subjectReference: '',
//         effectiveDateTime: '',
//         loincCode: '',
//         loincCodeText: '',
//         loincCodeDisplay: '',
//         status: ''
//       }
//     }
//   }
//   dehydrateFhirResource(measureReport) {
//     let formData = Object.assign({}, this.state.form);

//     formData.category = get(measureReport, 'type.text')
//     formData.code = get(measureReport, 'code.text')
//     formData.value = get(measureReport, 'valueString')
//     formData.comparator = get(measureReport, 'valueQuantity.comparator')
//     formData.quantity = get(measureReport, 'valueQuantity.value')
//     formData.unit = get(measureReport, 'valueQuantity.unit')
//     formData.deviceDisplay = get(measureReport, 'device.display')
//     formData.subjectDisplay = get(measureReport, 'subject.display')
//     formData.subjectReference = get(measureReport, 'subject.reference')
//     formData.effectiveDateTime = get(measureReport, 'effectiveDateTime')
//     formData.status = get(measureReport, 'status')

//     formData.loincCode = get(measureReport, 'code.codeable[0].code')
//     formData.loincCodeText = get(measureReport, 'code.text')
//     formData.loincCodeDisplay = get(measureReport, 'code.codeable[0].display')

//     return formData;
//   }
//   shouldComponentUpdate(nextProps){
//     process.env.NODE_ENV === "test" && console.log('MeasureReportDetail.shouldComponentUpdate()', nextProps, this.state)
//     let shouldUpdate = true;

//     // received an measureReport from the table; okay lets update again
//     if(nextProps.measureReportId !== this.state.measureReportId){

//       if(nextProps.measureReport){
//         this.setState({measureReport: nextProps.measureReport})     
//         this.setState({form: this.dehydrateFhirResource(nextProps.measureReport)})       
//       }

//       this.setState({measureReportId: nextProps.measureReportId})      
//       shouldUpdate = true;
//     }

//     // both false; don't take any more updates
//     if(nextProps.measureReport === this.state.measureReport){
//       shouldUpdate = false;
//     }
    
//     return shouldUpdate;
//   }
//   getMeteorData() {
//     let data = {
//       measureReportId: this.props.measureReportId,
//       measureReport: false,
//       form: this.state.form,
//       displayDatePicker: false
//     };

//     if(this.props.displayDatePicker){
//       data.displayDatePicker = this.props.displayDatePicker
//     }
    
//     if(this.props.measureReport){
//       data.measureReport = this.props.measureReport;
//       data.form = this.dehydrateFhirResource(this.props.measureReport);
//     }

//     //console.log("MeasureReportDetail[data]", data);
//     return data;
//   }

//   renderDatePicker(displayDatePicker, effectiveDateTime){
//     //console.log('renderDatePicker', displayDatePicker, effectiveDateTime)
//     if(typeof effectiveDateTime === "string"){
//       effectiveDateTime = moment(effectiveDateTime);
//     }
//     // if (displayDatePicker) {
//     //   return (
//     //     <DatePicker 
//     //       name='effectiveDateTime'
//     //       hintText={ setHint("Date of Administration") } 
//     //       container="inline" 
//     //       mode="landscape"
//     //       value={ effectiveDateTime ? effectiveDateTime : null}    
//     //       onChange={ this.changeState.bind(this, 'effectiveDateTime')}      
//     //       fullWidth
//     //     />
//     //   );
//     // }
//   }
//   setHint(text){
//     if(this.props.showHints !== false){
//       return text;
//     } else {
//       return '';
//     }
//   }
//   render() {
//     // console.log('MeasureReportDetail.render()', this.state)
//     //let formData = this.state.form;

//     var patientInputs;
//     if(this.props.showPatientInputs !== false){
//       patientInputs = <Row>
//         <Col md={6}>
//           <TextField
//             id='subjectDisplayInput'                
//             name='subjectDisplay'
//             label='Subject Name'
//             // TimelineSidescrollPage dialog popup
//             // Getting the following when passing an measureReport in via props
//             // A component is changing a controlled input of type text to be uncontrolled. Input elements should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled input element for the lifetime of the component. 
//             // value={ get(this, 'data.form.subjectDisplay') }
//             // onChange={ this.changeState.bind(this, 'subjectDisplay')}
//             // hintText={ setHint('Jane Doe') }
//             // floatingLabelFixed={true}
//             fullWidth
//             /><br/>
//         </Col>
//         <Col md={3}>
//           <TextField
//             id='subjectIdInput'                
//             name='subjectReference'
//             label='Subject ID'
//             // value={ get(this, 'data.form.subjectReference') }
//             // onChange={ this.changeState.bind(this, 'subjectReference')}
//             // hintText={ setHint('Patient/12345') }
//             // floatingLabelFixed={true}
//             fullWidth
//             /><br/>
//         </Col>
//         <Col md={3}>
//           <TextField
//             id='categoryTextInput'                
//             name='category'
//             label='Category'
//             // value={ get(this, 'data.form.category') }
//             // onChange={ this.changeState.bind(this, 'category')}
//             // hintText={ setHint('Vital Signs') }
//             // floatingLabelFixed={true}
//             fullWidth
//             /><br/>
//         </Col>
//       </Row>
//     }

//     return (
//       <div id={this.props.id} className="measureReportDetail">
//         <CardHeader>
//           { patientInputs }

//           <Row>
//             <Col md={3}>
//               <TextField
//                 id='deviceDisplayInput'                
//                 name='deviceDisplay'
//                 label='Device Name'
//                 // value={ get(this, 'data.form.deviceDisplay') }
//                 // onChange={ this.changeState.bind(this, 'deviceDisplay')}
//                 // hintText={ setHint('iHealth Blood Pressure Cuff') }
//                 // floatingLabelFixed={true}
//                 fullWidth
//                 /><br/>
//             </Col>
//             <Col md={3}>
//               <TextField
//                 id='deviceReferenceInput'                
//                 name='deviceReference'
//                 label='Device Name'
//                 // value={ get(this, 'data.form.deviceReference') }
//                 // onChange={ this.changeState.bind(this, 'deviceReference')}
//                 hintText={ setHint('Device/444') }
//                 floatingLabelFixed={true}
//                 fullWidth
//                 /><br/>
//             </Col>
//             <Col md={3}>
//               <br />
//               { this.renderDatePicker(this.data.displayDatePicker, get(this, 'data.form.effectiveDateTime') ) }
//             </Col>

//           </Row>
//         </CardHeader>
//         <CardActions>
//           { this.determineButtons(this.data.measureReportId) }
//         </CardActions>
//       </div>
//     );
//   }
//   determineButtons(measureReportId) {
//     if (measureReportId) {
//       return (
//         <div>
//           <Button id="updateMeasureReportButton" className="saveMeasureReportButton" onClick={this.handleSaveButton.bind(this)} style={{marginRight: '20px'}} >Save</Button>
//           <Button id="deleteMeasureReportButton" onClick={this.handleDeleteButton.bind(this)}> Delete </Button>
//         </div>
//       );
//     } else {
//       return (
//         <Button id="saveMeasureReportButton" label="Save" onClick={this.handleSaveButton.bind(this)}>Save</Button>
//       );
//     }
//   }
//   updateFormData(formData, field, textValue){
//     if(process.env.NODE_ENV === "test") console.log("MeasureReportDetail.updateFormData", formData, field, textValue);

//     switch (field) {
//       case "category":
//         set(formData, 'category', textValue)
//         break;
//       case "code":
//         set(formData, 'code', textValue)
//         break;        
//       case "value":
//         set(formData, 'value', textValue)
//         break;        
//       case "comparator":
//         set(formData, 'comparator', textValue)
//         break;
//       case "quantity":
//         set(formData, 'quantity', textValue)
//         break;
//       case "unit":
//         set(formData, 'unit', textValue)
//         break;
//       case "deviceDisplay":
//         set(formData, 'deviceDisplay', textValue)
//         break;
//       case "subjectDisplay":
//         set(formData, 'subjectDisplay', textValue)
//         break;
//       case "subjectReference":
//         set(formData, 'subjectReference', textValue)
//         break;
//       case "effectiveDateTime":
//         set(formData, 'effectiveDateTime', textValue)
//         break;
//       case "status":
//         set(formData, 'status', textValue)
//         break;
//       case "loincCode":
//         set(formData, 'loincCode', textValue)
//         break;
//       case "loincCodeText":
//         set(formData, 'loincCodeText', textValue)
//         break;
//       case "loincCodeDisplay":
//         set(formData, 'loincCodeDisplay', textValue)
//         break;
//     }

//     if(process.env.NODE_ENV === "test") console.log("formData", formData);
//     return formData;
//   }
//   updateMeasureReport(measureReportData, field, textValue){
//     if(process.env.NODE_ENV === "test") console.log("MeasureReportDetail.updateMeasureReport", measureReportData, field, textValue);

//     switch (field) {
//       case "category":
//         set(measureReportData, 'category.text', textValue)
//         break;
//       case "code":
//         set(measureReportData, 'code.text', textValue)
//         break;        
//       case "value":
//         set(measureReportData, 'valueString', textValue)
//         break;        
//       case "comparator":
//         set(measureReportData, 'valueQuantity.comparator', textValue)
//         break;        
//       case "quantity":
//         set(measureReportData, 'valueQuantity.value', textValue)
//         break;
//       case "unit":
//         set(measureReportData, 'valueQuantity.unit', textValue)
//         break;
//       case "deviceDisplay":
//         set(measureReportData, 'device.display', textValue)
//         break;
//       case "subjectDisplay":
//         set(measureReportData, 'subject.display', textValue)
//         break;
//       case "subjectReference":
//         set(measureReportData, 'subject.reference', textValue)
//         break;
//       case "effectiveDateTime":
//         set(measureReportData, 'effectiveDateTime', textValue)
//         break;    
//       case "status":
//         set(measureReportData, 'status', textValue)
//         break;    
//       case "loincCode":
//         set(measureReportData, 'code.coding[0].code', textValue)
//         break;
//       case "loincCodeText":
//         set(measureReportData, 'code.text', textValue)
//         break;
//       case "loincCodeDisplay":
//         set(measureReportData, 'code.coding[0].display', textValue)
//         break;
//     }
//     return measureReportData;
//   }

//   changeState(field, event, textValue){
//     if(process.env.NODE_ENV === "test") console.log("   ");
//     if(process.env.NODE_ENV === "test") console.log("MeasureReportDetail.changeState", field, textValue);
//     if(process.env.NODE_ENV === "test") console.log("this.state", this.state);

//     let formData = Object.assign({}, this.state.form);
//     let measureReportData = Object.assign({}, this.state.measureReport);

//     formData = this.updateFormData(formData, field, textValue);
//     measureReportData = this.updateMeasureReport(measureReportData, field, textValue);

//     if(process.env.NODE_ENV === "test") console.log("measureReportData", measureReportData);
//     if(process.env.NODE_ENV === "test") console.log("formData", formData);

//     this.setState({measureReport: measureReportData})
//     this.setState({form: formData})
//   }


  
//   // this could be a mixin
//   handleSaveButton() {
//     let self = this;
//     if(this.props.onUpsert){
//       this.props.onUpsert(self);
//     }
//     // if(process.env.NODE_ENV === "test") console.log('^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^&&')
//     // console.log('Saving a new MeasureReport...', this.state)

//     // let self = this;
//     // let fhirMeasureReportData = Object.assign({}, this.state.measureReport);

//     // if(process.env.NODE_ENV === "test") console.log('fhirMeasureReportData', fhirMeasureReportData);


//     // let measureReportValidator = MeasureReportSchema.newContext();
//     // measureReportValidator.validate(fhirMeasureReportData)

//     // console.log('IsValid: ', measureReportValidator.isValid())
//     // console.log('ValidationErrors: ', measureReportValidator.validationErrors());

//     // if (this.data.measureReportId) {
//     //   if(process.env.NODE_ENV === "test") console.log("Updating measureReport...");
//     //   delete fhirMeasureReportData._id;

//     //   MeasureReports._collection.update({_id: this.data.measureReportId}, {$set: fhirMeasureReportData },function(error, result){
//     //     if (error) {
//     //       if(process.env.NODE_ENV === "test") console.log("MeasureReports.insert[error]", error);
//     //       console.log('error', error)
//     //       Bert.alert(error.reason, 'danger');
//     //     }
//     //     if (result) {
//     //       if(self.props.onUpdate){
//     //         self.props.onUpdate(self.data.measureReportId);
//     //       }
//     //       Bert.alert('MeasureReport added!', 'success');
//     //     }
//     //   });
//     // } else {
//     //   fhirMeasureReportData.effectiveDateTime = new Date();
//     //   if (process.env.NODE_ENV === "test") console.log("create a new measureReport", fhirMeasureReportData);

//     //   MeasureReports._collection.insert(fhirMeasureReportData, function(error, result){
//     //     if (error) {
//     //       if(process.env.NODE_ENV === "test") console.log("MeasureReports.insert[error]", error);
//     //       console.log('error', error)
//     //       Bert.alert(error.reason, 'danger');
//     //     }
//     //     if (result) {
//     //       if(self.props.onInsert){
//     //         self.props.onInsert(self.data.measureReportId);
//     //       }
//     //       Bert.alert('MeasureReport added!', 'success');
//     //     }
//     //   });
//     // }
//   }

//   // this could be a mixin
//   handleCancelButton() {
//     let self = this;
//     if(this.props.onCancel){
//       this.props.onCancel(self);
//     }
//   }

//   handleDeleteButton() {
//     let self = this;
//     if(this.props.onDelete){
//       this.props.onDelete(self);
//     }
//     // console.log('Delete measureReport...', this.data.measureReportId)
//     // let self = this;
//     // MeasureReports._collection.remove({_id: this.data.measureReportId}, function(error, result){
//     //   if (error) {
//     //     console.log('error', error)
//     //     Bert.alert(error.reason, 'danger');
//     //   }
//     //   if (result) {
//     //     if(self.props.onDelete){
//     //       self.props.onDelete(self.data.measureReportId);
//     //     }
//     //     Bert.alert('MeasureReport deleted!', 'success');
//     //   }
//     // })
//   }
// }




function MeasureReportDetail(props){

  let classes = useStyles();

  function renderDatePicker(displayDatePicker, effectiveDateTime){
    //console.log('renderDatePicker', displayDatePicker, effectiveDateTime)
    if(typeof effectiveDateTime === "string"){
      effectiveDateTime = moment(effectiveDateTime);
    }
    // if (displayDatePicker) {
    //   return (
    //     <DatePicker 
    //       name='effectiveDateTime'
    //       hintText={ setHint("Date of Administration") } 
    //       container="inline" 
    //       mode="landscape"
    //       value={ effectiveDateTime ? effectiveDateTime : null}    
    //       onChange={ this.changeState.bind(this, 'effectiveDateTime')}      
    //       fullWidth
    //     />
    //   );
    // }
  }
  function setHint(text){
    if(props.showHints !== false){
      return text;
    } else {
      return '';
    }
  }

  return(
    <div className='MeasureReportDetails'>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <TextField
            id='subjectDisplayInput'                
            name='subjectDisplay'
            label='Subject Name'
            // TimelineSidescrollPage dialog popup
            // Getting the following when passing an measureReport in via props
            // A component is changing a controlled input of type text to be uncontrolled. Input elements should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled input element for the lifetime of the component. 
            // value={ get(this, 'data.form.subjectDisplay') }
            // onChange={ this.changeState.bind(this, 'subjectDisplay')}
            // hintText={ setHint('Jane Doe') }
            // floatingLabelFixed={true}
            fullWidth
            /><br/>
        </Grid>
        <Grid item xs={3}>
          <TextField
            id='subjectIdInput'                
            name='subjectReference'
            label='Subject ID'
            // value={ get(this, 'data.form.subjectReference') }
            // onChange={ this.changeState.bind(this, 'subjectReference')}
            // hintText={ setHint('Patient/12345') }
            // floatingLabelFixed={true}
            fullWidth
            /><br/>
        </Grid>
        <Grid item xs={3}>
          <TextField
            id='categoryTextInput'                
            name='category'
            label='Category'
            // value={ get(this, 'data.form.category') }
            // onChange={ this.changeState.bind(this, 'category')}
            // hintText={ setHint('Vital Signs') }
            // floatingLabelFixed={true}
            fullWidth
            /><br/>
        </Grid>
        <Grid item xs={3}>
          <TextField
            id='deviceDisplayInput'                
            name='deviceDisplay'
            label='Device Name'
            // value={ get(this, 'data.form.deviceDisplay') }
            // onChange={ this.changeState.bind(this, 'deviceDisplay')}
            // hintText={ setHint('iHealth Blood Pressure Cuff') }
            // floatingLabelFixed={true}
            fullWidth
            /><br/>
        </Grid>
        <Grid item xs={3}>
          <TextField
            id='deviceReferenceInput'                
            name='deviceReference'
            label='Device Name'
            // value={ get(this, 'data.form.deviceReference') }
            // onChange={ this.changeState.bind(this, 'deviceReference')}
            //hintText={ setHint('Device/444') }
            //floatingLabelFixed={true}
            fullWidth
            /><br/>
        </Grid>
        <Grid item xs={3}>
        </Grid>
        <Grid item xs={3}>
        </Grid>
      </Grid>
    </div>
  );
}

MeasureReportDetail.propTypes = {
  id: PropTypes.string,
  fhirVersion: PropTypes.string,
  measureReportId: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  measureReport: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  showPatientInputs: PropTypes.bool,
  showHints: PropTypes.bool,
  onInsert: PropTypes.func,
  onUpsert: PropTypes.func,
  onRemove: PropTypes.func,
  onCancel: PropTypes.func
};
ReactMixin(MeasureReportDetail.prototype, ReactMeteorData);
export default MeasureReportDetail;