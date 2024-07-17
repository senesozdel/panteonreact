export const mapStateToBuildConfig = (buildName,buildTypeId,buildCost,buildTime) =>{

let payload = {
    name:buildName,
    buildingTypeId:buildTypeId,
    buildingCost:buildCost,
    constructionTime:buildTime
};

return payload

}