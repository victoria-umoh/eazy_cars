export type Vehicle = {
    id?: string;
    brand: string;
    model: string;
    name: string;
    tag: string;
    yearRange: string;
    transmission: string;
    fuel: string;
    status: string;
    year?: string;
    price?: string;
    mileage?: string;
    power?: string;
    imageGradient?: string;
};

export const vehicles: Vehicle[] = [
    {
        brand: 'Mercedes-Benz',
        model: 'GLE350 AMG',
        name: 'Mercedes-Benz GLE350 AMG',
        tag: 'Europe / USA',
        yearRange: '2016–2019',
        year: '2016–2019',
        price: 'On Request',
        mileage: 'Sourced to order',
        transmission: 'Automatic',
        fuel: 'Petrol',
        status: 'SOURCE ON REQUEST',
    },
    {
        brand: 'Mercedes-Benz',
        model: 'ML350',
        name: 'Mercedes-Benz ML350',
        tag: 'Europe / USA',
        yearRange: '2015–2019',
        year: '2015–2019',
        price: 'On Request',
        mileage: 'Sourced to order',
        transmission: 'Automatic',
        fuel: 'Petrol',
        status: 'SOURCE ON REQUEST',
    },
    {
        brand: 'Toyota',
        model: 'Corolla',
        name: 'Toyota Corolla',
        tag: 'Europe / USA',
        yearRange: '2012–2020',
        year: '2012–2020',
        price: 'On Request',
        mileage: 'Sourced to order',
        transmission: 'Automatic',
        fuel: 'Petrol',
        status: 'SOURCE ON REQUEST',
    },
    {
        brand: 'Toyota',
        model: 'Highlander',
        name: 'Toyota Highlander',
        tag: 'USA / Canada',
        yearRange: '2014–2020',
        year: '2014–2020',
        price: 'On Request',
        mileage: 'Sourced to order',
        transmission: 'Automatic',
        fuel: 'Petrol',
        status: 'SOURCE ON REQUEST',
    },
    {
        brand: 'Lexus',
        model: 'RX350',
        name: 'Lexus RX350',
        tag: 'Japan / USA',
        yearRange: '2015–2019',
        year: '2015–2019',
        price: 'On Request',
        mileage: 'Sourced to order',
        transmission: 'Automatic',
        fuel: 'Petrol',
        status: 'SOURCE ON REQUEST',
    },
];
