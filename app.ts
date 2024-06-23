interface Product {
    price: number;
    discount: number;
    isInstallment: boolean;
    months: number;
}

function calculateTotalCost({ price, discount, isInstallment, months }: Product): number {

    const discountedPrice = price - (price * discount / 100);


    if (isInstallment && months > 0) {
        return discountedPrice / months;
    }


    return discountedPrice;
}

const product: Product = {
    price: 100000,
    discount: 25,
    isInstallment: true,
    months: 12
};

const totalCost = calculateTotalCost(product);
console.log(totalCost); 