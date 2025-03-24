'use client'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";
import { faBehance, faDribbble, } from "@fortawesome/free-brands-svg-icons";
import { faAngleLeft, faAngleRight, faCircle} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

import Link from "next/link";
import { redirect } from "next/navigation";

export default function Home() {

  // redirect("/login");
  const router = useRouter();
  const [activeIndex, setActiveIndex] = useState(0);
  const [slideNumber, setSlideNumber] = useState(0);
  const [username, setUsername] = useState("");

  // next dynamic --- preventing hydration error
  const [mount, setMount] = useState(false);

  useEffect(() => {
    setMount(true);
    const loggedInUser = localStorage.getItem("loggedInUser");
    console.log(loggedInUser)
    if (!loggedInUser) {
      console.log(loggedInUser);
      router.push("/login"); // Redirect to login if no user is found
    }
    },[mount])

  const slides = [
    {
      title: "Startup 1",
      heading: "Build Without Limits",
      description:
        "Create amazing websites with full flexibility. No technical expertise required, just focus on your ideas.",
    },
    {
      title: "Startup 2",
      heading: "Design Smarter",
      description:
        "A modern UI/UX experience tailored to help you launch your startup effortlessly with stunning designs.",
    },
    {
      title: "Startup 3",
      heading: "Forget About Code",
      description:
        "Startup Framework gives you complete freedom over your creative process — you don't have to think about any technical aspects. There are no limits and absolutely no coding.",
    },
    {
      title: "Startup 4",
      heading: "Launch Faster",
      description:
        "With pre-designed components and easy customization, you can launch your startup in record time.",
    },
    {
      title: "Startup 5",
      heading: "Forget About Code",
      description:
        "Startup Framework gives you complete freedom over your creative process — you don't have to think about any technical aspects. There are no limits and absolutely no coding.",
    
    } 
  ];

  const nextSlide = () => {
    if (slideNumber < slides.length - 1) {
      setSlideNumber(slideNumber + 1);
      setActiveIndex(activeIndex + 1);
    }
  }

  const prevSlide = () => {
    if (slideNumber !== 0) {
      setSlideNumber(slideNumber - 1);
      setActiveIndex(activeIndex - 1);
    }
  }

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      const user = JSON.parse(loggedInUser);
      setUsername(user.username);
    } else {
      router.push("/login")
    }
    const handleKeyDown = (event: { key: string; }) => {
      if (event.key === 'ArrowRight'){
        nextSlide();
      } else if (event.key === 'ArrowLeft') {
        prevSlide();
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    () => {
      window.removeEventListener("keydown", handleKeyDown);
    }
  }, [slideNumber])
  
  
  if(!mount) {
    return
  }
  
  return (
      <div className="flex flex-col items-center justify-evenly bg-blue-200 h-[100vh] w-[100%] px-[40px] lg:px-[115px] md:px-[65px] bg-[url(/Image.png)] bg-no-repeat" >
        <h3 className="text-[30px] font-bold tracking-wider">WELCOME {username.toUpperCase()}</h3>
        <ul className="flex justify-between w-[300px] sm:w-[370px] md:w-[400px] lg:w-[469px] items-center">
        <li className="cursor-pointer">Home</li>
        <Link href="/products">Products</Link>
        <li className="cursor-pointer">Pricing</li>
        <li className="cursor-pointer">Blog</li>
        <FontAwesomeIcon icon={faDribbble} className="w-[16px] cursor-pointer" />
        <FontAwesomeIcon icon={faBehance} className="w-[21px] cursor-pointer" />
      </ul>
      <div className="flex gap-3.5 items-center w-[100%] " >
        <FontAwesomeIcon icon={faAngleLeft} className={`h-[35px] w-[11px] cursor-pointer 
        ${slideNumber === 0 ? "opacity-30": "opacity-100"}`}
        onClick={prevSlide}/>
        <div className="flex flex-col items-center justify-around h-[257px]">
          <h3 className="text-[20px] font-bold ">{slides[slideNumber].title}</h3>
          <h1 className="text-[20px] text-center font-bold sm:text-[40px]  md:text-[55px] lg:text-[72px]">{slides[slideNumber].heading}</h1>
          <p className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] font-medium text-center px-0 ">
          {slides[slideNumber].description}
          </p>


        </div>
        <FontAwesomeIcon icon={faAngleRight} className={`h-[35px] w-[11px] cursor-pointer 
        ${slideNumber === slides.length -1 ? "opacity-30": "opacity-100"}`}
        onClick={nextSlide}/>
      </div>
      <ul className="flex justify-around w-[91px]">
            {[...Array(5)].map((_, index) => (
              <div
              key={index}
              className={`w-[11px] h-[11px] border-2 rounded-full text-white opacity-30 cursor-pointer
                ${activeIndex === index ? "opacity-100 bg-white" : "opacity-30 bg-transparent"}`}
              onClick={() => {
                setActiveIndex(index)
                setSlideNumber(index)
              }
            }
            ></div>
            ))}
          </ul>
      <button 
      className="cursor-pointer w-[230px] h-[60px] bg-[#6497f5] text-white rounded-[100px] text-[18px] font-medium"
      onClick={()=> {
        localStorage.removeItem("loggedInUser")
        router.push('/login')
        }}>Logout</button>
    </div>
  );
}