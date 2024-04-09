"use client";
import { useState } from "react";
import { Carousel } from "@trendyol-js/react-carousel";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";

function Modal() {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <>
      {/* Modal toggle */}
      <button
        onClick={toggleModal}
        className='block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
        type='button'
      >
        Modalu Aç/Kapat
      </button>

      {/* Main modal */}
      {modalOpen && (
        <div
          id='default-modal'
          className='fixed top-0 right-0 bottom-0 left-0 z-50 flex items-center justify-center bg-black bg-opacity-50'
          onClick={toggleModal}
        >
          <div
            className='relative p-4 w-5/6 h-5/6'
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal content */}
            <div className='flex flex-col h-full min-w-content rounded-lg shadow dark:bg-gray-700'>
              {/* Modal header */}

              <button
                onClick={toggleModal}
                type='button'
                className='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white'
              >
                <svg
                  className='w-3 h-3'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 14 14'
                >
                  <path
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6'
                  />
                </svg>
                <span className='sr-only'>Modalı Kapat</span>
              </button>

              {/* Modal body */}
              <div className='p-4 md:p-5 space-y-4 h-full min-w-content'>
                <div className='flex min-w-content h-full flex-col items-center justify-center'>
                  <Tabs aria-label='Options'>
                    <Tab className='min-w-content' key='1' title='1'>
                      <Card className='min-w-content dark:bg-gray-700'>
                        <CardBody className='min-w-content dark:bg-gray-700'>
                          <iframe
                            src='https://drive.google.com/file/d/1Oo7TqASsdBgTKPpavSyFKPPCAH71Qx81/preview'
                            width='1280'
                            height='720'
                            allow='autoplay'
                          ></iframe>
                        </CardBody>
                      </Card>
                    </Tab>
                    <Tab className='min-w-content' key='2' title='2'>
                      <Card className='min-w-content dark:bg-gray-700'>
                        <CardBody className='min-w-content dark:bg-gray-700'>
                          <iframe
                            src='https://drive.google.com/file/d/1wOSj_zTq5i4TJ0z6R-acOiwxOrR3ZIJl/preview'
                            width='1280'
                            height='720'
                            allow='autoplay'
                          ></iframe>
                        </CardBody>
                      </Card>
                    </Tab>
                    <Tab className='min-w-content' key='3' title='3'>
                      <Card className='min-w-content dark:bg-gray-700'>
                        <CardBody className='min-w-content dark:bg-gray-700'>
                          <iframe
                            src='https://drive.google.com/file/d/1Oo7TqASsdBgTKPpavSyFKPPCAH71Qx81/preview'
                            width='1280'
                            height='720'
                            allow='autoplay'
                          ></iframe>
                        </CardBody>
                      </Card>
                    </Tab>
                    <Tab className='min-w-content' key='4' title='4'>
                      <Card className='min-w-content dark:bg-gray-700'>
                        <CardBody className='min-w-content dark:bg-gray-700'>
                          <iframe
                            src='https://drive.google.com/file/d/1Oo7TqASsdBgTKPpavSyFKPPCAH71Qx81/preview'
                            width='1280'
                            height='720'
                            allow='autoplay'
                          ></iframe>
                        </CardBody>
                      </Card>
                    </Tab>
                  </Tabs>
                </div>
              </div>
              {/* Modal footer */}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
