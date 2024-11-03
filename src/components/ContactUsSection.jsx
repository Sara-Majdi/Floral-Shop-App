import React from 'react'

const ContactUsSection = () => {
  const onSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className='mt-9'>

        {/* Line Divider */}
        <hr className="border-t-2 border-gray-300 w-full my-4 mt-[-10px]" />

        <section className="flex justify-center items-center w-full mt-4 px-4 sm:px-0">
        <form onSubmit={onSubmit} className="w-full max-w-lg font-inter rounded-md pb-8">

          {/* Text */}
          <div className="text-center mb-8 mt-4">
            <h2 className="text-3xl font-semibold">Reach out to us</h2>
            <p className="text-md mt-2">Have a burning question? Fill up the form below.</p>
          </div>

          <div className="flex flex-col sm:flex-row sm:justify-between gap-4">
            <div className="w-full">
              <label className='font-semibold text-xl' htmlFor="name">Name</label>
              <input
                type="text"
                className="w-full h-[40px] border border-gray-400 rounded-md p-3 text-lg mt-2"
                placeholder="Enter Your Name"
                name="name"
                required
              />
            </div>

            <div className="w-full">
              <label className='font-semibold text-xl' htmlFor="email">Email Address</label>
              <input
                type="email"
                className="w-full h-[40px] border border-gray-400 rounded-md p-3 text-lg mt-2"
                placeholder="Enter Your Email"
                name="email"
                required
              />
            </div>
          </div>

          <div className="mt-4">
            <label className='font-semibold text-xl' htmlFor="message">Question/Message</label>
            <textarea
              className="w-full h-[150px] block border border-gray-400 rounded-md p-3 text-lg mt-2"
              placeholder="Feel free to drop a message/question"
              name="message"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-pink-500 w-full mt-6 py-2 rounded-md font-bold text-1xl text-white"
          >
            Send
          </button>

        </form>
      </section>
        
    </div>
  )
}

export default ContactUsSection