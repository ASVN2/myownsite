import { motion } from 'framer-motion';

const Services = () => {
  return (
    <div>
      <div className="title relative mb-16">
        <h1 className="text-4xl  text-center">services</h1>
        <h1 className="text-5xl opacity-20 uppercase  font-bold top-[10%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-center absolute">services</h1>
      </div>
      <motion.div initial={{ y: 200, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }} className="row grid grid-cols-auto gap-4">
        <div className="col p-4 bg-[#212939] rounded-md shadow-md">
          <div className="icon">
            <img className="max-w-[80px]" src="/01.png" alt="01.png" />
          </div>
          <div className="header text-2xl py-4 font-semibold">Responsive Web Design</div>
          <div className="pargraph text-gray-300">
            Highlight your expertise in creating responsive websites that adapt seamlessly to different devices and screen sizes. Showcase your ability to deliver visually
            appealing and user-friendly designs that provide an optimal browsing experience across desktops, tablets, and mobile devices.
          </div>
        </div>
        <div className="col p-4 bg-[#212939] rounded-md shadow-md">
          <div className="icon">
            <img className="max-w-[80px]" src="/02.png" alt="01.png" />
          </div>
          <div className="header text-2xl py-4 font-semibold">Custom Website Development</div>
          <div className="pargraph text-gray-300">
            Emphasize your capability to develop custom websites tailored to meet the unique needs of your clients. Showcase your proficiency in translating client requirements
            into fully functional and visually captivating web experiences, ensuring that the websites align with their branding, goals, and target audience.
          </div>
        </div>
        <div className="col p-4 bg-[#212939] rounded-md shadow-md">
          <div className="icon">
            <img className="max-w-[80px]" src="/03.png" alt="01.png" />
          </div>
          <div className="header text-2xl py-4 font-semibold">Front-End Frameworks</div>
          <div className="pargraph text-gray-300">
            Highlight your proficiency in utilizing popular front-end frameworks such as React.js, Next.js Showcase your ability to leverage these frameworks to build dynamic and
            interactive web applications with efficient code structures, modular components, and enhanced development productivity.
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Services;
