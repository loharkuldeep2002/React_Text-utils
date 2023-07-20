fetch('https://fakestoreapi.com/products')
    .then((response) => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then((completedData) => {
        let data1 = '';
        completedData.map((values) => {
            data1 +=
                `
                    <div class="card mx-4 my-4"style="width: 18rem ">
                    <div class="card-body">
                    <img src="${values.image} " class="card-img-top"
                        alt="..." style="height:300px">
                            <p class="title"><b>${values.title}</b></p>
                            <p>${values.description}</p>
                            <p class="category"><b>${values.category}</b></p>
                            <p class="price"><b>${values.price}</b></p>
                            <button class="btn">
                            somewhere
                            </button>
                            </div>
                    </div>
                 `
        });
        document.getElementById('root').innerHTML = data1;
    })
    .catch((error) => {
        console.log('Error:', error);
    });

