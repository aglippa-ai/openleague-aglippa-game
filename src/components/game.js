const MAX_POINT_LIMIT = 4000;
const ADD_LIMIT_MSEC  = 3000;

const game = {

    point: {
        amount: 0,
        limit: 0
    },

    addLimit: function (p) {
        p = p || 1;
        if (this.point.limit < MAX_POINT_LIMIT) {
            this.point.limit += p;
        }
    },

    getMaxLimit: function () {
        return MAX_POINT_LIMIT;
    },

    getAddLimitSeconds: function () {
        return ADD_LIMIT_MSEC;
    },

    addPoint: function (p) {
        p = p || 1;
        if (this.point.limit > 0) {
            this.point.amount += p;
            this.point.limit  -= p;
        }
    }

}

export default game;