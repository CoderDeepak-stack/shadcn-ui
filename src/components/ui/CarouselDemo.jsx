"use client"

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"



import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"

export function CarouselDemo() {
    return (
        <Carousel
            opts={{
                align: "start",
                loop: true,
            }}
            plugins={[
                Autoplay({
                    display: 1000,
                }),
            ]}
            className="w-full max-w-sm"
        >
            <CarouselContent>
                {Array.from({ length: 10 }).map((_, index) => (
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                        <div className="p-1">
                            <Card>
                                <CardContent className=" relative flex aspect-square items-center justify-center p-6">
                                    <span className="text-3xl font-semibold">{index + 1}</span>
                                    <Image src="https://images.pexels.com/photos/1933239/pexels-photo-1933239.jpeg"
                                    alt='pic'
                                    fill />
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}
