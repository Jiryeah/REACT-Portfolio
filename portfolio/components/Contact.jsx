import React, { useState } from 'react';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Link from 'next/link';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    number: '',
    email: '',
    subject: '',
    message: '',
  });

  const { name, number, email, subject, message } = formState;

  // Update inputs value
  const handleFormChange = () => (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  // Form Submit function
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.entries(formState).forEach(([key, value]) => {
      formData.append(key, value);
    });
    fetch('https://getform.io/f/877f28ae-3bf6-4442-93bd-e4eabd28321e', {
      method: 'POST',
      body: formData,
    }).then(() => setFormState({ name: '', number: '', email: '', subject: '', message: '' }));
  };

  return (
    <div id='contact' className='w-full lg:h-screen'>
      <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
        <p className='text-xl tracking-widest uppercase text-blue-500'>Contact</p>
        <h2 className='py-4'>Get In Touch</h2>
        <div className='grid lg:grid-cols-5 gap-8'>
          <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
            <div className='lg:p-4 h-full'>
              <div>
                <img
                  className='rounded-xl hover:scale-105 ease-in duration-300'
                  src='https://picsum.photos/id/486/800'
                  alt='/'
                />
              </div>
              <div>
                <h2 className='py-2'>Faissal Shabani</h2>
                <p>Full-Stack Developer</p>
                <p className='py-4'>
                  <span className='text-blue-500'>Availability</span>: freelance or full-time
                  positions.
                  <br />
                  Contact me and let's talk.
                </p>
              </div>
              <div>
                <p className='uppercase pt-8'>Connect with Me</p>
                <div className='flex items-center justify-between py-4'>
                  <a
                    href='https://www.linkedin.com/in/FaissalShabani'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                      <FaLinkedinIn />
                    </div>
                  </a>
                  <a href='https://github.com/Jiryeah' target='_blank' rel='noreferrer'>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                      <FaGithub />
                    </div>
                  </a>
                  <Link href='/#contact'>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                      <AiOutlineMail />
                    </div>
                  </Link>
                  <a
                    href='https://docs.google.com/document/d/1AFBm4HbwnPqSbN7Za4Y58EtE6viWyiJrTl7TcndP-Mg/edit?usp=sharing'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                      <BsFillPersonLinesFill />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
            <div className='p-4'>
              <form
                onSubmit={handleFormSubmit}
                action='https://getform.io/f/877f28ae-3bf6-4442-93bd-e4eabd28321e'
                method='POST'
              >
                <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                  <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>Name</label>
                    <input
                      className='border-2 rounded-lg p-3 flex border-gray-300'
                      type='text'
                      name='name'
                      required
                      value={name}
                      onChange={handleFormChange()}
                    />
                  </div>
                  <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>Phone Number</label>
                    <input
                      className='border-2 rounded-lg p-3 flex border-gray-300'
                      type='tel'
                      name='number'
                      required
                      value={number}
                      onChange={handleFormChange()}
                    />
                  </div>
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Email</label>
                  <input
                    className='border-2 rounded-lg p-3 flex border-gray-300'
                    type='email'
                    name='email'
                    value={email}
                    onChange={handleFormChange()}
                  />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Subject</label>
                  <input
                    className='border-2 rounded-lg p-3 flex border-gray-300'
                    type='subject'
                    name='subject'
                    required
                    value={subject}
                    onChange={handleFormChange()}
                  />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Message</label>
                  <textarea
                    className='border-2 rounded-lg p-3 border-gray-300'
                    rows='10'
                    name='message'
                    required
                    value={message}
                    onChange={handleFormChange()}
                  ></textarea>
                </div>
                <button className='w-full p-4 text-gray-100 mt-4'>Send Message</button>
              </form>
            </div>
          </div>
        </div>
        <div className='flex justify-center py-12'>
          <Link href='/'>
            <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
              <HiOutlineChevronDoubleUp className='text-blue-500' size={30} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
