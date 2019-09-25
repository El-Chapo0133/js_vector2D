const POSITIVE = 0
const NEGATIVE = 1

class Vector2D {
    constructor(p_x, p_y) {
        this.setDefault()

        if (!this.isNull(p_x))
            this.data.x = p_x
        if (!this.isNull(p_y))
            this.data.y = p_y
    }
    setDefault() {
        this.data.x = 0
        this.data.y = 0
        this.data.direction = POSITIVE
        this.data.power = 1
    }
    get X() {
        return this.data.x
    }
    get Y() {
        return this.data.y
    }
    get Power() {
        return this.data.power
    }
    set X(p_value) {
        this.data.x = p_value
    }
    set Y(p_value) {
        this.data.y = p_value
    }
    set Power(value) {
        this.data.power = value
    }
    setToPositive() {
        this.data.direction = POSITIVE
    }
    setToNegative() {
        this.data.direction = NEGATIVE
    }
    add(p_vector) {
        let t_vector = new Vector2D(this.data.x + p_vector.X(), this.data.y + p_vector.Y())
        return t_vector
    }
    substract(p_vector) {
        let t_vector = p_vector
        t_vector.setToPositive()
        let r_vector = new Vector2D(this.data.x + t_vector.X(), this.data.y + t_vector.Y())
        return r_vector
    }
    destroy() {
        this.data = null
    }
    clone() {
        let r_vector = new Vector2D(this.data.x, this.data.y)
        if (this.data.direction === POSITIVE)
            r_vector.setToPositive()
        else
            r_vector.setToNegative()
        r_vector.Power(this.Power())
        return r_vector
    }
    isNull(value) {
        if (value === null)
            return true
        else
            return false
    }
}