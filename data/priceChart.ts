'use server';

import { priceChartAddonEntry } from '@/components/sections/oferta/wynajem-golf-8-r/price-chart/PriceChartAddonEntry';
import { priceChartEntry } from '@/components/sections/oferta/wynajem-golf-8-r/price-chart/PriceChartEntry';

type PriceChart = {
    entries: priceChartEntry[];
    addons: priceChartAddonEntry[];
};

// This is a data object used to construct PriceChart component
const priceChartData: PriceChart = {
    // Main price chart entries
    entries: [
        {
            rentDuration: '1 Doba',
            kilometersLimit: 250,
            price: 650,
            perDay: true,
        },
        {
            rentDuration: '2-3 Doby',
            kilometersLimit: 250,
            price: 600,
            perDay: true,
        },
        {
            rentDuration: '4-6 Dób',
            kilometersLimit: 200,
            price: 500,
            perDay: true,
        },
        {
            rentDuration: '7-13 Dób',
            kilometersLimit: 200,
            price: 450,
            perDay: true,
        },
        {
            rentDuration: '14-29 Dób',
            kilometersLimit: 150,
            price: 350,
            perDay: true,
        },
        {
            rentDuration: 'Miesiąc',
            kilometersLimit: 3000,
            price: 7500,
            perDay: false,
        },
    ],

    // price chart addon entries
    addons: [
        {
            addonName: 'Dodatkowe 100km limitu',
            price: '150',
        },
        {
            addonName: 'Dodatkowe 200km limitu',
            price: '250',
        },
        {
            addonName: 'Dodatkowy kierowca',
            price: '200',
        },
    ],
};

// implemented to enable the use with server components
// TODO: move to a different approach
export default async function getPriceChartData() {
    return priceChartData;
}
