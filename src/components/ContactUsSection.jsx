import React from 'react'

const ContactUsSection = () => {
  const onSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className='mt-9'>
        <div className='h-12 bg-pink-300 text-lg text-white font-bold flex justify-center items-center'>
            Contact Us
        </div>

        <section className="flex justify-center items-center w-full mt-4 px-4 sm:px-0">
        <form onSubmit={onSubmit} className="w-full max-w-lg font-inter rounded-md pb-8">
          <div className="flex flex-col sm:flex-row sm:justify-between gap-4">
            <div className="w-full">
              <label className='font-semibold text-xl' htmlFor="name">Name</label>
              <input
                type="text"
                className="w-full h-[50px] border border-gray-400 rounded-md p-3 text-lg mt-2"
                placeholder="Enter Your Name"
                name="name"
                required
              />
            </div>

            <div className="w-full">
              <label className='font-semibold text-xl' htmlFor="email">Email Address</label>
              <input
                type="email" // Changed type to 'email' for better validation
                className="w-full h-[50px] border border-gray-400 rounded-md p-3 text-lg mt-2"
                placeholder="Enter Your Email"
                name="email"
                required
              />
            </div>
          </div>

          <div className="mt-8">
            <label className='font-semibold text-xl' htmlFor="message">Question/Message</label>
            <textarea
              className="w-full h-[200px] block border border-gray-400 rounded-md p-3 text-lg mt-2"
              placeholder="Feel free to drop a message/question"
              name="message"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full mt-6 py-4 rounded-md font-bold text-2xl font-inter bg-violet2 text-white bg-black"
          >
            Send
          </button>
        </form>
      </section>
        
    </div>
  )
}

export default ContactUsSection