import React from "react";
import RoadmapBox from "../components/RoadmapBox"
import arrowleft from "../assets/arrowleft.svg"
import arrowright from "../assets/arrowright.svg"
import Image from "next/image";

const Roadmap = () => {


const roadmapContent = [
	{
		title: 'RESEARCH AND IDEATION',
		description: [`DeFi Challenges Exploration: Investigate the existing challenges in DeFi
        user experience, focusing on transaction complexities and user
        accessibility.`,
        `AI Solutions Research: Explore AI technologies capable of understanding
        and executing user commands in plain English. Team Assembly and Scope
        Definition: Assemble a dedicated team of developers and define the scope
        of the TypeAI project.`]
	},
  {
		title: 'TECHNICAL DEVELOPMENT AND PROTOTYPING',
		description: [`Blockchain Platform Selection: Choose a suitable blockchain platform for developing the TypeAI system.`,
    `Technical Development: Initiate the technical development to integrate AI with blockchain functionalities.`,
    `Prototyping and Analysis: Develop a prototype demonstrating the Type-to-Swap functionality, followed by analysis and refining based on feedback.`
  ]

	},
  {
		title: 'BETA VERSION LAUNCH AND TOKEN INTRODUCTION',
		description: [`Beta Launch: Launch a beta version of the TypeAI on Telegram for Type-to-Swap functionality, gathering user feedback for optimization.`,
    `$TYPE Token Launch: Introduce the $TYPE token to raise community funds for further development and feature additions.`,
    `Telegram Bot Development: Develop and launch a Telegram Bot to extend TypeAI services to private groups and DAO governance.`]
	},
  {
		title: 'PARTNERSHIP, MARKETING, AND BOT EXPANSION',
		description: [`DeFi and DAO Partnerships: Form partnerships with existing DeFi protocols and DAOs to integrate Type AI and extend its functionalities.`,
  `Marketing and Community Building: Conduct marketing campaigns to raise awareness and engage the community in platform development.`]
	},
  {
		title: 'COMMUNITY ENGAGEMENT AND PLATFORM SCALING',
		description: [`User Feedback Analysis: Continuously analyze user feedback to improve and refine the platform. `,
    `Expansion to Other Features: Progressively unlock additional features such as Type to Snipe, Type to Bridge, and Type to Deploy, enhancing the platform based on user needs and feedback.`]
	},


]


  return (
    <div className="h-[fit-content] px-[1rem] md:px-[8rem] relative bg-[#000000] pt-20 md:pt-40">
      <div className="absolute hidden lg:block top-[29rem] left-[46vw]">
        <Image src={arrowright} alt=""/>
      </div>
      <div className="absolute hidden lg:block top-[55rem] right-[46vw]">
        <Image src={arrowleft} alt=""/>
      </div>
      <div className="absolute hidden lg:block top-[84rem] left-[46vw]">
        <Image src={arrowright} alt=""/>
      </div>
      <div className="absolute hidden lg:block top-[110rem] right-[46vw]">
        <Image src={arrowleft} alt=""/>
      </div>
      <div id="roadmap" className=" text-white text-[6.107vw] text-center font-extrabold lg:text-[54px] gap-4 ">
        ROADMAP
      </div>
	  <div className="lg:flex justify-center gap-16 hidden">
        <div className="flex flex-col gap-[18rem]">
          <RoadmapBox title={roadmapContent[0].title} description={roadmapContent[0].description} phase={1}/>
          <RoadmapBox title={roadmapContent[2].title} description={roadmapContent[2].description} phase={3}/>
          <RoadmapBox title={roadmapContent[4].title} description={roadmapContent[4].description} phase={5}/>
          
        </div>

        <div className="flex flex-col gap-[18rem] mt-[24rem]">
        <RoadmapBox title={roadmapContent[1].title} description={roadmapContent[1].description} phase={2}/>
        <RoadmapBox title={roadmapContent[3].title} description={roadmapContent[3].description} phase={4}/>
        </div>
      </div>
      <div className="lg:hidden flex justify-center">
        <div>
          <RoadmapBox title={roadmapContent[0].title} description={roadmapContent[0].description} phase={1}/>
          <RoadmapBox title={roadmapContent[1].title} description={roadmapContent[1].description} phase={2}/>
          <RoadmapBox title={roadmapContent[2].title} description={roadmapContent[2].description} phase={3}/>
          <RoadmapBox title={roadmapContent[3].title} description={roadmapContent[3].description} phase={4}/> 
          <RoadmapBox title={roadmapContent[4].title} description={roadmapContent[4].description} phase={5}/>
          
        </div>

      </div>
    </div>
  );
};

export default Roadmap;
