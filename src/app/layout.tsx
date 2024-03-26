import type {Metadata} from "next";
import {Inter} from "next/font/google";
import {ReactNode} from "react";
import "./globals.css";

const inter = Inter({subsets: ["latin"]});

const TITLE = "Квадрострой | Монтаж инженерных систем | Нижний Новгород";
const DESCR = 'Квадрострой. Монтаж систем теплоснабжения, отопления, водоснабжения и канализации; ИТП; ' +
    'узлы учёта тепловой энергии и водоснабжения; пуско-наладочные работы; сервисное обслуживание';
const IMAGE_URL = 'https://static.wixstatic.com/media/e86c77_78a8dfaf219b49929a43652d3f254128~mv2.jpg/v1/fill/w_558,h_572,al_c/e86c77_78a8dfaf219b49929a43652d3f254128~mv2.jpg';

export const metadata: Metadata = {
    title: TITLE,
    description: DESCR,
    openGraph: {
        title: TITLE,
        description: DESCR,
        images: [{
            url: IMAGE_URL,
            width: 558,
            height: 572
        }],
        url: 'https://www.kvadro-s.ru/',
        siteName: 'Квадрострой',
        type: 'website'
    },
    twitter: {
        title: TITLE,
        description: DESCR,
        card: 'summary',
        images: [{
            url: IMAGE_URL,
            width: 558,
            height: 572
        }],
    }
};

export default function RootLayout({children,}: Readonly<{ children: ReactNode; }>) {
    return (
        <html lang="ru">
        <body className={inter.className}>{children}</body>
        </html>
    );
}
