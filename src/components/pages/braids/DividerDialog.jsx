import { Button, Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
import { useState, useEffect } from 'react';

export const DividerDialog = ({
  buttonText = '' || 'Виж още',
  diaTitle,
  closeButton = '' || 'Затвори',
  children,
  customText,
  textClass = '',
}) => {
  const [isOpen, setIsOpen] = useState(false);

  function open() {
    setIsOpen(true);
    window.hideHeader();
  }

  function close() {
    setIsOpen(false);
    window.showHeader();
  }
  useEffect(() => {
    return () => {
      if (window.showHeader) {
        window.showHeader();
      }
    };
  }, []);
  return (
    <>
      <Button onClick={open} className='site-button-3'>
        {buttonText}
      </Button>

      <Dialog
        open={isOpen}
        as='div'
        className='relative z-10 focus:outline-none'
        onClose={close}
      >
        <div className='fixed inset-0 z-10 w-screen overflow-y-auto'>
          <div className='flex items-center justify-center min-h-full p-4'>
            <DialogPanel
              transition
              className='w-full max-w-md rounded-xl bg-white/5 p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0'
            >
              <DialogTitle
                as='h3'
                className='font-medium text-white text-base/7'
              >
                {diaTitle}
              </DialogTitle>
              <div className={`mt-2 text-sm/6 ${textClass}`}>
                <div className='mt-2'>{children || customText}</div>
              </div>
              <div className='mt-4'>
                <Button
                  className='inline-flex items-center site-button-3'
                  onClick={close}
                >
                  {closeButton}
                </Button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
};
