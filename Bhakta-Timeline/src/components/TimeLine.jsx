import { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, X, Volume2, Info } from 'lucide-react';

export default function Timeline() {
    // Years to display in the timeline
    const years = Array.from({ length: 25 }, (_, i) => 2000 + i);

    // Sample smartphone data
    const phoneData = {
        2007: [
            {
                id: 1,
                name: "iPhone",
                path: "Apple",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4G5CJAtwBTjhI1V8i-SyOzF81UfnDHCbGHw&s",
                mockup: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4G5CJAtwBTjhI1V8i-SyOzF81UfnDHCbGHw&s",
                description: "The original iPhone introduced by Steve Jobs revolutionized the smartphone industry with its multi-touch interface.",
                culturalImpact: "Changed how people interact with mobile devices and kickstarted the modern smartphone era.",
                ringtone: "Original iPhone Marimba",
                trivia: "The original iPhone didn't support third-party apps, copy and paste, or MMS messages."
            },
            {
                id: 2,
                name: "HTC Dream (G1)",
                path: "Android",
                image: "https://lh4.googleusercontent.com/proxy/jSxMt0JqUSEitWufpgBQe3MUrHdLP872yXFiCxX0exH7Bv5Y9sqaJc69QLLq_yy3Cp2Wv9fgSm7g_1W--2mByeEXmPZfSQrYpBHT9oFrIhhY9LZChrRZsJTGtCUO",
                mockup: "https://lh4.googleusercontent.com/proxy/jSxMt0JqUSEitWufpgBQe3MUrHdLP872yXFiCxX0exH7Bv5Y9sqaJc69QLLq_yy3Cp2Wv9fgSm7g_1W--2mByeEXmPZfSQrYpBHT9oFrIhhY9LZChrRZsJTGtCUO",
                description: "The first commercially available Android phone featuring a slide-out keyboard and trackball navigation.",
                culturalImpact: "Established Android as a viable competitor to iOS and began the mobile OS duopoly.",
                ringtone: "Android Notification Sound",
                trivia: "The HTC Dream was codenamed 'Dream' during development and released as the T-Mobile G1 in the US."
            }
        ],
        2010: [
            {
                id: 3,
                name: "iPhone 4",
                path: "Apple",
                image: "https://fonezone.me/cdn/shop/products/ip4swhte_1_86846b3e-22b1-43c4-876a-9e11a5f3a2c8.jpg?v=1668585627",
                mockup: "https://fonezone.me/cdn/shop/products/ip4swhte_1_86846b3e-22b1-43c4-876a-9e11a5f3a2c8.jpg?v=1668585627",
                description: "Introduced the high-resolution Retina display and a complete redesign with glass front and back.",
                culturalImpact: "Set new standards for display quality and industrial design in smartphones.",
                ringtone: "iPhone 4 Opening",
                trivia: "The iPhone 4 was the center of the 'Antennagate' controversy due to signal loss when held a certain way."
            },
            {
                id: 4,
                name: "Samsung Galaxy S",
                path: "Android",
                image: "https://images.samsung.com/is/image/samsung/in_GT-I9001HKAINU_001_Front?$624_624_PNG$",
                mockup: "https://images.samsung.com/is/image/samsung/in_GT-I9001HKAINU_001_Front?$624_624_PNG$",
                description: "Samsung's flagship Android device that would evolve into Apple's main competitor.",
                culturalImpact: "Launched the most successful Android phone series and cemented Samsung as a major player.",
                ringtone: "Over the Horizon",
                trivia: "The original Galaxy S sold over 24 million units worldwide, establishing Samsung as a serious competitor."
            }
        ],
        2013: [
            {
                id: 5,
                name: "iPhone 5S",
                path: "Apple",
                image: "https://shoopy.b-cdn.net/305289/1689169162634_AppleiPhone5sGold16GBp1000x1000h.jpeg?width=600&format=webp",
                mockup: "https://shoopy.b-cdn.net/305289/1689169162634_AppleiPhone5sGold16GBp1000x1000h.jpeg?width=600&format=webp",
                description: "Introduced Touch ID fingerprint sensor and 64-bit processor.",
                culturalImpact: "Normalized biometric authentication on smartphones.",
                ringtone: "Opening (iOS 7)",
                trivia: "The iPhone 5S was the first smartphone with a 64-bit processor, which caught the industry by surprise."
            },
            {
                id: 6,
                name: "Nokia Lumia 1020",
                path: "Windows Phone",
                image: "https://demos.nop-templates.com/images/thumbs/0000044_nokia-lumia-1020_550.jpeg",
                mockup: "https://demos.nop-templates.com/images/thumbs/0000044_nokia-lumia-1020_550.jpeg",
                description: "Featured an unprecedented 41-megapixel camera with Carl Zeiss optics.",
                culturalImpact: "Set new standards for smartphone photography capabilities.",
                ringtone: "Nokia Tune (Modern)",
                trivia: "The Lumia 1020's 41MP camera remained unmatched in resolution for many years after its release."
            },
            {
                id: 7,
                name: "Nokia Lumia 1030",
                path: "Windows Phone",
                image: "https://m.media-amazon.com/images/I/51OR5vCDi+L.jpg",
                mockup: "https://m.media-amazon.com/images/I/51OR5vCDi+L.jpg",
                description: "Featured an unprecedented 41-megapixel camera with Carl Zeiss optics.",
                culturalImpact: "Set new standards for smartphone photography capabilities.",
                ringtone: "Nokia Tune (Modern)",
                trivia: "The Lumia 1020's 41MP camera remained unmatched in resolution for many years after its release."
            }
        ],
        2016: [
            {
                id: 8,
                name: "iPhone 7",
                path: "Apple",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/IPhone_7_Jet_Black.svg/800px-IPhone_7_Jet_Black.svg.png",
                mockup: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/IPhone_7_Jet_Black.svg/800px-IPhone_7_Jet_Black.svg.png",
                description: "Controversially removed the headphone jack and introduced water resistance.",
                culturalImpact: "Accelerated the wireless audio revolution.",
                ringtone: "Opening (iOS 10)",
                trivia: "Apple called the decision to remove the headphone jack an act of 'courage'."
            },
            {
                id: 9,
                name: "Google Pixel",
                path: "Android",
                image: "https://www.dxomark.com/wp-content/uploads/medias/post-59199/google_pixel_5_frontback.jpeg",
                mockup: "https://www.dxomark.com/wp-content/uploads/medias/post-59199/google_pixel_5_frontback.jpeg",
                description: "Google's first self-branded smartphone with industry-leading camera capabilities.",
                culturalImpact: "Set new standards for smartphone photography and Google's AI integration.",
                ringtone: "Pixel Sounds",
                trivia: "The original Pixel was manufactured by HTC, though it was designed by Google."
            }
        ],
        2019: [
            {
                id: 10,
                name: "Samsung Galaxy Fold",
                path: "Android",
                image: "https://img-prd-pim.poorvika.com/product/samsung-galaxy-z-fold-6-5g-pink-256gb-12gb-ram-front-view.png",
                mockup: "https://img-prd-pim.poorvika.com/product/samsung-galaxy-z-fold-6-5g-pink-256gb-12gb-ram-front-view.png",
                description: "One of the first mainstream foldable smartphones with a flexible display.",
                culturalImpact: "Pioneered a new form factor and demonstrated innovation in display technology.",
                ringtone: "Samsung Experience",
                trivia: "The initial release of the Galaxy Fold was delayed after reviewers found the screens were breaking easily."
            },
            {
                id: 11,
                name: "iPhone 11 Pro",
                path: "Apple",
                image: "https://hilaptop.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBbXNXIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--f22077b9f3496d9c9fe772f51e20372da8a95b8a/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJYW5CbkJqb0dSVlE2QzNKbGMybDZaVWtpRFRNMU1IZzBOamcrQmpzR1ZBPT0iLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--5a841eb3657df1df78aee6c19346073971f8c235/6824.jpg",
                mockup: "https://hilaptop.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBbXNXIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--f22077b9f3496d9c9fe772f51e20372da8a95b8a/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJYW5CbkJqb0dSVlE2QzNKbGMybDZaVWtpRFRNMU1IZzBOamcrQmpzR1ZBPT0iLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--5a841eb3657df1df78aee6c19346073971f8c235/6824.jpg",
                description: "First iPhone with a triple-camera system and night mode photography.",
                culturalImpact: "Made computational photography mainstream and pushed mobile cameras further.",
                ringtone: "Reflection",
                trivia: "The iPhone 11 Pro's midnight green color was extremely popular and often sold out."
            }
        ],
        2023: [
            {
                id: 12,
                name: "iPhone 15 Pro",
                path: "Apple",
                image: "https://www.imagineonline.store/cdn/shop/files/iPhone_15_Pro_Max_Blue_Titanium_PDP_Image_Position-1__en-IN.jpg?v=1694758834&width=1445",
                mockup: "https://www.imagineonline.store/cdn/shop/files/iPhone_15_Pro_Max_Blue_Titanium_PDP_Image_Position-1__en-IN.jpg?v=1694758834&width=1445",
                description: "Featured titanium construction, USB-C, and the A17 Pro chip.",
                culturalImpact: "Marked Apple's transition to USB-C and pushed computational photography forward.",
                ringtone: "Reflection (iOS 17)",
                trivia: "The iPhone 15 Pro was the first iPhone to feature a customizable Action button, replacing the mute switch."
            },
            {
                id: 13,
                name: "Samsung Galaxy Z Fold 5",
                path: "Android",
                image: "https://images.samsung.com/is/image/samsung/assets/africa_en/2407/smartphones/galaxy-z-fold6/specs/163x346_Silver-Shadow.jpg?$163_346_PNG$",
                mockup: "https://images.samsung.com/is/image/samsung/assets/africa_en/2407/smartphones/galaxy-z-fold6/specs/163x346_Silver-Shadow.jpg?$163_346_PNG$",
                description: "Refined foldable with improved hinge design and durability.",
                culturalImpact: "Normalized foldable phones as practical daily devices rather than novelties.",
                ringtone: "Over the Horizon (2023)",
                trivia: "The Z Fold 5 could fold completely flat for the first time in the Z Fold series."
            }
        ]
    };

    // State management
    const [selectedYear, setSelectedYear] = useState(null);
    const [selectedPath, setSelectedPath] = useState(null);
    const [selectedPhone, setSelectedPhone] = useState(null);
    const [isComparing, setIsComparing] = useState(false);
    const [comparePhones, setComparePhones] = useState([]);
    const [zoomedNode, setZoomedNode] = useState(null);

    // Refs
    const scrollRef = useRef(null);
    const timelineRef = useRef(null);
    const currentNodeRef = useRef(null);

    // Handle year click
    const handleYearClick = (year) => {
        if (selectedYear === year) {
            setSelectedYear(null);
            setSelectedPath(null);
            setZoomedNode(null);
        } else {
            setSelectedYear(year);
            setSelectedPath(null);
            setZoomedNode(year);

            // Scroll to center the selected year
            setTimeout(() => {
                if (currentNodeRef.current) {
                    const container = scrollRef.current;
                    const nodeRect = currentNodeRef.current.getBoundingClientRect();
                    const containerRect = container.getBoundingClientRect();
                    const scrollTo = container.scrollLeft + nodeRect.left - containerRect.left - (containerRect.width / 2) + (nodeRect.width / 2);

                    container.scrollTo({
                        left: scrollTo,
                        behavior: 'smooth'
                    });
                }
            }, 100);
        }
    };

    // Handle path selection
    const handlePathSelect = (path) => {
        setSelectedPath(path);
        setSelectedPhone(null);
        setIsComparing(false);
    };

    // Handle phone selection
    const handlePhoneSelect = (phone) => {
        setSelectedPhone(phone);
        setIsComparing(false);
    };

    // Handle compare mode
    const toggleCompare = () => {
        if (isComparing) {
            setIsComparing(false);
            setComparePhones([]);
        } else {
            setIsComparing(true);
            setSelectedPhone(null);
            setComparePhones([]);
        }
    };

    // Add/remove phone from compare list
    const toggleComparePhone = (phone) => {
        if (comparePhones.some(p => p.id === phone.id)) {
            setComparePhones(comparePhones.filter(p => p.id !== phone.id));
        } else if (comparePhones.length < 2) {
            setComparePhones([...comparePhones, phone]);
        }
    };

    // Close detailed view
    const closeDetail = () => {
        setSelectedPhone(null);
    };

    // Simulate playing a ringtone
    const playRingtone = (ringtone) => {
        alert(`Playing ringtone: ${ringtone}`);
        // In a real app, you would use audio API to play the sound
    };

    // Horizontal scrolling with mousewheel
    useEffect(() => {
        const handleWheel = (e) => {
            if (scrollRef.current) {
                scrollRef.current.scrollLeft += e.deltaY;
                e.preventDefault();
            }
        };

        const currentRef = scrollRef.current;
        if (currentRef) {
            currentRef.addEventListener('wheel', handleWheel, { passive: false });
        }

        return () => {
            if (currentRef) {
                currentRef.removeEventListener('wheel', handleWheel);
            }
        };
    }, []);

    // Snap-to-node scrolling
    useEffect(() => {
        const handleScroll = () => {
            if (!scrollRef.current || selectedYear) return;

            // Find the closest year node to the center of the viewport
            const container = scrollRef.current;
            const containerCenter = container.getBoundingClientRect().left + container.clientWidth / 2;

            let closestNode = null;
            let closestDistance = Infinity;

            timelineRef.current.childNodes.forEach(node => {
                const nodeRect = node.getBoundingClientRect();
                const nodeCenter = nodeRect.left + nodeRect.width / 2;
                const distance = Math.abs(containerCenter - nodeCenter);

                if (distance < closestDistance) {
                    closestDistance = distance;
                    closestNode = node;
                }
            });

            // If scrolling has stopped and we're not too close to center
            if (closestNode && closestDistance > 20) {
                clearTimeout(timelineRef.current.snapTimeout);
                timelineRef.current.snapTimeout = setTimeout(() => {
                    const nodeRect = closestNode.getBoundingClientRect();
                    const nodeCenter = nodeRect.left + nodeRect.width / 2;
                    const scrollAdjustment = nodeCenter - containerCenter;

                    container.scrollBy({
                        left: scrollAdjustment,
                        behavior: 'smooth'
                    });
                }, 200);
            }
        };

        const currentRef = scrollRef.current;
        if (currentRef) {
            currentRef.addEventListener('scroll', handleScroll);
        }

        return () => {
            if (currentRef) {
                currentRef.removeEventListener('scroll', handleScroll);
            }
        };
    }, [selectedYear]);

    return (
        <div className="w-full relative">
            {/* Background blur when a year is selected */}
            {selectedYear && (
                <div className="fixed inset-0 bg-transparent bg-opacity-50 backdrop-blur-sm z-10"
                    onClick={() => {
                        setSelectedYear(null);
                        setSelectedPath(null);
                        setSelectedPhone(null);
                        setIsComparing(false);
                        setZoomedNode(null);
                    }}
                ></div>
            )}

            {/* Timeline container */}
            <div
                ref={scrollRef}
                className="overflow-x-scroll"
                style={{
                    msOverflowStyle: 'none',
                    scrollbarWidth: 'none',
                    background: 'transparent'
                }}
            >
                <div
                    className="flex min-w-max px-8 py-12 relative top-17"
                    style={{ scrollbarWidth: 'none' }}
                >
                    {/* Timeline line */}
                    <div className="absolute left-8 right-8 h-2 bg-gray-300 top-1/2 z-0"></div>

                    {/* Timeline years */}
                    <div ref={timelineRef} className="flex space-x-24 relative z-10">
                        {years.map(year => {
                            const hasPhones = phoneData[year] && phoneData[year].length > 0;
                            const isSelected = selectedYear === year;

                            return (
                                <div
                                    key={year}
                                    className="flex flex-col items-center"
                                    ref={isSelected ? currentNodeRef : null}
                                >
                                    <button
                                        onClick={() => hasPhones && handleYearClick(year)}
                                        className={`w-30 h-30 rounded-full flex items-center justify-center mb-1 transition-all transform ${isSelected
                                            ? 'bg-green-600 text-white scale-125 shadow-lg'
                                            : hasPhones
                                                ? 'bg-green-200 hover:bg-green-200 text-green-500 hover:scale-110'
                                                : 'bg-gray-200 text-gray-500 cursor-default'
                                            } ${zoomedNode === year ? 'animate-pulse' : ''}`}
                                        style={{
                                            position: 'relative',
                                            top: '15px', // Place circles on top of the line
                                            boxShadow: isSelected ? '0 0 15px rgba(59, 130, 246, 0.5)' : 'none'
                                        }}
                                    >

                                        <span className="text-lg font-semibold">{year}</span> {/* Display full year */}
                                    </button>
                                    <span className={`text-base font-medium mt-3 ${isSelected ? 'text-blue-600 font-bold' : 'text-gray-600'}`}>
                                        {year}
                                    </span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Hide scrollbar */}
            <style jsx global>{`
              div::-webkit-scrollbar {
                display: none;
              }
            `}</style>

            {/* Phone cards display area - ABOVE the timeline */}
            {selectedYear && phoneData[selectedYear] && (
                <div className="absolute left-0 right-0 bottom-[100px] mb-0 px-2 z-30"> {/* Increased z-index */}
                    <div className="bg-white rounded-lg shadow-xl p-6 max-w-6xl mx-auto transform transition-all duration-300 animate-fadeIn justify-center">
                        {/* Close button */}
                        <button
                            onClick={() => {
                                setSelectedYear(null);
                                setSelectedPath(null);
                                setSelectedPhone(null);
                                setIsComparing(false);
                            }}
                            className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100"
                        >
                            <X size={20} />
                        </button>

                        <h2 className="text-2xl font-bold text-gray-800 mb-5">{selectedYear} Smartphones</h2>

                        {/* Path selection if multiple paths exist */}
                        {!selectedPath && new Set(phoneData[selectedYear].map(phone => phone.path)).size > 1 && (
                            <div className="mb-6">
                                <h3 className="text-lg font-semibold mb-3">Select a platform:</h3>
                                <div className="flex flex-wrap gap-4">
                                    {Array.from(new Set(phoneData[selectedYear].map(phone => phone.path))).map(path => (
                                        <button
                                            key={path}
                                            onClick={() => handlePathSelect(path)}
                                            className="px-6 py-3 bg-gray-100 hover:bg-gray-200 rounded-md font-medium text-gray-800 transition-colors hover:shadow"
                                        >
                                            {path}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Compare mode toggle */}
                        {selectedPath && !selectedPhone && (
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="text-lg font-semibold">{selectedPath} Phones</h3>
                                <button
                                    onClick={toggleCompare}
                                    className={`px-4 py-2 rounded-md font-medium transition-colors ${isComparing
                                        ? 'bg-blue-600 text-white'
                                        : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                                        }`}
                                >
                                    {isComparing ? 'Cancel Comparison' : 'Compare Phones'}
                                </button>
                            </div>
                        )}

                        {/* Phone grid */}
                        {selectedPath && !selectedPhone && !isComparing && (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {phoneData[selectedYear]
                                    .filter(phone => phone.path === selectedPath)
                                    .map(phone => (
                                        <div
                                            key={phone.id}
                                            className="bg-white rounded-lg border border-gray-200 overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer"
                                            onClick={() => handlePhoneSelect(phone)}
                                        >
                                            <div className="p-4 border-b">
                                                <h3 className="text-xl font-bold text-gray-800">{phone.name}</h3>
                                            </div>


                                            <div className="p-4 flex flex-col items-center">
                                                <img
                                                    src={phone.image}
                                                    alt={phone.name}
                                                    className="w-32 h-48 object-contain mb-4"
                                                />
                                                <p className="text-sm text-gray-600 line-clamp-2 text-center">{phone.description}</p>
                                            </div>
                                        </div>
                                    ))}
                            </div>
                        )}

                        {/* Compare mode selection */}
                        {isComparing && (
                            <div className="mb-4 mt-4">
                                <p className="text-gray-600 mb-4">Select up to 2 phones to compare:</p>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {phoneData[selectedYear]
                                        .filter(phone => phone.path === selectedPath)
                                        .map(phone => (
                                            <div
                                                key={phone.id}
                                                className={`bg-white rounded-lg border overflow-hidden transition-all duration-300 cursor-pointer ${comparePhones.some(p => p.id === phone.id)
                                                    ? 'border-blue-500 shadow-lg scale-105'
                                                    : 'border-gray-200 hover:shadow'
                                                    }`}
                                                onClick={() => toggleComparePhone(phone)}
                                            >
                                                <div className="p-4 border-b flex justify-between items-center">
                                                    <h3 className="text-lg font-medium text-gray-800">{phone.name}</h3>
                                                    {comparePhones.some(p => p.id === phone.id) && (
                                                        <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white">
                                                            ✓
                                                        </div>
                                                    )}
                                                </div>

                                                <div className="p-4 flex justify-center">
                                                    <img
                                                        src={phone.image}
                                                        alt={phone.name}
                                                        className="w-24 h-36 object-contain"
                                                    />
                                                </div>
                                            </div>
                                        ))}
                                </div>

                                {/* Compare button */}
                                {comparePhones.length === 1 && (
                                    <div className="mt-6 flex justify-center">
                                        <button
                                            onClick={() => setSelectedPhone('compare')}
                                            className="px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors"
                                        >
                                            Compare These Phones
                                        </button>
                                    </div>
                                )}
                            </div>
                        )}

                        {/* Phone detail view */}
                        {selectedPhone && selectedPhone !== 'compare' && (
                            <div className="animate-fadeIn">
                                <button
                                    onClick={closeDetail}
                                    className="mb-4 flex items-center text-blue-600 hover:text-blue-800"
                                >
                                    <ChevronLeft size={16} />
                                    <span className="ml-1">Back to phone list</span>
                                </button>

                                <div className="bg-gray-50 rounded-lg p-6">
                                    <div className="flex flex-col md:flex-row">
                                        <div className="md:w-1/3 flex justify-center mb-6 md:mb-0">
                                            <div className="relative">
                                                <img
                                                    src={selectedPhone.mockup}
                                                    alt={selectedPhone.name}
                                                    className="h-96 object-contain transform transition-all duration-500 hover:scale-110"
                                                />
                                                <button
                                                    onClick={() => playRingtone(selectedPhone.ringtone)}
                                                    className="absolute bottom-0 right-0 bg-white rounded-full p-3 shadow-md hover:bg-gray-100"
                                                    title="Play ringtone"
                                                >
                                                    <Volume2 size={20} />
                                                </button>
                                            </div>
                                        </div>

                                        <div className="md:w-2/3 md:pl-8">
                                            <div className="flex justify-between items-start mb-2">
                                                <h3 className="text-2xl font-bold text-gray-800">{selectedPhone.name}</h3>
                                                <span className="px-3 py-1 bg-gray-200 text-sm font-semibold rounded-full text-gray-700">
                                                    {selectedPhone.path}
                                                </span>
                                            </div>


                                            <p className="text-sm text-gray-500 mb-4">{selectedYear}</p>


                                            <div className="mb-6">
                                                <h4 className="font-semibold text-gray-700 mb-2">About</h4>
                                                <p className="text-gray-600">{selectedPhone.description}</p>
                                            </div>


                                            <div className="mb-6">
                                                <h4 className="font-semibold text-gray-700 mb-2">Cultural Impact</h4>
                                                <p className="text-gray-600">{selectedPhone.culturalImpact}</p>
                                            </div>


                                            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
                                                <div className="flex">
                                                    <div className="flex-shrink-0">
                                                        <Info size={20} className="text-yellow-500" />
                                                    </div>
                                                    <div className="ml-3">
                                                        <h4 className="text-sm font-medium text-yellow-800">Trivia</h4>
                                                        <p className="mt-1 text-sm text-yellow-700">{selectedPhone.trivia}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Phone comparison view */}
                        {selectedPhone === 'compare' && (
                            <div className="animate-fadeIn">
                                <button
                                    onClick={() => setSelectedPhone(null)}
                                    className="mb-4 flex items-center text-blue-600 hover:text-blue-800"
                                >
                                    <ChevronLeft size={16} />
                                    <span className="ml-1">Back to selection</span>
                                </button>

                                <h3 className="text-xl font-bold mb-6">Side-by-Side Comparison</h3>

                                <div className="overflow-x-auto">
                                    <div className="flex space-x-8 pb-6 relative">
                                        {/* Parallax phone comparison */}
                                        <div className="absolute left-0 right-0 top-1/2 h-px bg-gray-300 transform -translate-y-1/2"></div>

                                        {comparePhones.map((phone, index) => (
                                            <div
                                                key={phone.id}
                                                className="bg-white rounded-lg shadow-lg p-6 min-w-[300px] transform transition-all duration-500"
                                                style={{

                                                    transform: `translateY(${index % 2 === 0 ? '-20px' : '20px'})`,
                                                }}
                                            >
                                                <h4 className="text-xl font-bold text-center mb-4">{phone.name}</h4>
                                                <div className="flex justify-center mb-6">
                                                    <img
                                                        src={phone.mockup}
                                                        alt={phone.name}
                                                        className="h-64 object-contain"
                                                    />
                                                </div>

                                                <div className="space-y-4">
                                                    <div>
                                                        <h5 className="font-medium text-gray-700">Platform</h5>
                                                        <p>{phone.path}</p>
                                                    </div>


                                                    <div>
                                                        <h5 className="font-medium text-gray-700">Description</h5>
                                                        <p className="text-sm text-gray-600">{phone.description}</p>
                                                    </div>



                                                    <div>
                                                        <h5 className="font-medium text-gray-700">Cultural Impact</h5>
                                                        <p className="text-sm text-gray-600">{phone.culturalImpact}</p>
                                                    </div>


                                                    <div className="pt-2">
                                                        <button
                                                            onClick={() => playRingtone(phone.ringtone)}
                                                            className="flex items-center text-blue-600 hover:text-blue-800"
                                                        >
                                                            <Volume2 size={16} className="mr-1" />
                                                            <span>Play {phone.ringtone}</span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}

            {/* Instructions */}
            {/* {!selectedYear && (
                <div className="text-center mt-4 text-gray-500 bottom-0">
                    Click on a year with a green colour to explore smartphones from that period
                </div>
            )} */}
        </div>
    );
} 