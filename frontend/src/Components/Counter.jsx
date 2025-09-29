import React, { useState, useEffect } from 'react';
import { Users, Smile, Award } from 'lucide-react';

const Stats = () => {
    const [counterValues, setCounterValues] = useState({
        clientsServed: 0,
        satisfactionScore: 0,
        awards: 0
    });
    const finalValues = {
        clientsServed: 100000,
        satisfactionScore: 98,
        awards: 50
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setCounterValues(prev => {
                const newValues = {};
                for (const key in prev) {
                    newValues[key] = prev[key] < finalValues[key]
                        ? Math.min(prev[key] + Math.ceil(finalValues[key] / 100), finalValues[key])
                        : prev[key];
                }
                return newValues;
            });
        }, 30);

        return () => clearInterval(interval);
    }, []);

    const statsData = [
        {
            label: "Clients Served",
            value: counterValues.clientsServed.toLocaleString() + '+',
            icon: <Users className="h-12 w-12 text-primary-green mx-auto mb-4" />,
        },
        {
            label: "Satisfaction Score",
            value: counterValues.satisfactionScore + '%',
            icon: <Smile className="h-12 w-12 text-primary-green mx-auto mb-4" />,
        },
        {
            label: "No. of Awards",
            value: counterValues.awards + '+',
            icon: <Award className="h-12 w-12 text-primary-green mx-auto mb-4" />,
        },
    ];

    return (
        <section className="py-16 bg-primary-green">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {statsData.map((stat, index) => (
                        <div key={index} className="text-center p-8 bg-light-green rounded-lg shadow-md">
                            {stat.icon}
                            <h3 className="text-4xl font-bold text-dark-charcoal mb-2">{stat.value}</h3>
                            <p className="text-gray-700 text-lg">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;