import { Formik, Form, Field } from 'formik';



const friends =  ['jared', 'ian', 'brent'] ;

const costs=[10,20,30]

export const CarsForm=()=>{

const handleSubmit=(values)=>{
console.log(values);
};


    return(
        <Formik
       initialValues={{friend: "", cost:"", from:"", to:"",}}
       onSubmit={handleSubmit} >
       
         <Form>
            <label htmlFor='carbrand'>
            Car brand
            <Field component="select" name="friend">
            <option value="default" hidden>
              Select brand
            </option>
                {friends.map(friend => (
                    
                    <option key={friend} value = {friend}>{friend}</option> 
                    
                    
                ))
               }
                
                
           </Field>
           </label>
           <label htmlFor='price'>
Price/ 1 hour
            <Field component="select" name="cost">
            <option value="default" hidden>
              To $
            </option>
                {costs.map(cost => (
                    
                    <option key={cost} value = {cost}>{cost}</option> 
                    
                    
                ))
               }
                
                
           </Field>
           </label>
           <lable htmlFor='carmileage'>
            Car mileage / km
           <Field name="from" placeholder="From" />
         <Field name="to" placeholder="To"  />
           </lable>
          
           
           <button type="submit">Search</button>
         </Form>
     </Formik>
    )
}