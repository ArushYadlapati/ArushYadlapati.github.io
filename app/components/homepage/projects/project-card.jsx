import * as React from 'react';
import Image from "next/image";

function ProjectCard({ project }) {
    return (
        <div className="order-1 lg:order-2 from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37] w-[1000px]">
            <div className="flex-1">
                <div className="flex flex-row">
                    <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
                    <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
                </div>
                <div className="px-4 lg:px-8 py-3 lg:py-5 relative">
                    <div className="flex flex-row space-x-1 lg:space-x-2 absolute top-1/2 -translate-y-1/2">
                        <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-red-400"></div>
                        <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-orange-400"></div>
                        <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-green-200"></div>
                    </div>
                    <p className="text-center ml-3 text-[#16f2b3] text-base lg:text-xl">
                        {project.name}
                    </p>
                </div>
                <div
                    className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-6"> {/* Adjusted padding here */}
                    <code className="font-mono text-xs md:text-sm lg:text-base">
                        <div className="blink">
                            <span className="mr-2 text-pink-500">const</span>
                            <span className="mr-2 text-white">project</span>
                            <span className="mr-2 text-pink-500">=</span>
                            <span className="text-gray-400">{'{'}</span>
                        </div>
                        <div>
                            <span className="ml-4 lg:ml-8 mr-2 text-white">name:</span>
                            <span className="text-gray-400">{`'`}</span>
                            <span className="text-amber-300">{project.name}</span>
                            <span className="text-gray-400">{`',`}</span>
                        </div>

                        <div className="relative group">
                            <span className="ml-4 lg:ml-8 mr-2 text-white">link:</span>
                            <span className="text-gray-400">&#39;</span>
                            <span
                                className="text-[#1C8AB5] underline group-hover:text-[#19F2B3] transition-colors duration-300">
                                {project.link}
                            </span>
                            <span className="text-gray-400">&#39;</span>
                            <a href={project.link} target="_blank" rel="noopener noreferrer"
                               className="absolute inset-0 z-10 cursor-pointer"
                               aria-label={`Visit ${project.name} project`}>
                                <span className="sr-only">Visit project link</span>
                            </a>
                            <span className="text-gray-400">,</span>
                        </div>

                        <div>
                            <span className="ml-4 lg:ml-8 mr-2 text-white">date:</span>
                            <span className="text-gray-400">{`'`}</span>
                            <span className="text-amber-300">{project.date}</span>
                            <span className="text-gray-400">{`',`}</span>
                        </div>

                        <div className="ml-4 lg:ml-8 mr-2">
                            <span className=" text-white">tools:</span>
                            <span className="text-gray-400">{` ['`}</span>

                            {project.tools.map((tag, i) => (
                                <React.Fragment key={i}>
                                    <span className="text-amber-300">{tag}</span>
                                    {project.tools.length - 1 !== i && (
                                        <span className="text-gray-400">{`', '`}</span>
                                    )}
                                </React.Fragment>
                            ))}
                            <span className="text-gray-400">{"'],"}</span>
                        </div>
                        <div>
                            <span className="ml-4 lg:ml-8 mr-2 text-white">my_role:</span>
                            <span className="text-orange-400">{project.role}</span>
                            <span className="text-gray-400">,</span>
                        </div>
                        <div className="ml-4 lg:ml-8 mr-2">
                            <span className="text-white">description:</span>
                            <span className="text-cyan-400">{' ' + project.description}</span>
                            <span className="text-gray-400"></span>
                        </div>
                        <div>
                            <span className="text-gray-400">{`};`}</span>
                        </div>
                        <div>
                            <span className="text-gray-400 opacity-0">{`.`}</span>
                        </div>
                        <div
                            className="flex justify-center items-center w-full h-full lg:p-4"> {/* Adjusted padding here */}
                            <div className="w-full max-w-md lg:max-w-none lg:w-[135%]">
                                <Image
                                    src={project.image}
                                    alt={project.name}
                                    width={1080}
                                    height={200}
                                    className="w-full h-auto object-cover rounded-lg transform lg:scale-135"
                                    style={{
                                        maxWidth: '100%',
                                        maxHeight: '100%',
                                        objectFit: 'cover',
                                        borderRadius: '10px',
                                    }}
                                />
                            </div>
                        </div>
                    </code>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;
