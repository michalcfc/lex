/* eslint-disable no-console */
const fetch = require('node-fetch');
const fs = require('fs');

const repoId = 'lexell';

fetch(`https://${repoId}.cdn.prismic.io/api`)
    .then((r) => r.json())
    .then((data) => {
        const ref = data.refs.find((r) => r.id === 'master');
        if (!ref) return;
        fetch(
            `https://${repoId}.cdn.prismic.io/api`,
            {
                headers: {
                    'prismic-ref': ref.ref,
                    'Authorization': 'Token MC5ZSTJvZEJFQUFCOEFGWWQt.77-977-977-977-9Zyhg77-977-977-9d--_ve-_vQMX77-977-977-9FRhD77-9Eh_vv73vv73vv70q77-9FO-_ve-_vQ'
                },
            },
        )
            .then((result) => result.json())
            .then((result) => {
                const filteredResults = result;
                const filteredData = result.data.__schema.types.filter(
                    (type) => type.possibleTypes !== null,
                );
                filteredResults.data.__schema.types = filteredData;
                fs.writeFileSync('./src/utils/fragmentTypes.json', JSON.stringify(filteredResults.data), (err) => {
                    if (err) {
                        console.error('Error writing fragmentTypes file', err);
                    } else {
                        console.log('Fragment types successfully extracted!');
                    }
                });
            });
    });