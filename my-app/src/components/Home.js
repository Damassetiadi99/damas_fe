import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { FaEarthAmericas } from "react-icons/fa6";

const Home = () => {
    const items = [
        {
            id: 1,
            jobName: "Data Engineer",
            companyName: "Trade Republik",
            status: "Part-Time",
            city: "Berlin",
            createdAt: "1 day ago",
            description: "Responsible for managing and optimizing data pipelines.",
            notes: "Ideal for candidates with a strong background in data pipelines and cloud infrastructure management.",
            aboutCompany: "Trade Republik is a financial technology company that focuses on low-cost stock trading.",
            companyLink: "https://www.traderepublik.com",
            image: "https://dummyimage.com/600x400/000/fff&text=Data+Engineer",
            requirements: [
                "Bachelor's degree in Computer Science or related field.",
                "3+ years experience in data engineering.",
                "Proficient in SQL, Python, and data pipeline tools."
            ],
            benefits: [
                "Health insurance",
                "Annual leave",
                "Relocation assistance"
            ],
            applicationProcess: [
                "Submit resume",
                "Complete technical interview",
                "Final interview with the team"
            ]
        },
        {
            id: 2,
            jobName: "Software Engineer SFDC",
            companyName: "Align Technology Poland",
            status: "Part-Time",
            city: "Wroclaw",
            createdAt: "1 day ago",
            description: "Work with Salesforce to develop innovative solutions for customers.",
            notes: "Experience in Salesforce integrations and custom Apex development will be highly beneficial.",
            aboutCompany: "Align Technology is a global medical device company known for its clear aligner treatment Invisalign.",
            companyLink: "https://www.aligntech.com",
            image: "https://dummyimage.com/600x400/000/fff&text=Software+Engineer+SFDC",
            requirements: [
                "Bachelor's degree in Engineering or related field.",
                "Experience with Salesforce and Apex.",
                "Strong communication and problem-solving skills."
            ],
            benefits: [
                "Flexible work hours",
                "Stock options",
                "Gym membership"
            ],
            applicationProcess: [
                "Submit application",
                "Technical assessment",
                "Final interview with hiring manager"
            ]
        },
        {
            id: 3,
            jobName: "Software Developer",
            companyName: "DNEG",
            status: "Full-Time",
            city: "London",
            createdAt: "1 day ago",
            description: "Develop software solutions for visual effects in films.",
            notes: "A great opportunity for developers with an interest in the entertainment and visual effects industry.",
            aboutCompany: "DNEG is a leading visual effects company working on blockbuster movies and high-end television series.",
            companyLink: "https://www.dneg.com",
            image: "https://dummyimage.com/600x400/000/fff&text=Software+Developer",
            requirements: [
                "Bachelor's in Software Engineering.",
                "Proficiency in C++ and Python.",
                "Experience in 3D rendering is a plus."
            ],
            benefits: [
                "Health coverage",
                "Company car",
                "On-site meals"
            ],
            applicationProcess: [
                "Submit portfolio",
                "Technical interview",
                "Cultural fit interview"
            ]
        },
        {
            id: 4,
            jobName: "Software Developer jr",
            companyName: "DNEG",
            status: "Part-Time",
            city: "London",
            createdAt: "1 day ago",
            description: "Develop software solutions for visual effects in films.",
            notes: "Ideal for junior developers who are passionate about entering the visual effects industry.",
            aboutCompany: "DNEG is a leading visual effects company working on blockbuster movies and high-end television series.",
            companyLink: "https://www.dneg.com",
            image: "https://dummyimage.com/600x400/000/fff&text=Software+Developer+jr",
            requirements: [
                "Bachelor's in Software Engineering.",
                "Proficiency in C++ and Python.",
                "Experience in 3D rendering is a plus."
            ],
            benefits: [
                "Health coverage",
                "Company car",
                "On-site meals"
            ],
            applicationProcess: [
                "Submit portfolio",
                "Technical interview",
                "Cultural fit interview"
            ]
        },
        {
            id: 5,
            jobName: "Frontend Developer",
            companyName: "Shopify",
            status: "Part-Time",
            city: "Remote",
            createdAt: "2 days ago",
            description: "Develop and maintain Shopify's front-end web applications.",
            notes: "Experience with React.js is a must.",
            aboutCompany: "Shopify is a leading e-commerce platform that enables entrepreneurs to start and grow their businesses online.",
            companyLink: "https://www.shopify.com",
            image: "https://dummyimage.com/600x400/000/fff&text=Frontend+Developer",
            requirements: [
                "Bachelor's degree in Computer Science.",
                "2+ years experience with JavaScript and React.",
                "Familiarity with Tailwind CSS."
            ],
            benefits: [
                "Remote work",
                "Flexible schedule",
                "Health and dental insurance"
            ],
            applicationProcess: [
                "Submit resume",
                "Technical challenge",
                "Interview with engineering team"
            ]
        },
        {
            id: 6,
            jobName: "Backend Engineer",
            companyName: "Spotify",
            status: "Full-Time",
            city: "Stockholm",
            createdAt: "2 days ago",
            description: "Develop scalable backend systems for Spotify's music streaming platform.",
            notes: "Strong experience with Node.js and microservices is required.",
            aboutCompany: "Spotify is a global music streaming service providing access to millions of songs and podcasts.",
            companyLink: "https://www.spotify.com",
            image: "https://dummyimage.com/600x400/000/fff&text=Backend+Engineer",
            requirements: [
                "Bachelor's degree in Computer Science.",
                "3+ years experience in backend development.",
                "Proficiency in Node.js and microservices."
            ],
            benefits: [
                "Gym membership",
                "Health insurance",
                "Stock options"
            ],
            applicationProcess: [
                "Submit application",
                "Technical assessment",
                "Final interview with team"
            ]
        },
        {
            id: 7,
            jobName: "Mobile Developer",
            companyName: "Grab",
            status: "Full-Time",
            city: "Singapore",
            createdAt: "3 days ago",
            description: "Develop mobile applications for Grab's ride-hailing service.",
            notes: "Ideal for developers with experience in React Native.",
            aboutCompany: "Grab is a Southeast Asian technology company that offers ride-hailing, food delivery, and digital payment solutions.",
            companyLink: "https://www.grab.com",
            image: "https://dummyimage.com/600x400/000/fff&text=Mobile+Developer",
            requirements: [
                "Bachelor's degree in Computer Science.",
                "Experience with mobile development using React Native.",
                "Familiarity with REST APIs."
            ],
            benefits: [
                "Company car",
                "Health insurance",
                "Annual bonus"
            ],
            applicationProcess: [
                "Submit portfolio",
                "Technical interview",
                "Final interview with team"
            ]
        },
        {
            id: 8,
            jobName: "DevOps Engineer",
            companyName: "Netflix",
            status: "Full-Time",
            city: "Los Gatos",
            createdAt: "3 days ago",
            description: "Maintain and improve the DevOps infrastructure for Netflix.",
            notes: "Experience with AWS and container orchestration tools like Kubernetes is a plus.",
            aboutCompany: "Netflix is a global streaming service offering movies, TV shows, and original content across multiple genres.",
            companyLink: "https://www.netflix.com",
            image: "https://dummyimage.com/600x400/000/fff&text=DevOps+Engineer",
            requirements: [
                "Bachelor's degree in IT or related field.",
                "3+ years experience in DevOps.",
                "Experience with AWS and Docker."
            ],
            benefits: [
                "Health and dental insurance",
                "Flexible work hours",
                "Stock options"
            ],
            applicationProcess: [
                "Submit resume",
                "Technical challenge",
                "Interview with team"
            ]
        },
        {
            id: 9,
            jobName: "Machine Learning Engineer",
            companyName: "Google",
            status: "Full-Time",
            city: "Mountain View",
            createdAt: "4 days ago",
            description: "Develop and optimize machine learning models.",
            notes: "Strong understanding of machine learning algorithms is required.",
            aboutCompany: "Google is a global technology company specializing in internet-related services and products.",
            companyLink: "https://www.google.com",
            image: "https://dummyimage.com/600x400/000/fff&text=Machine+Learning+Engineer",
            requirements: [
                "Bachelor's or Master's degree in Computer Science.",
                "3+ years experience in machine learning.",
                "Proficiency in Python and TensorFlow."
            ],
            benefits: [
                "Health insurance",
                "Gym membership",
                "Relocation assistance"
            ],
            applicationProcess: [
                "Submit resume",
                "Technical interview",
                "Final interview with hiring manager"
            ]
        },
        {
            id: 10,
            jobName: "Cloud Engineer",
            companyName: "Amazon Web Services",
            status: "Full-Time",
            city: "Seattle",
            createdAt: "5 days ago",
            description: "Manage cloud infrastructure and optimize cloud-based solutions.",
            notes: "Experience with AWS and cloud automation tools is required.",
            aboutCompany: "Amazon Web Services (AWS) is the leading cloud computing platform providing a wide range of cloud services.",
            companyLink: "https://aws.amazon.com",
            image: "https://dummyimage.com/600x400/000/fff&text=Cloud+Engineer",
            requirements: [
                "Bachelor's degree in Computer Science.",
                "3+ years experience in cloud computing.",
                "Proficiency with AWS, Terraform, and Kubernetes."
            ],
            benefits: [
                "Health insurance",
                "Stock options",
                "Annual bonus"
            ],
            applicationProcess: [
                "Submit application",
                "Technical challenge",
                "Final interview with team"
            ]
        },
        {
            id: 11,
            jobName: "UI/UX Designer",
            companyName: "Apple",
            status: "Full-Time",
            city: "Cupertino",
            createdAt: "6 days ago",
            description: "Design visually appealing user interfaces.",
            notes: "Experience with Figma and Adobe XD is required.",
            aboutCompany: "Apple is a global technology company known for its innovative products, including iPhone, Mac, and iPad.",
            companyLink: "https://www.apple.com",
            image: "https://dummyimage.com/600x400/000/fff&text=UI+UX+Designer",
            requirements: [
                "Bachelor's degree in Design or related field.",
                "2+ years experience in UI/UX design.",
                "Strong portfolio of previous work."
            ],
            benefits: [
                "Health insurance",
                "Stock options",
                "Company products"
            ],
            applicationProcess: [
                "Submit portfolio",
                "Design challenge",
                "Final interview with design team"
            ]
        },
        {
            id: 12,
            jobName: "Cybersecurity Analyst",
            companyName: "Microsoft",
            status: "Full-Time",
            city: "Redmond",
            createdAt: "7 days ago",
            description: "Analyze and prevent cybersecurity threats for Microsoft products.",
            notes: "Experience with network security and incident response is crucial.",
            aboutCompany: "Microsoft is a global technology company known for its software products like Windows and Office Suite.",
            companyLink: "https://www.microsoft.com",
            image: "https://dummyimage.com/600x400/000/fff&text=Cybersecurity+Analyst",
            requirements: [
                "Bachelor's degree in Information Security.",
                "3+ years experience in cybersecurity.",
                "Familiarity with SIEM tools and threat hunting."
            ],
            benefits: [
                "Health and dental insurance",
                "Flexible work hours",
                "Annual bonus"
            ],
            applicationProcess: [
                "Submit resume",
                "Technical interview",
                "Interview with security team"
            ]
        }
    ];
    
    
  
  const [visibleItems, setVisibleItems] = useState(3); // Awalnya tampilkan 3 item
  const [searchQuery,setSearchQuery]= useState("")
  const [locationQuery,setLocationQuery]= useState("")
  const [filteredItems,setFilteredItems]= useState(items)
  const [isFullTimeOnly,setIsFullTimeOnly]=useState(false)

  const showMoreItems = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 3); // Tampilkan 3 item tambahan setiap kali tombol diklik
  };
  const handleSearch =()=>{
    let filtered = items.filter(
        (item) =>
          (item.jobName?.toLowerCase() || "").includes(searchQuery.toLowerCase()) &&
          (item.city?.toLowerCase() || "").includes(locationQuery.toLowerCase())
      );
    
      if (isFullTimeOnly) {
        filtered = filtered.filter((item) => item.status.toLowerCase() === "full-time");
      }
    console.log(isFullTimeOnly)
    setFilteredItems(filtered)
    setVisibleItems(3)
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4">
        <div className="grid grid-cols-12 gap-4">
            <div className="col-span-4 p-2">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                    Job Description
                </label>
                <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaSearch className="text-gray-400" />
                    </span>
                    <input
                        type="text"
                        placeholder="Filter by: title, benefits, companies, expertise"
                        className="w-full h-9 p-2 pl-10 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-indigo-200"
                        value={searchQuery}
                        onChange={(e)=> setSearchQuery(e.target.value)}
                    />  
                </div>
        </div>
        <div className="col-span-4 p-2">
            <label className="block text-gray-700 text-sm font-bold mb-2">
                Location
            </label>
            <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaEarthAmericas className="text-gray-400" />
                </span>
                <input
                    type="text"
                    placeholder="Filter by: title, benefits, companies, expertise"
                    className="w-full h-9 p-2 pl-10 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-indigo-200"
                    value={locationQuery}
                    onChange={(e)=> setLocationQuery(e.target.value)}
                />
             </div>
         </div>
        <div className="col-span-2 p-2 mt-6 flex items-center">
            <input
                type="checkbox"
                id="full-time"
                className="mr-2"
                checked={isFullTimeOnly}
                onChange={(e)=> setIsFullTimeOnly(e.target.checked)}
            />
            <label htmlFor="full-time" className="font-bold my-auto mT-3">Full time only</label>
        </div>
        <div className="col-span-2 text-white p-2 mr-20 mt-5 text-center">
            <button className="bg-slate-500 text-white py-2 mr-0 px-4 rounded-md hover:bg-indigo-700 transition duration-300"
            onClick={handleSearch}>
            Search
            </button>
         </div>
     </div>
        <div className="mx-auto p-4">
            <ul className="w-full  bg-white p-6 rounded-lg shadow-md">
                <div className="border-b">
            <h1 className="text-3xl font-bold mb-4">Job List</h1>
            </div>
        {filteredItems.slice(0, visibleItems).map((item) => (
          <li key={item.id} className="my-4 border-b border-gray-200 pb-4">
            <Link
              to={`/detail/${item.id}`}
              className="text-lg text-indigo-500 hover:text-indigo-700"
              state={{job : item}}
            >
              <div className="flex justify-between items-center">
              <div>
                  <div className="font-bold">{item.jobName}</div>
                  <div className="text-gray-400 text-sm">{item.companyName} -<span className="text-green-500 font-bold"> {item.status}</span></div>
                </div>
                <div className="text-right text-gray-400">
                  <div className="font-bold">{item.city}</div>
                  <div className="text-sm">{item.createdAt}</div>
                </div>
              </div>
            </Link>
          </li>
        ))}
        {visibleItems < items.length && (
            <div className="text-center mt-6">
            <button
                onClick={showMoreItems}
                className=" w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-300"
            >
                More Jobs
            </button>
            </div>
        )}
      </ul>

         </div>
    </div>
  );
};

export default Home;
