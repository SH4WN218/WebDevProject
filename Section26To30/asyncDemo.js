const login = async (username, password) => {
    if (!username || !password) throw 'Missing credentials!'
    if (password === 'BreakingBad') return 'Welcome!'
    throw 'Invalid password.'
}

login('tester',)
    .then(msg => {
        console.log('Logged in!');
        console.log(msg);
    })
    .catch(err => {
        console.log('Error!');
        console.log(err);
    });

