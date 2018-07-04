import Eos from 'eosjs';

const chainId = '038f4b0fc8ff18a4f0842a8f0564611f6e96e8535901dd45e43ac8691a1c4dca';
const contractName = 'duccntr';

export const eosExchange = ({quantity, blockchain, to}) => {
    let identity,
        currentAccount,
        rawAccount;

    const networkEOS = {
        protocol: 'http',
        blockchain: 'eos',
        host: eosAddress,
        port: 8888,
        chainId,
    };

    return scatter.suggestNetwork(networkEOS)
        .then(x => {
            return scatter.getIdentity({ accounts: [networkEOS] })
        })
        .then(data => {
            identity = data;
            currentAccount = identity.accounts[0];

            return scatter.authenticate();
        })
        .catch(error => {
            console.log(error)
        })
        .then(sig => {
            window.eos = scatter.eos(networkEOS, Eos, {
                chainId: networkEOS.chainId,
                httpEndpoint: `http://${eosAddress}:${networkEOS.port}`
            }, 'http');

            return window.eos.getAccount({ account_name: currentAccount.name })
        })
        .then(raw => {
            rawAccount = raw;

            const permission = raw.permissions.find(perm => {
                return perm.perm_name === currentAccount.authority;
            });

            return currentAccount;
        })
        .then(account => {
            console.log('current account >', account);

            const tx_data = {
                actions: [{
                    "account": "eosio",
                    "name": "updateauth",
                    "authorization": [{
                        "actor": account.name,
                        "permission": account.authority
                    }],
                    "data": require_permissions({
                        account: account.name,
                        key: identity.publicKey,
                        actor: contractName,
                        parent: account.authority,
                    })
                }]
            };

            console.log(tx_data);
            return window.eos.transaction(tx_data);
        })
        .then(res => {
            console.log(res);

            const tx_data = {
                actions: [{
                    "account": contractName,
                    "name": "exchange",
                    "authorization": [{
                        "actor": currentAccount.name,
                        "permission": currentAccount.authority
                    }],
                    "data": {
                        from: currentAccount.name,
                        quantity,
                        blockchain,
                        to
                    }
                }]
            };

            return window.eos.transaction(tx_data);
        })
        .then(console.log)
        .catch(err => console.log('auth err', err))
}

const require_permissions = ({ account, key, actor, parent }) => {
    return {
        "account": `${account}`,
        "permission": "active",
        "parent": `${parent}`,
        "auth": {
            "threshold": 1,
            "keys": [
                {
                    "key": `${key}`,
                    "weight": 1
                }
            ],
            "accounts": [
                {
                    "permission": {
                        "actor": `${actor}`,
                        "permission": "eosio.code"
                    },
                    "weight": 1
                }
            ],
            "waits": [
                // {
                //     "wait_sec": 0,
                //     "weight": 0
                // }
            ]
        }
    }
}