"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { IoCopyOutline } from "react-icons/io5";
import Lottie from "react-lottie";

import { links } from "@/config";
import { skills } from "@/data";
import animationData from "@/data/confetti.json";
import { cn } from "@/lib/utils";

import { BackgroundGradientAnimation } from "./background-gradient-animation";
import { MagicButton } from "./magic-button";
import { Button } from "./moving-borders";

import { GridGlobe } from "../grid-globe";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:grid-cols-6 lg:grid-cols-6",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  id,
  className,
  title,
  subtitle,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  id?: number;
  className?: string;
  title?: string | React.ReactNode;
  subtitle?: string;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(links.ownerEmail);
    setCopied(true);
  };

  useEffect(() => {
    if (!copied) return;

    const copyTimeout = setTimeout(() => {
      setCopied(false);
    }, 3500);

    return () => clearTimeout(copyTimeout);
  }, [copied]);

  return (
    <Button
      borderRadius="1.75rem"
      className={cn(
        "group/bento relative row-span-1 flex flex-col justify-between space-y-4 overflow-hidden shadow-input transition duration-200 hover:shadow-xl dark:shadow-none",
        className
      )}
      duration={Math.floor(Math.random() * 10000 + 10000)}
    >
      <div className={cn("h-full", id === 6 && "flex justify-center")}>
        <div className="absolute h-full w-full">
          {img && (
            <Image
              width={689}
              height={541}
              src={img}
              alt={img}
              className={cn("object-cover object-center", imgClassName)}
            />
          )}
        </div>

        <div
          className={cn(
            "absolute -bottom-72 left-0 min-h-96 w-full",
            id === 5 && "bottom-0"
          )}
        >
          {spareImg && (
            <Image
              width={220}
              height={96}
              src={spareImg}
              alt={spareImg}
              className="h-full w-full object-cover object-center"
            />
          )}
        </div>

        {id === 6 && <BackgroundGradientAnimation />}

        <div
          className={cn(
            "relative flex min-h-40 flex-col p-5 px-5 transition duration-200 group-hover/bento:translate-x-2 md:h-full lg:p-10",
            titleClassName
          )}
        >
          <div className="z-10 font-sans text-sm font-extralight text-[#c1c2d3] md:text-xs lg:text-base">
            {description}
          </div>

          <div className="z-10 max-w-96 font-sans text-lg font-bold lg:text-3xl">
            {title}
          </div>

          {id === 2 && <GridGlobe />}

          {id === 3 && (
            <div className="absolute -right-3 flex w-fit gap-1 lg:-right-2 lg:gap-5">
              <div className="flex flex-col gap-3 lg:gap-8">
                {skills[0]?.skills.slice(0, 3).map((item) => (
                  <span
                    key={item}
                    className="rounded-lg bg-[#10132e] px-3 py-2 text-center text-xs opacity-50 lg:px-3 lg:py-4 lg:text-base lg:opacity-100"
                  >
                    {item}
                  </span>
                ))}

                <span className="rounded-lg bg-[#10132e] px-3 py-4 text-center" />
              </div>

              <div className="flex flex-col gap-3 lg:gap-8">
                <span className="rounded-lg bg-[#10132e] px-3 py-4 text-center" />
                {skills[1]?.skills.slice(0, 3).map((item) => (
                  <span
                    key={item}
                    className="rounded-lg bg-[#10132e] px-3 py-2 text-center text-xs opacity-50 lg:px-3 lg:py-4 lg:text-base lg:opacity-100"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}

          {id === 6 && (
            <div className="group relative mt-5">
              <button
                tabIndex={-1}
                className="pointer-events-none absolute -bottom-5 right-0 cursor-default"
              >
                <Lottie
                  options={{
                    loop: copied,
                    autoplay: copied,
                    animationData,
                    rendererSettings: {
                      preserveAspectRatio: "xMidYMid slice",
                    },
                  }}
                />
              </button>

              <MagicButton
                title={copied ? "Email copied!" : "Copy my email"}
                icon={<IoCopyOutline />}
                otherClasses="!bg-[#161a31]"
                handleClick={handleCopy}
                asChild
              />
            </div>
          )}
        </div>
      </div>
    </Button>
  );
};
