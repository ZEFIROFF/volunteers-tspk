import React, {Component} from 'react';
import logo from '../../favicon.png'

class SignIn extends Component {
    render() {
        return (
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content border-0">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel"><img src={logo} alt="logo"/></h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1"
                                           aria-describedby="emailHelp"/>
                                    <div id="emailHelp" className="form-text">Ваша основная электронная почта
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Пароль</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1"/>
                                </div>
                                <div className="sign-footer justify-content-between d-flex flex-row mb-3">
                                    <div className="mb-3 form-check ">
                                        <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                        <label className="form-check-label" htmlFor="exampleCheck1">Запомнить меня</label>
                                    </div>
                                    <button type="submit" className="btn btn-primary">Войти</button>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer justify-content-sm-between">
                            <a href="#" className="link-primary">Нет аккаунта?</a>
                            <a href="#" className="link-secondary">Забыли пароль</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SignIn;