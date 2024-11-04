'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { X, Sparkles, Timer } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

export interface PopupModalProps {
    delay?: number;
    actionButtonText?: string;
  }

const STORAGE_KEY = 'modal_shown_timestamp';

export default function PopupModal({
  delay = 3000,
  actionButtonText = "Nasze samochody",
}: PopupModalProps) {
  const [mounted, setMounted] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
    const lastShown = localStorage.getItem(STORAGE_KEY);
    const now = new Date().getTime();

    if (!lastShown || now - parseInt(lastShown) > 24 * 60 * 60 * 1000) {
      const timer = setTimeout(() => {
        setShowModal(true);
        localStorage.setItem(STORAGE_KEY, now.toString());
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [delay]
  );

  const handleClose = () => {
    setShowModal(false);
  };

  const handleAction = () => {
    setShowModal(false);
    router.push('#our-cars');
  };

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {showModal && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/50 z-50"
            onClick={handleClose}
          />
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: "-50%", x: "-50%" }}
            animate={{ scale: 1, opacity: 1, y: "-50%", x: "-50%" }}
            exit={{ scale: 0.95, opacity: 0, y: "-50%", x: "-50%" }}
            transition={{ 
              duration: 0.3,
              ease: [0.16, 1, 0.3, 1]
            }}
            className="fixed w-[90%] md:w-[550px] lg:w-[600px] left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50
                      bg-neutral-800 rounded-xl shadow-xl
                     overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Decorative background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-40 h-40 bg-blue-500 rounded-full -translate-x-1/2 -translate-y-1/2" />
              <div className="absolute bottom-0 right-0 w-60 h-60 bg-blue-500 rounded-full translate-x-1/2 translate-y-1/2" />
            </div>

            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute right-4 top-4 text-neutral-400 hover:text-white
                       transition-colors duration-200 z-10"
            >
              <X size={24} />
              <span className="sr-only">Zamknij</span>
            </button>

            {/* Content container */}
            <div className="relative p-6 md:p-8 lg:p-10">
              {/* Sale badge */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0, y: "-20%", x: "-50%", top: 12 }}
                animate={{ scale: 1, opacity: 1, y: "0%", x: "-50%", top: 12 }}
                transition={{ delay: 0.3 }}
                className="absolute transform rotate-12 -translate-x-1/2 left-1/2 bg-black/20 border-[1px] border-blue-primary text-white px-4 py-2 rounded-lg
                          shadow-lg"
              >
                <Sparkles className="inline-block text-neutral-300 stroke-1 w-2 md:w-4 h-2 md:h-4 mr-1" />
                <span className="font-light tracking-wider text-neutral-300 text-sm md:text-base">PROMOCJA!</span>
              </motion.div>

              {/* Main content */}
              <div className="text-center space-y-4 md:pt-8 md:pb-4 py-10 pb-4">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                  className="space-y-2"
                >
                  <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-neutral-300">
                    Nie przegap naszej specjalnej promocji!
                  </h2>
                </motion.div>

                {/* Promotion section */}
                {/* 3 days in the price of 2 */}
                {/* 5 days in the price of 3 */}
                {/* 7 days in the price of 5 */}
                <motion.div
                    initial={{y: 20, opacity: 0}}
                    animate={{y: 0, opacity: 1}}
                    transition={{delay: 0.2}}
                    className="flex flex-col items-center space-y-2"
                >
                  <h3 className={"text-2xl font-semibold text-blue-primary"}>
                    3 DNI W CENIE 2
                  </h3>
                  <h3 className={"text-2xl font-semibold text-blue-primary"}>
                    5 DNI W CENIE 3
                  </h3>
                  <h3 className={"text-2xl font-semibold text-blue-primary"}>
                    7 DNI W CENIE 5
                  </h3>
                </motion.div>

                {/* Timer section */}
                <motion.div
                    initial={{y: 20, opacity: 0}}
                    animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="flex items-center justify-center space-x-2 text-neutral-500"
                >
                  <Timer className="w-5 h-5" />
                  <p className="text-xs md:text-sm">Oferta ograniczona czasowo. </p>
                </motion.div>

                {/* Action button */}
                <motion.button
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  onClick={handleAction}
                  className="w-full bg-blue-primary text-black py-4 px-6 rounded-xl
                           text-lg font-semibold hover:bg-blue-500
                           transform hover:scale-[1.02] active:scale-[0.98]
                           transition-all duration-200
                           focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
                           shadow-lg hover:shadow-xl"
                >
                  {actionButtonText}
                </motion.button>

                {/* Terms text */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="text-xs text-neutral-500 mt-4"
                >
                  *Warunki promocji mogą ulec zmianie.
                </motion.p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>,
    document.body
  );
}