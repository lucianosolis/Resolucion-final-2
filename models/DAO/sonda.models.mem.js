class SondaModelMem{

    constructor(){
        this.sondas=[{id:1,temperaturas:[]},{id:2,temperaturas:[]},{id:3,temperaturas:[]},{id:4,temperaturas:[]},{id:5,temperaturas:[]}]
    }

    getSondas=async()=>{

        return this.sondas
    }

    postSondas=async(data)=>{
        console.log(typeof(data))
        const sondaEncontrada=this.sondas.find(s=>s.id==data.id)
        if(sondaEncontrada){
            const fechaAhora=new Date()
            data.fecha=fechaAhora.toISOString().split("T")[0]
            data.hora=fechaAhora.toTimeString().split(" ")[0]
            sondaEncontrada.temperaturas.push({temperatura:data.temperatura,fecha:data.fecha,hora:data.hora})
            return data
        }else{
            return "datos no validos"
        }
    }

    getSondaPorId=async(id)=>{
        const posId=this.sondas.findIndex(s=>s.id==id)
        console.log(posId)
        if(posId!=-1){
            return this.sondas[posId]
        }else{
            return "numero de sonda incorrecto"
        }
    }

    getEstadistica=async()=>{

        const estadistica={cantidadTotalMuestra:0,1:{cantidad:0,promedio:0},2:{cantidad:0,promedio:0},3:{cantidad:0,promedio:0},4:{cantidad:0,promedio:0},5:{cantidad:0,promedio:0}}
        
        this.sondas.forEach(sonda=>{
            const sumaTemperaturas=sonda.temperaturas.reduce((acum,temp)=>acum+temp.temperatura,0)
            estadistica.cantidadTotalMuestra+=sonda.temperaturas.length
            estadistica[JSON.stringify(sonda.id)].cantidad=sonda.temperaturas.length
            estadistica[JSON.stringify(sonda.id)].promedio=sonda.temperaturas.length>0?(sumaTemperaturas/sonda.temperaturas.length):0

        })

        return estadistica
    }
}

export default SondaModelMem