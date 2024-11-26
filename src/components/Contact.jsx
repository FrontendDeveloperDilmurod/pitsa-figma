const Contact = () => {
  return (
    <div name="contact" className=" bg-gradient-to-b  from-black to-gray-800 w-full h-screen p-4 text-white">
      <div className=" flex  flex-col  p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className=" text-4xl inline border-b-4 border-gray-500  font-bold">Contact</p>
          <p className=" py-6"> Submit the form below to get in touch with me</p>
        </div>

        <div className=" flex justify-center items-center">
          <form action="https://getform.io/f/NbW5k4ey" method="POST" className=" flex flex-col w-full md:w-1/2">
            <input type="text" name="name" placeholder="Enter your name " className=" p-2  bg-transparent  border-2 rounded-md focus:outline-none text-white" required/>
            <input type="email" name="name" placeholder="Enter your email " className="  my-6 p-2  bg-transparent  border-2 rounded-md focus:outline-none text-white" required />
            <textarea name="message" rows="10" placeholder="Enter your message" className=" p-2 bg-transparent text-white focus:outline-none rounded-md  border-2" required></textarea>
            <button className=" bg-gradient-to-b  text-white  from-cyan-500 to-blue-500 my-8 rounded-md mx-auto px-6 py-3 flex justify-center items-center hover:scale-110 duration-300 ">Let's talk</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
