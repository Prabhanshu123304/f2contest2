const cryptoTable = document.querySelector('.crypto-table');
const sortMktCap = document.querySelector('.sortMktCap');
const sortPercentage = document.querySelector('.sortPercentage');
const searchBar = document.querySelector('.search-bar');


fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false')
    .then(res => res.json())
    .then(data =>{
        let cryptoDetails = [...data];
        cryptoDetails.map(item => {
            if(item.price_change_percentage_24h<0){
                cryptoTable.innerHTML +=
                `
                    <tr>
                        <td><img src=${item.image}/> ${item.name}</td>
                        <td>${item.symbol}</td>
                        <td>&#36;${item.current_price}</td>
                        <td>&#36;${item.total_volume}</td>
                        <td class='color-red'>${(item.price_change_percentage_24h).toFixed(2)}%</td>
                        <td>Mkt Cap: &#36;${item.market_cap}</td>
                    </tr>
                `
            }else{
                cryptoTable.innerHTML +=
            `
                <tr>
                    <td><img src=${item.image}/> ${item.name}</td>
                    <td>${item.symbol}</td>
                    <td>&#36;${item.current_price}</td>
                    <td>&#36;${item.total_volume}</td>
                    <td class='color-green'>${(item.price_change_percentage_24h).toFixed(2)}%</td>
                    <td>Mkt Cap: &#36;${item.market_cap}</td>
                </tr>
            `
            }
        })

        searchBar.addEventListener('change', (e)=>{
            let filterItem = cryptoDetails.filter(item =>{
                if((item.name).toLowerCase().includes((e.target.value).toLowerCase())){
                    return item;
                }
            })
            if(filterItem){
                cryptoTable.innerHTML = '';
                filterItem.map(item => {
                    if(item.price_change_percentage_24h<0){
                        cryptoTable.innerHTML +=
                        `
                            <tr>
                                <td><img src=${item.image}/> ${item.name}</td>
                                <td>${item.symbol}</td>
                                <td>&#36;${item.current_price}</td>
                                <td>&#36;${item.total_volume}</td>
                                <td class='color-red'>${(item.price_change_percentage_24h).toFixed(2)}%</td>
                                <td>Mkt Cap: &#36;${item.market_cap}</td>
                            </tr>
                        `
                    }else{
                        cryptoTable.innerHTML +=
                    `
                        <tr>
                            <td><img src=${item.image}/> ${item.name}</td>
                            <td>${item.symbol}</td>
                            <td>&#36;${item.current_price}</td>
                            <td>&#36;${item.total_volume}</td>
                            <td class='color-green'>${(item.price_change_percentage_24h).toFixed(2)}%</td>
                            <td>Mkt Cap: &#36;${item.market_cap}</td>
                        </tr>
                    `
                    }
                })
            }else{
                cryptoTable.innerHTML = '';
                cryptoDetails.map(item => {
                    if(item.price_change_percentage_24h<0){
                        cryptoTable.innerHTML +=
                        `
                            <tr>
                                <td><img src=${item.image}/> ${item.name}</td>
                                <td>${item.symbol}</td>
                                <td>&#36;${item.current_price}</td>
                                <td>&#36;${item.total_volume}</td>
                                <td class='color-red'>${(item.price_change_percentage_24h).toFixed(2)}%</td>
                                <td>Mkt Cap: &#36;${item.market_cap}</td>
                            </tr>
                        `
                    }else{
                        cryptoTable.innerHTML +=
                    `
                        <tr>
                            <td><img src=${item.image}/> ${item.name}</td>
                            <td>${item.symbol}</td>
                            <td>&#36;${item.current_price}</td>
                            <td>&#36;${item.total_volume}</td>
                            <td class='color-green'>${(item.price_change_percentage_24h).toFixed(2)}%</td>
                            <td>Mkt Cap: &#36;${item.market_cap}</td>
                        </tr>
                    `
                    }
                })
            }
        })

        let mktCnt = 0;
        sortMktCap.addEventListener('click', (e)=>{
            e.preventDefault;
            if(mktCnt == 0){
                cryptoDetails = cryptoDetails.sort((a,b)=>a.market_cap - b.market_cap);
                console.log(cryptoDetails)
                cryptoTable.innerHTML = '';
                cryptoDetails.map(item => {
                    if(item.price_change_percentage_24h<0){
                        cryptoTable.innerHTML +=
                        `
                            <tr>
                                <td><img src=${item.image}/> ${item.name}</td>
                                <td>${item.symbol}</td>
                                <td>&#36;${item.current_price}</td>
                                <td>&#36;${item.total_volume}</td>
                                <td class='color-red'>${(item.price_change_percentage_24h).toFixed(2)}%</td>
                                <td>Mkt Cap: &#36;${item.market_cap}</td>
                            </tr>
                        `
                    }else{
                        cryptoTable.innerHTML +=
                    `
                        <tr>
                            <td><img src=${item.image}/> ${item.name}</td>
                            <td>${item.symbol}</td>
                            <td>&#36;${item.current_price}</td>
                            <td>&#36;${item.total_volume}</td>
                            <td class='color-green'>${(item.price_change_percentage_24h).toFixed(2)}%</td>
                            <td>Mkt Cap: &#36;${item.market_cap}</td>
                        </tr>
                    `
                    }
                })
                mktCnt++;
                
            }
            else if(mktCnt==1){
                cryptoDetails = cryptoDetails.sort((a,b)=>b.market_cap - a.market_cap)
                console.log(cryptoDetails)
                cryptoTable.innerHTML = '';
                cryptoDetails.map(item => {
                    if(item.price_change_percentage_24h<0){
                        cryptoTable.innerHTML +=
                        `
                            <tr>
                                <td><img src=${item.image}/> ${item.name}</td>
                                <td>${item.symbol}</td>
                                <td>&#36;${item.current_price}</td>
                                <td>&#36;${item.total_volume}</td>
                                <td class='color-red'>${(item.price_change_percentage_24h).toFixed(2)}%</td>
                                <td>Mkt Cap: &#36;${item.market_cap}</td>
                            </tr>
                        `
                    }else{
                        cryptoTable.innerHTML +=
                    `
                        <tr>
                            <td><img src=${item.image}/> ${item.name}</td>
                            <td>${item.symbol}</td>
                            <td>&#36;${item.current_price}</td>
                            <td>&#36;${item.total_volume}</td>
                            <td class='color-green'>${(item.price_change_percentage_24h).toFixed(2)}%</td>
                            <td>Mkt Cap: &#36;${item.market_cap}</td>
                        </tr>
                    `
                    }
                })
                mktCnt++;
            }
            else if(mktCnt==2){
                cryptoDetails = [...data];
                console.log(cryptoDetails)
                cryptoTable.innerHTML = '';
                cryptoDetails.map(item => {
                    if(item.price_change_percentage_24h<0){
                        cryptoTable.innerHTML +=
                        `
                            <tr>
                                <td><img src=${item.image}/> ${item.name}</td>
                                <td>${item.symbol}</td>
                                <td>&#36;${item.current_price}</td>
                                <td>&#36;${item.total_volume}</td>
                                <td class='color-red'>${(item.price_change_percentage_24h).toFixed(2)}%</td>
                                <td>Mkt Cap: &#36;${item.market_cap}</td>
                            </tr>
                        `
                    }else{
                        cryptoTable.innerHTML +=
                    `
                        <tr>
                            <td><img src=${item.image}/> ${item.name}</td>
                            <td>${item.symbol}</td>
                            <td>&#36;${item.current_price}</td>
                            <td>&#36;${item.total_volume}</td>
                            <td class='color-green'>${(item.price_change_percentage_24h).toFixed(2)}%</td>
                            <td>Mkt Cap: &#36;${item.market_cap}</td>
                        </tr>
                    `
                    }
                })
                mktCnt = 0;
            }
        })


        let percentageCnt = 0;
        sortPercentage.addEventListener('click', (e)=>{
            e.preventDefault;
            if(percentageCnt == 0){
                cryptoDetails = cryptoDetails.sort((a,b)=>a.price_change_percentage_24h - b.price_change_percentage_24h);
                console.log(cryptoDetails)
                cryptoTable.innerHTML = '';
                cryptoDetails.map(item => {
                    if(item.price_change_percentage_24h<0){
                        cryptoTable.innerHTML +=
                        `
                            <tr>
                                <td><img src=${item.image}/> ${item.name}</td>
                                <td>${item.symbol}</td>
                                <td>&#36;${item.current_price}</td>
                                <td>&#36;${item.total_volume}</td>
                                <td class='color-red'>${(item.price_change_percentage_24h).toFixed(2)}%</td>
                                <td>Mkt Cap: &#36;${item.market_cap}</td>
                            </tr>
                        `
                    }else{
                        cryptoTable.innerHTML +=
                    `
                        <tr>
                            <td><img src=${item.image}/> ${item.name}</td>
                            <td>${item.symbol}</td>
                            <td>&#36;${item.current_price}</td>
                            <td>&#36;${item.total_volume}</td>
                            <td class='color-green'>${(item.price_change_percentage_24h).toFixed(2)}%</td>
                            <td>Mkt Cap: &#36;${item.market_cap}</td>
                        </tr>
                    `
                    }
                })
                percentageCnt++;
                
            }
            else if(percentageCnt==1){
                cryptoDetails = cryptoDetails.sort((a,b)=>b.price_change_percentage_24h - a.price_change_percentage_24h)
                console.log(cryptoDetails)
                cryptoTable.innerHTML = '';
                cryptoDetails.map(item => {
                    if(item.price_change_percentage_24h<0){
                        cryptoTable.innerHTML +=
                        `
                            <tr>
                                <td><img src=${item.image}/> ${item.name}</td>
                                <td>${item.symbol}</td>
                                <td>&#36;${item.current_price}</td>
                                <td>&#36;${item.total_volume}</td>
                                <td class='color-red'>${(item.price_change_percentage_24h).toFixed(2)}%</td>
                                <td>Mkt Cap: &#36;${item.market_cap}</td>
                            </tr>
                        `
                    }else{
                        cryptoTable.innerHTML +=
                    `
                        <tr>
                            <td><img src=${item.image}/> ${item.name}</td>
                            <td>${item.symbol}</td>
                            <td>&#36;${item.current_price}</td>
                            <td>&#36;${item.total_volume}</td>
                            <td class='color-green'>${(item.price_change_percentage_24h).toFixed(2)}%</td>
                            <td>Mkt Cap: &#36;${item.market_cap}</td>
                        </tr>
                    `
                    }
                })
                percentageCnt++;
            }
            else if(percentageCnt==2){
                cryptoDetails = [...data];
                console.log(cryptoDetails)
                cryptoTable.innerHTML = '';
                cryptoDetails.map(item => {
                    if(item.price_change_percentage_24h<0){
                        cryptoTable.innerHTML +=
                        `
                            <tr>
                                <td><img src=${item.image}/> ${item.name}</td>
                                <td>${item.symbol}</td>
                                <td>&#36;${item.current_price}</td>
                                <td>&#36;${item.total_volume}</td>
                                <td class='color-red'>${(item.price_change_percentage_24h).toFixed(2)}%</td>
                                <td>Mkt Cap: &#36;${item.market_cap}</td>
                            </tr>
                        `
                    }else{
                        cryptoTable.innerHTML +=
                    `
                        <tr>
                            <td><img src=${item.image}/> ${item.name}</td>
                            <td>${item.symbol}</td>
                            <td>&#36;${item.current_price}</td>
                            <td>&#36;${item.total_volume}</td>
                            <td class='color-green'>${(item.price_change_percentage_24h).toFixed(2)}%</td>
                            <td>Mkt Cap: &#36;${item.market_cap}</td>
                        </tr>
                    `
                    }
                })
                percentageCnt = 0;
            }
        })

        
    })
    .catch(error=>console.log(error.message))