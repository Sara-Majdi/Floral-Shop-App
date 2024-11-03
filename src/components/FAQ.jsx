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
        question: "What flowers & gifts can I get?",
        answer: "We offer flowers & gifts in all designs and occasions. For a classic gift, go for our popular flower bouquets & long boxes. If you want something premium, we recommend our basket & boxes flowers.",
    },
    {
        question: "How do I make an order?",
        answer:
          "First time shopping with BloomThis? We’re ecstatic to have you on board! Just visit our website at bloomthis.co to place your order. It only takes 5 easy steps & 3 minutes!",
      },
      {
        question: "Can I order with phone/chat/WhatsApp?",
        answer:
          "You’ll have to make your order online on the BloomThis website at bloomthis.co to enjoy the best shopping experience. However, if you need help, we’re always happy to assist on phone, chat or WhatsApp.",
      },
      {
        question: "Can I change my order details?",
        answer:
          "Yes, you can but you’ll need to inform us ASAP. If you’d like to change your order details, please email us at contact@sorafloral.com with your new order details.",
      },
      {
        question: "Can I cancel my order?",
        answer:
          "Yes, you can cancel your order by e-mailing us at contact@sorafloral.com by 10 AM one day before your pick-up date. Upon confirmation by our Customer Service, your payment will then be refunded to you in online transer ONLY.",
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
                transition={{
                    duration: 0.3, // Adjust for smoother opening/closing
                    ease: [0.4, 0, 0.2, 1], // Smooth ease-in-out effect
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
        <div className="text-center mb-8">
            <h2 className="text-3xl font-semibold">FAQs</h2>
            <p className="text-md mt-2">Find answers to our most common questions below. If you have further inquiries, feel free to reach out to us.</p>
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