import React from "react"
import Profile from "../assets/profile.jpg"

const Contacts = () => {
  const ContactDetails = ["Email: smnthendu56@gmail.com","Phone N.O: +254798984746","Instagram: smnthendu56@gmail.com","Github: smnthendu56@gmail.com"]

  const ContactCard = () => {
    return (
      <div className="flex flex-col w-full m-[10px] cursor-pointer  text-gray-900  md:max-w-[400px]  items-center rounded-lg border-[1px]">
        <h1 className="text-[30px]  mt-[10px]">Contacts</h1>
        <div className="w-full mb-[10px]">
        <ul className="ml-[40px]  text-lg list-disc">
          {ContactDetails.map(item => {
            return <li key={item}>{item}</li>
          })}
        </ul>
        </div>
      </div>
    )
  }
  
  return (
      <div className="flex flex-col relative items-center h-[83dvh] w-full">
        <div className="absolute md:relative flex flex-col md:flex-row items-center w-full md:w-[1200px] ">
          <div className="flex flex-col cursor-default reltive md:absolute top-0 w-full h-[350px] md:max-w-[350px] md:max-h-[400px] items-center">
            <img
              src={Profile}
              alt="user profile"
              className="w-[200px] h-[200px] md:w-[300px] md:h-[300px] top-0  rounded-full object-cover"
            />
            <p className="text-lg text-[rgb(53,53,53)] ">
              For more information 
            </p>
            <h1 className="text-[30px] mt-[10px]">Contact Me</h1>
          </div>
          <div className="relative md:absolute md:top-0 right-0 w-full md:w-[840px] flex flex-wrap cursor-default items-center mt-0 md:mt-0 md:ml-10">
            <div className="flex flex-col">
              <h1 className="text-[30px] md:mt-[10px] ml-4">Contacts Details</h1>
              <p className="text-lg text-[rgb(53,53,53)] ml-4">
                You can reach me through my contacts below
              </p>
              <div className="flex flex-wrap">
               <ContactCard/>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Contacts

