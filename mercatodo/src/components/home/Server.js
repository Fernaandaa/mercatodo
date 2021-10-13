const ApiUrl = ""


export const listProducts = async () => {
    return await fetch(ApiUrl);
};

export const getProduct = async (productId) => {
    return await fetch(`${ApiUrl}${productId}`);
};

export const addProduct = async (newProduct) => {
    return await fetch(ApiUrl, {
        method: "POST",
        headers: {
            'content-Type' : 'application/json'
        },
        body: JSON.stringify({
            "name": String(newProduct.name).trim(), 
            "quantity": parseInt(newProduct.quantity)
        })
    });
};
export const update = async (productId, update) => {
    return await fetch(`${ApiUrl}${productId}`, {
        method: "PUT",
        headers: {
            'content-Type' : 'application/json'
        },
        body: JSON.stringify({
            "name": String(update.name).trim(), 
            "quantity": parseInt(update.quantity)
        })
    });
};

export const deletProduct = async (productId) => {
    return await fetch(`${ApiUrl}${productId}`, {
        method: "DELETE",
    });
};