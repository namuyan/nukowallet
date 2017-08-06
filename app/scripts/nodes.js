'use strict';
var nodes = function() {}
nodes.customNode = require('./nodeHelpers/customNode');
nodes.infuraNode = require('./nodeHelpers/infura');
nodes.nodeTypes = {
    NUKO: "NUKO"
};
nodes.ensNodeTypes = [nodes.nodeTypes.ETH, nodes.nodeTypes.Ropsten];
nodes.customNodeObj = {
    'name': 'CUS',
    'blockExplorerTX': '',
    'blockExplorerAddr': '',
    'type': nodes.nodeTypes.Custom,
    'eip155': false,
    'chainId': '',
    'tokenList': [],
    'abiList': [],
    'service': 'Custom',
    'lib': null
};
nodes.nodeList = {
    'nuko': {
	'name': 'NUKO',
        'blockExplorerTX': 'https://nekonium.github.io/proxy/beproxy.html?type=tx&v=[[txHash]]',
        'blockExplorerAddr': 'https://nekonium.github.io/proxy/beproxy.html?type=addr&v=[[address]]',
        'type': nodes.nodeTypes.NUKO,
        'eip155': true,
        'chainId': 1,
        'tokenList': require('./tokens/nukoTokens.json'),
        'abiList': require('./abiDefinitions/nukoAbi.json'),
        'service': 'NukoWallet',
        'lib': require('./nodeHelpers/nuko')
    }
};
nodes.ethPrice = require('./nodeHelpers/ethPrice');
module.exports = nodes;
