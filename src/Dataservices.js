import http from "./http-common";
class DataServices{
    getAllUsers(){
        return http.get("/home/getAll");
    }

    signin(data){
        return http.post("/home/loginUser",data);
    }

    register(data){
        return http.post("/home/create",data);
    }


    getDeliveries(id){
        return http.get(`/user/delivery/findByUserId/${id}`);
    }

    createDelivery(data){
        return http.post("/user/delivery/create",data);
    }

    getOrders(id){
        return http.get(`/user/order/findByUserId/${id}`);
    }

    createOrder(data){
        return http.post("/user/order/create",data);
    }

}

export default new DataServices();