
const ApiUrl = "http://127.0.0.1:8000/api/products/"

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
            "pro_category": String(newProduct.pro_category).trim(), 
            "pro_date": String(newProduct.pro_date).trim(),
            "pro_description": String(newProduct.pro_description).trim(),
            "pro_existences": parseInt(newProduct.pro_existences), 
            "pro_name": String(newProduct.pro_name).trim(),
            "pro_provider": String(newProduct.pro_provider).trim(),

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
            "pro_category": String(update.pro_category).trim(), 
            "pro_date": String(update.pro_date).trim(),
            "pro_description": String(update.pro_description).trim(),
            "pro_existences": parseInt(update.pro_existences), 
            "pro_name": String(update.pro_name).trim(),
            "pro_provider": String(update.pro_provider).trim(),

        })
    });
};

export const deletProduct = async (productId) => {
    return await fetch(`${ApiUrl}${productId}`, {
        method: "DELETE",
    });
};