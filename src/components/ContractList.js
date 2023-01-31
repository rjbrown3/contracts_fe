import React, { Component } from "react";
import { Table } from "reactstrap";
import NewContractModal from "./NewContractModal";

import ConfirmRemovalModal from "./ConfirmRemovalModal";

class ContractList extends Component {
  render() {
    const contracts = this.props.contracts;
    return (
      <Table dark>
        <thead>
          <tr>
            <th>Name</th>
            <th>company</th>
            <th>Contract Type</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {!contracts || contracts.length <= 0 ? (
            <tr>
              <td colSpan="6" align="center">
                <b>Ops, no one here yet</b>
              </td>
            </tr>
          ) : (
            contracts.map(contract => (
              <tr key={contract.pk}>
                <td>{contract.name}</td>
                <td>{contract.company}</td>
                <td>{contract.contractType}</td>
                <td align="center">
                  <NewContractModal
                    create={false}
                    contract={contract}
                    resetState={this.props.resetState}
                  />
                  &nbsp;&nbsp;
                  <ConfirmRemovalModal
                    pk={contract.pk}
                    resetState={this.props.resetState}
                  />
                </td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
    );
  }
}

export default ContractList;