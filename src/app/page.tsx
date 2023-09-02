import { sql } from "@vercel/postgres";

export default async function Home(): Promise<JSX.Element> {
  const { rows } = await sql`SELECT * from ccart`;
  /*
  (sql`SELECT * from ccart`) ccart se data select krna h. vercel sql mai srf table bnana h or yha variable mai sql
  querty likhni h query ko console krwa k check b kr skte hai k sql mai kon kon c row h. or neche return mai
  jo mrzi chez ui mai display krwa skte. jse k yha hm ne todo ka table phle he bna tha wo show krwaya h 
  ase he koi b new bna k b show krwa skte hai.
  */
  // console.log(rows)

  return (
    <div>
      <div className="text-4xl text-slate-500 py-8 flex items-center justify-center">
      database Data (sql)
      </div>
      {rows.map((data,index) => (
        <div className="font-bold border-b-8" key={index}>
         <div> Product id :{data.product_id}</div> 
         <div> Quantity :{data.quantity} </div>
         <div> User_id :{data.user_id}</div>
         <div> Price :{data.price}</div>
         <div></div>
        </div>
      ))}
    </div>
  );
}



/* 
simple sql se data ase le skte hai sirf as page ka he work h or sara data sql se 
la skte
*/