
import { makeAutoObservable } from 'mobx'
export default class UserStore {
    constructor() {
        this._isAuth = localStorage.getItem("isAuth")
        this._user = JSON.parse(localStorage.getItem("user"))
        makeAutoObservable(this)
    }
    setIsAuth(bool) {
        this._isAuth = bool
        localStorage.setItem("isAuth", bool)
    }
    setUser(user) {
        this._user = user
        localStorage.setItem("user", JSON.stringify(user))
    }
    get isAuth() {
        return this._isAuth
    }
    get User() {
        return this._user
    }
}
