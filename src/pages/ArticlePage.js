import React from "react";
import { useState } from "react";
import { AnimateSharedLayout, AnimatePresence } from 'framer-motion';
import { Item } from "../wordboxes/Item";
import { List } from "../wordboxes/List";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { motion } from "framer-motion";

function Store({ match }) {
  let { id } = match.params;
  const imageHasLoaded = true;

  return (
    <>
      <List selectedId={id} />
      <AnimatePresence>
        {id && imageHasLoaded && <Item id={id} key="item" />}
      </AnimatePresence>
    </>
  );
}



export function ArticlePage() {

  return (
    
    <div className="container">
      <AnimateSharedLayout type="crossfade">
        <Router>
          <Route path={["/:id", "/"]} component={Store} />
        </Router>
        
      
      </AnimateSharedLayout>
    </div>
  );
}


/* https://reactrouter.com/web/guides/scroll-restoration
 */