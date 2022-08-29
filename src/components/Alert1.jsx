import "bootstrap/dist/css/bootstrap.min.css"
import Alert from 'react-bootstrap/Alert';
//Component for show if login or register works right
function Alert1({type,variant,setShowAlert,showAlert}) {

  if(showAlert){

      return (
        <Alert variant={variant} onClose={() => setShowAlert(false)} dismissible>
          {variant==='success'?
          <Alert.Heading>Successfully done!</Alert.Heading>
          :<Alert.Heading>Oh snap! You got an error! Try again...</Alert.Heading>
          }
            
          </Alert>
      );
      
}
}

export default Alert1;