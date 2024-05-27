/*
function myDateTime() {
    return Date();
}
module.exports = {myDateTime};
*/
exports.myDateTime = () =>{
    return Date();
}
exports.yourDateTime = () => {
    return new Date().toISOString();
}