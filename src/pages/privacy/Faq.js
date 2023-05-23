import Footer from 'components/navigation/footer'
import Navbar from 'components/navigation/navbar'
import Cheapflight from 'components/universal/cheapflight'
import React from 'react'
import Faqs from '../../components/utils/faqs'

const Faq = () => {
  return (
    <div>
      <Navbar />
      <div className='w-11/12 max-w-2xl mx-auto bg-white py-5'>
        <div className='font-semibold drop-shadiw text-xl p-3'>Vaccination</div>

      </div>
      <Footer />
    </div>
  )
}

export default Faq
