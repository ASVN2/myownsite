import imgAbout from './assest/aboutme.png';
import mail from './assest/mail.png';
import { CgWebsite } from 'react-icons/cg';
import { AiOutlineGithub } from 'react-icons/ai';
import { MdSwipeRight } from 'react-icons/md';
import emailjs from '@emailjs/browser';
import { Swiper, SwiperSlide } from 'swiper/react';
import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

import 'swiper/css';
import { Link } from 'react-router-dom';
import Services from './assest/Services';

const skills = [
  { name: 'javascript', image: 'images/skill/javascript.webp' },
  { name: 'html', image: 'images/skill/html.png' },
  { name: 'reactjs', image: 'images/skill/reactjs.webp' },
  { name: 'tailwindcss', image: 'images/skill/Tailwind_CSS_Logo.svg.png' },
  { name: 'css', image: 'images/skill/css.png' },
  { name: 'scss', image: 'images/skill/sass.png' },
  { name: 'git', image: 'images/skill/git.png' },
  { name: 'firebase', image: 'images/skill/firebase.png' },
  { name: 'framer', image: 'images/skill/ftm.png' },
  { name: 'next.js', image: 'images/skill/next.png' },
];

const works = [
  {
    name: 'fitnesspro',
    image: 'images/works/1.png',
    info: 'This is a frontend challenge by Frontend Mentor that involves building an e-commerce web application for purchasing chess sets. Put your web development skills to the test and create a functional and visually appealing online store that makes it easy for chess enthusiasts to buy their favorite sets.',
    codeLink: 'https://github.com/ASVN2/fitnesspro',
    liveLink: 'https://fitnesspro.vercel.app/',
    id: 1,
    tech: ['react.js', 'taliwind', 'fmt'],
  },
  {
    name: 'properland',
    image: 'images/works/2.png',
    info: 'This is a frontend challenge by Frontend Mentor where you will create a tip calculator app that calculates the tip amount based on the number of people, the tip percentage, and the total bill amount. Test your frontend development skills and create a user-friendly and visually appealing app that helps users quickly calculate tips.',
    codeLink: 'https://github.com/ASVN2?tab=repositories',
    liveLink: 'https://proper-land.vercel.app/',
    id: 2,
    tech: ['react.js', 'tailwind'],
  },
  {
    name: 'Prayer Time',
    image: 'images/works/3.png',
    info: 'This is an app that helps you find the prayer times and Islamic date based on your location. Simply enter the name of your city or country, and the app will provide you with accurate prayer timings and the current Islamic date. Stay connected to your faith and never miss a prayer time again with this user-friendly and convenient app.',
    codeLink: 'https://github.com/ASVN2/boardify',
    liveLink: 'https://boardify.vercel.app/',
    id: 3,
    tech: ['tailwind', 'next.js'],
  },
  {
    name: 'Axmaler',
    image: 'images/works/4.png',
    info: 'This is one of my personal websites that I created to practice and improve my JavaScript skills over time. Explore the site and see the progress I have made as a frontend developer. From dynamic user interfaces to interactive web applications, this site showcases my dedication to continuous learning and improvement in the world of web development.',
    codeLink: 'https://github.com/ASVN2/axmaler',
    liveLink: 'https://asvn2.github.io/axmaler/',
    id: 4,
    tech: ['html', 'css'],
  },
  {
    name: 'Neoxlar',
    image: 'images/works/5.png',
    info: 'This is a website for taking notes that allows you to authenticate with your Gmail or email account, or create an account using your email or Gmail. Once logged in, you can easily take and save notes online, making it convenient to access them from any device. Stay organized and keep track of important information with this user-friendly note-taking website.',
    codeLink: 'https://github.com/ASVN2/Neoxlar',
    liveLink: 'https://asvn2.github.io/Neoxlar/',
    id: 5,
    tech: ['html', 'css'],
  },
  {
    name: 'Friday',
    image: 'images/works/6.png',
    info: 'This is a website for managing projects, similar to Monday. After authentication with your team, you can easily create and delete projects, assign people to projects, and leave comments on them. Keep your team organized and up-to-date with this user-friendly project management website."',
    codeLink: 'https://github.com/ASVN2/friday',
    liveLink: 'https://friday-e0a4a.web.app/',
    id: 6,
    tech: ['html', 'css', 'js', 'react.js', 'firebase'],
  },
  {
    name: 'Note Taker',
    image: 'images/works/7.png',
    info: 'This is one of my personal websites that I created to practice and improve my HTML and CSS skills over time. Explore the site and see the progress I have made as a frontend developer. From beautiful page layouts to stunning designs, this site showcases my dedication to continuous learning and improvement in the world of web development.',
    codeLink: 'https://github.com/ASVN2/note_taker',
    liveLink: 'https://6427d2b8fe1ad8550f30849a--gentle-duckanoo-5b6640.netlify.app/',
    id: 7,
    tech: ['html', 'css', 'js', 'react.js', 'firebase'],
  },
  {
    name: 'E-commerce',
    image: 'images/works/8.png',
    info: 'This is a frontend challenge by Frontend Mentor that involves building an e-commerce web application for purchasing chess sets. Put your web development skills to the test and create a functional and visually appealing online store that makes it easy for chess enthusiasts to buy their favorite sets.',
    codeLink: 'https://github.com/ASVN2/e-commerce',
    liveLink: 'https://asvn2.github.io/E-commerce/',
    id: 8,
    tech: ['html', 'css', 'js'],
  },
  {
    name: 'Tip Calc',
    image: 'images/works/9.png',
    info: 'This is a frontend challenge by Frontend Mentor where you will create a tip calculator app that calculates the tip amount based on the number of people, the tip percentage, and the total bill amount. Test your frontend development skills and create a user-friendly and visually appealing app that helps users quickly calculate tips.',
    codeLink: 'https://github.com/ASVN2/tip-calculator-app-main',
    liveLink: 'https://asvn2.github.io/tip-calculator-app-main/',
    id: 9,
    tech: ['html', 'css', 'js'],
  },
  {
    name: 'Prayer Time',
    image: 'images/works/10.png',
    info: 'This is an app that helps you find the prayer times and Islamic date based on your location. Simply enter the name of your city or country, and the app will provide you with accurate prayer timings and the current Islamic date. Stay connected to your faith and never miss a prayer time again with this user-friendly and convenient app.',
    codeLink: 'https://github.com/ASVN2/prayer-times',
    liveLink: 'https://asvn2.github.io/prayer-times/',
    id: 10,
    tech: ['html', 'css', 'js', 'api'],
  },
];

function App() {
  const form = useRef();
  const [user_name, setUser_name] = useState('');
  const [user_email, setUser_email] = useState('');
  const [message, setMessage] = useState('');
  const prevButtonRef = useRef(null);
  const nextButtonRef = useRef(null);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        'service_4mjhgq8',
        'template_o5d8via',
        {
          user_name: user_name,
          user_email: user_email,
          message: message,
        },
        's8fisv0fRhehlEz_s'
      )
      .then(
        (result) => {
          console.log(result.text);
          setUser_name('');
          setUser_email('');
          setMessage('');
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <div className="mx-auto max-w-[1200px] pt-5 px-10">
        <div className="nav flex pt-4 flex-row md:flex-row justify-between flex-wrap">
          <div className="logo flex justify-center w-full md:w-fit mb-4 md:mb-0 ">
            <img src="/logo.png" className="max-w-[50px]" alt="logo.png" />
          </div>
          <div className="links flex gap-6 w-full md:w-fit justify-center text-xl">
            <a href="#skills">Skills</a>
            <a href="#services">Services</a>
            <a href="#works">works</a>
            <a href="#contanct">Contact</a>
          </div>
        </div>
        <div id="about" className="aboutme h-[80vh] mt-20  flex gap-20 place-items-center">
          <motion.div initial={{ y: 200, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }} className="text flex-[3]">
            <p className="text-4xl mb-3 font-semibold">Hi, I'm A72 👋</p>
            <p className="text-xl text-gray-400">
              {' '}
              I'm a self-taught front-end developer who is passionate about creating beautiful and functional web interfaces. With my fast-learning skills, I'm always eager to take
              on new challenges and expand my knowledge. I'm someone who embraces change and believes that it's essential for personal and professional growth. When I'm not coding,
              you can find me exploring the outdoors or reading up on the latest tech trends.
            </p>
          </motion.div>

          <motion.div initial={{ x: 200, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.6 }} className="image hidden md:block lg:block xl:block flex-1">
            <img src={imgAbout} alt="" />
          </motion.div>
        </div>
        {/* skills */}
        <div id="skills" className="skills mb-40 ">
          <div className="title relative mb-16">
            <h1 className="text-4xl  text-center">Skills</h1>
            <h1 className="text-5xl opacity-20 uppercase  font-bold top-[10%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-center absolute">Skills</h1>
          </div>
          <div className="skills-contanter flex gap-4 capitalize flex-wrap justify-center">
            {skills.map((skill, id) => {
              return (
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.1 * (id / 2) }}
                  key={skill.name}
                  className="skill flex place-items-center gap-4 bg-gray-800 flex-1 hover:border-white border-transparent duration-300 border-2 p-4 rounded-md min-w-[200px]">
                  <div className="image">
                    <img className="max-w-[50px] rounded-md" src={skill.image} alt={skill.name} />
                  </div>
                  <div className="text">
                    <h1 className="text-lg">{skill.name}</h1>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
        {/* services */}
        <div id="services">
          <Services />
        </div>
        {/* works */}
        <div id="works" className="works my-20 mt-60">
          <div className="title relative mb-16">
            <h1 className="text-4xl  text-center">Some of my works</h1>
            <h1 className="text-5xl opacity-20 uppercase  font-bold top-[10%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-center absolute">Projects</h1>
            {/* <h3 className="flex justify-center place-items-center mt-10 gap-3 text-xl">
              Swipe Right And Left <MdSwipeRight />
            </h3> */}
          </div>
          <div className="grid place-items-center grid-cols-auto gap-4">
            {works.map((work, id) => {
              return (
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.1 * (id / 2) }}
                  key={work.image}
                  className={`work overflow-hidden relative flex-col flex-wrap flex lg:flex-row xl:flex-row gap-6 mb-10 bg-[#1e293b] p-4 rounded-md`}>
                  <div>
                    <div className="image ">
                      <img className="rounded-xl img" src={work.image} alt="" />
                    </div>
                    <div className="info flex justify-between place-items-center rounded-md mt-4  bg-[#000000b8] w-full p-4 ">
                      <h1 className="text uppercase ">{work.name}</h1>
                      <div className="links flex gap-6 ">
                        <a
                          target={'_blank'}
                          className="flex border border-white place-items-center gap-2  w-fit p-2 rounded-md hover:bg-purple-900 duration-200"
                          href={work.codeLink}>
                          <AiOutlineGithub /> Code
                        </a>
                        <a target={'_blank'} className="flex border border-white place-items-center gap-2 w-fit p-2 rounded-md hover:bg-blue-900 duration-200" href={work.liveLink}>
                          <CgWebsite /> Live
                        </a>
                      </div>
                    </div>
                    <div className="tech px-4 py-2 mt-2 flex place-items-center gap-2 rounded-md shadow-sm shadow-gray-900 bg-[#151524]">
                      {work.tech.map((tech) => {
                        return <span className="uppercase mr-2">{tech}</span>;
                      })}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
        {/* .contanct me  */}
        <div id="contanct" className="contact mt-40 mb-10">
          <div className="title relative mb-16 ">
            <h1 className="text-4xl  text-center">Contact Me.</h1>
            <h1 className="text-5xl opacity-20 uppercase  font-bold top-[10%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-center absolute">Contact Me.</h1>
          </div>

          <div className="contaner flex-col lg:flex-row xl:flex-row flex gap-16 place-items-center justify-evenly">
            <div className="image flex flex-[1.5] justify-end">
              <img className=" rounded-xl w-[90%] " src={mail} alt="" />
            </div>

            <form ref={form} className=" flex flex-1  text-black flex-col bg-black w-full p-10 rounded-xl" onSubmit={sendEmail}>
              <div className="name mb-4 ">
                <label className="block text-white">Name</label>
                <input type="text" value={user_name} onChange={(e) => setUser_name(e.target.value)} className="w-full rounded-sm p-2 outline-none" name="name" />
              </div>

              <div className="email mb-4">
                <label className="block text-white">Email</label>
                <input type="email" value={user_email} onChange={(e) => setUser_email(e.target.value)} className="w-full outline-none rounded-sm p-2" name="email" />
              </div>
              <div className="message mb-4">
                <label className="block text-white">Message</label>
                <textarea value={message} onChange={(e) => setMessage(e.target.value)} className="w-full p-2 outline-none rounded-sm" name="message" />
              </div>
              <input className="bg-white text-black p-2 rounded-sm" type="submit" value="Send" />
            </form>
          </div>
        </div>
      </div>
      <div className="footer py-4 text-center bg-black mt-16">
        <p>Copyright © 2023 A72 • rights reserved</p>
      </div>
    </>
  );
}

export default App;
