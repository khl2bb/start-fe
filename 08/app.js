const promise = fetch('https://daum.net');
console.log(promise);

promise.then(res => {
    console.log(res);
    const textPromise = res.text();
    console.log('textPromise:', textPromise);

    textPromise.then((
        data => console.log(data)
    ));
})
console.log(d)


function callback(data) {
    console.log(data);
}