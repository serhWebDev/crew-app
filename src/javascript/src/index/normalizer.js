export const normalozer = (responce) => {

    const data = {
        id: responce.cell,
        avatar: responce.picture.medium,
        name: {
            titleName: responce.name.title || '',
            firstName: responce.name.first || '',
            lastName: responce.name.last || '',
        },
        city: responce.location.city,
        status: 0
    };
    return data;
};

export default normalozer;