import  { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Cat from "../img/cat.jpg";

export default function Schedul() {


  const [ratePerHour, setRatePerHour] = useState(0);
  const [workingHours, setWorkingHours] = useState(0);
  const [overtimeHours, setOvertimeHours] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [formData, setFormData] = useState({});
  console.log(formData);
  const [publishError, setPublishError] = useState(null);
  const navigate = useNavigate();
  const { PayId } = useParams();


  useEffect(() => {
    try {
      const fetchpay = async () => {
        const res = await fetch(`/api/sheet/getAll?payId=${PayId}`);
        const data = await res.json();
        console.log("data", data);

        if (!res.ok) {
          console.log(data.message);
          setPublishError(data.message);
          return;
        }
        if (res.ok) {
          const selected = data.pay.find(
            (Employe) => Employe._id === PayId
          );
          if (selected) {
            setFormData(selected);
            console.log(selected);
          }
        }
      };
      fetchpay();
    } catch (error) {
      console.log(error.message);
    }
  }, [PayId]);






  
  
  //caulator
  const handleInputChange = (e, setter) => setter(e.target.value);
 
  // Step 5: Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents form from reloading the page
    // Calculate the total amount here
    // Assuming overtime pays 1.5 times the normal rate
    const total = (workingHours * ratePerHour) + (overtimeHours * ratePerHour * 1.5);
    setTotalAmount(total);
  };



  const handlchange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };


  
  const handleSubmitt = async (e) => {
    e.preventDefault();
    try {

      const paysheet = {
        ...formData,
        total: totalAmount,
      };

      const res = await fetch(`/api/sheet/pay/${formData._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(paysheet),
      });
      const data = await res.json();
      console.log(data);
      if (!res.ok) {
        setPublishError(data.message);
        return;
      }

      if (res.ok) {
        setPublishError(null);
        navigate(`/table`);
      }
    } catch (error) {
      setPublishError("Something went wrong");
    }
  };









  return (
    <div className="h-[600px] relative"> 
        <img src={Cat} alt="" className="w-full h-full object-cover" /> 
        
        <div className="absolute top-20 left-1/2 transform -translate-x-1/2 z-10"> 

        <div  className="w-[900px] h-[400px] rounded-lg bg-opacity-65  bg-slate-500">
          <div className="flex justify-center items-center gap-2">

          <div>
          <div className="mt-10 ">
      <h1 className="text-white font-serif text-3xl mb-2 mt-2">Eployee Details</h1>
      <form onSubmit={handleSubmitt}>
        <div className=" flex gap-5">
          <label>Employee Id: </label>
          <input
            type="text"
            className="ml-8 rounded-lg"
            placeholder=""
                id="Id"
                onChange={handlchange}
                value={formData.Id}
           
          />
        </div>
        <div className="mt-2 flex gap-3">
          <label>Employee Name: </label>
          <input
            type="text"
            className="ml-3 rounded-lg"
            placeholder=""
                id="name"
                onChange={handlchange}
                value={formData.name}
           
          />
        </div>
        <div className="mt-2 flex gap-2">
          <label>Date of birthday: </label>
          <input
            type="text"
            className="ml-4 rounded-lg"
            placeholder="dd/mm/yy"
                id="birth"
                onChange={handlchange}
                value={formData.birth}
                maxLength={10}
            
          />
        </div>

        <div className="mt-2 flex gap-2">
          <label>Address: </label>
          <input
            type="text"
            className="ml-[74px] rounded-lg"
            placeholder=""
                id="address"
                onChange={handlchange}
                value={formData.address}
            
          />
        </div>

        

       
        <button type="submit" className="ml-48 bg-blue-800 text-white hover:opacity-85 mt-5 font-serif w-32 h-10 rounded-2xl">Update</button>
      </form>

      {publishError && (
          <p className="mt-5 text-red-600 bg-red-300 w-300 h-7 rounded-lg text-center ">
            {publishError}
          </p>
        )}
      
  
    </div>
        </div>

        <div>
        <div className="mt-10 ml-28">
      <h1 className="text-white font-serif text-3xl mb-2 mt-2">Paysheet Calculator</h1>
      <form onSubmit={handleSubmit}>
        <div className=" flex gap-5">
          <label>Rate per Hour: </label>
          <input
            type="number"
            className="rounded-lg"
            value={ratePerHour}
            onChange={(e) => handleInputChange(e, setRatePerHour)}
          />
        </div>
        <div className="mt-2 flex gap-3">
          <label>Working Hours: </label>
          <input
            type="number"
            className="rounded-lg"
            value={workingHours}
            onChange={(e) => handleInputChange(e, setWorkingHours)}
          />
        </div>
        <div className="mt-2 flex gap-2">
          <label>Overtime Hours: </label>
          <input
            type="number"
            className="rounded-lg"
            value={overtimeHours}
            onChange={(e) => handleInputChange(e, setOvertimeHours)}
          />
        </div>
        <button type="submit" className="ml-48 bg-blue-800 text-white hover:opacity-85 mt-5 font-serif w-32 rounded-2xl">Calculate</button>
      </form>
      <h2 className="text-white text-xl font-extralight mt-4">Total Amount: ${totalAmount.toFixed(2)}</h2> {/* Displaying the calculated total  */}
    </div>
        </div>

          </div>
         
        </div>
      
        </div>


      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center gap-14 mt-5">
     
        
       
      </div>
    </div>
  );
}
