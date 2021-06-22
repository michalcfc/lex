/* eslint-disable no-console */
const fetch = require('node-fetch');
const fs = require('fs');
const resultsFileName = 'possibleTypes';

const repoId = 'lexell';

fetch(`https://${repoId}.cdn.prismic.io/api/v2`)
    .then((r) => r.json())
    .then((data) => {
        const ref = data.refs.find((r) => r.id === 'master');
        if (!ref) return;
        fetch(
            `https://${repoId}.prismic.io/graphql?query=%7B%20__schema%20%7B%20types%20%7B%20kind%20name%20possibleTypes%20%7B%20name%20%7D%20%7D%20%7D%20%7D`,
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

                fs.writeFile(`./utils/${resultsFileName}.json`, JSON.stringify(possibleTypes), err => {
                    if (err) {
                        console.error('Error writing possibleTypes.json', err);
                    } else {
                        console.log('Fragment types successfully extracted!');
                    }
                });
            });
    });