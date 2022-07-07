// https://reqres.in/api/users/2

const urlCrud = 'https://reqres.in/api/users';

const getUsers = async id => {
    try {
        const resp = await fetch(`${urlCrud}/${id}`);
        const { data } = await resp.json();

        return data;
    } catch (error) {
        throw error;
    }
};

const addUser = async user => {
    try {
        const resp = await fetch(urlCrud, {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const data = await resp.json();

        return data;
    } catch (error) {
        throw error;
    }
};

const updateUser = async (id, user) => {
    try {
        const resp = await fetch(`${urlCrud}/${id}`, {
            method: 'PUT',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const data = await resp.json();

        return data;
    } catch (error) {
        throw error;
    }
};

const deleteUser = async id => {
    try {
        const resp = await fetch(`${urlCrud}/${id}`, {
            method: 'DELETE',
        });

        // const data = await resp.json();

        // return data;

        return (resp.ok) ? 'Deleted' : 'Could not delete record';
    } catch (error) {
        throw error;
    }
};

export {
    getUsers,
    addUser,
    updateUser,
    deleteUser
};