import ArbitrImage from '../../../public/customers/arbitr.png';
import BankrfImage from '../../../public/customers/bankrf.png';
import DironnnImage from '../../../public/customers/diron-nn.png';
import FcrwImage from '../../../public/customers/fcrw.png';
import OperannImage from '../../../public/customers/operann.png';
import PimunnImage from '../../../public/customers/pimunn.png';
import RostelecomImage from '../../../public/customers/rostelecom.png';
import TeploenergoImage from '../../../public/customers/teploenergo.png';
import {Customer} from "@/types/types";


export const customersData: Customer[] = [
    {
        title: "Ростелеком",
        image: RostelecomImage,
        websiteUrl: 'https://nnovgorod.rt.ru/',
    },
    {
        title: "ФБУЗ «Центр гигиены и эпидемиологии по железнодорожному транспорту»",
        image: FcrwImage,
        websiteUrl: 'http://fcrw.ru/',
    },
    {
        title: "ПИМУ | Приволжский медуниверситет",
        image: PimunnImage,
        websiteUrl: 'https://pimunn.ru/',
    },
    {
        title: "АО «Теплоэнерго» Крупнейший поставщик тепловой энергии в Нижнем Новгороде",
        image: TeploenergoImage,
        websiteUrl: 'https://teploenergo-nn.ru/',
    },
    {
        title: "Судебный департамент при Верховном Суде Российской Федерации",
        image: ArbitrImage,
        websiteUrl: 'https://nnov.arbitr.ru/',
    },
    {
        title: "НИЖЕГОРОДСКИЙ ГОСУДАРСТВЕННЫЙ АКАДЕМИЧЕСКИЙ ТЕАТР ОПЕРЫ И БАЛЕТА ИМЕНИ А.С. ПУШКИНА",
        image: OperannImage,
        websiteUrl: 'https://operann.ru/',
    },
    {
        title: "Центральный банк Российской Федерации | Банк России",
        image: BankrfImage,
        websiteUrl: 'https://www.cbr.ru/',
    },
    {
        title: "Государственное предприятие Нижегородской области по достройке и реставрации объектов недвижимости",
        image: DironnnImage,
        websiteUrl: 'https://diron-nn.ru//',
    },
]