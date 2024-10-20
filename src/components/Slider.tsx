"use client"

import React, { useState, useEffect } from 'react';

const slides = [
    {
        id: 1,
        title: "Sustainable Tech Solutions",
        description: "Discover our range of eco-friendly tech products.",
        img: "https://images.pexels.com/photos/3825477/pexels-photo-3825477.jpeg", // Sustainable Tech Solutions
        url: "/products",
        bg: "#f0f0f0", // Optional background color
    },
    {
        id: 2,
        title: "Refurbished Products",
        description: "High-quality refurbished devices for every need.",
        img: "https://images.pexels.com/photos/4050306/pexels-photo-4050306.jpeg", // Refurbished Products
        url: "/products",
        bg: "#e8f4f8", // Optional background color
    },
    {
        id: 3,
        title: "Repair Services",
        description: "Expert repair services to extend your device's life.",
        img: "https://images.pexels.com/photos/3757394/pexels-photo-3757394.jpeg", // Repair Services
        url: "/services",
        bg: "#f9f9f9", // Optional background color
    },
    {
        id: 4,
        title: "Join Our Community",
        description: "Engage with others who care about sustainable technology.",
        img: "https://images.pexels.com/photos/3184416/pexels-photo-3184416.jpeg", // Join Our Community
        url: "/community",
        bg: "#ffffff", // Optional background color
    },
];

const Slider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
        }, 3000); // Change slide every 3 seconds
        return () => clearInterval(interval);
    }, []);

    const handleDotClick = (index: React.SetStateAction<number>) => {
        setCurrentIndex(index);
    };

    return (
        <div className="relative w-full overflow-hidden">
            {slides.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`absolute w-full h-96 transition-opacity duration-500 ${currentIndex === index ? 'opacity-100' : 'opacity-0'}`}
                    style={{ backgroundColor: slide.bg }}
                >
                    <img src={slide.img} alt={slide.title} className="object-cover w-full h-full" />
                    <div className="absolute bottom-0 left-0 p-6 text-white bg-black bg-opacity-50">
                        <h2 className="text-2xl font-bold">{slide.title}</h2>
                        <p className="mt-2">{slide.description}</p>
                        <a href={slide.url} className="mt-4 inline-block px-4 py-2 bg-green-500 rounded">Learn More</a>
                    </div>
                </div>
            ))}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => handleDotClick(index)}
                        className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-green-500' : 'bg-gray-300'}`}
                    ></button>
                ))}
            </div>
        </div>
    );
};

export default Slider;
