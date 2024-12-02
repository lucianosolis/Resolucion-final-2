import SondaController from "../controllers/sonda.controller.js";
import express from "express"

class SondaRoute{

    constructor(){

        this.SondaController=new SondaController()
        this.router=express.Router()
    }

    start(){
        this.router.get("/sondas",this.SondaController.getSondas)
        this.router.post("/sondas",this.SondaController.postSondas)
        this.router.get("/sondas/:id",this.SondaController.getSondaPorId)
        this.router.get("/estadisticas",this.SondaController.getEstadistica)
        return this.router
    }
}

export default SondaRoute