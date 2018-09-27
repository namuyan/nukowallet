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
        'name': 'ROZ#2',
        'blockExplorerTX': 'https://nekonium.github.io/proxy/beproxy.html?type=tx&v=[[txHash]]',
        'blockExplorerAddr': 'https://nekonium.github.io/proxy/beproxy.html?type=addr&v=[[address]]',
        'type': nodes.nodeTypes.NUKO,
        'eip155': true,
        'chainId': 1,
        'tokenList': require('./tokens/nukoTokens.json'),
        'abiList': require('./abiDefinitions/nukoAbi.json'),
        'service': 'SSL',
        'lib': new nodes.customNode('https://www.nekonium.site', '8293')
    },
    'nuko1': {
        'name': 'ROZ#3',
        'blockExplorerTX': 'https://nekonium.github.io/proxy/beproxy.html?type=tx&v=[[txHash]]',
        'blockExplorerAddr': 'https://nekonium.github.io/proxy/beproxy.html?type=addr&v=[[address]]',
        'type': nodes.nodeTypes.NUKO,
        'eip155': true,
        'chainId': 1,
        'tokenList': require('./tokens/nukoTokens.json'),
        'abiList': require('./abiDefinitions/nukoAbi.json'),
        'service': 'SSL',
        'lib': new nodes.customNode('https://ssl.nekonium.site', '8293')
    },
    'nuko2': {
        'name': 'ROZ#1',
        'blockExplorerTX': 'https://nekonium.github.io/proxy/beproxy.html?type=tx&v=[[txHash]]',
        'blockExplorerAddr': 'https://nekonium.github.io/proxy/beproxy.html?type=addr&v=[[address]]',
        'type': nodes.nodeTypes.NUKO,
        'eip155': true,
        'chainId': 1,
        'tokenList': require('./tokens/nukoTokens.json'),
        'abiList': require('./abiDefinitions/nukoAbi.json'),
        'service': 'Normal',
        'lib': new nodes.customNode('http://nekonium.site', '8293')
    },
    'nuko3': {
        'name': 'Ohac#1',
        'blockExplorerTX': 'https://nekonium.github.io/proxy/beproxy.html?type=tx&v=[[txHash]]',
        'blockExplorerAddr': 'https://nekonium.github.io/proxy/beproxy.html?type=addr&v=[[address]]',
        'type': nodes.nodeTypes.NUKO,
        'eip155': true,
        'chainId': 1,
        'tokenList': require('./tokens/nukoTokens.json'),
        'abiList': require('./abiDefinitions/nukoAbi.json'),
        'service': 'Normal',
        'lib': new nodes.customNode('https://nekonium.sighash.info', '8293')
    },
    'nuko4': {
        'name': 'nww#1',
        'blockExplorerTX': 'https://nekonium.github.io/proxy/beproxy.html?type=tx&v=[[txHash]]',
        'blockExplorerAddr': 'https://nekonium.github.io/proxy/beproxy.html?type=addr&v=[[address]]',
        'type': nodes.nodeTypes.NUKO,
        'eip155': true,
        'chainId': 1,
        'tokenList': require('./tokens/nukoTokens.json'),
        'abiList': require('./abiDefinitions/nukoAbi.json'),
        'service': 'Normal',
        'lib': new nodes.customNode('https://node.nuko.ninja', '8293')
    },
    'nuko5': {
        'name': 'namuyang#1',
        'blockExplorerTX': 'https://nekonium.github.io/proxy/beproxy.html?type=tx&v=[[txHash]]',
        'blockExplorerAddr': 'https://nekonium.github.io/proxy/beproxy.html?type=addr&v=[[address]]',
        'type': nodes.nodeTypes.NUKO,
        'eip155': true,
        'chainId': 1,
        'tokenList': require('./tokens/nukoTokens.json'),
        'abiList': require('./abiDefinitions/nukoAbi.json'),
        'service': 'Normal',
        'lib': new nodes.customNode('http://store.nekopeg.tk', '8293')
    },
    'nuko6': {
        'name': 'oldbeyond',
        'blockExplorerTX': 'https://nekonium.github.io/proxy/beproxy.html?type=tx&v=[[txHash]]',
        'blockExplorerAddr': 'https://nekonium.github.io/proxy/beproxy.html?type=addr&v=[[address]]',
        'type': nodes.nodeTypes.NUKO,
        'eip155': true,
        'chainId': 1,
        'tokenList': require('./tokens/nukoTokens.json'),
        'abiList': require('./abiDefinitions/nukoAbi.json'),
        'service': 'relay',
        'lib': require('./nodeHelpers/nuko')
    }
};
nodes.ethPrice = require('./nodeHelpers/ethPrice');
module.exports = nodes;
