import React from "react"
import Profile from "../assets/profile.jpg" 

const Experience = () => {
  
  const FrontendSkills = [
    "Html", 
    "Css", 
    "Javascript", 
    "Reactjs", 
    "Reduxjs",
    "TailwindCss"
  ]
  const BackendSkills = [
    "Nodejs", 
    "Postgresql", 
    "MongoDb", 
    "Sql", 
    "Rest APIs"
  ]
  const OtherSkills = [
    "TypeScript",
    "Graphql",
    "Web Design",
    "Web Applications",
    "Linux Skills",
    "Responsive User Interfaces",
  ]
  const GeneralSkills = [
    "Communication Skills",
    "Team Work",
    "Analytical Skills",
    "Accounting Skills",
    "Financial Skills",
  ]

  const SkillsCard = ({ Title, Skills }) => {
    return (
      <div className="flex flex-col w-full m-[10px] cursor-pointer text-gray-900 md:max-w-[300px] lg:max-w-[400px] items-center rounded-lg border-[1px] ">
        <h1 className="text-[30px]  mt-[10px]">{Title}</h1>
        <div className="w-full mb-[10px]">
        <ul className="ml-[40px]  text-lg list-disc">
          {Skills.map(item => {
            return <li key={item}>{item}</li>
          })}
        </ul>
        </div>
      </div>
    )
  }
  
  return (
      <div className="flex flex-col absolute items-center lg:overflow-hidden overflow-y-scroll h-full  md:h-[83dvh] w-full">
        <div className="absolute  flex flex-col lg:flex-row items-center w-full lg:w-[1200px]">
          <div className="cursor-default flex flex-col relative lg:absolute top-0 w-full h-[350px] md:max-w-[350px] md:min-h-[400px] items-center">
            <img
              src={Profile}
              alt="user profile"
              className="w-[200px] h-[200px] md:w-[300px] md:h-[300px] top-0  rounded-full object-cover"
            />
            <p className="text-lg text-[rgb(53,53,53)] ">
              Get to know more 
            </p>
            <h1 className="text-[30px] mt-[10px]">About Me</h1>
          </div>
          <div className="relative lg:absolute lg:top-0 right-0 w-full lg:w-[840px] flex flex-wrap cursor-default items-center  lg:ml-10">
            <div className="relative items-center flex  flex-col">
              <h1 className="text-[30px] md:mt-[10px] ml-4">Experience</h1>
              <p className="text-lg text-[rgb(53,53,53)] ml-4">
                3+ years Fronted & backend development
              </p>
              <div className="flex flex-wrap w-full ">
                <SkillsCard 
                  Title={"FrontEnd Skills"} 
                  Skills={FrontendSkills}
                />
                <SkillsCard 
                  Title={"BackEnd Skills"} 
                  Skills={BackendSkills}
                /> 
                <SkillsCard
                  Title={"Other Programming Skills"}
                  Skills={OtherSkills}
                />
                <SkillsCard 
                  Title={"General Skills"} 
                  Skills={GeneralSkills} 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Experience
