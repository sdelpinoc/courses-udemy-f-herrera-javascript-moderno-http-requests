const jokeUrl = 'https://api.chucknorris.io/jokes/random';
const usersUrl = 'https://reqres.in/api/users?page=2';
// const usersUrl = 'https://reqres.in/api/unknown/23';

// fetch(jokeUrl).then((response) => {
//     // console.log({response});
//     response.json().then(({id, value}) => {
//         // console.log(data);
//         console.log(id);
//         console.log(value);
//     });
// });

// Cloudinary
const cloudPreset = 'irxqugkc';
const cloudUrl = 'https://api.cloudinary.com/v1_1/sdelpinoc/image/upload';

const getJoke = async () => {

    try {
        const resp = await fetch(jokeUrl);

        if (!resp.ok) throw 'The request could not be made';

        const { id, value, icon_url } = await resp.json();

        return { id, value, icon_url };

    } catch (error) {
        throw error;
    }
};

const getUsers = async () => {
    try {
        const resp = await fetch(usersUrl);
        console.log('resp: ', resp);
        console.log('typeof(resp): ', typeof(resp));
        if (!resp.ok) throw 'The request could not be made';
    
        const { data: users } = await resp.json();
    
        return users;
    } catch (error) {
        console.log('error: ', error);
        console.log('typeof(error): ', typeof(error));
        throw error;
    }
};

const uploadFile = async fileUpload => {
    const formData = new FormData();
    formData.append('upload_preset', cloudPreset);
    formData.append('file', fileUpload);

    try {
        const resp = await fetch(cloudUrl, {
            method: 'POST',
            body: formData
        });

        if (resp.ok) {
            const cloudResp = await resp.json();
            console.log(cloudResp);
            return cloudResp.secure_url;
        } else {
            throw await resp.json();
        }
    } catch (error) {
        throw error;
    }
};

export {
    getJoke,
    getUsers,
    uploadFile
}