import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const CryptoZombies = buildModule("MainModule", (m) => {
  const deployer = m.getAccount(0);

  const zombieFactory = m.contract("ZombieFactory", [], { from: deployer });
  console.log("ZombieFactory deployed at:", zombieFactory);

  const zombieFeeding = m.contract("ZombieFeeding", [], {
    from: deployer,
  });
  console.log("ZombieFeeding deployed at:", zombieFeeding);

  const zombieHelper = m.contract("ZombieHelper", [], {
    from: deployer,
  });
  console.log("ZombieHelper deployed at:", zombieHelper);

  const zombieAttack = m.contract("ZombieAttack", [], {
    from: deployer,
  });
  console.log("ZombieAttack deployed at:", zombieAttack);

  const zombieOwnership = m.contract("ZombieOwnership", [], {
    from: deployer,
  });
  console.log("ZombieOwnership deployed at:", zombieOwnership);

  return {
    zombieFactory,
    zombieFeeding,
    zombieHelper,
    zombieAttack,
    zombieOwnership,
  };
});

export default CryptoZombies;
