export const BASE_URL =
    process.env.NODE_ENV === "production"
        ? "https://propertycloud-node.herokuapp.com/"
        : "http://localhost:5000/";


export const config = {
    headers: {
        "Content-Type": "application/json",
    },
};