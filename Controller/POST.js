


const postiamo = (request, response) => {
    console.log("---------------------------")
    
    console.log(request.body)
    console.log("---------------------------")
    a = request.body
    response.body = a;

    console.log(response.body)
    console.log("---------------------------")
    response.send(request.body)
};

module.exports = {
    postiamo,
};
