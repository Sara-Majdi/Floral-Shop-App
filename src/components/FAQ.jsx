import React from 'react'
import PlusIcon from '../assets/icons/plus.svg';
import MinusIcon from "../assets/icons/minus.svg";
import { motion, AnimatePresence } from 'framer-motion'
import { div } from 'framer-motion/client';

const items = [
    {
        question: "What are the payment methods accepted?",
        answer: "We accept all major credit cards, PayPal, and various other payment methods depending on your location. Please contact our support team for more information on accepted payment methods in your region.",
    },
    {
        question: "How does the pricing work for teams?",
        answer: "Our pricing is per user, per month. This means you only pay for the number of team members you have on your account. Discounts are available for larger teams and annual subscriptions.",
    },
    {
        question: "Can I change my plan later?",
        answer:
          "Yes, you can upgrade or downgrade your plan at any time. Changes to your plan will be prorated and reflected in your next billing cycle.",
      },
      {
        question: "Is my data secure?",
        answer:
          "Security is our top priority. We use state-of-the-art encryption and comply with the best industry practices to ensure that your data is stored securely and accessed only by authorized users.",
      },
]


const AccordionItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = React.useState(false);
    return (
        <div>
            <div 
            className="py-2 border-b border-white/30"
            onClick={() => setIsOpen(!isOpen)}
        >
            <div className="flex items-center font-bold">                
            <span className="flex-1 text-base font-bold cursor-pointer ml-2">{question}</span>
            <span className='mr-4 text-base cursor-pointer'>{isOpen ? '-' : '+'}</span>
            
            </div>
            <AnimatePresence>
            {isOpen && (
                <motion.div 
                initial={{
                    opacity: 0,
                    height: 0,
                    marginTop: 0,
                }}
                animate={{
                    opacity: 1,
                    height: "auto",
                    marginTop: "16px",
                }}
                exit={{
                    opacity: 0,
                    height: 0,
                    marginTop: 0,
                }}
                >
                    <div 
                        className='ml-2  mt-[-12px] mb-4'>{answer}
                    </div>
                
                </motion.div>
            )}
            </AnimatePresence>
        </div>

        </div>
        
       
        
    );
};

const FAQ = () => {
  return (
    <div className='mt-9'>
        <div className='h-12 bg-pink-300 text-lg text-white font-bold flex justify-center items-center'>
            FAQs
        </div>
        <div>
          {/* Map through the items array to render AccordionItem components */}
          <div className='px-4 lg:px-96'>
            {items.map((item, index) => (
                <AccordionItem 
                key={index}
                question={item.question} 
                answer={item.answer} 
                />
            ))}
          </div>
            
        </div>
    </div>
  )
}

export default FAQ