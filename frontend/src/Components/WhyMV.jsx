import React from 'react';
import Led from '../assets/Images/Led.png';
import Legacy from '../assets/Images/Legacy.png';
import Innovating from '../assets/Images/Innovating.png';
import { GiLaurelCrown, GiArtificialIntelligence } from 'react-icons/gi';
import { MdEmojiEvents } from 'react-icons/md';
import { FaHandshake, FaAward, FaUserMd, FaBrain, FaLightbulb } from 'react-icons/fa';

const disorders = [
    {
        title: 'A Legacy of Trust & Impact',
        description: 'Since 2012, Mind Vriksha has been redefining mental health care — blending innovation, compassion, and expertise to help people not just heal, but truly thrive.',
        image: Led,
        Icon: GiLaurelCrown,
    },
    {
        title: 'Excellant Treatment',
        description: 'Led by Dr. Rohit Garg, one of India’s most respected psychiatrists, we blend clinical excellence with deep empathy. Patients worldwide trust us to deliver the best outcomes, even in the most complex cases.',
        image: Legacy,
        Icon: FaUserMd,
    },
    {
        title: 'Culture of Innovation',
        description: 'Recovery through AI Neurofeedback technology and wearable devices, we empowers clients to monitor progress and major steps towards recovery.',
        image: Innovating,
        Icon: GiArtificialIntelligence,
    },
];

const Disorders = () => {
    return (
        <section className="py-24 bg-primary-skin">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-primary-green text-center mb-12">Why Mind Vriksha</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {disorders.map((disorder, index) => (
                        <div key={index} className="bg-light-green rounded-lg shadow-lg overflow-hidden flex flex-col">
                            {/* <img src={disorder.image} alt={disorder.title} className="w-full h-53 object-cover object-center" /> */}
                            <div className="flex justify-center pt-8">
                                <disorder.Icon size={58} className="text-primary-green" />
                            </div>
                            <div className="p-6 text-center flex flex-col flex-grow">
                                <h3 className="text-xl font-bold text-primary-green mb-2">{disorder.title}</h3>
                                <p className="text-gray-700 flex-grow">{disorder.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Disorders;

//hover:shadow-xl