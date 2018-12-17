class Request {

    async get(url) {

        const response = await fetch(url);

        const data = await response.json();

        return data;
    }

    async post(url, data) {

        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: { 'Content-type': 'application/json' }
        });

        const responseData = await response.json();

        return responseData;
    }

    async put(url, data) {

        const response = await fetch(url, {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: { 'Content-type': 'application/json' }
        });

        const responseData = await response.json();

        return responseData;
    }

    async delete(url) {

        const response = await fetch(url, { method: 'DELETE' });

        return "Succeeded, data deleted:)";
    }
}



// EXAMPLES :)

const request = new Request();


//Get Request
request.get("https://jsonplaceholder.typicode.com/albums")
    .then(request => {
        console.log(request)
    })
    .catch(err => console.error(err))


//Post Request
request.post('https://jsonplaceholder.typicode.com/posts', {
    'userId': 91,
    'title': 'treiller',
    'body': 'example'
})
    .then(data => console.log(data))
    .catch(err => console.log(err))

//Put Request
request.put('https://jsonplaceholder.typicode.com/posts/97', {
    'userId': 98,
    'title': 'Cankan Yaranamadim',
    'body': ':s example test'
})
    .then(data => console.log(data))
    .catch(err => console.log(err))

//Delete Request
request.delete('https://jsonplaceholder.typicode.com/albums/2')
    .then(data => console.log(data))
    .catch(err => console.log(err))

