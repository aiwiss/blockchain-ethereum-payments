// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract ApprovalContract {
  address public sender;
  address public recipient;
  address public constant approver = 0x914751C437494b23404C516772e5A8E804524298;

  function deposit (address receiver) external payable {
    require(msg.value > 0, "You must send something!");
    // TODO: check that receiver address is valid

    sender = msg.sender;
    recipient = receiver;
  }

  function approve() external {
    require(msg.sender == approver);
    payable(recipient).transfer(address(this).balance);
  }

  function viewApprover() external pure returns(address) {
    return(approver);
  }
}