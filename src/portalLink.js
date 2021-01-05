import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import { FaAlgolia } from 'react-icons/fa';



function PortalLinks() {
  const portals = [{ name: "Blic.rs", url: "https://www.blic.rs" }, { name: "Kurir.rs", url: "https://www.kurir.rs" },
  { name: "Srbijadanas.com", url: "https://www.srbijadanas.com" }, { name: "Alo.rs", url: "https://www.alo.rs" },
  { name: "Informer.rs", url: "https://informer.rs" }, { name: "Mondo.rs", url: "https://mondo.rs" },
  { name: "Espreso.rs", url: "https://www.espreso.rs" }, { name: "B92", url: "https://www.b92.net" }, { name: "Sportklub", url: "http://sportklub.rs" },
  { name: "Zurnal.rs", url: "http://www.zurnal.rs" }, { name: "Sportske.net", url: "https://www.sportske.net" }, { name: "Rts.rs", url: "https://www.rts.rs" },
  { name: "Pravda.rs", url: "https://www.pravda.rs" }, { name: "Telegraf.rs", url: "https://www.telegraf.rs" }]
  console.log(portals);
  return (
    <div className="portals">
      {
        portals ?
          portals.map((portal, index) => {
            //console.log(portal)
            return (
              <div key={index} className="portals-wrapper">
                <a href={portal.url}>{portal.name}</a>
              </div>

            )

          }) : ""

      }
    </div>
  );
}



export default PortalLinks;
