

export const formateDate = (date) => {

    const hours = new Date(date).getHours();
    let min = new Date(date).getMinutes()
    
    return "11 : 11" ||`${hours < 10 ? "0" + hours : hours} : ${min < 10 ? "0" + min : min}`
}