import Factory from "../models/Factory.js"

class SondaServices{

    constructor(){
        this.model=Factory.get("")
    }

    getSondas=async()=>{
        const sondas=await this.model.getSondas()
        return sondas
    }

    postSondas=async(data)=>{

        const newSonda=await this.model.postSondas(data)
        return newSonda

    }

    getSondaPorId=async(id)=>{

        const sonda=await this.model.getSondaPorId(id)
        return sonda
    }

    getEstadistica=async()=>{

        const estadistica=await this.model.getEstadistica()
        return estadistica
    }


}
export default SondaServices