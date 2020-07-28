import React, { Component } from 'react'
import Main from '../template/Main'
import axios from 'axios'
import { headerProps, initialState, baseUrl } from '../../assets/js/consts'
import FormGroup from '../template/FormGroup'
import Button from '../template/Button'
import Table from '../template/Table'

export default class UserCrud extends Component {

    state = { ...initialState }

    constructor(props){
        super(props)

        this.updateField = this.updateField.bind(this)
        this.save = this.save.bind(this)
        this.clear = this.clear.bind(this)
    }

    componentWillMount() {
        axios(baseUrl).then(resp => {
            this.setState({ list: resp.data })
        })
    }

    clear() {
        this.setState({ user: initialState.user })
    }

    save() {
        const user = this.state.user
        const method = user.id ? 'put' : 'post'
        const url = user.id ? `${baseUrl}/${user.id}` : baseUrl
        axios[method](url, user)
            .then(resp => {
                const list = this.getUpdatedList(resp.data)
                this.setState({ user: initialState.user, list })
            })
    }

    load(user) {
        this.setState({ user })
    }

    remove(user) {
        axios.delete(`${baseUrl}/${user.id}`).then(resp => {
            const list = this.getUpdatedList(user, false)
            this.setState({ list })
        })
    }

    getUpdatedList(user, add = true) {
        const list = this.state.list.filter(usr => usr.id !== user.id)
        if (add) list.unshift(user)
        return list
    }

    updateField(event) {
        const user = { ...this.state.user }
        //Esta é uma outra forma de acessar um objeto, no caso do parâmetro passado entre [] ser
        // uma string!
        user[event.target.name] = event.target.value
        this.setState({ user })
    }

    renderForm() {
        return (
            <div className="form">
                <div className="row">
                    <FormGroup responsivity="col-12 col-md-6" label="Nome" change={this.updateField} 
                    value={this.state.user.name} inputName="name"/>                    
                    <FormGroup responsivity="col-12 col-md-6" label="E-mail" change={this.updateField} 
                    value={this.state.user.email} inputName="email"/>
                </div>
                <hr />
                <div className="row">
                    <div className="col-12 d-flex justify-content-end">
                        <Button styleBtn="primary" click={this.save} label="Salvar" />
                        <Button styleBtn="secondary" margin="ml-2" click={this.clear} label="Cancelar" />
                    </div>
                </div>
            </div>
        )
    }

    renderRows() {
        return this.state.list.map(user => {
            return (
                <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                        <Button styleBtn="warning" click={() => this.load(user)} icon="pencil" />
                        <Button styleBtn="danger" margin="ml-2" click={() => this.remove(user)} 
                            icon="trash" />
                    </td>
                </tr>
            )
        })
    }

    render() {
        return (
            <Main {...headerProps}>
                {this.renderForm()}
                <Table margin="mt-4" columns="Id Nome E-mail Ações" rows={this.renderRows()} />
            </Main>
        )
    }
}