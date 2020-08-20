import React,{useState} from 'react';
import { Steps } from "antd";
const {Step} = Steps
const styles ={
  backgroundColor:"#f8f8f8"
}
const UnitedForm= () => {
  const [current,setCurrent] = useState(0);
  const renderInputs= () => {
    switch(current) {
        case 1:
        return <input type="text" size="30" placeholder="firstName" style={styles}/>
        case 2:
        return <input type="text" size="30" placeholder="lastName" style={styles}/> 
        case 3:
        return <input type="text" size="30" placeholder="lastName" style={styles}/>
        case 4:
        return <input type="text" size="30" placeholder="lastName" style={styles}/>
        default:
        return <input type="text" size="30" placeholder="fault returnDe" style={styles}/>

    }
  }
 return (
   <div>
        <div>
            <Steps current={current}>
                <Step key={"first"} title={"first"} />
                <Step key={"first2"} title={"first2"} />
                <Step key={"first3"} title={"first3"} />
                <Step key={"first4"} title={"first4"} />
              </Steps>
        </div>
        <div>
          <form>
            <div className="form-container">
            <div className='form-container__form-group form-container__form-group-label'>
                <span>FirstName</span>
            </div>
               <div className='form-container__form-group form-container__form-group-label'>
               <input type="email" className="form-container__input" placeholder='email' required/>
               </div> 
            </div>
          </form>
        </div>

        <div>
          <button onClick={() => setCurrent(current+1)}>NEXT</button>
        </div>
   </div>
 )

}


export default UnitedForm;