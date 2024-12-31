// TechStack.tsx
import React from 'react';
import { motion } from 'framer-motion'; // For smooth animations

// Import the logos of the technologies
import ReactLogo from '../../assets/logos/icons8-react-js-64.svg';
import TypeScriptLogo from '../../assets/logos/icons8-express-js-50.svg';
import NodeLogo from '../../assets/logos/icons8-node-js-64.svg';
import ExpressLogo from '../../assets/logos/icons8-express-js-50.svg';
import NextLogo from '../../assets/logos/icons8-react-js-128.svg';
import PrismaLogo from '../../assets/logos/icons8-prisma-orm-50.svg';
import SQLLogo from '../../assets/logos/icons8-database-94.png';
import MongoDBLogo from '../../assets/logos/icons8-node-js-96.svg';
import FirebaseLogo from '../../assets/logos/icons8-prisma-orm-50.svg';
import DockerLogo from '../../assets/logos/icons8-prisma-orm-50.svg';

// Define the tech stack data
const techStack = [
    { name: 'React', logo: ReactLogo },
    { name: 'Node.js', logo: NodeLogo },
    { name: 'Tailwind', logo: ExpressLogo },
    { name: 'Prisma', logo: PrismaLogo },
    { name: 'MongoDB', logo: MongoDBLogo },
    { name: 'TypeScript', logo: TypeScriptLogo },
    { name: 'Next.js', logo: NextLogo },
    { name: 'AWS', logo: SQLLogo },
    { name: 'Firebase', logo: FirebaseLogo },
    { name: 'Docker', logo: DockerLogo },
];

const HexagonGrid: React.FC = () => {

    return (
        <>
            <div className="flex overflow-hidden space-x-16 group mt-8">
                <div className="flex space-x-16 animate-loop-scroll group-hover:paused">
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/8ee9f161-df19-4fa7-a2a6-edf9acf0e0d6?apiKey=7e8b177c7c374d8abaf3aebf27f1c17d&" className="max-w-none" alt="Image 1" />
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/80480f8a-69ad-4c30-88ba-f4e7ee08fc51?apiKey=7e8b177c7c374d8abaf3aebf27f1c17d&" className="max-w-none" alt="Image 2" />
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/140d376c-13f2-4823-b397-b3de733bf560?apiKey=7e8b177c7c374d8abaf3aebf27f1c17d&" className="max-w-none" alt="Image 3" />
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/0ae217f1-b695-4661-bd3d-6440eebc2c5c?apiKey=7e8b177c7c374d8abaf3aebf27f1c17d&" className="max-w-none" alt="Image 4" />
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/67017079-51e1-4245-9bf1-b5957eb66c74?apiKey=7e8b177c7c374d8abaf3aebf27f1c17d&" className="max-w-none" alt="Image 5" />
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/515313ac-7ec9-4c6e-95db-80dac2f8b960?apiKey=7e8b177c7c374d8abaf3aebf27f1c17d&" className="max-w-none" alt="Image 6" />
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/c513fc32-3ab9-4cca-911e-0b2642ac7206?apiKey=7e8b177c7c374d8abaf3aebf27f1c17d&" className="max-w-none" alt="Image 7" />
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/5731a5a7-689f-49ae-abf1-6e6dc00c2043?apiKey=7e8b177c7c374d8abaf3aebf27f1c17d&" className="max-w-none" alt="Image 8" />
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/cb51d286-530f-42be-9e91-9c850522f127?apiKey=7e8b177c7c374d8abaf3aebf27f1c17d&" className="max-w-none" alt="Image 9" />
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/44ba8437-f6fd-4a51-bfd3-262d7528f7a4?apiKey=7e8b177c7c374d8abaf3aebf27f1c17d&" className="max-w-none" alt="Image 10" />
                </div>
                <div className="flex space-x-16 animate-loop-scroll group-hover:paused" aria-hidden="true">
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/8ee9f161-df19-4fa7-a2a6-edf9acf0e0d6?apiKey=7e8b177c7c374d8abaf3aebf27f1c17d&" className="max-w-none" alt="Image 1" />
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/80480f8a-69ad-4c30-88ba-f4e7ee08fc51?apiKey=7e8b177c7c374d8abaf3aebf27f1c17d&" className="max-w-none" alt="Image 2" />
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/140d376c-13f2-4823-b397-b3de733bf560?apiKey=7e8b177c7c374d8abaf3aebf27f1c17d&" className="max-w-none" alt="Image 3" />
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/0ae217f1-b695-4661-bd3d-6440eebc2c5c?apiKey=7e8b177c7c374d8abaf3aebf27f1c17d&" className="max-w-none" alt="Image 4" />
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/67017079-51e1-4245-9bf1-b5957eb66c74?apiKey=7e8b177c7c374d8abaf3aebf27f1c17d&" className="max-w-none" alt="Image 5" />
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/515313ac-7ec9-4c6e-95db-80dac2f8b960?apiKey=7e8b177c7c374d8abaf3aebf27f1c17d&" className="max-w-none" alt="Image 6" />
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/c513fc32-3ab9-4cca-911e-0b2642ac7206?apiKey=7e8b177c7c374d8abaf3aebf27f1c17d&" className="max-w-none" alt="Image 7" />
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/5731a5a7-689f-49ae-abf1-6e6dc00c2043?apiKey=7e8b177c7c374d8abaf3aebf27f1c17d&" className="max-w-none" alt="Image 8" />
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/cb51d286-530f-42be-9e91-9c850522f127?apiKey=7e8b177c7c374d8abaf3aebf27f1c17d&" className="max-w-none" alt="Image 9" />
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/44ba8437-f6fd-4a51-bfd3-262d7528f7a4?apiKey=7e8b177c7c374d8abaf3aebf27f1c17d&" className="max-w-none" alt="Image 10" />
                </div>
            </div>
            <div className="bg-[#000814] min-h-screen flex items-center justify-center hexagon">
                <div className="grid grid-cols-3 md:grid-cols-5 gap-8">
                    {techStack.map((tech, index) => (
                        <motion.div
                            key={index}
                            className="relative text-red-500 w-28 h-32 bg-transparent rounded-[15%] p-4 flex items-center justify-center shadow-lg"
                            whileHover={{ scale: 1.2, rotate: 10 }}
                            transition={{ type: 'spring', stiffness: 300 }}
                        >
                            <img src={tech.logo} alt={tech.name} className="w-16 h-16" />
                            <p className="absolute bottom-2 text-white text-sm font-semibold">
                                {tech.name}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default HexagonGrid;