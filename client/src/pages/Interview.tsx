import React, { useState, useEffect } from 'react';
import Button from '../components/Button';

const Interview: React.FC = () => {
    const [timeLeft, setTimeLeft] = useState(60); // Set initial time in seconds
    const [question, setQuestion] = useState('Explain your approach to problem-solving.');

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const handleNext = () => {
        // Logic to load the next question
        console.log('Next question');
    };

    return (
        <div className="grid min-h-screen grid-cols-2 p-12 gap-2">
            {/* Left Half - Question */}
            <div className="flex items-center justify-center text-white shadow-md">
                <div className="text-center p-8">
                    <h1 className="text-2xl font-semibold mb-4">Question 1</h1>
                    <p className="text-lg">{question}</p>
                </div>
            </div>

            {/* Right Half - Video + Timer */}
            <div className="flex flex-col h-full items-center justify-between p-6 bg-gray-200">
                {/* Video Camera */}
                <div className="w-full h-2/3 bg-black rounded-md border border-primary mb-4">
                    <video className="w-full h-full" autoPlay playsInline muted></video>
                </div>

                {/* Timer */}
                <div className="text-center">
                    <p className="text-xl font-semibold">Time Left: {timeLeft}s</p>
                </div>

                {/* Next Button */}
                <div className="flex w-full justify-end">

                    <Button type='secondary' >
                        Next
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Interview;
