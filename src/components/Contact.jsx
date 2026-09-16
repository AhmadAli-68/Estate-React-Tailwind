import { useState } from 'react';
import toast from 'react-hot-toast';

const Contact = () => {
  const [result, setResult] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult('Sending....');
    const formData = new FormData(event.target);

    formData.append('access_key', '1af2ac75-9783-4ead-bd1c-a46790d06a5e');

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult('');
      toast.success('Message sent Successfully.')
      event.target.reset();
    } else {
      console.log('Error', data);
      toast.error(data.message)
      setResult();
    }
  };

  return (
    <section
      id='contact'
      className='text-center p-6 py-20 lg:px-32 w-full overflow-hidden'
    >
      <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>
        Contact{' '}
        <span className='underline underline-offset-4 decoration-1 font-light'>With Us</span>
      </h1>

      <p className='text-center text-gray-500 mb-12 max-w-80 mx-auto'>Ready to Make a Move? Let's Build Your Future Together.</p>

      <form
        onSubmit={onSubmit}
        className='max-w-2xl mx-auto text-gray-600 pt-8'
      >
        <div className='flex flex-wrap'>
          <div className='w-full mb-2 md:w-1/2 text-left'>
            Your Name
            <input
              type='text'
              name='Name'
              placeholder='Your Name'
              className='w-full border border-gray-300 rounded-lg py-3 px-4 mt-2'
              required
            />
          </div>

          <div className='w-full md:w-1/2 text-left md:pl-4'>
            Your Email
            <input
              type='email'
              name='Email'
              placeholder='Your Email'
              className='w-full border border-gray-300 rounded-lg py-3 px-4 mt-2'
              required
            />
          </div>
        </div>

        <div className='text-left my-2'>
          Message
          <textarea
            name='Message'
            className='w-full border border-gray-300 rounded-lg py-3 px-4 mt-2 h-48 resize-none'
            placeholder='Your Message Here'
            required />
        </div>

        <button className='bg-blue-600 text-white rounded-lg px-8 py-3 mt-2 mb-10 hover:bg-blue-700 transition-all'>
          {result ? result : 'Send Message'}
        </button>
      </form>
    </section>
  )
}

export default Contact