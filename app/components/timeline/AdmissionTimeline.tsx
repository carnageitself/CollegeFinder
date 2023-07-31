// import React from 'react';
// import {
//   VerticalTimeline,
//   VerticalTimelineElement,
// } from "react-vertical-timeline-component";
// import { experiences } from '@/app/constants/data';

// interface Experience {
//   date: string;
//   iconBg: string;
//   icon: string;
//   company_name: string;
//   title: string;
//   points: string[];
//   linkedin: string;
//   github: string;
// }

// interface ExperienceCardProps {
//   experience: Experience;
// }

// const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
//   return (
//     <VerticalTimelineElement
//       contentStyle={{
//         background: "#121212",
//         color: "#fff",
//       }}
//       contentArrowStyle={{ borderRight: "7px solid  #121212" }}
//       date={experience.date}
//       iconStyle={{ background: experience.iconBg }}
//       icon={
//         <div className='flex justify-center items-center w-full h-full cursor-pointer' onClick={()=>window.open(experience.linkedin, "_blank")}>
//           <img
//             src={experience.icon}
//             alt={experience.company_name}
//             className='w-[60%] h-[60%] object-contain'
//           />
//         </div>
//       }
//     >
//       <div>
//         <h3 className='text-white text-[24px] font-bold cursor-pointer' onClick={()=>window.open(experience.github, "_blank")}>{experience.title}</h3>
//         <p
//           className='text-blue-100 text-[16px] font-semibold'
//           style={{ margin: 0 }}
//         >
//           {experience.company_name}
//         </p>
//       </div>

//       <ul className='mt-5 list-disc ml-5 space-y-2'>
//         {experience.points.map((point, index) => (
//           <li
//             key={`experience-point-${index}`}
//             className='text-blue-100 text-[14px] pl-1 tracking-wider'
//           >
//             {point}
//           </li>
//         ))}
//       </ul>
//     </VerticalTimelineElement>
//   );
// };

// const AdmissionTimeline: React.FC = () => {
//   return (
//     <div>
      
//       <div>
//         <p className="">
//           What I have done so far
//         </p>
//         <h2 className="">
//           Hackathon Experience
//         </h2>
//       </div>

//       <div className='mt-20 flex flex-col'>
//         <VerticalTimeline>
//           {experiences.map((experience, index) => (
//             <ExperienceCard
//               key={`experience-${index}`}
//               experience={experience}
//             />
//           ))}
//         </VerticalTimeline>
//       </div>
//     </div>
//   )
// }

// export default AdmissionTimeline;
