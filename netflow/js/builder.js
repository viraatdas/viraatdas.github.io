function build(){
    var net = new Net();

    net.addLayer(4);

    net.addLayer(2);
    net.addLayer(2);
  


    net.setInputValues([1,2,3,4])
    net.setOutputValues([1, 0])

    random_values = []
    for (var i=0; i < 6; i++) {
        a = Math.random();
        b = Math.random();
        random_values.push([a, b])
    }
    console.log(random_values)

    net.weights[0].setValues(random_values)
    net.weights[1].setValues([[.14, 0.16],[.15, 0.17]])


    // net.training = {
    //         "inputs": [ [-4,3] , [2,5] , [1,3]],
    //         "outputs":[[1], [2], [3]]
    // }

    return net;

}
