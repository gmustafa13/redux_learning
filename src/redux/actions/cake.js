const CAKE_ORDER = 'CAKE_ORDER';

export const orderCake = () => {
    return {
        type: CAKE_ORDER,
        quantity: 1
    }
}
