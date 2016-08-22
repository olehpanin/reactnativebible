import React, { Component } from 'react';
import {
    AppRegistry,
    Navigator
} from 'react-native';

import HomePage from "./src/pages/HomePage";
import ChapterPage from "./src/pages/ChapterPage";
import BiblePage from "./src/pages/BiblePage";
import Helper from "./src/Helper";

import config from "./src/config";

class Bible extends Component {

  renderScene(route, navigator){

    Helper.route = route;
    Helper.navigator = navigator;

    let page = <BiblePage/>;

    //switch (route.id){
    //  case config.route.homePage.id:
    //    page = <HomePage />;
    //    break;
    //  case config.route.chapterPage.id:
    //    page = <ChapterPage />;
    //    break;
    //  case config.route.biblePage.id:
    //    page = <BiblePage/>;
    //    break;
    //}

    return page;
  }

  render() {
    return (
        <Navigator initialRouteStack={config.routeArray}
                   initialRoute={config.routeArray[0]}
                   renderScene={this.renderScene.bind(this)}
                   //configureScene={(route) => {
                   //     //if (route.sceneConfig) {
                   //     //  return route.sceneConfig;
                   //     //}
                   //     return Navigator.SceneConfigs.HorizontalSwipeJump;
                   // }}
        />
    );
  }
}

AppRegistry.registerComponent('Bible', () => Bible);
