import axios from 'axios'
const API_HOST = "http://localhost:3010"

const user = {

    get: async (tgid) => {
        const _res = await axios({
            url: `${API_HOST}/user/${tgid}`,
            method: 'GET'
        })

        return _res.data;
    },

    updatePoints: async ({ tgid, points }) => {
        console.log(tgid, points);
        const _res = await axios({
            url: `${API_HOST}/user/${tgid}/points`,
            method: 'POST',
            data: {
                points: parseInt(points)
            }
        })
    }
}

export default user;