const openIngre = (ingre)=>{
    
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(`${ingre} abierto`)
            resolve(ingre)
        },1000)
    })
    
}

const freir=(ingre)=>{
    
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(`${ingre} frito`)
            resolve(ingre)
        },2000)
    })
}

const placeSauce =(ingre)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log(`${ingre} bañado`)
            resolve(ingre)
        },3000)
    })
}

const  cookCowbosEggs = async()=>{
    const ingredent="Egg"
    try {
        const openEgg= await openIngre(ingredent)
        const friedEgg= await freir(openEgg)
        const hecharSalsa= await placeSauce(friedEgg)
        return console.log("Huevos rancheros preparados")
    } catch (error) {
        
    }
}

const cookChaliki= async()=>{
    const ingredent="Totopo"
    const openTotopos = await openIngre(ingredent)
    const friedTortilla = await freir(openTotopos)
    const hecharSalsa = await placeSauce(friedTortilla)
    return console.log("Chilakiles preparados")
}

const mesaUno =()=>{
    cookCowbosEggs()
    cookChaliki()
}

mesaUno()

//console.log(cookCowbosEggs())
//cookChaliki()