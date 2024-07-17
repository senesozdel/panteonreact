import axios from "axios";
import { baseurl } from "../constants/Constants";

export const getUsers =async(setUserList)=>{

    const token = localStorage.getItem('token'); 
    
    try{
        let response = await axios.get( `${baseurl}/User`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        console.log(response)
        console.log(response.data)
        setUserList(response.data);
    }
    catch(error){
        console.log(error)
    }


}

export const addBuildingType = async(payload) =>{

    const token = localStorage.getItem('token');
    try{
        let data = await axios.post(`${baseurl}/BuildingType/addBuildingType`,payload, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        console.log(data)
        console.log("Başarılı bir şekilde ekleme yaptınız")
    }
    catch(error){
        console.log(error)
    }
}


export const getBuildingConfigList =async(setBuildDataList)=>{

    const token = localStorage.getItem('token'); 
    
    try{
        let response = await axios.get( `${baseurl}/BuildingConfiguration` , {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        console.log(response)
        console.log(response.data)
        setBuildDataList(response.data);
    }
    catch(error){
        console.log(error)
    }


}

export const getBuildingTypes = async(setBuildTypeList) =>{

    const token = localStorage.getItem('token');
    try{
        let response = await axios.get(`${baseurl}/BuildingType`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        console.log(response)
        setBuildTypeList(response.data);
    }
    catch(error){
        console.log(error)
    }
}

export const addBuildingConfig = async(payload) =>{

    const token = localStorage.getItem('token');
    try{
        let data = await axios.post(`${baseurl}/BuildingConfiguration/addBuildingConfiguration` ,payload, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        console.log(data)
        console.log("Başarılı bir şekilde ekleme yaptınız")
    }
    catch(error){
        console.log(error)
    }
}

export const deleteBuildingConfig = async(buildId) =>{

    const token = localStorage.getItem('token');
    try{
        let data = await axios.delete(`${baseurl}/BuildingConfiguration/deleteBuildingConfiguration`, {
            params: {
                buildingConfigurationId: buildId
            }
        }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
            
        console.log(data)
        console.log("Başarılı bir şekilde silme işlemi yaptınız")
    }
    catch(error){
        console.log(error)
    }
}

export const editBuildingConfig = async(payload) =>{

    try{
        let data = await axios.put(`${baseurl}/BuildingConfiguration/editBuildingConfiguration`,payload)
        console.log(data)
        console.log("Başarılı bir şekilde düzenleme yaptınız")
    }
    catch(error){
        console.log(error)
    }
}


export const addNewUser = async(payload) =>{

    try{
        let res = await axios.post(`${baseurl}/User/addUser`,payload)

        if(!res.data.message){
            console.log("Başarılı bir şekilde ekleme yaptınız")
        }
        return res
    }
    catch(error){
        console.log(error)
        return error
    }
}

export const authUser =async(payload)=>{

    try{
        let response = await axios.post(`${baseurl}/Auth/Login`,payload)
        return response

    }
    catch(error){
        console.log(error)
    }


}

export const deleteBuildingType = async(buildTypeId) =>{

    const token = localStorage.getItem('token');
    try{
        let data = await axios.delete(`${baseurl}/BuildingType/deleteBuildingType`, {
            params: {
                buildingTypeId: buildTypeId
            }
        }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
            
        console.log(data)
        console.log("Başarılı bir şekilde silme işlemi yaptınız")
    }
    catch(error){
        console.log(error)
    }
}

export const editBuildingType= async(payload) =>{

    try{
        let data = await axios.put(`${baseurl}/BuildingType/editBuildingType`,payload)
        console.log(data)
        console.log("Başarılı bir şekilde düzenleme yaptınız")
    }
    catch(error){
        console.log(error)
    }
}
