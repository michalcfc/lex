import {useEffect, useState} from "react";


export const getAllPages = (param) => {

    const query = `query {
     allPagess(tags: "${param}") {
       edges {
          node {
            _meta {
               id
              uid
              tags
            }
            page_title
            description
          }
        }
      }
    }`

    const [data, setData] = useState(null)

    const repoId = 'lexell';

    useEffect( () => {
         fetch(`https://${repoId}.cdn.prismic.io/api`)
            .then((r) => r.json())
            .then(async (data) => {
                const ref = data.refs.find((r) => r.id === 'master');
                if (!ref) return;
                await fetch(`https:/${repoId}.prismic.io/graphql?query=` + encodeURIComponent(query), {
                    headers: {
                        'Prismic-ref': ref.ref,
                        'Authorization': 'Token MC5ZSTJvZEJFQUFCOEFGWWQt.77-977-977-977-9Zyhg77-977-977-9d--_ve-_vQMX77-977-977-9FRhD77-9Eh_vv73vv73vv70q77-9FO-_ve-_vQ'
                    }
                })
                    .then(response => response.json())
                    .then(data =>  {
                        setData(data)
                    });
    })
            }, [])
        return data
}


