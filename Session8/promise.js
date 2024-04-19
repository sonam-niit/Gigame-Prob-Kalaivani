function taskCheck(test) {
    const promise = new Promise((resolve, reject) => {
        if (test == 'page 1') {
            resolve('completed');
        } else {
            reject('not completed');
        }
    })
    return promise;
}
const response = taskCheck('page 1');
response
    .then(resp=>resp.toUpperCase())
    .then(resp=>console.log(resp))
    .catch(err=>console.log(err))