import { getUsers } from './http-provider';

const body = document.querySelector('body');
let tbody;

const addTableUsersHtml = () => {
    const table = `
        <h1 class="mt-5 mb-2">Users</h1>
        <table class="table">
            <thead>
                <tr>
                    <th>N°</th>
                    <th>Id</th>
                    <th>Email</th>
                    <th>First name</th>
                    <th>Last name</th>
                    <th>Avatar</th>
                <tr>
            </thead>
            <tbody></tbody>
        </table>
    `;

    const div = document.createElement('div');
    div.innerHTML = table;

    body.appendChild(div);
};

const getUsersFrom = async () => {
    // getUsers().then(users => {
    //     console.log('users: ', users);
    //     console.log('typeof(users): ', typeof(users));
    //     for (const user of users) {
    //         addRowUserHtml(user);
    //     }
    // }).catch((users) => {
    //     console.log('users: ', users);
    //     console.log('typeof(users): ', typeof(users));

    //     addRowUserHtmlError();
    // });
    
    try {
        const users = await getUsers();
        console.log('users: ', users);
        console.log('typeof(users): ', typeof (users));
        users.forEach(addRowUserHtml);
    } catch (error) {
        console.log('error: ', error);
        console.log('typeof(error): ', typeof (error));
        addRowUserHtmlError();
    }
};

const addRowUserHtml = ({ id, email, first_name, last_name, avatar }) => {
    tbody = document.querySelector('tbody');

    const row = document.createElement('tr');

    const rowCount = tbody.querySelectorAll('tr').length + 1;

    row.innerHTML = `
        <td>${rowCount}</td>
        <td>${id}</td>
        <td>${email}</td>
        <td>${first_name}</td>
        <td>${last_name}</td>
        <td><img class="img-thumbnail" src="${avatar}" alt="${first_name} ${last_name}"</td>
    `;

    tbody.appendChild(row);
};

const addRowUserHtmlError = () => {
    tbody = document.querySelector('tbody');

    const row = document.createElement('tr');

    row.innerHTML = `
        <td colspan="5">Error getting information...</td>
    `;

    tbody.append(row);
};

export const init = () => {
    addTableUsersHtml();
    getUsersFrom();
};
