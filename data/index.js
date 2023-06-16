const PRODUCTS = [
    {
        id: '1',
        imageUrl: 'https://images.unsplash.com/photo-1513530176992-0cf39c4cbed4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
        name: 'Brazilian coffee 500g',
        description: 'Enjoy the best coffee of South America while you wake up for a busy day',
        price: '7.99'
    },
    {
        id: '2',
        imageUrl: 'https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
        name: 'Earl grey tea 20 bags pack',
        description: 'A classic british brew, so you can close your eyes and feel beeing in the UK',
        price: '4.99'
    },
    {
        id: '3',
        imageUrl: 'https://images.unsplash.com/photo-1597318109735-d3612887d1ad?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1502&q=80',
        name: 'Darjeeling tea 20 bags pack',
        description: 'The best flavour of India right in your cup, perfect for after lunch, to ease the digestion',
        price: '7.99'
    },
    {
        id: '4',
        imageUrl: 'https://images.unsplash.com/photo-1654417958056-ca6e6213e918?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
        name: 'Cherry',
        description: 'The best flavour of India right in your home',
        price: '3.99'
    }
];

export const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(PRODUCTS);
        }, 100);
    });
}