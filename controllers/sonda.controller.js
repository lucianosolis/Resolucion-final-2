import SondaServices from "../services/sonda.services.js";

class SondaController{

    constructor(){

        this.sondaService=new SondaServices()
    }

    getSondas=async(req,res)=>{
        const sondas=await this.sondaService.getSondas()
        res.send(sondas)
    }

    postSondas=async(req,res)=>{

        const data=req.body
        const newSonda=await this.sondaService.postSondas(data)
        res.send(newSonda)
    }

    getSondaPorId=async(req,res)=>{

        const {id}=req.params
        console.log(typeof(id))
        const sonda=await this.sondaService.getSondaPorId(id)
        res.send(sonda)
    }

    getEstadistica=async(req,res)=>{

        const estadistica=await this.sondaService.getEstadistica()
        res.send(estadistica)
    }

    
}

export default SondaController