import React from 'react'
import img1 from '../assets/testimonial_image1.png'
import img2 from '../assets/testimonial_img2.jpg'
import img3 from '../assets/testimonial_image3.jpeg'
import Star from '../assets/star_icon.png'

const testimonialsData = [
  {
    name: "Donald Jackman",
    title: "Marketing Manager",
    image: img1,
    alt: "Portrait of Donald Jackman",
    rating: 5,
    text: "From the very first meeting, they understood my vision and helped me find the perfect property. Their attention to detail and commitment to client satisfaction is unmatched"
  },
  {
    name: "Richard Nelson",
    title: "UI/UX Designer",
    image: img2,
    alt: "Portrait of Richard Nelson",
    rating: 4,
    text: "From the very first meeting, they understood my vision and helped me find the perfect property. Their attention to detail and commitment to client satisfaction is unmatched"
  },
  {
    name: "James Washington",
    title: "Co-Founder",
    image: img3,
    alt: "Portrait of James Washington",
    rating: 5,
    text: "From the very first meeting, they understood my vision and helped me find the perfect property. Their attention to detail and commitment to client satisfaction is unmatched"
  },
]

const Testimonials = () => {
  return (
    <div className='container mx-auto py-10 lg:px-32 w-full overflow-hidden' id='Testimonials'>
      <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Customer <span className='underline underline-offset-4 decoration-1 under font-light'>Testimonials</span></h1>
      <p className='text-center text-gray-500 mb-12 max-w-80 mx-auto'>Real Stories from Those Who Found Home with Us</p>
      <div className='flex flex-wrap justify-center gap-8'>
        {testimonialsData.map((testimonial, index) => (
          <div key={index} className='max-w-[340px] border shadow-lg rounded px-8 py-12 text-center'>
            <img 
            className='w-10 h-20 rounded-full mx-auto mb-4'
            src={testimonial.image} alt={testimonial.alt} />
            <h2 className='text-xl text-gray-700 font-meduium'>{testimonial.name}</h2>
            <p className='text-gray-500 mb-4 text-sm'>{testimonial.title}</p>
            <div className='flex justify-center gap-1 text-red-500 mb-4'>
              {Array.from({length:testimonial.rating},(item,index)=>(
                <img key={index} src={Star} alt="star icon" className='w-5 h-5'/>
              ))}
            </div>
            <p className='text-gray-600'>{testimonial.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Testimonials;