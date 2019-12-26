export const normalizer = (responce) => {

    const data = {
        id: responce.cell,
        avatar: responce.picture.medium,
        name: {
            name: `${responce.name.title} ${responce.name.first} ${responce.name.last}`
        },
        city: responce.location.city,
        status: 0
    };
    return data;
};

export default normalizer;