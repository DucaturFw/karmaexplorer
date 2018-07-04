import Eos from 'eosjs';

const chainId = '038f4b0fc8ff18a4f0842a8f0564611f6e96e8535901dd45e43ac8691a1c4dca';
const contractName = 'duccntr';

const networkEOS = {
    protocol: 'http',
    blockchain: 'eos',
    host: eosAddress,
    port: 8888,
    chainId,
};

let identity,
    currentAccount,
    rawAccount;

export const eosExchange = ({quantity, blockchain, to}) => {
    initEos();

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
            console.log('identity error >', error)
        })
        .then(getEosAccount)
        .then(checkPermissions)
        .then(updateAuthTX)
        .then(exchangeTX.bind(null, {quantity, blockchain, to}))
        .then(console.log)
        .catch(err => console.log('tx err >', err))
}

const initEos = () => {
    window.eos = scatter.eos(networkEOS, Eos, {
        chainId: networkEOS.chainId,
        httpEndpoint: `http://${eosAddress}:${networkEOS.port}`
    }, 'http');
}

const getEosAccount = () => window.eos.getAccount({ account_name: currentAccount.name });
const checkPermissions = raw => {
    rawAccount = raw;

    const permission = raw.permissions.find(perm => {
        return perm.perm_name === currentAccount.authority;
    });

    return currentAccount;
};

const updateAuthTX = () => {
    const tx_data = {
        actions: [{
            "account": "eosio",
            "name": "updateauth",
            "authorization": [{
                "actor": currentAccount.name,
                "permission": currentAccount.authority
            }],
            "data": require_permissions({
                account: currentAccount.name,
                key: identity.publicKey,
                actor: contractName,
                parent: currentAccount.authority,
            })
        }]
    };

    console.log('UpdateAuth TX > ', tx_data);
    return window.eos.transaction(tx_data);
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

const exchangeTX = ({quantity, blockchain, to}) => {
    
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
}