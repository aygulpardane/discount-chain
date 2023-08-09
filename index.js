const timmy = {
    prescription: "acetaminophen",
    pricePerRefill: 25,
    refills: 3,
    subscription: false,
    coupon: true,
};

const sarah = {
    prescription: "diphenhydramine",
    pricePerRefill: 50,
    refills: 1,
    subscription: true,
    coupon: false,
}

const rocky = {
    prescription: "phenylephrine",
    pricePerRefill: 30,
    refills: 5,
    subscription: true,
    coupon: true,
}

// Write two functions
// First function will return total cost without subscription or coupoun
// Second function
// Using an if statement, return 1) cost with subscription AND coupon, or 2)  cost with subscription only, or 3) cost with coupon only, or (just in case) 4) cost without subscription or coupon

function totalCost (pricePerRefill, refills) {
    return pricePerRefill * refills;
}

//const cost = totalCost (pricePerRefill, refills);

function costSubscription (cost, subscription, coupon) {
    if (subscription && coupon) {
        return cost * 0.75 - 10;
    } else if (subscription) {
        return cost * 0.75;
    } else if (coupon) {
        return cost - 10;
    } else {
        return cost;
    }
}

console.log("Your grand total is $" + costSubscription (totalCost (25, 3), timmy.subscription, timmy.coupon));

console.log("Your grand total is $" + costSubscription (totalCost (50, 1), sarah.subscription, sarah.coupon));

console.log("Your grand total is $" + costSubscription (totalCost (30, 5), rocky.subscription, rocky.coupon));
