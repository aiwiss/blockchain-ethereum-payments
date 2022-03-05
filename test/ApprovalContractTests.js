const ApprovalContract = artifacts.require('../contracts/ApprovalContract.sol');

contract('ApprovalContract', accounts => {
  it('Initiates contract', async () => {
    const contract = await ApprovalContract.deployed();
    const approver = await contract.approver.call();

    assert.equal(
      approver,
      0x914751C437494b23404C516772e5A8E804524298,
      'Approvers do not match'
    );
  });

  it('Deposits money', async () => {
    const contract = await ApprovalContract.deployed();
    await contract.deposit(accounts[0], { value: 1e+18, sender: accounts[1] });
    assert.equal(
      await web3.eth.getBalance(contract.address),
      1e+18,
      'Deposit amount did not match'
    );
  });
});