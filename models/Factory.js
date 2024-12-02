import SondaModelMem from "./DAO/sonda.models.mem.js";

class Factory{

    static get(persistence){
        switch(persistence){
            
            case "MEM":
                console.log("persistiendo en la memoria del servidor")
                return new SondaModelMem()
            default:
                console.log("persistiendo en la memoria por default")
                return new SondaModelMem()
        } 
    }
}

export default Factory