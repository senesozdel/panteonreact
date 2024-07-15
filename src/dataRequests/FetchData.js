export const getBuildingConfigList =async(setBuildDataList)=>{

    try{
        let data = await fetch("https://localhost:7244/api/BuildingConfiguration").then(res=>res.json());
        console.log(data)
        setBuildDataList(data);
    }
    catch(error){
        console.log(error)
    }


}

export const getBuildingTypes = async(setBuildTypeList) =>{

    try{
        let data = await fetch("https://localhost:7244/api/BuildingType").then(res=>res.json());
        console.log(data)
        setBuildTypeList(data);
    }
    catch(error){
        console.log(error)
    }
}