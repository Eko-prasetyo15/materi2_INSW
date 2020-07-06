import React from "react"
import Pagination from "./Pagination"

class Table extends React.Component {
    render() {
        return (
            <div className="container">
                <table className="table table-bordered table-dark">
                    <thead>
                        <tr>
                            <th scope="col">Nama</th>
                            <th scope="col">Alamat</th>
                            <th scope="col">Status</th>
                            <th scope="col">Tanggal Lahir</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scop="row">Eko</th>
                            <td>Bandung</td>
                            <td>Jomblo</td>
                            <td>2020-21-07</td>
                            <td>
                                <button className="btn btn-success"> Edit </button>
                                <button className="btn btn-danger"> Delete </button>
                            </td>
                        </tr>
                        <tr>
                            <th scop="row">Irfan</th>
                            <td>Cirebon</td>
                            <td>Jomblo</td>
                            <td>2020-07-07</td>
                            <td>
                                <button className="btn btn-success"> Edit </button>
                                <button className="btn btn-danger"> Delete </button>
                            </td>
                        </tr>
                        <tr>
                            <th scop="row">Yasa</th>
                            <td>Lampung</td>
                            <td>Ada dong</td>
                            <td>2019-07-07</td>
                            <td>
                                <button className="btn btn-success"> Edit </button>
                                <button className="btn btn-danger"> Delete </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <Pagination />
            </div>
        )
    }
}
export default Table