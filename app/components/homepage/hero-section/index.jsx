import {personalData} from "@/utils/data/personal-data";
import Image from "next/image";
import Link from "next/link";
import {BsDiscord, BsGithub} from "react-icons/bs";
import {RiContactsFill} from "react-icons/ri";

import TypeAnimation from './TypeAnimation';

function HeroSection() {
    return (
        <section className="relative flex flex-col items-center justify-between py-4 lg:py-12">
            <Image
                src="./hero.svg"
                alt="Hero"
                width={1572}
                height={795}
                className="absolute -top-[98px] -z-10"
            />

            <div className="grid grid-cols-1 items-start lg:grid-cols-2 lg:gap-12 gap-y-8">
                <div
                    className="order-2 lg:order-1 flex flex-col items-start justify-center p-2 pb-20 md:pb-10 lg:pt-10">
                    <h1 className="text-3xl font-bold leading-10 text-white md:font-extrabold lg:text-[2.6rem] lg:leading-[3.5rem]">
                        Hi, <br/>
                        I&apos;m {' '}
                        <span className=" text-pink-500">{personalData.name}</span>
                        {`, and I am a`}
                        <br/>
                        <TypeAnimation/>
                        .
                    </h1>

                    <div className="my-12 flex items-center gap-5">
                        <Link
                            href={personalData.github}
                            target='_blank'
                            className="transition-all text-pink-500 hover:scale-125 duration-300"
                        >
                            <BsGithub size={30}/>
                        </Link>
                        <Link
                            href={personalData.discord}
                            target='_blank'
                            className="transition-all text-pink-500 hover:scale-125 duration-300"
                        >
                            <BsDiscord size={30}/>
                        </Link>
                    </div>

                    <div className="flex items-center gap-3">
                        <Link href="mailto:hello@arush.me"
                              className="bg-gradient-to-r to-pink-500 from-violet-600 p-[1px] rounded-full transition-all duration-300 hover:from-pink-500 hover:to-violet-600">
                            <button
                                className="px-3 text-xs md:px-8 py-3 md:py-4 bg-[#0d1224] rounded-full border-none text-center md:text-sm font-medium uppercase tracking-wider text-[#ffff] no-underline transition-all duration-200 ease-out  md:font-semibold flex items-center gap-1 hover:gap-3">
                                <span>Contact me</span>
                                <RiContactsFill size={16}/>
                            </button>
                        </Link>
                    </div>

                </div>
                <div
                    className="order-1 lg:order-2 from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37]">
                    <div className="flex flex-row">
                        <div
                            className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
                        <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
                    </div>
                    <div className="px-4 lg:px-8 py-5">
                        <div className="flex flex-row space-x-2">
                            <div className="h-3 w-3 rounded-full bg-red-400"></div>
                            <div className="h-3 w-3 rounded-full bg-orange-400"></div>
                            <div className="h-3 w-3 rounded-full bg-green-200"></div>
                        </div>
                    </div>
                    <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8">
                        <code className="font-mono text-xs md:text-sm lg:text-base">
                            <div className="blink">
                                <span className="mr-2 text-pink-500">const</span>
                                <span className="mr-2 text-white">arush</span>
                                <span className="mr-2 text-pink-500">=</span>
                                <span className="text-gray-400">{'{'}</span>
                            </div>
                            <div>
                                <span className="ml-8 mr-2 text-white">skills:</span>
                                <span className="text-gray-400">{'{'}</span>
                            </div>
                            <div>
                                <span className="ml-16 mr-2 text-white">languages:</span>
                                <span className="text-gray-400">{'{'}</span>
                            </div>
                            <div>
                                <span className="ml-24 mr-2 text-white">web:</span>
                                <span className="text-gray-400">{'['}</span>
                                <span className="text-amber-300">&apos;HTML&apos;</span>
                                <span className="text-gray-400">,</span>
                                <span className="text-amber-300">&apos;CSS&apos;</span>
                                <span className="text-gray-400">,</span>
                                <span className="text-amber-300">&apos;JavaScript&apos;</span>
                                <span className="text-gray-400">{']'},</span>
                            </div>
                            <div>
                                <span className="ml-24 mr-2 text-white">systems:</span>
                                <span className="text-gray-400">{'['}</span>
                                <span className="text-amber-300">&apos;C&apos;</span>
                                <span className="text-gray-400">,</span>
                                <span className="text-amber-300">&apos;C++&apos;</span>
                                <span className="text-gray-400">{']'},</span>
                            </div>
                            <div>
                                <span className="ml-24 mr-2 text-white">jvm:</span>
                                <span className="text-gray-400">{'['}</span>
                                <span className="text-amber-300">&apos;Java&apos;</span>
                                <span className="text-gray-400">,</span>
                                <span className="text-amber-300">&apos;Kotlin&apos;</span>
                                <span className="text-gray-400">{']'},</span>
                            </div>
                            <div>
                                <span className="ml-24 mr-2 text-white">scripting:</span>
                                <span className="text-gray-400">{'['}</span>
                                <span className="text-amber-300">&apos;Python&apos;</span>
                                <span className="text-gray-400">{']'},</span>
                            </div>
                            <div>
                                <span className="ml-16 text-gray-400">{'}'},</span>
                            </div>
                            <div>
                                <br/>
                                <span className="ml-16 mr-2 text-white">libraries:</span>
                                <span className="text-gray-400">{'['}</span>
                                <span className="text-amber-300">&apos;Next.js&apos;</span>
                                <span className="text-gray-400">,</span>
                                <span className="text-amber-300">&apos;Node.js&apos;</span>
                                <span className="text-gray-400">,</span>
                                <span className="text-amber-300">&apos;React.js&apos;</span>
                                <span className="text-gray-400">,</span>
                                <span className="text-amber-300">&apos;Gradle&apos;</span>
                                <span className="text-gray-400">{']'},</span>
                            </div>
                            <div>
                                <span className="ml-8 text-gray-400">{'}'},</span>
                            </div>
                            <div>
                                <br/>
                                <span className="ml-8 mr-2 text-white">characteristics:</span>
                                <span className="text-gray-400">{'['}</span>
                                <span className="text-amber-300">&apos;PROGRAMMER&apos;</span>
                                <span className="text-gray-400">,</span>
                                <span className="text-amber-300">&apos;STUDENT&apos;</span>
                                <span className="text-gray-400">,</span>
                                <span className="text-amber-300">&apos;ROBOTICS&apos;</span>
                                <span className="text-gray-400">{']'}</span>
                            </div>
                            <div>
                                <span className="text-gray-400">{'};'}</span>
                            </div>
                        </code>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;
