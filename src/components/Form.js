import React from "react"

class Form extends React.Component {
    render() {
        return (
            <div className="container">
                <form>
                    <div className="form-group row">
                        <label for="inputname" className="col-sm-2 col-form-label">Nama</label>
                        <div className="col-sm-10">
                            <input type="email" className="form-control" id="inputEmail3" placeholder="input nama" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label for="inputalamat" className="col-sm-2 col-form-label">Alamat</label>
                        <div className="col-sm-10">
                            <input type="password" class="form-control" id="inputalamat" placeholder="input alamat" />
                        </div>
                    </div>
                    <fieldset className="form-group">
                        <div className="row">
                            <legend className="col-form-label col-sm-2 pt-0">Status</legend>
                            <div className="col-sm-10">
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked />
                                    <label className="form-check-label" for="gridRadios1">
                                        Jomblo
          </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2" />
                                    <label className="form-check-label" for="gridRadios2">
                                        Ada dong
          </label>
                                </div>
                            </div>
                        </div>
                    </fieldset>
                    <div className="form-group row">
                        <label for="inputEmail3" className="col-sm-2 col-form-label">Tanggal Lahir</label>
                        <div className="col-sm-10">
                            <input type="date" className="form-control" id="inputEmail3" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col-sm-10">
                            <button type="submit" class="btn btn-primary">Save</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
export default Form