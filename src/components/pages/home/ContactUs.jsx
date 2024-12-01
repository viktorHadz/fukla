import { DialogPopUp } from '../../common/DialogPopUp';
import { ContactUsInner } from './ContactUsInner';
export const ContactUs = () => {
  return (
    <section aria-labelledby='home-contact py-48'>
      <div className='overflow-hidden pt-36 sm:pt-14'>
        <div className='bg-dark-gradient'>
          <div className='px-4 mx-auto max-w-7xl sm:px-6 lg:px-8'>
            <div className='relative pt-48 pb-16 sm:pb-24'>
              <div>
                <h2
                  id='sale-heading'
                  className='text-4xl font-bold tracking-tight text-white md:text-5xl'
                >
                  За детайли.
                  <br />
                  Свържете се с нас.
                </h2>
                <div className='mt-6 text-base'>
                  <DialogPopUp buttonText='Свържи се'>
                    <ContactUsInner />
                  </DialogPopUp>
                </div>
              </div>

              <div className='absolute transform -translate-x-1/2 -top-32 left-1/2 sm:top-6 sm:translate-x-0'>
                <div className='flex ml-24 space-x-6 min-w-max sm:ml-3 lg:space-x-8'>
                  <div className='flex space-x-6 sm:flex-col sm:space-x-0 sm:space-y-6 lg:space-y-8'>
                    <div className='flex-shrink-0'>
                      <img
                        className='object-cover w-64 h-64 rounded-lg md:h-72 md:w-72'
                        src='/images/braids/certificateGirl.webp'
                        alt='two-girls'
                      />
                    </div>

                    <div className='flex-shrink-0 mt-6 sm:mt-0'>
                      <img
                        className='object-cover w-64 h-64 rounded-lg md:h-72 md:w-72'
                        src='/images/braids/girlPurpleBraid.webp'
                        alt=''
                      />
                    </div>
                  </div>
                  <div className='flex space-x-6 sm:-mt-20 sm:flex-col sm:space-x-0 sm:space-y-6 lg:space-y-8'>
                    <div className='flex-shrink-0'>
                      <img
                        className='object-cover w-64 h-64 rounded-lg md:h-72 md:w-72'
                        src='/images/braids/braidsAboutUs.webp'
                        alt=''
                      />
                    </div>

                    <div className='flex-shrink-0 mt-6 sm:mt-0'>
                      <img
                        className='object-cover w-64 h-64 rounded-lg md:h-72 md:w-72'
                        src='/images/braids/girlWithCrossBraiding.webp'
                        alt=''
                      />
                    </div>
                  </div>
                  <div className='flex space-x-6 sm:flex-col sm:space-x-0 sm:space-y-6 lg:space-y-8'>
                    <div className='flex-shrink-0'>
                      <img
                        className='object-cover w-64 h-64 rounded-lg md:h-72 md:w-72'
                        src='/images/home/handNails.webp'
                        alt=''
                      />
                    </div>

                    <div className='flex-shrink-0 mt-6 sm:mt-0'>
                      <img
                        className='object-cover w-64 h-64 rounded-lg md:h-72 md:w-72'
                        src='/images/braids/braidsSwiper5.webp'
                        alt=''
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div
                id='sale-heading'
                className='my-4 text-4xl font-bold tracking-tight text-white md:text-5xl'
              >
                Или запишете час{' '}
                <a
                  href='https://www.notino.bg/saloni/art-studio-fukla?source_caller=ui&shortlink=lbbsjxf8&c=salon_detail_redirect&pid=notino_partner&deep_link_value=https%3A%2F%2Fnotino.bg%2Fsaloni%2Fart-studio-fukla&af_xp=custom'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='hover:text-pinkv hover:underline'
                >
                  тук
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
