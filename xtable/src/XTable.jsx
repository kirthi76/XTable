import React, { useState } from 'react';

const XTable = () => {
const [data, setData] = useState([
   


    { date: "2022-09-01", views: 100, article: "Article 1" },

    { date: "2023-09-01", views: 100, article: "Article 1" },

    { date: "2023-09-02", views: 150, article: "Article 2" },

    { date: "2023-09-02", views: 120, article: "Article 3" },

    { date: "2020-09-03", views: 200, article: "Article 4" }




]);


    const sortByDate = ()=>{
        let sortedData  = [...data];
        sortedData.sort((a,b)=> {
            if(a.date !== b.date) return new Date(b.date)- new Date(a.date);
            return b.views-a.views
        });
        setData([...sortedData]);
    }

    const sortByViews = ()=>{
        let sortedData  = [...data];
        sortedData.sort((a,b)=> {
            if(a.views !== b.views) return b.views-a.views;
            return new Date(b.date)- new Date(a.date);
        })
        setData([...sortedData]);
    }
    return (
        <div>
            <h1>Date and Views Table</h1>
            <button onClick={sortByDate}>Sort by Date</button>
            <button onClick={sortByViews}>Sort by Views</button>

            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Views</th>
                        <th>Article</th>
                    </tr>
                </thead>
                <tbody>
                {data.map(item => (
                  <tr>
                      <td>{item.date}</td>
                      <td>{item.views}</td>
                      <td>{item.article}</td>
                  </tr>
              ))}
                </tbody>
            </table>
           
            

        </div>
    );
};

export default XTable;