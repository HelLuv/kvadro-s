import {StaticImageData} from "next/image";

export type ServiceCardItem = {
    title: string;
    image: StaticImageData;
    servicesList: string[];
}

export type Customer = {
    title: string;
    image: StaticImageData;
    websiteUrl: string;
}