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
    imageClass: string;
    imageUrl?: string;
};

export const vehicles: Vehicle[] = [
    {
        brand: 'Mercedes-Benz',
        model: 'GLE350',
        name: 'Mercedes-Benz GLE350',
        tag: 'Europe / USA',
        yearRange: '2016–2019',
        transmission: 'Automatic',
        fuel: 'Petrol',
        status: 'SOURCE ON REQUEST',
        imageClass: 'vehicle-gle350',
        imageUrl: '/images/vehicles/gle350.jpg',
    },
    {
        brand: 'Mercedes-Benz',
        model: 'GLE43',
        name: 'Mercedes-Benz GLE43',
        tag: 'Europe / USA',
        yearRange: '2017–2020',
        transmission: 'Automatic',
        fuel: 'Petrol',
        status: 'SOURCE ON REQUEST',
        imageClass: 'vehicle-gle43',
        imageUrl: '/images/vehicles/gle43.jpg',
    },
    {
        brand: 'Mercedes-Benz',
        model: 'GLC300',
        name: 'Mercedes-Benz GLC300',
        tag: 'Europe / USA',
        yearRange: '2016–2020',
        transmission: 'Automatic',
        fuel: 'Petrol',
        status: 'SOURCE ON REQUEST',
        imageClass: 'vehicle-glc300',
        imageUrl: '/images/vehicles/glc300.jpg',
    },
    {
        brand: 'Lexus',
        model: 'RX350',
        name: 'Lexus RX350',
        tag: 'Japan / USA',
        yearRange: '2015–2019',
        transmission: 'Automatic',
        fuel: 'Petrol',
        status: 'SOURCE ON REQUEST',
        imageClass: 'vehicle-rx350',
        imageUrl: '/images/vehicles/rx350.jpg',
    },
    {
        brand: 'Toyota',
        model: 'Highlander',
        name: 'Toyota Highlander',
        tag: 'USA / Canada',
        yearRange: '2014–2020',
        transmission: 'Automatic',
        fuel: 'Petrol',
        status: 'SOURCE ON REQUEST',
        imageClass: 'vehicle-highlander',
        imageUrl: '/images/vehicles/highlander.jpg',
    },
    {
        brand: 'Toyota',
        model: 'Camry',
        name: 'Toyota Camry',
        tag: 'USA / Japan',
        yearRange: '2012–2020',
        transmission: 'Automatic',
        fuel: 'Petrol',
        status: 'SOURCE ON REQUEST',
        imageClass: 'vehicle-camry',
        imageUrl: '/images/vehicles/camry.jpg',
    },
    {
        brand: 'Toyota',
        model: 'Corolla',
        name: 'Toyota Corolla',
        tag: 'USA / Japan',
        yearRange: '2012–2020',
        transmission: 'Automatic',
        fuel: 'Petrol',
        status: 'SOURCE ON REQUEST',
        imageClass: 'vehicle-corolla',
        imageUrl: '/images/vehicles/corolla.jpg',
    },
    {
        brand: 'Mercedes-Benz',
        model: 'ML350',
        name: 'Mercedes-Benz ML350',
        tag: 'Europe / USA',
        yearRange: '2013–2015',
        transmission: 'Automatic',
        fuel: 'Petrol',
        status: 'SOURCE ON REQUEST',
        imageClass: 'vehicle-ml350',
        imageUrl: '/images/vehicles/ml350.jpg',
    },
];
