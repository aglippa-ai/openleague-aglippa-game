export const numberFormat = (v) => {
    return parseInt(v).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}
