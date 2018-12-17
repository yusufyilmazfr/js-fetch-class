class Request {

    get(url) {
        return new Promise(function (resolve, reject) {

            fetch(url)
                .then(request => request.json())
                .then(data => resolve(data))
                .catch(err => reject(err))

        });
    }

    post(url, data) {

        return new Promise((resolve, reject) => {

            fetch(url, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-type': 'application/json'
                }
            })
                .then(request => request.json())
                .then(data => resolve(data))
                .catch(err => reject(err))
        })

    }

    put(url, data) {

        return new Promise((resolve, reject) => {

            fetch(url, {
                method: 'PUT',
                body: JSON.stringify(data),
                headers: {
                    'Content-type': 'application/json'
                }
            })
                .then(request => request.json())
                .then(data => resolve(data))
                .catch(err => reject(err))
        })

    }

    delete(url) {

        return new Promise((resolve, reject) => {

            fetch(url, {
                method: 'DELETE'
            })
                .then(() => resolve("succeed, data deleted :)"))
                .catch(err => reject(err))
        })

    }

}