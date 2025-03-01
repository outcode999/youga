import  { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Cat from "../img/cat.jpg";

export default function Schedul() {


  

  const [publishError, setPublishError] = useState(null);
  const navigate = useNavigate();
  const [Info, setInfo] = useState([]);
  console.log(Info)
  const [payId, setformId] = useState("");
  console.log(payId)

  
  useEffect(() => {
    const fetchinfo = async () => {
      try {
        const res = await fetch(`/api/sheet/getAll`);
        const data = await res.json();
        console.log(data);

        if (res.ok) {
            setInfo(data.pay);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchinfo();
  }, []);


  
  const handleDeleteUser = async () => {
    try {
      const res = await fetch(`/api/sheet/deletepay/${payId}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (res.ok) {
        setInfo((prev) => prev.filter((Employe) => Employe._id !== payId));
      } else {
        console.log(data.message);
      }
    } catch (error) {
      console.log(error.message);
    }
  };


  








  return (

    <div className="h-[600px] relative"> 
        <img src={Cat} alt="" className="w-full h-full object-cover" /> 
        
        <div className="absolute top-20 left-1/2 transform -translate-x-1/2 z-10"> 

        <div  className="w-[1400px] h-[400px] rounded-lg bg-opacity-65  bg-slate-500">
          
        <div className="">
       
        <div className="max-h-96 overflow-y-auto">
          <table className="w-full border border-black divide-y divide-black shadow-md">
            <thead className="bg-none divide-x divide-black">
              <tr>
                <th className="px-6 py-3 text-left text-xs bg-black text-white font-medium  uppercase">
                  Employee Id
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium   bg-black text-white  uppercase">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium  bg-black text-white  uppercase">
                  Date of bithday
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium  bg-black text-white  uppercase">
                  Address
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium  bg-black text-white  uppercase">
                  totle
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium  bg-black text-white  uppercase">
                  sheet Edit
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium  bg-black text-white  uppercase">
                  sheet delete
                </th>
               
              </tr>
            </thead>
                
            
            <tbody className="bg-white bg-opacity-70 divide-y divide-gray-200">
            {Info.map((Employe) => (
              <tr
                key={Employe._id}
                className=" dark:border-gray-700 dark:bg-gray-800"
              >
                

                <td className="px-6 py-4 whitespace-nowrap">{Employe.Id}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {Employe.name}
                </td>

                <td className="px-6 py-4 whitespace-nowrap">
                  {Employe.birth}
                </td>

                <td className="px-6 py-4 whitespace-nowrap ">
                  {Employe.address}
                </td>

                <td className="px-6 py-4 whitespace-nowrap">
                  Rs:{Employe.total}
                </td>

                

                <td className="px-6 py-4 whitespace-nowrap">
                  <Link
                    to={`/update/${Employe._id}`}
                    className="text-teal-500 hover:underline"
                  >
                    PaysheetEdit
                  </Link>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    onClick={() => {
                      setformId(Employe._id);
                      handleDeleteUser();
                    }}
                    className="text-red-500 hover:underline cursor-pointer"
                  >
                    PaysheetDelete
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
         
       
         
          </table>
          </div>
         
        </div>
         
        </div>
      
        </div>


      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center gap-14 mt-5">
     
        
       
      </div>
    </div>






    

  );
}
