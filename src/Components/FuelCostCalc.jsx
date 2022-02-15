import React, {useState} from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup'
import "./fuelcostcal.css"




const FuelCostCalc = () => {

    const [Trip_Distance, seT_Trip_Distance]= useState("")
    const [Vehicle_Fuel_Consumption, Set_Vehicle_Fuel_Consumption]= useState("")
    const [fuel_price, setFuelPrice]= useState("")
    const [selectValue, setSelectValue]= useState("")


    const [Calculate_Fuel_Cost, SetCalculate_Fuel_Cost]= useState(0)

    const handleTripDistanceChange = (e)=> {
        seT_Trip_Distance(e.target.value)
    }

    const handleVehicle_Fuel_Consumption_Change = (e)=> {
        Set_Vehicle_Fuel_Consumption(e.target.value)
    }

    const handleFuelPriceChange= (e)=> {
      setFuelPrice(e.target.value)
  }

  const handleSelectChange= (e)=> {
    setSelectValue(e.target.value)
}


    const handleSubmit=(event)=> {
        event.preventDefault()
        let tripdistance_Calc = Trip_Distance/100
        let Vehicle_Fuel_Consumption_Calc = tripdistance_Calc * Vehicle_Fuel_Consumption
        let result = Vehicle_Fuel_Consumption_Calc * fuel_price
        SetCalculate_Fuel_Cost(result)
    }



    return (
<Container className = "container" >
        <div className = "Fuel_Cost_Calc_Container">
   <Form className = "form" onSubmit = {handleSubmit} >
     <h2 className = "heading" > RANDY'S FUEL COST CALCULATOR </h2> 
     
     <Form.Group className="mb-4"   >
                <Form.Label className ="label-text">Trip Distance (In Kilometers) </Form.Label>
                <Form.Control
                 type="number" 
                 onChange = {handleTripDistanceChange}  
                 placeholder="Enter Trip Distance" 
                 className ="form-input "
                 required
                 step="any"
                 
                 />
            </Form.Group>
    
         


            <Form.Group  className="mb-4">
                <Form.Label className ="label-text">Vehilce's Fuel Consumption per 100km (litres) </Form.Label>
                <Form.Control
                 type="number"  
                 onChange = {handleVehicle_Fuel_Consumption_Change} 
                 placeholder="Enter Vehicles Fuel Consumption"
                 className ="form-input" 
                 required
                 step="any"
                 />
            </Form.Group> 


            <Form.Group  className="mb-4">
                <Form.Label className ="label-text">
                  
                      Fuel Price / litre 
                                    {/* <select 
                                      value={selectValue} 
                                      onChange={handleSelectChange} 
                                      className = "select_currency"
                                    >
                                    <option value="$">Dollars</option>
                                      <option value="₵">Cedis</option>
                                      <option value="£">Pounds</option>
                                      <option value="€">Euros</option>
                                    </select> */}
                                    
                                   
                    
                 </Form.Label>
                <Form.Control
                 type="number"  
                 onChange = {handleFuelPriceChange} 
                 placeholder="Enter Fuel Price"
                 className ="form-input" 
                 required
                 step="any"
                 />
            </Form.Group> 

          
    
         <Button variant="primary" className = "calculate_fuel_cost_btn" type="submit">
              Calculate Fuel Cost
       </Button>
        </Form>

    

     
     
<Card style={{ width: '15rem' }} className ="card">
  <ListGroup variant="flush" className = "Listgroup">

    <ListGroup.Item> <span className ="fuel-cost-text">Fuel Cost = <span className = "fuel_cost">GH₵ {Calculate_Fuel_Cost} </span> </span>    </ListGroup.Item>
  </ListGroup>
</Card>




       
</div>
    


      
        </Container>
    );
}

export default FuelCostCalc;
